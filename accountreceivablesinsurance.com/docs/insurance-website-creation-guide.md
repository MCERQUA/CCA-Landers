# Step-by-Step Guide for Insurance Landing Page Preparation

This guide outlines the process to prepare and customize the Base-Template-Site for each insurance domain landing page.

## Phase 1: Initial Setup and Research

1. **Create Brand Stylesheet from Logo**
   - Extract the primary, secondary, and accent colors from the logo
   - Document the specific hex codes for each color
   - Identify font styles used in the logo
   - Create a brand style guide document (similar to cabin-cruiser-brand-guide.md)
   - Define typography recommendations based on logo style

2. **Create Company Contact Information Sheet**
   - Document business name, address, phone number
   - Include email contact information
   - Note business hours if applicable
   - Document license numbers and credentials
   - Add social media profiles if available

3. **Research Top Questions in Google Search Autofill**
   - Use Google search with "[insurance type]" and note autofill suggestions
   - Research "[insurance type] insurance" + who, what, when, where, why, how
   - Document the top 10-15 questions for FAQ section
   - Group questions by common themes
   - Prioritize questions by search volume potential

4. **Find Industry-Specific Statistics and Trust Elements**
   - Research 5-7 compelling statistics about the specific insurance type
   - Identify industry associations and certifications relevant to the niche
   - Document common risks and coverage needs for this specific insurance
   - Find cost ranges for typical policies in this niche

## Phase 2: Folder and File Preparation

1. **Prepare Project Structure**
   - Create new folder with domain name (e.g., concrete-insurance.com)
   - Copy Base-Template-Site files to the new folder
   - Create /docs subfolder if not present
   - Setup appropriate Git configuration

2. **Create Essential Documentation Files**
   - Create brand-guide.md file with color codes and typography information
   - Create implementation-guide.md (customized version from base template)
   - Copy base .clinerules file and update with domain-specific information
   - Create content-plan.md with section-by-section content strategy

3. **Generate SEO Content Plan**
   - Document primary, secondary, and long-tail keywords for the niche
   - Create content outline for each page section (hero, benefits, FAQ, etc.)
   - Plan word count distribution across sections
   - Document target audience and their pain points

4. **Update Schema.json**
   - Modify base schema.json with company-specific information
   - Update Organization schema with correct details
   - Update LocalBusiness schema if applicable
   - Add FAQ schema based on research questions

## Phase 3: Template Customization Guidelines

1. **Brand Integration Checklist**
   - Update logo image file
   - Apply brand colors to CSS variables
   - Update typography according to brand guide
   - Ensure consistent use of brand voice across all content

2. **Content Replacement Strategy (Critical Files)**
   - **index.html**: Update all placeholder text and content sections
   - **success.html**: IMPORTANT - Update all text, branding, and links to match main page
   - Document specific sections requiring customization
   - Plan for image replacements that align with brand
   - Create naming conventions for all new assets

3. **Success Page Specific Updates**
   - Update page title and meta description
   - Update header with same branding as index.html
   - Customize success message with insurance-specific content
   - Update "return to home" and any additional CTAs
   - Ensure tracking codes match main page
   - Add same footer information as main page

4. **SEO Implementation**
   - Document title tag and meta description templates
   - Plan for heading hierarchy with keyword inclusion
   - Create image naming and alt text guidelines
   - Plan internal linking strategy

5. **Technical Customization**
   - Document any JavaScript customizations needed
   - Plan for form handling specifics
   - Create analytics implementation plan
   - Document performance optimization strategies

## Phase 4: Quality Assurance Plan

1. **Technical Validation Checklist**
   - HTML validation plan for ALL pages (index.html AND success.html)
   - CSS validation process
   - JavaScript error checking
   - Responsive design testing methodology
   - Test form submission to verify success page appearance and function

2. **Content Review Process**
   - Spelling and grammar check procedure (including success page)
   - Brand consistency review steps across all pages
   - Legal compliance check for insurance-specific regulations
   - Content completeness verification

3. **SEO Verification**
   - Keyword implementation check
   - Meta tag verification on all pages
   - Schema.org validation
   - Mobile-friendliness test for all pages

4. **Conversion Optimization Check**
   - CTA visibility and clarity verification
   - Form functionality testing (complete submission flow)
   - Success page review for additional conversion opportunities
   - User flow validation including post-form submission
   - Value proposition clarity assessment

## Final Pre-Launch Checklist

1. **Critical File Review**
   - index.html completely updated with no placeholder content
   - success.html completely updated with no placeholder content
   - schema.json fully customized with company information
   - All image files replaced with branded/relevant images

2. **Cross-Page Consistency**
   - Branding consistent across all pages
   - Contact information identical across all pages
   - Style and tone consistent throughout
   - Analytics and tracking implemented on all pages

3. **Form Testing**
   - Complete actual form submission test
   - Verify redirect to success page works properly
   - Check for proper form data capture in Netlify
   - Test from mobile and desktop devices

By following this systematic approach, we can efficiently prepare and customize the base template for each insurance domain while ensuring consistency, quality, and optimization for both search engines and conversions.