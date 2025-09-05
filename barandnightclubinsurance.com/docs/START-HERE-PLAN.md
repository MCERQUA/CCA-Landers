# Comprehensive CCA Landing Page Creation Prompt with Implementation Checklist

## IMPORTANT: Document Updates
- [ ] **FIRST PRIORITY**: Update this document as you complete each section, marking items as done and noting any changes or issues encountered
- [ ] Maintain this document in the project folder as a record of what has been completed and any modifications made

## Project Overview
Please create a new landing page for Bar & Nightclub Insurance using the CCA Base Template. The site should be fully SEO-optimized, mobile-responsive, and conversion-focused to generate insurance quote leads. Follow the comprehensive checklist below to ensure all elements are properly implemented.

## Phase 1: Project Setup and Research

### 1.1 Brand and Identity Setup
- [ ] Primary color: Deep Purple (#3C1053) for headers/navigation
- [ ] Secondary color: Electric Blue (#00B4D8) for accents/buttons
- [ ] Accent color: Neon Pink (#FF36AB) for high-impact CTAs
- [ ] Typography: 
  - [ ] Montserrat Bold for headers/navigation
  - [ ] Open Sans for body text
  - [ ] Bebas Neue for special highlights
- [ ] Update CSS variables with brand colors
- [ ] Replace all company logo images with bar-nightclub specific logo (must use WebP format)

### 1.2 Company Information
- [ ] Update company name throughout the site
- [ ] Add complete contact information:
  - [ ] Business address (Street, City, State, ZIP)
  - [ ] Phone number (formatted consistently)
  - [ ] Email address
  - [ ] Business hours
  - [ ] License numbers and credentials
  - [ ] Social media profiles (if available)

### 1.3 SEO Research
- [ ] Research and document primary keywords for Bar & Nightclub Insurance
- [ ] Research and document secondary/long-tail keywords (e.g. "liquor liability insurance", "nightclub assault coverage")
- [ ] Research top Google search autofill questions for FAQ section
- [ ] Identify industry-specific statistics and trust elements
- [ ] Research common risks and coverage needs (liquor liability, property damage, assault coverage)
- [ ] Find cost ranges for typical policies in this industry

## Phase 2: Technical Implementation

### 2.1 Meta Information
- [ ] Update page title with format: "[PRIMARY KEYWORD] | [SECONDARY KEYWORD] | [BRAND NAME]"
- [ ] Create compelling meta description with value proposition (150-160 characters)
- [ ] Update canonical URL to match the domain (use complete URL including https://)
- [ ] Customize Open Graph tags for social sharing (all must be updated with specific values, not placeholders):
  - [ ] og:title - Set to same text as page title
  - [ ] og:description - Set to same text as meta description
  - [ ] og:image - Set to absolute URL of company logo (must use WebP format)
  - [ ] og:url - Set to the absolute URL of the website (including https://)
  - [ ] og:type - Should remain "website"
- [ ] Customize Twitter Card tags (all must be updated with specific values, not placeholders):
  - [ ] twitter:card - Should remain "summary_large_image"
  - [ ] twitter:title - Set to same text as page title
  - [ ] twitter:description - Set to same text as meta description
  - [ ] twitter:image - Set to absolute URL of company logo (must use WebP format)

### 2.2 Schema Markup
- [ ] CRITICAL: Verify both schema blocks exist (LocalBusiness and FAQ) and are properly formatted
- [ ] Update LocalBusiness schema with accurate company information:
  - [ ] Business name (remove all [PLACEHOLDER] text)
  - [ ] Description (remove all [PLACEHOLDER] text)
  - [ ] URL (use absolute URL including https://)
  - [ ] Telephone (format: 844-967-5247)
  - [ ] Address (complete with street, city, state, zip)
  - [ ] Opening hours (verify these match actual business hours)
  - [ ] Image URL (must be absolute URL with https://)
- [ ] Update FAQ schema with industry-specific questions:
  - [ ] At least 5 questions with complete answers
  - [ ] Ensure questions match visible FAQ section on page EXACTLY
  - [ ] Update datePublished and dateModified with current date
  - [ ] Double-check that no placeholder text remains in the FAQ schema
- [ ] Verify no duplicate schema exists (check for multiple script tags with same schema type)

### 2.3 Technical Optimizations
- [ ] Compress all images to WebP format
- [ ] Implement lazy loading for below-the-fold images
- [ ] Implement the image optimization script (Run-Optimize-image-script.bat)
- [ ] Ensure all critical CSS is properly inlined
- [ ] IMPORTANT: Verify reCAPTCHA implementation on BOTH forms:
  - [ ] Main contact form must have reCAPTCHA div with data-netlify-recaptcha="true"
  - [ ] Modal contact form must have reCAPTCHA div with data-netlify-recaptcha="true"
- [ ] Implement Netlify honeypot on both forms:
  - [ ] Main contact form must have honeypot field
  - [ ] Modal contact form must have honeypot field

## Phase 3: Content Implementation

### 3.1 Header/Hero Section
- [ ] Create compelling main headline with primary keyword
- [ ] Create subheadline explaining the value proposition
- [ ] Update hero image with industry-specific image (webp format)
- [ ] Add descriptive alt text for hero image with keyword
- [ ] Update CTA button with clear action text
- [ ] CRITICAL: Verify the title text in the header is clearly visible and NOT the same color as the background
- [ ] Ensure company name in navigation is clearly visible against the background color

### 3.2 Problem/Solution Section
- [ ] Identify 4 specific pain points for bar & nightclub owners:
  - Liquor liability risks
  - Property damage from patrons
  - Assault/battery claims
  - Special event coverage needs
- [ ] Create 4 corresponding solutions that directly address each pain point
- [ ] Ensure solutions highlight the unique benefits of the insurance service
- [ ] Update CTA button with clear messaging like "Get Nightclub Coverage Today"

### 3.3 Benefits/Features Section
- [ ] Update section headline to "Why Bar & Nightclub Owners Choose Our Insurance"
- [ ] Create 3 benefit categories relevant to nightclub insurance:
  - Liquor Liability Protection
  - Comprehensive Property Coverage  
  - Special Event Insurance
- [ ] List 4 specific advantages under each benefit category
- [ ] Ensure benefits address specific needs like 24/7 claims support

### 3.4 Social Proof Section
- [ ] Create 2 testimonials from satisfied customers (or realistic placeholder testimonials)
- [ ] Include customer names and companies (can be anonymized if needed)
- [ ] Update partner/certification logos with relevant industry associations
- [ ] Add descriptive alt text for all logos

### 3.5 FAQ Section and Automation
- [ ] Create or update the `data/faq.md` file following the correct format:
  - [ ] Level 1 heading (`#`) for the section title containing the primary keyword
  - [ ] Level 2 headings (`##`) for each question
  - [ ] Plain text below each question for the answer
  - [ ] Blank lines between paragraphs for multi-paragraph answers
  - [ ] Format lists with either `-` for bullet points or numbers followed by periods (`1.`, `2.`) for numbered lists
- [ ] Include at least 5 questions based on Google search research
- [ ] Provide comprehensive answers to each question (200+ words total per question)
  - Updated all FAQ content to focus on nightclub insurance needs including liquor liability, assault coverage, and special event considerations
- [ ] Verified FAQ automation system is working correctly:
  - [ ] data/faq.md exists and is properly formatted
  - [ ] build-faq.js script is unmodified
  - [ ] package.json contains correct build script
  - [ ] netlify.toml is properly configured
- [ ] CRITICAL: The FAQ content in `data/faq.md` will be automatically used to:
  - Update the visible FAQ section in the HTML
  - Update the FAQ schema in the head section of index.html
  - These updates happen during the build/deploy process with the build-faq.js script
- [ ] Do NOT manually edit the FAQ section in index.html as it will be overwritten
- [ ] Do NOT manually edit the FAQ schema in the head section as it will be overwritten
- [ ] Ensure schema and visible content will match exactly by properly formatting the faq.md file

### 3.6 Contact/Lead Capture Section
- [ ] Update contact form headline and subheadline
- [ ] List 3 specific benefits of submitting the form
- [ ] Verify form fields capture essential information:
  - [ ] Full Name
  - [ ] Email Address
  - [ ] Phone Number
  - [ ] Company Name
- [ ] Verify form submission goes to correct Netlify form name
- [ ] Update privacy policy text with appropriate language
- [ ] CRITICAL: Verify reCAPTCHA is present and properly implemented
- [ ] Ensure form has data-netlify="true" attribute
- [ ] Ensure form has netlify-honeypot="bot-field" attribute
- [ ] Ensure form has hidden input with form-name value

### 3.7 Footer Section
- [ ] Update company name and tagline
- [ ] Verify all navigation links are functional
- [ ] Update coverage links with relevant insurance types
- [ ] Update contact information with correct:
  - [ ] Address
  - [ ] Phone
  - [ ] Email
- [ ] Update copyright information with current year and company name

### 3.8 Floating Button and Modal Contact Form
- [ ] CRITICAL: Verify floating contact button exists at bottom right of screen
- [ ] Ensure floating button contains telephone icon (SVG)
- [ ] Set floating button background color to match site highlight color
- [ ] Verify floating button is always visible when scrolling
- [ ] Update modal headline and content
- [ ] Verify modal form captures the same information as main form
- [ ] Ensure form submission goes to the correct Netlify form name
- [ ] CRITICAL: Verify reCAPTCHA is present on modal form
- [ ] Ensure modal form has data-netlify="true" attribute
- [ ] Ensure modal form has netlify-honeypot="bot-field" attribute
- [ ] Test modal opening and closing functionality when clicking floating button

## Phase 4: Success Page Implementation
- [ ] Update page title with company name
- [ ] Create compelling success page headline
- [ ] Write detailed success message explaining next steps
- [ ] Update next steps checklist with accurate information
- [ ] Verify "Return to homepage" link works correctly
- [ ] Add call-to-action with phone number for immediate assistance
- [ ] Ensure brand consistency with main page

## Phase 5: Final Checks

### 5.1 Content Check
- [ ] Verify total word count is 1,500+ words
- [ ] Ensure consistent voice and tone throughout
- [ ] Verify NO placeholder content remains (search for "[" and "]" on the entire page)
- [ ] Verify all placeholder images have been replaced

### 5.2 Critical Element Verification
- [ ] Verify reCAPTCHA appears on BOTH forms
- [ ] Verify floating button is visible and properly positioned
- [ ] Verify modal opens when floating button is clicked
- [ ] Verify hero section title text is clearly visible (not same color as background)
- [ ] Verify both schema blocks (LocalBusiness and FAQ) are complete with no placeholders
- [ ] Verify FAQ questions in schema match the visible FAQ section exactly
- [ ] Verify Open Graph and Twitter Card tags are properly set

## Phase 6: FAQ Automation Process

### 6.1 Understanding the FAQ Update System
- [ ] The FAQ content is maintained in the `data/faq.md` file
- [ ] During the build process, the `build-faq.js` script automatically:
  - Reads the FAQ content from `data/faq.md`
  - Updates the FAQ section in `index.html`
  - Updates the FAQ schema in the head section of `index.html`
- [ ] This ensures that the visible FAQ content and schema always match exactly

### 6.2 Required Files for FAQ Automation
- [ ] `data/faq.md` - Contains the FAQ content in Markdown format
- [ ] `build-faq.js` - Node.js script that processes the Markdown and updates the HTML
- [ ] `package.json` - Contains the build script command
- [ ] `netlify.toml` - Configures Netlify to run the build script during deployment

### 6.3 FAQ Update Process
- [ ] To update FAQs: Edit ONLY the `data/faq.md` file
- [ ] NEVER manually edit the FAQ section in `index.html`
- [ ] NEVER manually edit the FAQ schema in the head section of `index.html`
- [ ] After changes are committed to GitHub, the build process will automatically run
- [ ] The site will be rebuilt with updated FAQ content in both places

### 8 Critical Verification
- [ ] Verify build-faq.js script is unmodified from the template
- [ ] Verify package.json contains the correct build script
- [ ] Verify netlify.toml is configured properly for the build process
- [ ] Verify proper image structure is maintained

## Critical Issues to Watch For

### FAQ Automation System Issues
- [ ] DO NOT modify the structure of the FAQ section in index.html
- [ ] DO NOT modify the build-faq.js script
- [ ] DO NOT manually edit the FAQ schema in the head section
- [ ] ONLY edit the data/faq.md file for FAQ content
- [ ] Ensure the data/faq.md file uses the correct Markdown formatting:
  - Proper heading levels (# for title, ## for questions)
  - Proper list formatting (- for bullets, 1. for numbered lists)
  - Blank lines between paragraphs
  - No invalid characters or formatting

### Form and reCAPTCHA Issues
- [ ] BOTH forms must have reCAPTCHA (main contact form and modal form)
- [ ] The reCAPTCHA divs must have data-netlify-recaptcha="true" attribute
- [ ] Both forms must have data-netlify="true" and netlify-honeypot="bot-field" attributes
- [ ] Both forms must have the hidden input with form-name value

### Floating Button and Modal Issues
- [ ] The floating contact button must be visible at bottom right of screen
- [ ] It must contain the telephone icon SVG
- [ ] The background color must match the site's highlight color
- [ ] The button must be always visible when scrolling
- [ ] The button must open the modal when clicked
- [ ] The modal must close when the close button is clicked

### Header and Color Issues
- [ ] The company name in the header must NOT be the same color as the background
- [ ] All header text must be clearly visible against the background
- [ ] All placeholder content must be replaced (search for "[" and "]")
- [ ] The schema must not contain any placeholder content

### Common Mistakes to Avoid
- [ ] Duplicating schema blocks (check for multiple script tags with same schema type)
- [ ] Missing reCAPTCHA on one or both forms
- [ ] Header text being the same color as the background
- [ ] Placeholders remaining in content or schema
- [ ] Editing the FAQ section directly instead of updating data/faq.md
- [ ] Modifying the build-faq.js script

## Additional Important Requirements

### Critical Elements That Must Work Correctly
- [ ] reCAPTCHA on both forms (main and modal)
- [ ] Floating contact button with telephone icon
- [ ] Modal opening when floating button is clicked
- [ ] FAQ content matching schema exactly
- [ ] No placeholder content remaining anywhere
- [ ] Visible text in header (not same color as background)

### Content Guidelines
- Keep the core structure and layout of the template intact
- Maintain the existing color scheme but adapt to brand colors
- Do not remove any sections from the template
- Ensure all content is insurance-compliant and accurate
- Focus on providing specific, actionable information rather than generic content
- Target word count distribution:
  - Hero section: 100-150 words
  - Problem/Solution section: 300-350 words
  - Features/Benefits section: 400-500 words
  - Testimonials section: 200-250 words
  - FAQ section: 400-500 words
  - Contact section: 100-150 words

### Company information
  - Address: 12220 E Riggs Road, Suite #105, Chandler, AZ 85249
  - Phone: 844-967-5247
  - Email: josh@contractorschoiceagency.com

This landing page should be created with a focus on generating qualified insurance leads for bar & nightclub owners by clearly communicating the value proposition, addressing specific pain points (liquor liability, property damage, assault coverage), and building trust through social proof and industry expertise.
