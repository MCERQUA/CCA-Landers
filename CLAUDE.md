# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 🚨 CRITICAL FILE EDITING RULE - READ FIRST

**❌ NEVER EVER WRITE "REST OF THE FILE THE SAME" OR SIMILAR PHRASES**

This is COMPLETELY UNACCEPTABLE and destroys file integrity. You MUST:
- Always write complete, full file content when editing
- Never use shortcuts like "rest remains the same"
- Never truncate files with placeholder text
- If a file is too long, use specific line-by-line edits instead
- ALWAYS preserve every line of existing content unless explicitly modifying it

**🚨 VIOLATION OF THIS RULE IS NEVER ACCEPTABLE UNDER ANY CIRCUMSTANCES**

## 🚀 DEPLOYMENT WORKFLOW - IMPORTANT

**Netlify Auto-Deployment Process:**
- **DO NOT** use Netlify MCP to deploy manually
- **WORKFLOW**: 
  1. Push changes to GitHub: `git push origin main`
  2. Netlify automatically deploys when new commits are detected
  3. Use Netlify MCP to CHECK deployment status after pushing
- **REMEMBER**: GitHub push → Netlify auto-deploys → Check status with MCP

## Command Reminder
- Always use `git push origin main` to push changes to the GitHub repository

## 🤖 MULTI-SITE AGENT SYSTEM

This repository uses a specialized agent identity system where each site has its own unique agent identifier:

### Agent Identity Format: CC-CCA-LANDER-{SITE-CODE}

**Site Directory → Agent Identity Mapping:**
- accountreceivablesinsurance.com → **CC-CCA-LANDER-ACC-REC-INS**
- barandnightclubinsurance.com → **CC-CCA-LANDER-BNB-INS**  
- cabincruiserinsurance.com → **CC-CCA-LANDER-CRUISE-INS**
- chandlermortgages.com → **CC-CCA-LANDER-MORT-CHA**
- concreterepairinsurance.com → **CC-CCA-LANDER-CONC-INS**
- dirtworkinsurance → **CC-CCA-LANDER-DIRT-INS**
- fightclubinsurance.com → **CC-CCA-LANDER-FIGHT-INS**
- froyoinsurance.com → **CC-CCA-LANDER-FROYO-INS**
- glazinginsurance.com → **CC-CCA-LANDER-GLAZE-INS**
- hiredautoinsurance.com → **CC-CCA-LANDER-HIRED-AUTO**
- hoodventcleaninginsurance.com → **CC-CCA-LANDER-VENT-INS**
- independenttruckerinsurance.com → **CC-CCA-LANDER-TRUCK-INS**
- indoorskitrainer.com → **CC-CCA-LANDER-SKI-INS**
- mobiledetailinsurance.com → **CC-CCA-LANDER-DETAIL-INS**
- oilfieldweldinginsurance.com → **CC-CCA-LANDER-WELD-INS**
- puroseguro.com → **CC-CCA-LANDER-PURO-SEG**
- ufcinsurance.com → **CC-CCA-LANDER-UFC-INS**
- vanlifeinsurance.com → **CC-CCA-LANDER-VAN-INS**
- waterproofinginsurance.com → **CC-CCA-LANDER-WATER-INS**

### Agent System Usage
When working on any specific site, use the corresponding agent identity in:
- Slack notifications and updates
- Command execution logs  
- Research documentation
- Error tracking
- Progress reporting

**Example Usage:**
```
🚀 [CC-CCA-LANDER-BNB-INS] TASK_START: Update bar insurance FAQ content
📊 [CC-CCA-LANDER-FROYO-INS] PROGRESS: Building CSS optimization - 75% complete
✅ [CC-CCA-LANDER-TRUCK-INS] TASK_COMPLETE: Independent trucker landing page deployed
```

## 🚨 CRITICAL DEPLOYMENT BLOCKER - READ FIRST

**MDX ACORN PARSING ERROR PREVENTION**

⚠️ **CONFIRMED ROOT CAUSES**: When MDX acorn parsing errors persist despite structural fixes, the issue is content-level corruption requiring complete rebuild, not incremental debugging.

### **Confirmed Root Causes of MDX Acorn Parsing Errors**

**❌ Primary Issue: Corrupted Content Patterns**
- **Problem**: Original blog content contained specific syntax patterns that the MDX parser couldn't handle
- **Evidence**: Rebuilding with identical structure but fresh content resolved the error completely  
- **Root Cause**: Content copied from external sources likely contained hidden characters, malformed markdown, or incompatible syntax

**❌ Secondary Issue: Accumulated Content Corruption**
- **Problem**: Multiple editing iterations had introduced parsing conflicts
- **Evidence**: Despite fixing frontmatter, JSX components, line endings - the error persisted until complete content rebuild
- **Root Cause**: Layered fixes may have created additional parsing conflicts

