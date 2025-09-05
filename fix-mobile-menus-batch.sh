#!/bin/bash

# Script to batch fix mobile menu CSS for all sites needing updates

echo "🔧 Fixing mobile menu CSS for all sites..."

# Function to add mobile menu CSS fixes to a site
fix_site_css() {
    local site=$1
    local css_file="$site/css/styles.css"
    
    echo "Processing $site..."
    
    # Check if the file exists
    if [ ! -f "$css_file" ]; then
        echo "❌ CSS file not found: $css_file"
        return 1
    fi
    
    # Check if mobile styles already exist (look for nav.hidden)
    if grep -q "nav\.hidden" "$css_file"; then
        echo "✅ $site already has mobile menu CSS"
        return 0
    fi
    
    # Add mobile menu CSS before the closing of the file
    # We'll insert it at a safe location - right before any existing @media queries or at the end
    
    # Create temporary file with the additions
    cat << 'EOF' > /tmp/mobile-menu-addition.css

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
}
EOF
    
    # Append the mobile CSS to the file
    cat /tmp/mobile-menu-addition.css >> "$css_file"
    
    echo "✅ Fixed $site"
    return 0
}

# List of sites to fix
sites=(
    "chandlermortgages.com"
    "concreterepairinsurance.com"
    "froyoinsurance.com"
    "glazinginsurance.com"
    "hoodventinsurance.com"
    "landscapersinsurance.com"
    "motorcarriersinsurance.com"
    "professionalliabilityinsurance.com"
    "restaurantinsurance.com"
    "truckinginsurance.com"
    "umbrellainsurance.com"
    "workerscompensationinsurance.com"
)

# Process each site
for site in "${sites[@]}"; do
    fix_site_css "$site"
done

echo "✅ All sites processed!"