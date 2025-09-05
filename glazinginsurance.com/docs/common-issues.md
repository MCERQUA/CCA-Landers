# Common Issues and Solutions

## Scroll Animations Not Triggering

**Problem**: Sections would flash briefly then disappear on page load.

**Root Cause**: 
- CSS sets sections to opacity:0 by default
- JavaScript IntersectionObserver wasn't consistently triggering due to:
  - High threshold (0.2)
  - No fallback mechanism
  - Possible timing issues with DOM loading

**Solution**:
1. Lowered IntersectionObserver threshold to 0.1
2. Added fallback timeout that adds 'visible' class after 1 second
3. Ensured proper DOM loading sequence

**Affected Files**:
- js/main.js (scroll animation initialization)
- css/styles.css (section visibility styles)

**Date Fixed**: 2025-04-05
