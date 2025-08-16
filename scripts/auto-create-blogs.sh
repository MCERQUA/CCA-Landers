#!/bin/bash

# Auto Blog Creation Script for CCA-Landers Sites
# Agent: 🜁 SentientEC Mode - Autonomous Blog Implementation
# Created: January 16, 2025

echo "==================================================="
echo "🚀 AUTOMATED BLOG CREATION SYSTEM"
echo "==================================================="

BASE_DIR="/home/mikecerqua/projects/CCA-Landers"

# Function to create blog structure
create_blog_structure() {
    local site_dir="$1"
    local site_name="$2"
    
    echo "📁 Creating blog structure for $site_name..."
    mkdir -p "$site_dir/blog/posts"
    echo "✅ Blog directories created"
}

# Function to update main navigation
update_navigation() {
    local site_dir="$1"
    local site_name="$2"
    
    if [ -f "$site_dir/index.html" ]; then
        echo "🔗 Checking navigation in main index.html..."
        if ! grep -q 'href="blog/"' "$site_dir/index.html"; then
            echo "⚠️  Navigation needs blog link for $site_name"
        else
            echo "✅ Navigation already has blog link"
        fi
    fi
}

# Sites that need blogs
declare -a sites_needing_blogs=(
    "glazinginsurance.com:Glazing Insurance:glass and glazing contractors"
    "hiredautoinsurance.com:Hired Auto Insurance:businesses using hired vehicles"
    "hoodventcleaninginsurance.com:Hood Vent Cleaning Insurance:kitchen exhaust cleaners"
    "independenttruckerinsurance.com:Independent Trucker Insurance:owner-operators"
    "indoorskitrainer.com:Indoor Ski Trainer Insurance:ski training facilities"
    "mobiledetailinsurance.com:Mobile Detail Insurance:auto detailing businesses"
    "oilfieldweldinginsurance.com:Oilfield Welding Insurance:oil and gas welders"
    "puroseguro.com:Puro Seguro:negocios hispanos"
    "ufcinsurance.com:UFC Insurance:MMA and combat sports gyms"
    "vanlifeinsurance.com:Van Life Insurance:van dwellers and RV living"
    "waterproofinginsurance.com:Waterproofing Insurance:waterproofing contractors"
)

echo ""
echo "📊 SITES REQUIRING BLOG IMPLEMENTATION"
echo "======================================"

for site_info in "${sites_needing_blogs[@]}"; do
    IFS=':' read -r site_dir company_name industry <<< "$site_info"
    site_path="$BASE_DIR/$site_dir"
    
    if [ -d "$site_path" ]; then
        echo ""
        echo "🔧 Processing: $site_dir"
        echo "   Company: $company_name"
        echo "   Industry: $industry"
        
        # Check if blog already exists
        if [ -d "$site_path/blog/posts" ]; then
            post_count=$(ls "$site_path/blog/posts"/*.html 2>/dev/null | wc -l)
            if [ "$post_count" -gt 0 ]; then
                echo "   ✅ Blog exists with $post_count posts"
            else
                echo "   ⚠️ Blog directory exists but empty"
                create_blog_structure "$site_path" "$site_dir"
            fi
        else
            echo "   ❌ No blog directory - creating..."
            create_blog_structure "$site_path" "$site_dir"
        fi
        
        update_navigation "$site_path" "$site_dir"
    else
        echo "⚠️ Warning: $site_dir directory not found"
    fi
done

echo ""
echo "======================================"
echo "✅ Blog structure check complete!"
echo ""
echo "Next steps:"
echo "1. Create blog index.html for each site"
echo "2. Generate 3 industry-specific posts per site"
echo "3. Update main navigation to include blog links"
echo "4. Test and deploy all changes"
echo "======================================"