### **What Was NOT the Problem** (despite extensive debugging):
1. **YAML frontmatter complexity** - Working and failing blogs had identical frontmatter structure
2. **JSX component imports** - Same components work fine in other blogs  
3. **Line endings (CRLF vs LF)** - Conversion didn't resolve the issue
4. **Multi-line JSX syntax** - Flattening had no effect
5. **Apostrophes/quotes** - Never actually caused parsing errors
6. **❌ CRITICAL: Content length is NEVER the problem** - We have multiple working blogs with 4000+ words:
   - decoding-policy-statements.mdx: 4,212 words ✅ WORKING
   - insurance-premium-calculation-factors.mdx: 3,531 words ✅ WORKING
   - michigan-contractor-insurance-guide.mdx: 3,277 words ✅ WORKING

### **🎯 Confirmed Solution Pattern:**
- **Template-based rebuild** using proven working blog structure
- **Fresh content creation** rather than fixing corrupted content
- **Exact component patterns** from successful builds (`<Callout>`, `<Stats>`, `<Table>`, etc.)

### **✅ WORKING MDX PATTERNS** (Confirmed in production):
```jsx
// Safe components (confirmed working):
import { Callout } from '@/components/ui/Callout'
import { Stats } from '@/components/ui/Stats'
import { Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell } from '@/components/ui/Table'
import { CTABox } from '@/components/ui/CTABox'
```

### **❌ NEVER USE - CONFIRMED TO CAUSE ACORN ERRORS**:
```jsx
// These cause systematic build failures:
import { BlogFAQ } from '@/components/blog/BlogFAQ'           // ❌
import { BlogCTA } from '@/components/blog/BlogCTA'           // ❌  
import { BlogQuoteBox } from '@/components/blog/BlogQuoteBox' // ❌
import { BlogInfographic } from '@/components/blog/BlogInfographic' // ❌
```

### **FAQ FORMATTING** (Use simple markdown):
```markdown
## Frequently Asked Questions

**Q: Your question here?**
A: Your answer here.

**Q: Another question?**  
A: Another answer here.
```

### **CRITICAL DEPLOYMENT TESTING**:
**🚨 NEVER claim "deployment ready" based on local build success alone**

**Required validation before deployment:**
1. **`npm run test:netlify`** - Simulate Netlify environment
2. **`npm run test:mdx`** - Validate all MDX files  
3. **`node scripts/pre-deploy-check.js`** - Comprehensive validation
4. **All tests must pass** - Local build success ≠ Netlify success

## Blog Creation Guidelines

- **🚨 MANDATORY REQUIREMENT**: ALL BLOG POSTS MUST BE 5000+ WORDS LONG. SHORT BLOG POSTS ARE UNACCEPTABLE.

### **❌ NEVER REDUCE BLOG POST LENGTH AS A SOLUTION**

**CRITICAL UNDERSTANDING**: We have multiple working blogs with 4000+ words:
- decoding-policy-statements.mdx: 4,212 words ✅ BUILDS SUCCESSFULLY
- insurance-premium-calculation-factors.mdx: 3,531 words ✅ BUILDS SUCCESSFULLY  
- michigan-contractor-insurance-guide.mdx: 3,277 words ✅ BUILDS SUCCESSFULLY

**⚠️ THEREFORE**: Content length is NEVER the cause of build errors. If a blog fails to build, the solution is NEVER to make it shorter. The solution is to identify specific content patterns causing the issue.

**✅ REQUIRED APPROACH**: Always create comprehensive, detailed blog posts over 5000 words. If build errors occur, investigate content patterns, not length.

## Repository Overview

This repository contains multiple insurance landing page websites for Clean Cut Agents (CCA). Each website directory represents a specialized insurance vertical with its own complete website implementation. The project uses a template-based architecture with standardized build processes across all sites.

## Architecture

