# Base-Template-Site Customization Guide

## 🚨 CRITICAL: Complete Checklist for New Site Creation

This template is designed to be copied and customized for new insurance websites. Follow this checklist to ensure nothing is missed during the customization process.

---

## 📋 MASTER CUSTOMIZATION CHECKLIST

### 1. COMPANY INFORMATION
**Files to Update:** `index.html`, `success.html`, `blog/index.html`, all blog posts

- [ ] **[COMPANY NAME]** - Replace in all locations (nav, footer, schema, meta tags)
- [ ] **[PHONE NUMBER]** - Update everywhere including tel: links
- [ ] **[EMAIL ADDRESS]** - Update in footer and contact sections
- [ ] **[STREET ADDRESS]** - Update in schema markup and footer
- [ ] **[CITY]** - Update in schema markup
- [ ] **[STATE]** - Update in schema markup
- [ ] **[ZIP CODE]** - Update in schema markup
- [ ] **[FACEBOOK URL]** - Update social media link
- [ ] **[LINKEDIN URL]** - Update social media link

### 2. SEO & META TAGS
**Files to Update:** `index.html`, `success.html`, all blog posts

- [ ] **[DOMAIN NAME]** - Replace in canonical URL, sitemap, robots.txt
- [ ] **Page Title** - Update `<title>` tag with company name and service
- [ ] **Meta Description** - Update with 150-160 character description
- [ ] **[KEYWORD 1-5]** - Add 5 main keywords for meta keywords tag
- [ ] **OG Title** - Update Open Graph title
- [ ] **OG Description** - Update Open Graph description
- [ ] **OG URL** - Update with actual domain
- [ ] **OG Image** - Create og-image.jpg (1200x630px)
- [ ] **Twitter Card** - Update all Twitter meta tags
- [ ] **[TWITTER HANDLE]** - Add Twitter username
- [ ] **Canonical URL** - Update with actual domain
- [ ] **[STATE CODE]** - Two-letter state code for geo tags
- [ ] **[LATITUDE]** and **[LONGITUDE]** - Add coordinates for local SEO

### 3. WEBSITE CONTENT
**File to Update:** `index.html`

#### Hero Section
- [ ] **[MAIN HEADLINE]** - Primary service/solution statement
- [ ] **[SUBHEADLINE]** - Value proposition and key benefits

#### Problem/Solution Section
- [ ] **[PROBLEM STATEMENT]** - Why existing solutions aren't enough
- [ ] **[PAIN POINTS HEADLINE]** - Title for pain points
- [ ] **[PAIN POINT 1-4]** - Specific problems customers face
- [ ] **[SOLUTION HEADLINE]** - Title for solutions
- [ ] **[SOLUTION 1-4]** - How you solve each pain point

#### Benefits Section
- [ ] **[BENEFITS HEADLINE]** - Main benefits title
- [ ] **[BENEFIT 1-3]** - Core benefits with descriptions

#### Call-to-Action
- [ ] **[CALL TO ACTION]** - Button text throughout site
- [ ] **[CTA HEADLINE]** - Headlines for CTA sections

#### Testimonials
- [ ] **[SOCIAL PROOF HEADLINE]** - Testimonials section title
- [ ] **[CUSTOMER NAME 1-2]** - Customer names
- [ ] **[CUSTOMER COMPANY 1-2]** - Customer companies
- [ ] **[TESTIMONIAL 1-2]** - Actual testimonial text

#### Contact Form
- [ ] **[CONTACT FORM HEADLINE]** - Form section title
- [ ] **[CONTACT FORM SUBHEADLINE]** - What happens next
- [ ] **[BENEFIT 1-3 OF SUBMITTING FORM]** - Why submit form

### 4. SUCCESS PAGE
**File to Update:** `success.html`

- [ ] **[SUCCESS PAGE HEADLINE]** - Thank you message
- [ ] **[SUCCESS MESSAGE]** - What happens next
- [ ] **[NEXT STEPS HEADLINE]** - Next steps title
- [ ] **[NEXT STEP 1-3]** - Specific next steps
- [ ] **[IMMEDIATE ASSISTANCE MESSAGE]** - Call now message
- [ ] **[CALL NOW BUTTON TEXT]** - Button text

### 5. SCHEMA MARKUP
**File to Update:** `index.html`

