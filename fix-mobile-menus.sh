#!/bin/bash

# Fix mobile menu CSS for all sites that need it

sites=(
  "barandnightclubinsurance.com"
  "chandlermortgages.com"
  "concreterepairinsurance.com"
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
    nav.hidden.md\\:block {
        display: block !important;
    }
    
    /* Hide mobile menu button on desktop */
    #menuButton.block.md\\:hidden {
        display: none !important;
    }
    
    /* Hide mobile menu on desktop */
    #mobileMenu {
        display: none !important;
    }
}'

for site in "${sites[@]}"; do
  css_file="/home/mikecerqua/projects/CCA-Landers/$site/css/styles.css"
  
  if [ -f "$css_file" ]; then
    # Check if site already has the mobile menu fix
    if ! grep -q "nav.hidden" "$css_file"; then
      # Check if it already has some mobile query
      if grep -q "@media.*max-width.*767px" "$css_file"; then
        echo "✅ $site already has mobile queries, needs update"
        # Find the mobile query and update it
        # This is complex, so we'll handle these manually
      else
        echo "➕ Adding mobile menu CSS to $site"
        # Add the mobile CSS at the end of the file before any closing comments
        echo "$mobile_css" >> "$css_file"
      fi
    else
      echo "✓ $site already fixed"
    fi
  fi
done

echo "Done!"