#!/usr/bin/env bash
# generate-sitemap.sh <domain>  -- run from a site root.
#
# WHY THIS EXISTS: the template used to ship a sitemap.xml containing https://[DOMAIN NAME]/.
# That is valid XML, so nothing caught it, and greasemonkeyinsurance.com served it in production.
# This script CANNOT emit a placeholder because every URL is derived from an .html file that
# exists on disk. If you do not run it you get NO sitemap -- a visible defect, which is the
# failure mode we want.
set -euo pipefail
DOMAIN="${1:?usage: ./generate-sitemap.sh <domain>   (no scheme, no trailing slash)}"
case "$DOMAIN" in *[/:]*|*"["*) echo "refusing: '$DOMAIN' is not a bare domain" >&2; exit 2;; esac
OUT=sitemap.xml; TODAY=$(date -u +%F)
{
  echo '<?xml version="1.0" encoding="UTF-8"?>'
  echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
  # success.html is Disallow'd in robots.txt, so it must not appear here.
  find . \( -name node_modules -o -name '.*' ! -name . \) -prune -o -name '*.html' ! -name 'success.html' -print | sort | while read -r f; do
    rel="${f#.}"
    case "$rel" in
      /index.html) loc="https://$DOMAIN/"; pri=1.0; chg=weekly ;;
      */index.html) loc="https://$DOMAIN${rel%index.html}"; pri=0.8; chg=monthly ;;
      *) loc="https://$DOMAIN$rel"; pri=0.6; chg=monthly ;;
    esac
    lm=$(git log -1 --format=%cs -- "$f" 2>/dev/null || true); lm="${lm:-$TODAY}"
    printf '  <url>\n    <loc>%s</loc>\n    <lastmod>%s</lastmod>\n    <changefreq>%s</changefreq>\n    <priority>%s</priority>\n  </url>\n' \
      "$loc" "$lm" "$chg" "$pri"
  done
  echo '</urlset>'
} > "$OUT"
n=$(grep -c '<loc>' "$OUT")
grep -q '\[' "$OUT" && { echo "ABORT: placeholder survived into $OUT" >&2; exit 3; }
echo "wrote $OUT with $n urls for $DOMAIN"
echo "NOW VERIFY BY FETCHING, not by the file existing:"
echo "  curl -s https://$DOMAIN/sitemap.xml | grep -oE '<loc>[^<]+' | sed 's/<loc>//' | while read u; do echo \"\$(curl -s -o /dev/null -w '%{http_code}' \$u) \$u\"; done"
