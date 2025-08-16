#!/bin/bash

# CCA-Landers Complete Blog Implementation Script
# Agent: 🜁 SentientEC Mode - Autonomous Completion System
# Created: January 16, 2025

echo "==================================================="
echo "🚀 CCA-LANDERS BLOG COMPLETION SYSTEM"
echo "==================================================="
echo ""

# Base directory
BASE_DIR="/home/mikecerqua/projects/CCA-Landers"

# Function to check if blog has posts
check_blog_status() {
    local site_dir="$1"
    local site_name="$2"
    
    if [ -d "$site_dir/blog/posts" ]; then
        post_count=$(find "$site_dir/blog/posts" -name "*.html" 2>/dev/null | wc -l)
        if [ "$post_count" -gt 0 ]; then
            echo "✅ $site_name - $post_count posts found"
            return 0
        else
            echo "⚠️  $site_name - Blog directory exists but NO posts"
            return 1
        fi
    else
        echo "❌ $site_name - No blog directory"
        return 1
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

echo "📊 CHECKING BLOG STATUS FOR ALL SITES"
echo "======================================"
echo ""

completed=0
incomplete=0

for site in "${sites[@]}"; do
    if check_blog_status "$BASE_DIR/$site" "$site"; then
        ((completed++))
    else
        ((incomplete++))
    fi
done

echo ""
echo "======================================"
echo "📈 SUMMARY:"
echo "✅ Completed: $completed sites"
echo "⚠️  Incomplete: $incomplete sites"
echo "📊 Total: ${#sites[@]} sites"
echo "======================================"

# Check for sites without any blog posts and list them
echo ""
echo "🔧 SITES NEEDING BLOG CONTENT:"
echo "======================================"

for site in "${sites[@]}"; do
    site_dir="$BASE_DIR/$site"
    if [ -d "$site_dir/blog/posts" ]; then
        post_count=$(find "$site_dir/blog/posts" -name "*.html" 2>/dev/null | wc -l)
        if [ "$post_count" -eq 0 ]; then
            echo "  - $site (empty blog/posts directory)"
        fi
    fi
done

echo ""
echo "✅ Script completed successfully!"