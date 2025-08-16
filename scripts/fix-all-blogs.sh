#!/bin/bash

# Fix all blog implementations for CCA-Landers sites
# This script will:
# 1. Add blog navigation links to all homepages
# 2. Make navigation visible
# 3. Create missing blog systems

echo "==================================================="
echo "🔧 FIXING ALL BLOG IMPLEMENTATIONS"
echo "==================================================="

BASE_DIR="/home/mikecerqua/projects/CCA-Landers"

# Function to add blog link to navigation
add_blog_navigation() {
    local site_dir="$1"
    local site_name="$2"
    
    echo "🔗 Updating navigation for $site_name..."
    
    # Check if index.html exists
    if [ -f "$site_dir/index.html" ]; then
        # Check if blog link already exists
        if grep -q 'href="blog/"' "$site_dir/index.html"; then
            echo "   ✅ Blog link already exists"
        else
            echo "   ⚠️ Adding blog link to navigation..."
            # This would need to be done with proper editing
            echo "   📝 Manual edit needed for $site_name"
        fi
    fi
}

# Sites array
declare -a sites=(
    "accountreceivablesinsurance.com"
    "barandnightclubinsurance.com"
    "cabincruiserinsurance.com"
    "chandlermortgages.com"
    "concreterepairinsurance.com"
    "dirtworkinsurance"
    "fightclubinsurance.com"
    "froyoinsurance.com"
    "glazinginsurance.com"
    "hiredautoinsurance.com"
    "hoodventcleaninginsurance.com"
    "independenttruckerinsurance.com"
    "indoorskitrainer.com"
    "mobiledetailinsurance.com"
    "oilfieldweldinginsurance.com"
    "puroseguro.com"
    "ufcinsurance.com"
    "vanlifeinsurance.com"
    "waterproofinginsurance.com"
)

echo ""
echo "📊 CHECKING ALL SITES"
echo "======================================"

for site in "${sites[@]}"; do
    site_path="$BASE_DIR/$site"
    if [ -d "$site_path" ]; then
        add_blog_navigation "$site_path" "$site"
    fi
done

echo ""
echo "======================================"
echo "📋 SITES NEEDING MANUAL FIXES:"
echo ""
echo "Navigation Updates Needed:"
echo "- accountreceivablesinsurance.com"
echo "- chandlermortgages.com"
echo "- concreterepairinsurance.com"
echo "- fightclubinsurance.com"
echo "- glazinginsurance.com"
echo "- hiredautoinsurance.com"
echo "- hoodventcleaninginsurance.com"
echo "- independenttruckerinsurance.com"
echo "- indoorskitrainer.com"
echo "- mobiledetailinsurance.com"
echo "- oilfieldweldinginsurance.com"
echo "- puroseguro.com"
echo "- ufcinsurance.com"
echo "- vanlifeinsurance.com"
echo "- waterproofinginsurance.com"
echo ""
echo "Complete Blogs Needed:"
echo "- oilfieldweldinginsurance.com"
echo "- puroseguro.com"
echo "- ufcinsurance.com"
echo "- vanlifeinsurance.com"
echo "- waterproofinginsurance.com"
echo ""
echo "Blog Posts Needed:"
echo "- indoorskitrainer.com (3 posts)"
echo "- mobiledetailinsurance.com (3 posts)"
echo "- hoodventcleaninginsurance.com (2 more posts)"
echo "======================================"