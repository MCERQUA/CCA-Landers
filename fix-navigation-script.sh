#!/bin/bash

# Script to fix navigation links across all remaining CCA-Landers sites
# Makes navigation visible and ensures Blog links are present

sites=(
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

echo "Fixing navigation for remaining 14 sites..."

for site in "${sites[@]}"; do
    echo "Processing $site..."
    
    # Fix the main navigation - change display: none to display: block
    sed -i 's/<nav style="display: none;">/<nav style="display: block;">/g' "$site/index.html"
    
    # Add Blog link if it doesn't exist in desktop nav (before the last </ul> in nav)
    if ! grep -q 'href="blog/".*Blog' "$site/index.html"; then
        sed -i '/<nav style="display: block;">/,/<\/nav>/ {
            /<li><a href="#contact"/i\
                        <li><a href="blog/" style="color: white;">Blog</a></li>
        }' "$site/index.html"
    fi
    
    # Add Blog link to mobile menu if it doesn't exist
    if ! grep -q 'href="blog/".*Blog.*mobile' "$site/index.html"; then
        sed -i '/<div id="mobileMenu"/,/<\/div>/ {
            /<a href="#contact"/i\
                    <a href="blog/" style="display: block; padding: 0.75rem 1rem; color: white; border-bottom: 1px solid rgba(255,255,255,0.1);">Blog</a>
        }' "$site/index.html"
    fi
    
    echo "  ✅ Fixed $site"
done

echo "All navigation fixes completed!"