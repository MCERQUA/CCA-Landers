#!/bin/bash

# CCA-Landers Blog System Implementation Script
# Created: January 16, 2025
# Purpose: Automate blog system setup for all CCA-Landers sites

set -e

# Color codes for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Base directory
BASE_DIR="/home/mikecerqua/projects/CCA-Landers"
TEMPLATE_DIR="$BASE_DIR/blog-templates"

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

# Function to implement blog for a single site
implement_blog() {
    local SITE_DIR=$1
    local SITE_NAME=$2
    local INDUSTRY=$3
    local SITE_CODE=$4
    local COMPANY_NAME=$5
    
    print_status "Implementing blog for $SITE_NAME..."
    
    # Navigate to site directory
    cd "$BASE_DIR/$SITE_DIR"
    
    # Check if blog already exists
    if [ -d "blog" ]; then
        print_warning "Blog directory already exists for $SITE_NAME, skipping..."
        return 0
    fi
    
    # Create blog directory structure
    mkdir -p blog/posts
    print_status "Created blog directory structure"
    
    # Copy blog index template
    cp "$TEMPLATE_DIR/blog-index-template.html" blog/index.html
    
    # Copy post templates for 3 initial articles
    cp "$TEMPLATE_DIR/blog-post-template.html" blog/posts/article-1.html
    cp "$TEMPLATE_DIR/blog-post-template.html" blog/posts/article-2.html
    cp "$TEMPLATE_DIR/blog-post-template.html" blog/posts/article-3.html
    
    print_status "Copied blog templates"
    
    # Update placeholders in blog index
    sed -i "s/\[INDUSTRY\]/$INDUSTRY/g" blog/index.html
    sed -i "s/\[SITE-DOMAIN\]/$SITE_NAME/g" blog/index.html
    sed -i "s/\[COMPANY-NAME\]/$COMPANY_NAME/g" blog/index.html
    sed -i "s/\[SITE-IMAGE\]/insurance-hero.webp/g" blog/index.html
    
    # Update placeholders in blog posts
    for post in blog/posts/*.html; do
        sed -i "s/\[INDUSTRY\]/$INDUSTRY/g" "$post"
        sed -i "s/\[SITE-DOMAIN\]/$SITE_NAME/g" "$post"
        sed -i "s/\[COMPANY-NAME\]/$COMPANY_NAME/g" "$post"
        sed -i "s/\[SITE-IMAGE\]/insurance-hero.webp/g" "$post"
        sed -i "s/\[PUBLISH-DATE\]/2025-01-16/g" "$post"
        sed -i "s/\[MODIFIED-DATE\]/2025-01-16/g" "$post"
    done
    
    print_status "Updated placeholders in templates"
    
    # Add blog link to main navigation in index.html
    if grep -q "blog/" index.html; then
        print_warning "Blog link already exists in navigation"
    else
        # Add blog link to desktop menu
        sed -i '/<a href="#contact"/i\                        <li><a href="blog/" class="text-gray-600 hover:text-green-500">Blog</a></li>' index.html
        
        # Add blog link to mobile menu
        sed -i '/<a href="#contact" class="block px-4 py-2"/i\                    <a href="blog/" class="block px-4 py-2 text-gray-600 hover:text-green-500">Blog</a>' index.html
        
        print_status "Added blog links to navigation menus"
    fi
    
    # Create blog section on homepage (after hero, before main content)
    if grep -q "blog-preview-section" index.html; then
        print_warning "Blog preview section already exists on homepage"
    else
        # This will be added manually per site for better control
        print_status "Blog preview section will be added during customization"
    fi
    
    print_success "Blog implementation complete for $SITE_NAME"
    echo ""
}

# Main execution
echo "========================================="
echo "CCA-Landers Blog System Implementation"
echo "========================================="
echo ""

# Auto/Vehicle Insurance Sites
print_status "Starting Auto/Vehicle Insurance sites..."
implement_blog "vanlifeinsurance.com" "vanlifeinsurance.com" "Van Life" "VAN-INS" "Van Life Insurance"
implement_blog "hiredautoinsurance.com" "hiredautoinsurance.com" "Commercial Auto" "HIRED-AUTO" "Hired Auto Insurance"
implement_blog "independenttruckerinsurance.com" "independenttruckerinsurance.com" "Trucking" "TRUCK-INS" "Independent Trucker Insurance"
implement_blog "cabincruiserinsurance.com" "cabincruiserinsurance.com" "Marine" "CRUISE-INS" "Cabin Cruiser Insurance"

# Contractor/Trade Sites
print_status "Starting Contractor/Trade sites..."
implement_blog "concreterepairinsurance.com" "concreterepairinsurance.com" "Concrete Repair" "CONC-INS" "Concrete Repair Insurance"
implement_blog "dirtworkinsurance" "dirtworkinsurance.com" "Excavation" "DIRT-INS" "Dirt Work Insurance"
implement_blog "waterproofinginsurance.com" "waterproofinginsurance.com" "Waterproofing" "WATER-INS" "Waterproofing Insurance"
implement_blog "glazinginsurance.com" "glazinginsurance.com" "Glass Installation" "GLAZE-INS" "Glazing Insurance"
implement_blog "hoodventcleaninginsurance.com" "hoodventcleaninginsurance.com" "Hood Cleaning" "VENT-INS" "Hood Vent Cleaning Insurance"
implement_blog "oilfieldweldinginsurance.com" "oilfieldweldinginsurance.com" "Oilfield Welding" "WELD-INS" "Oilfield Welding Insurance"
implement_blog "mobiledetailinsurance.com" "mobiledetailinsurance.com" "Mobile Detailing" "DETAIL-INS" "Mobile Detail Insurance"

# Food/Beverage Sites (excluding froyoinsurance which already has blog)
print_status "Starting Food/Beverage sites..."
implement_blog "barandnightclubinsurance.com" "barandnightclubinsurance.com" "Bar and Nightclub" "BNB-INS" "Bar and Nightclub Insurance"

# Specialty/High-Risk Sites
print_status "Starting Specialty/High-Risk sites..."
implement_blog "fightclubinsurance.com" "fightclubinsurance.com" "Combat Sports" "FIGHT-INS" "Fight Club Insurance"
implement_blog "ufcinsurance.com" "ufcinsurance.com" "MMA Training" "UFC-INS" "UFC Insurance"
implement_blog "indoorskitrainer.com" "indoorskitrainer.com" "Ski Training" "SKI-INS" "Indoor Ski Trainer Insurance"

# Professional Services Sites
print_status "Starting Professional Services sites..."
implement_blog "accountreceivablesinsurance.com" "accountreceivablesinsurance.com" "Accounts Receivable" "ACC-REC-INS" "Account Receivables Insurance"
implement_blog "chandlermortgages.com" "chandlermortgages.com" "Mortgage Services" "MORT-CHA" "Chandler Mortgages"

# Spanish Language Site
print_status "Starting Spanish language site..."
implement_blog "puroseguro.com" "puroseguro.com" "Seguros" "PURO-SEG" "Puro Seguro"

echo "========================================="
print_success "Blog system implementation complete!"
echo "========================================="
echo ""
echo "Next steps:"
echo "1. Customize content for each site's specific industry"
echo "2. Add blog preview section to each homepage"
echo "3. Update article titles and content"
echo "4. Test all sites locally"
echo "5. Commit and push changes to GitHub"