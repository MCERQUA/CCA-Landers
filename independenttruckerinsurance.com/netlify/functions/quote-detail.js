// Server-side validation for the quote-detail form (get-a-quote.html).
// Netlify Forms cannot validate on its own, so the form posts here; on success
// the submission is forwarded unchanged (plus canonical alias fields) to the
// Netlify Forms endpoint, so the existing leads webhook keeps working.
const CFG = require('./quote-detail-spec.json');
const SITE = 'https://independenttruckerinsurance.com';

const RX = {
  zip: /^\d{5}$/, date: /^\d{4}-\d{2}-\d{2}$/,
  num: /^\d+$/, money: /^\d+(\.\d{1,2})?$/, pct: /^(100|\d{1,2})$/,
  email: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
};

// Canonical state value for the ACORD mapper: 2-letter USPS code (the Location State box clips full names).
// Already-2-letter values pass through uppercased; unknown values pass through unchanged. Applied ONLY to the
// canonical physicalState key; the legacy `state` field keeps its original value.
const STATE_CODES = { 'Alabama': 'AL', 'Alaska': 'AK', 'Arizona': 'AZ', 'Arkansas': 'AR', 'California': 'CA', 'Colorado': 'CO', 'Connecticut': 'CT', 'Delaware': 'DE', 'Florida': 'FL', 'Georgia': 'GA', 'Hawaii': 'HI', 'Idaho': 'ID', 'Illinois': 'IL', 'Indiana': 'IN', 'Iowa': 'IA', 'Kansas': 'KS', 'Kentucky': 'KY', 'Louisiana': 'LA', 'Maine': 'ME', 'Maryland': 'MD', 'Massachusetts': 'MA', 'Michigan': 'MI', 'Minnesota': 'MN', 'Mississippi': 'MS', 'Missouri': 'MO', 'Montana': 'MT', 'Nebraska': 'NE', 'Nevada': 'NV', 'New Hampshire': 'NH', 'New Jersey': 'NJ', 'New Mexico': 'NM', 'New York': 'NY', 'North Carolina': 'NC', 'North Dakota': 'ND', 'Ohio': 'OH', 'Oklahoma': 'OK', 'Oregon': 'OR', 'Pennsylvania': 'PA', 'Rhode Island': 'RI', 'South Carolina': 'SC', 'South Dakota': 'SD', 'Tennessee': 'TN', 'Texas': 'TX', 'Utah': 'UT', 'Vermont': 'VT', 'Virginia': 'VA', 'Washington': 'WA', 'West Virginia': 'WV', 'Wisconsin': 'WI', 'Wyoming': 'WY', 'District of Columbia': 'DC' };
const stateCode = (v) => {
  const t = String(v == null ? '' : v).trim();
  if (/^[A-Za-z]{2}$/.test(t)) return t.toUpperCase();
  const hit = Object.keys(STATE_CODES).find((n) => n.toLowerCase() === t.toLowerCase());
  return hit ? STATE_CODES[hit] : v;
};

const https = require('https');
function post(url, headers, body) {
  if (typeof fetch === 'function') return fetch(url, { method: 'POST', headers, body, redirect: 'manual' }).then((r) => r.status);
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    const req = https.request({ method: 'POST', hostname: u.hostname, path: u.pathname + u.search,
      headers: { ...headers, 'Content-Length': Buffer.byteLength(body) }, timeout: 15000 }, (res) => { res.resume(); resolve(res.statusCode); });
    req.on('timeout', () => req.destroy(new Error('timeout')));
    req.on('error', reject);
    req.end(body);
  });
}

function parse(event) {
  const raw = event.isBase64Encoded ? Buffer.from(event.body || '', 'base64').toString('utf8') : (event.body || '');
  const sp = new URLSearchParams(raw);
  const all = {};
  for (const [k, v] of sp.entries()) (all[k] = all[k] || []).push(v);
  return all;
}
const first = (d, k) => ((d[k] || [])[0] || '').trim();
const has = (d, k, v) => (d[k] || []).includes(v);

function validate(d) {
  const miss = [];
  for (const e of CFG.spec) {
    if (e.if && !has(d, e.if[0], e.if[1])) continue;
    if (e.and && !has(d, e.and[0], e.and[1])) continue;
    const v = e.kind === 'checks' ? (d[e.name] || []) : first(d, e.name);
    if (e.kind === 'checks') { if (!v.length) miss.push(`${e.label} (tick at least one)`); continue; }
    if (!v) { if (!e.optional) miss.push(e.label); continue; }
    if (e.opts && !e.opts.includes(v)) { miss.push(`${e.label} (invalid choice)`); continue; }
    if (e.kind === 'email' && !RX.email.test(v)) miss.push(`${e.label} (invalid)`);
    else if (e.kind === 'phone' && v.replace(/\D/g, '').length < 10) miss.push(`${e.label} (invalid)`);
    else if (RX[e.kind] && !RX[e.kind].test(v)) miss.push(`${e.label} (invalid format)`);
  }
  return miss;
}

function band(n) {
  if (n < 500000) return 'Under $500K';
  if (n < 2000000) return '$500K – $2M';
  if (n < 5000000) return '$2M – $5M';
  if (n < 15000000) return '$5M – $15M';
  if (n < 50000000) return '$15M – $50M';
  return '$50M+';
}

