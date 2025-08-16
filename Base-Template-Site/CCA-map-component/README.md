# CCA Interactive Map Component

A standalone, reusable interactive US map component that provides visual navigation to Contractor's Choice Agency state insurance pages. Perfect for embedding on sister sites and partner pages to create engaging backlinks to CCA's comprehensive state contractor insurance resources.

## 🎯 Features

- **Interactive US Map**: All 50 states with hover effects and click navigation
- **Visual Feedback**: Color-coded states showing available vs coming soon
- **Responsive Design**: Works on all devices and screen sizes
- **Zero Dependencies**: Pure JavaScript, no frameworks required
- **Customizable**: Extensive options for colors, behaviors, and styling
- **SEO Friendly**: Direct links to CCA state pages for better visibility
- **Lightweight**: ~50KB total with all state data included

## 📦 Quick Start

### Option 1: Using CDN (Recommended)

Add this to your HTML where you want the map to appear:

```html
<!-- Add container div -->
<div id="cca-map"></div>

<!-- Include CSS (optional but recommended) -->
<link rel="stylesheet" href="https://contractorschoiceagency.com/assets/cca-interactive-map.css">

<!-- Include JavaScript -->
<script src="https://contractorschoiceagency.com/assets/cca-interactive-map-combined.js"></script>

<!-- Initialize the map -->
<script>
  document.addEventListener('DOMContentLoaded', function() {
    new CCAInteractiveMap('cca-map');
  });
</script>
```

### Option 2: Self-Hosted

1. Download the files from `/dist` folder:
   - `cca-interactive-map-combined.js` (includes all data)
   - `cca-interactive-map.css` (optional styling)

2. Add to your HTML:

```html
<div id="cca-map"></div>
<link rel="stylesheet" href="path/to/cca-interactive-map.css">
<script src="path/to/cca-interactive-map-combined.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    new CCAInteractiveMap('cca-map');
  });
</script>
```

## 🎨 Customization Options

```javascript
new CCAInteractiveMap('cca-map', {
  // Dimensions
  width: '100%',           // Map width (CSS value)
  height: '600px',         // Map height (CSS value)
  
  // Colors
  backgroundColor: '#f0f9ff',     // Background gradient start color
  availableColor: '#3b82f6',      // Color for available states
  hoverColor: '#1e40af',          // Color when hovering
  unavailableColor: '#e2e8f0',    // Color for coming soon states
  
  // Behavior
  showTooltip: true,              // Show/hide hover tooltips
  openInNewTab: true,             // Open links in new tab
  
  // Callbacks
  onStateClick: function(stateCode, stateName, url) {
    // Custom click handler (optional)
    console.log(`Clicked ${stateName}: ${url}`);
  },
  
  // Custom CSS
  customStyles: 'border: 2px solid #e5e7eb;'
});
```

## 🛠️ Integration Examples

### WordPress Integration

```php
// In your theme's functions.php
function add_cca_map_shortcode() {
    return '
    <div id="cca-map"></div>
    <script src="https://contractorschoiceagency.com/assets/cca-interactive-map-combined.js"></script>
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            new CCAInteractiveMap("cca-map");
        });
    </script>';
}
add_shortcode('cca_map', 'add_cca_map_shortcode');

// Use in content: [cca_map]
```

### React Integration

```jsx
import { useEffect } from 'react';

function CCAMapComponent() {
  useEffect(() => {
    // Load script dynamically
    const script = document.createElement('script');
    script.src = 'https://contractorschoiceagency.com/assets/cca-interactive-map-combined.js';
    script.onload = () => {
      new window.CCAInteractiveMap('cca-map-react');
    };
    document.body.appendChild(script);
    
    return () => {
      // Cleanup if needed
    };
  }, []);
  
  return <div id="cca-map-react" />;
}
```

### Vue Integration

```vue
<template>
  <div id="cca-map-vue"></div>
</template>

<script>
export default {
  mounted() {
    const script = document.createElement('script');
    script.src = 'https://contractorschoiceagency.com/assets/cca-interactive-map-combined.js';
    script.onload = () => {
      new window.CCAInteractiveMap('cca-map-vue');
    };
    document.head.appendChild(script);
  }
}
</script>
```

### Next.js Integration

```jsx
import { useEffect } from 'react';
import Script from 'next/script';

export default function CCAMap() {
  useEffect(() => {
    if (window.CCAInteractiveMap) {
      new window.CCAInteractiveMap('cca-map-nextjs');
    }
  }, []);

  return (
    <>
      <div id="cca-map-nextjs" />
      <Script 
        src="https://contractorschoiceagency.com/assets/cca-interactive-map-combined.js"
        onLoad={() => {
          new window.CCAInteractiveMap('cca-map-nextjs');
        }}
      />
    </>
  );
}
```

## 📊 Currently Available States

The following states have active contractor insurance pages (as of 2024):

- Alabama, Alaska, Arizona, California, Colorado
- Delaware, Florida, Georgia, Illinois, Indiana
- Kentucky, Louisiana, Maine, Maryland, Massachusetts
- Michigan, Minnesota, Mississippi, Montana, Nevada
- New Mexico, New York, North Carolina, North Dakota
- Ohio, Pennsylvania, South Carolina, South Dakota
- Tennessee, Texas, Utah, Virginia, Washington
- West Virginia, Wisconsin

States are being added regularly. The map automatically updates as new state pages become available.

## 🔧 API Methods

```javascript
// Create map instance
const map = new CCAInteractiveMap('cca-map');

// Update state availability
map.updateStateStatus('CA', true);  // Enable California
map.updateStateStatus('HI', false); // Disable Hawaii

// Destroy map instance
map.destroy();
```

## 🎯 Use Cases

1. **Sister Sites**: Add to niche industry sites to provide contractor insurance navigation
2. **Partner Pages**: Embed on partner websites for cross-promotion
3. **Landing Pages**: Use as a visual CTA for state-specific campaigns
4. **Resource Centers**: Include in educational content about contractor insurance
5. **Directory Listings**: Add to business directories for enhanced user experience

## 📱 Mobile Responsiveness

The map automatically adjusts for mobile devices:
- Touch-friendly interaction
- Responsive sizing
- Optimized tooltips for small screens
- Pinch-to-zoom support on mobile browsers

## 🔍 SEO Benefits

- Direct backlinks to CCA state pages
- Improved user engagement metrics
- Visual content for better user experience
- Structured navigation for search engines

## 🐛 Troubleshooting

### Map Not Appearing
- Ensure container div has an ID that matches initialization
- Check browser console for JavaScript errors
- Verify script is loaded after DOM is ready

### States Not Clickable
- Check if state is in the available list
- Ensure JavaScript is enabled in browser
- Verify no CSS conflicts with cursor styles

### Styling Issues
- Include the CSS file for default styles
- Check for CSS conflicts with your site's styles
- Use customStyles option for overrides

## 📞 Support

For technical support or to report issues:
- Website: https://contractorschoiceagency.com
- Email: support@contractorschoiceagency.com

## 📄 License

This component is provided for use on partner and sister sites of Contractor's Choice Agency. 
All rights reserved. © 2024 Contractor's Choice Agency

## 🔄 Updates

The map component is regularly updated as new states are added. 
Using the CDN version ensures you always have the latest state availability.