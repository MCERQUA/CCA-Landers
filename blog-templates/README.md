# CCA-Landers Blog Templates

**Created**: January 16, 2025  
**Purpose**: Reusable HTML templates for adding blogs to all CCA-Landers sites

## 📁 Template Files

### 1. `blog-index-template.html`
The blog listing page that displays all blog posts.

**Placeholders to Replace:**
- `[INDUSTRY]` - The specific industry (e.g., "Frozen Yogurt", "Van Life", "UFC")
- `[SITE-DOMAIN]` - The site domain (e.g., "froyoinsurance.com")
- `[SITE-IMAGE]` - The main site image filename
- `[COMPANY-NAME]` - The company/site name
- `[ARTICLE-1-TITLE]`, `[ARTICLE-1-SLUG]`, `[ARTICLE-1-DESCRIPTION]` - First article details
- `[ARTICLE-2-TITLE]`, `[ARTICLE-2-SLUG]`, `[ARTICLE-2-DESCRIPTION]` - Second article details
- `[ARTICLE-3-TITLE]`, `[ARTICLE-3-SLUG]`, `[ARTICLE-3-DESCRIPTION]` - Third article details

### 2. `blog-post-template.html`
Individual blog post template with comprehensive structure.

**Placeholders to Replace:**
- All placeholders from blog-index-template.html PLUS:
- `[ARTICLE-TITLE]` - Full article title
- `[ARTICLE-DESCRIPTION]` - Meta description (150-160 chars)
- `[ARTICLE-SLUG]` - URL-friendly article name
- `[ARTICLE-SHORT-TITLE]` - Shortened title for breadcrumb
- `[ARTICLE-SUBTITLE]` - Explanatory subtitle
- `[PUBLISH-DATE]` - Publication date (YYYY-MM-DD format)
- `[MODIFIED-DATE]` - Last modified date
- `[READ-TIME]` - Estimated reading time in minutes
- `[CATEGORY]` - Article category
- Content sections with detailed placeholders for easy customization

## 🚀 Quick Start Usage

### Step 1: Copy Templates to Your Site
```bash
# Navigate to your site
cd /home/mikecerqua/projects/CCA-Landers/[your-site].com

# Create blog directories
mkdir -p blog/posts

# Copy templates
cp ../blog-templates/blog-index-template.html blog/index.html
cp ../blog-templates/blog-post-template.html blog/posts/article-1.html
```

### Step 2: Find and Replace Placeholders
Use your editor's find-and-replace feature to update all placeholders:

**For vanlifeinsurance.com example:**
- `[INDUSTRY]` → "Van Life"
- `[SITE-DOMAIN]` → "vanlifeinsurance.com"
- `[COMPANY-NAME]` → "Van Life Insurance"
- `[SITE-IMAGE]` → "van-life-insurance.webp"

### Step 3: Create Your Content
Replace the content placeholders with industry-specific information:
- Coverage types relevant to the industry
- Common risks and challenges
- Industry-specific tips and best practices
- Relevant FAQ questions

### Step 4: Test Locally
```bash
# Open in browser to test
firefox blog/index.html
# or
google-chrome blog/index.html
```

### Step 5: Deploy
```bash
git add blog/
git commit -m "[SITE-CODE] Add blog with initial articles"
git push origin main
```

## 📝 Content Guidelines by Industry Type

### Auto/Vehicle Insurance Sites
**Sites**: vanlifeinsurance.com, hiredautoinsurance.com, independenttruckerinsurance.com
- Focus on commercial vs personal coverage
- State-specific requirements
- Vehicle maintenance and safety
- Claims process
- Fleet management (if applicable)

### Contractor/Trade Sites
**Sites**: concreterepairinsurance.com, dirtworkinsurance.com, waterproofinginsurance.com
- General liability focus
- Equipment coverage
- Workers' compensation
- Project-specific coverage
- Safety protocols

### Food/Beverage Service
**Sites**: froyoinsurance.com, barandnightclubinsurance.com
- Food safety and liability
- Equipment breakdown
- Liquor liability (bars)
- Customer injury prevention
- Health code compliance

### Specialty/High-Risk
**Sites**: fightclubinsurance.com, ufcinsurance.com, oilfieldweldinginsurance.com
- Participant waivers and liability
- Instructor/trainer coverage
- Equipment and facility protection
- High-risk activity management
- Emergency response planning

### Professional Services
**Sites**: accountreceivablesinsurance.com, chandlermortgages.com
- Professional liability/E&O
- Cyber liability
- Data breach coverage
- Client contract disputes
- Regulatory compliance

## 🎨 Customization Options

### Color Schemes
The templates use a purple-to-green gradient by default. Customize by updating:
```css
background: linear-gradient(135deg, #8A2BE2 0%, #3EB489 100%);
```

Suggested alternatives:
- Blue professional: `#2563EB to #0EA5E9`
- Red energy: `#DC2626 to #F97316`
- Green natural: `#10B981 to #84CC16`

### Content Blocks
The templates include several styled content blocks:
- `.callout-box` - Key information or CTAs
- `.coverage-card` - Insurance coverage types
- `.stat-highlight` - Statistics and data
- `.tip-box` - Helpful tips
- `.warning-box` - Important warnings

### Mobile Responsiveness
All templates are mobile-responsive with breakpoints at:
- 768px - Tablet transition
- 480px - Mobile phone optimization

## ✅ Checklist Before Going Live

- [ ] All placeholders replaced
- [ ] Meta descriptions unique and compelling
- [ ] Schema markup updated with correct data
- [ ] Images referenced exist in `images/` directory
- [ ] Mobile responsiveness tested
- [ ] All internal links working
- [ ] Blog link added to main site navigation
- [ ] At least 3 blog posts created
- [ ] Content is 2,000+ words per article
- [ ] Git committed and pushed

## 🔧 Troubleshooting

**Issue**: Styles not loading
- Check relative paths: `../css/` from blog index, `../../css/` from posts

**Issue**: Mobile menu not working
- Ensure JavaScript is included at bottom of template

**Issue**: Blog not appearing on live site
- Verify files committed: `git status`
- Ensure pushed: `git push origin main`

## 📈 Success Metrics

Track these after implementation:
- Page load speed < 2 seconds
- Mobile responsiveness score 100%
- Schema validation passes
- Zero build errors on Netlify

---

**Remember**: These templates are designed to be build-safe. Pure HTML = Zero build failures.