### Multi-Site Structure
- **Base-Template-Site/**: Core template with reusable components and patterns
- **Individual Site Directories**: Each `.com` directory contains a complete website
- **Shared Patterns**: All sites follow identical file structure and build processes
- **Template System**: Sites are created from the base template and customized

### Standard Site Structure
```
[site-name].com/
├── index.html              # Main landing page
├── success.html            # Form submission success page
├── css/
│   ├── styles.css          # Source styles (Tailwind CSS)
│   └── styles.min.css      # Compiled/minified CSS
├── js/
│   └── main.js             # Core functionality (forms, modals, etc.)
├── data/
│   ├── faq.md             # FAQ content in markdown
│   └── schema.json        # SEO schema data
├── images/                 # Site images and logos
├── scripts/
│   └── optimize-images.js  # Image optimization utility
├── docs/                   # Site-specific documentation
├── package.json           # Build dependencies
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
├── netlify.toml           # Netlify deployment config
└── build-faq.js           # FAQ automation script
```

## Build System

### Core Build Commands
Each site has the same build process:
```bash
npm run build              # Full build (CSS + FAQ generation)
npm run build:css          # Compile and minify CSS only
npm run optimize:images    # Generate optimized image variants
```

### Build Process Details
1. **CSS Compilation**: PostCSS processes Tailwind CSS with autoprefixer and cssnano
2. **FAQ Generation**: `build-faq.js` processes `data/faq.md` and injects HTML + schema into `index.html`
3. **Image Optimization**: Sharp generates multiple WebP variants (thumbnail, small, medium, large)

### FAQ Automation System
**CRITICAL**: Never manually edit FAQ sections in HTML files
- FAQ content lives in `data/faq.md` (markdown format)
- `build-faq.js` automatically generates:
  - HTML FAQ section in `index.html`
  - JSON-LD schema markup for SEO
  - Consistent formatting and structure
- Changes to FAQ must be made in `data/faq.md` only

## Site Management

### Adding New Sites
1. Copy `Base-Template-Site/` structure
2. Customize content, branding, and copy
3. Update `data/schema.json` with site-specific info
4. Replace placeholder images with site-specific assets
5. Test build process and deployment

### Site Status Categories
- **COMPLETED**: Live sites with full implementation
- **In Progress**: Sites with brand guides but incomplete FAQ/content
- **Early Stage**: Basic folder setup only

### Critical Files to Review
- `docs/.clinerules`: Template implementation guidelines
- `clinerules`: Global project rules and standards
- `comprehensive-website-prompt.md`: Detailed implementation checklist

## Technology Stack

### Frontend
- **HTML5**: Semantic markup with schema.org integration
- **Tailwind CSS**: Utility-first CSS framework
- **Vanilla JavaScript**: Minimal dependencies for forms and interactivity

### Build Tools
- **PostCSS**: CSS processing with Tailwind, autoprefixer, cssnano
- **Sharp**: High-performance image optimization
- **Node.js**: Build script execution

### Deployment
- **Netlify**: Form handling, CDN, continuous deployment
- **reCAPTCHA**: Spam protection on contact forms
- **WebP Images**: Optimized format for performance

## Form System

### Form Configuration
All sites use Netlify Forms with:
- Name, email, phone, company fields
- reCAPTCHA integration
- Custom success page redirects
- Client-side validation

### Form Processing
Forms automatically route to `success.html` and send notifications via Netlify's system.

## SEO Implementation

### Schema Markup
Each site includes two JSON-LD schemas:
- **LocalBusiness**: Company information and contact details
- **FAQPage**: Generated from `data/faq.md` content

### Critical SEO Elements
- Semantic HTML structure
- Meta tags optimization
- Open Graph and Twitter Card tags
- Image alt text and file naming
- 1,500+ word content targets

## Image Management

### Image Optimization
Run `npm run optimize:images` to generate:
- thumbnail (150px)
- small (300px)
- medium (600px)
- large (1200px)
- original size

All outputs are WebP format with 80% quality.

### Image Naming Convention
Use descriptive, keyword-rich filenames (e.g., "concrete-contractor-insurance-arizona.webp")

## Content Guidelines

### Brand Consistency
Each site maintains individual branding while following consistent:
- Template structure
- Form functionality
- SEO optimization
- Performance standards

### Quality Standards
- 1,500+ word minimum content
- Professional imagery
- Industry-specific terminology
- Clear value propositions
- Trust signals and social proof

## Working with Individual Sites

When working on a specific site:
1. Navigate to the site directory (e.g., `cd accountreceivablesinsurance.com`)
2. Review `docs/.clinerules` for site-specific guidelines
3. Use standard build commands
4. Never edit FAQ sections in HTML directly
5. Test all forms and interactive elements
6. Verify schema markup validity

## Common Tasks

### Building a Site
```bash
cd [site-name].com
npm run build
```

### Updating FAQ Content
```bash
# Edit data/faq.md
npm run build  # Regenerates HTML and schema
```

### Image Optimization
```bash
npm run optimize:images
```

### Adding New Content
1. Update relevant HTML sections
2. Rebuild CSS if styling changes: `npm run build:css`
3. Update schema.json if business info changes
4. Test forms and functionality

## Security Considerations

- reCAPTCHA on all forms
- No API keys or credentials in code
- Netlify form spam protection
- HTTPS enforcement via Netlify
- Content Security Policy headers

This repository requires careful attention to the FAQ automation system and consistent build processes across all sites. Always use the build commands rather than manual edits to maintain consistency and functionality.