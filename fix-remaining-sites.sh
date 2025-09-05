#!/bin/bash

# Script to fix remaining sites that need mobile menu CSS

echo "🔧 Fixing remaining sites with mobile menu CSS..."

# List of remaining sites to fix
sites=(
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

# Mobile menu CSS to add
mobile_css='
/* Mobile Menu Styles */
@media (max-width: 767px) {
    /* Hide desktop nav on mobile */
    nav.hidden {
        display: none !important;
    }
    
    /* Show mobile menu button */
    #menuButton {
        display: block !important;
    }
}

/* Desktop Menu Styles */
@media (min-width: 768px) {
    /* Show desktop nav */
    nav.hidden.md\:block {
        display: block !important;
    }
    
    /* Hide mobile menu button on desktop */
    #menuButton.block.md\:hidden {
        display: none !important;
    }
    
    /* Hide mobile menu on desktop */
    #mobileMenu {
        display: none !important;
    }
}'

# Process each site
for site in "${sites[@]}"; do
    css_file="$site/css/styles.css"
    
    if [ -f "$css_file" ]; then
        echo "Processing $site..."
        echo "$mobile_css" >> "$css_file"
        echo "✅ Fixed $site"
    else
        echo "❌ CSS file not found: $css_file"
    fi
done

echo "✅ All remaining sites processed!"