function aliases(d) {
  const out = [];
  const add = (k, v) => { if (v !== undefined && v !== '') out.push([k, v]); };
  const g = (k) => first(d, k);
  const name = g('full-name').split(/\s+/);
  if (has(d, 'yn_coverageTerminated', 'Yes')) {
    for (const r of ['Non-Payment', 'Non-Renewal', 'Agent No Longer Represents Carrier', 'Underwriting'])
      add('coverageTerminated_' + r.replace(/[^A-Za-z]/g, ''), has(d, 'coverageTerminatedReasons', r) ? 'Yes' : 'No');
    add('coverageTerminated_ConditionCorrected', has(d, 'coverageTerminatedConditionCorrected', 'Yes') ? 'Yes' : 'No');
    // Canonical names read by map_quote_125.py (general_coverageTerminated__<key> == 'Yes' ticks the ACORD box); added ALONGSIDE the legacy names above.
    const TERM = { 'Non-Payment': 'nonPayment', 'Non-Renewal': 'nonRenewal', 'Agent No Longer Represents Carrier': 'agentStopRepresenting', 'Underwriting': 'underwriting' };
    for (const r of Object.keys(TERM)) add('general_coverageTerminated__' + TERM[r], has(d, 'coverageTerminatedReasons', r) ? 'Yes' : 'No');
  }
  const eff = g('effective_date');
  if (eff) { const x = new Date(eff + 'T00:00:00Z'); x.setUTCFullYear(x.getUTCFullYear() + 1); add('expirationDate', x.toISOString().slice(0, 10)); }
  add('businessName', g('company-name'));
  add('firstName', name[0]); add('lastName', name.slice(1).join(' ') || name[0]);
  add('streetAddress', g('mailingAddress')); add('premisesAddress', g('street-address'));
  add('yearBusinessStarted', g('businessStartDate').slice(0, 4));
  add('statesOfOperation', g('state')); add('tradeType', g('work-type')); add('businessDescription', g('business-description'));
  add('annualRevenue', g('grossSales')); add('priorYearRevenue', g('prior-year-gross-sales'));
  add('annualPayroll', g('estimated-employee-payroll')); add('subcontractingCosts', g('estimated-subcontractor-expenses'));
  add('subsCarryInsurance', g('subcontractors-have-insurance'));
  add('currentCarrier', g('prior-carrier-name')); add('currentPolicyExpiration', g('prior-policy-expiration'));
  add('lossesLast3Years', g('lossHistoryStatus') === 'Report a Loss' ? 'Yes' : 'No');
  add('lossCount', g('losses_3yr_count'));
  add('coverageTypes', g('coverage-type')); add('desiredEffectiveDate', g('effective_date'));
  add('revenue', band(Number(g('grossSales'))));
  add('year-business-started', g('businessStartDate').slice(0, 4));
  // Canonical ACORD names (map_quote_125.py) added ALONGSIDE the site's own names; nothing above is renamed or removed.
  add('name', g('full-name'));
  add('physicalAddress', g('street-address')); add('physicalCity', g('city')); add('physicalZip', g('zip'));
  add('physicalCounty', g('county'));
  add('lastGrossSales', g('grossSales')); add('lastSubcontractingCosts', g('estimated-subcontractor-expenses'));
  add('glProductsCompOpsAggregate', g('glProductsCompletedOps')); add('glDamageToRentedPremises', g('glRentedPremises'));
  add('submittedVia', 'quote-detail-function');
  return out;
}

const page = (title, body) => `<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title><body style="font-family:system-ui;max-width:640px;margin:3rem auto;padding:0 1rem">${body}</body>`;
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'POST only' };
  const d = parse(event);
  if (first(d, 'bot-field')) return { statusCode: 303, headers: { Location: '/success.html' } };
  const miss = validate(d);
  if (miss.length) {
    return {
      statusCode: 400, headers: { 'Content-Type': 'text/html; charset=utf-8' },
      body: page('Quote request incomplete',
        `<h1>Your quote request is incomplete</h1><p>Please go back and complete these ${miss.length} item(s):</p><ul>${miss.map((m) => `<li>${esc(m)}</li>`).join('')}</ul><p><a href="/get-a-quote.html">Back to the form</a></p>`),
    };
  }
  const sp = new URLSearchParams();
  sp.append('form-name', 'quote-detail');
  for (const [k, vs] of Object.entries(d)) {
    if (k === 'form-name' || k === 'bot-field') continue;
    // Netlify Forms answers 400 when a body carries many blank fields; blanks carry no information.
    for (const v of vs) if (String(v).trim() !== '') sp.append(k, k === 'physicalState' ? stateCode(v) : v);
  }
  for (const [k, v] of aliases(d)) if (!(k in d)) sp.append(k, v);
  const ip = event.headers['x-nf-client-connection-ip'];
  const targets = [
    [SITE + '/', { 'Content-Type': 'application/x-www-form-urlencoded' }],
    [SITE + '/', { 'Content-Type': 'application/x-www-form-urlencoded', 'User-Agent': event.headers['user-agent'] || 'Mozilla/5.0', ...(ip ? { 'X-Forwarded-For': ip } : {}) }],
  ];
  const tried = [];
  let ok = false;
  for (const [url, headers] of targets) {
    try {
      const status = await post(url, headers, sp.toString());
      tried.push(status);
      if (status < 400) { ok = true; break; }
    } catch (err) {
      tried.push('exc:' + (err && err.cause && err.cause.code || err.message));
    }
  }
  if (!ok) {
    console.error('forward failed', tried.join(','));
    return { statusCode: 502, headers: { 'Content-Type': 'text/html; charset=utf-8' }, body: page('Please try again', '<h1>We could not save your request</h1><p>Please try again in a minute or call 844-967-5247.</p><!-- forward:' + esc(tried.join(',')) + ' -->') };
  }
  return { statusCode: 303, headers: { Location: '/success.html' } };
};