- [ ] Update InsuranceAgency schema with all company details
- [ ] **[COMPANY DBA NAME]** - Alternative business name if applicable
- [ ] **[COMPANY DESCRIPTION]** - 1-2 sentence description
- [ ] **[EMAIL ADDRESS]** - Add to schema
- [ ] **[RATING VALUE]** and **[REVIEW COUNT]** - Add if available
- [ ] **[TWITTER URL]** and **[YOUTUBE URL]** - Add social profiles
- [ ] Update FAQPage schema with actual FAQ content
- [ ] Update BreadcrumbList with actual domain
- [ ] Verify all URLs point to actual domain
- [ ] Update datePublished and dateModified

### 6. FAQ SYSTEM (if using build process)
**Files to Create:** `data/faq.md`, `data/schema.json`

If using the automated FAQ build system:
- [ ] Create `data/` directory
- [ ] Create `data/faq.md` with actual FAQ content
- [ ] Create `data/schema.json` with company info
- [ ] Run `npm install` to install dependencies
- [ ] Run `npm run build` to generate FAQ HTML

### 7. BLOG CUSTOMIZATION
**Files to Update:** Blog posts in `blog/posts/`

For each blog post:
- [ ] Update company name references
- [ ] Update contact CTAs to actual company
- [ ] Customize insurance topics for industry
- [ ] Update meta descriptions
- [ ] Update schema markup
- [ ] Consider adding industry-specific posts

### 8. IMAGES & ASSETS
**Directory:** `images/`

- [ ] Replace placeholder logo with actual company logo
- [ ] Optimize all images with `npm run optimize:images`
- [ ] Update image alt text for SEO
- [ ] Ensure all image paths are relative

### 9. FORMS & FUNCTIONALITY
**File:** `index.html`

- [ ] Verify Netlify form configuration
- [ ] Update form name if needed
- [ ] Test reCAPTCHA integration
- [ ] Verify success page redirect works
- [ ] Update form field requirements

### 10. DEPLOYMENT CONFIGURATION
**Files:** `netlify.toml`, `package.json`, `robots.txt`, `sitemap.xml`

- [ ] Update build command if using FAQ system
- [ ] Configure domain in Netlify
- [ ] Set up form notifications in Netlify
- [ ] Configure environment variables if needed
- [ ] Update `robots.txt` with actual domain
- [ ] Update `sitemap.xml` with all URLs and dates
- [ ] Submit sitemap to Google Search Console
- [ ] Create and upload actual favicon files

---

## 🔍 PLACEHOLDER SEARCH PATTERNS

Use these regex patterns to find all placeholders that need updating:

```bash
# Find all bracketed placeholders
grep -r "\[.*\]" --include="*.html" .

# Find company name placeholders
grep -r "\[COMPANY NAME\]" --include="*.html" .

# Find contact info placeholders
grep -r "\[PHONE\|EMAIL\|ADDRESS\]" --include="*.html" .

# Find content placeholders
grep -r "\[.*HEADLINE.*\]" --include="*.html" .
```

---

## 📦 QUICK START COMMANDS

```bash
# 1. Copy template to new site
cp -r Base-Template-Site/ newsite.com/

# 2. Navigate to new site
cd newsite.com/

# 3. Search for placeholders
grep -r "\[.*\]" --include="*.html" .

# 4. If using FAQ build system
npm install
npm run build

# 5. If optimizing images
npm run optimize:images

# 6. Test locally
python3 -m http.server 8000
```

---

## ⚠️ COMMON MISTAKES TO AVOID

1. **Missing Placeholders** - Search for ALL bracketed text [LIKE THIS]
2. **Absolute URLs** - Ensure all paths are relative (../css/, not /css/)
3. **Schema Errors** - Validate JSON-LD with Google's tool
4. **Form Issues** - Keep Netlify form attributes intact
5. **Blog Links** - Update navigation to point to blog/
6. **Image Paths** - Verify all image src attributes work
7. **Phone Links** - Update tel: links with actual number
8. **Social Links** - Don't leave placeholder social URLs

---

## ✅ FINAL VERIFICATION

Before deploying:
1. Search for any remaining brackets: `grep -r "\[" --include="*.html" .`
2. Test all internal links work
3. Verify forms submit correctly
4. Check mobile responsiveness
5. Validate HTML and schema markup
6. Test page speed and performance
7. Verify SEO meta tags are unique
8. Ensure no placeholder content remains

---

## 📝 NOTES

- This template uses static HTML for the blog (no build required)
- Blog posts are pre-written with insurance topics - customize for your industry
- The FAQ system can be manual (edit HTML) or automated (use build-faq.js)
- All styling uses inline CSS and Tailwind classes for simplicity
- Form handling is configured for Netlify Forms

---

**Last Updated:** August 2025
**Template Version:** 1.0