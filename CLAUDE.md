# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

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