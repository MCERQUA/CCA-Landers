# CCA Interactive Map - Agent Integration Guide

## 🚀 Quick Integration (5 Minutes)

### For Any Website/Platform

Copy and paste this code block where you want the map to appear:

```html
<!-- CCA Interactive US Map -->
<div id="cca-contractor-map" style="margin: 40px auto; max-width: 1200px;"></div>
<script>
  (function() {
    // Load the map component
    var script = document.createElement('script');
    script.src = 'https://contractorschoiceagency.com/assets/cca-interactive-map-combined.js';
    script.onload = function() {
      // Initialize the map
      new CCAInteractiveMap('cca-contractor-map', {
        height: '600px',
        openInNewTab: true
      });
    };
    document.head.appendChild(script);
    
    // Optional: Load CSS for enhanced styling
    var css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = 'https://contractorschoiceagency.com/assets/cca-interactive-map.css';
    document.head.appendChild(css);
  })();
</script>
<!-- End CCA Map -->
```

## 📋 Platform-Specific Instructions

### WordPress/Elementor
1. Add an **HTML Widget** or **Custom HTML Block**
2. Paste the code above
3. Save and preview

### Wix
1. Add an **HTML iframe** element
2. Click "Enter Code"
3. Paste the integration code
4. Adjust height to 650px

### Squarespace
1. Add a **Code Block**
2. Paste the integration code
3. No additional configuration needed

### Webflow
1. Add an **Embed** element
2. Paste the code
3. Publish changes

### Next.js/React Sites
```jsx
// Create a component file: CCAMap.jsx
import { useEffect } from 'react';

export default function CCAMap() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://contractorschoiceagency.com/assets/cca-interactive-map-combined.js';
    script.async = true;
    script.onload = () => {
      if (window.CCAInteractiveMap) {
        new window.CCAInteractiveMap('cca-map-container', {
          height: '600px',
          openInNewTab: true
        });
      }
    };
    document.body.appendChild(script);
    
    return () => {
      // Cleanup if needed
    };
  }, []);
  
  return <div id="cca-map-container" />;
}
```

### Static HTML Sites
Add between `<body>` tags where you want the map:
```html
<div id="cca-map"></div>
<script src="https://contractorschoiceagency.com/assets/cca-interactive-map-combined.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    new CCAInteractiveMap('cca-map');
  });
</script>
```

## 🎨 Customization Examples

### Dark Theme
```javascript
new CCAInteractiveMap('cca-map', {
  backgroundColor: '#1e293b',
  availableColor: '#60a5fa',
  hoverColor: '#93c5fd',
  unavailableColor: '#475569'
});
```

### Compact Size
```javascript
new CCAInteractiveMap('cca-map', {
  height: '400px',
  showTooltip: false
});
```

### Custom Click Handler
```javascript
new CCAInteractiveMap('cca-map', {
  onStateClick: function(stateCode, stateName, url) {
    // Track analytics
    gtag('event', 'map_click', {
      'state': stateName,
      'url': url
    });
    // Then navigate
    window.open(url, '_blank');
  }
});
```

## 🔍 Testing Your Integration

1. **Check Map Appears**: You should see the US map with blue states
2. **Test Hover**: States should highlight when you hover
3. **Test Click**: Clicking blue states should open CCA pages
4. **Mobile Check**: Test on mobile device for responsive behavior

## ⚠️ Common Issues & Fixes

### Map Not Showing
- Check console for errors (F12 → Console)
- Ensure container ID matches initialization
- Verify script is loading (Network tab)

### Styling Conflicts
- Add `!important` to container styles if needed
- Ensure z-index is high enough for tooltips
- Check for CSS conflicts with site theme

### Performance
- Map loads asynchronously, won't block page
- Total size ~50KB (smaller than most images)
- Caches after first load

## 📊 What The Map Does

✅ **Features**:
- Shows all 50 US states
- Links to CCA contractor insurance pages
- Visual feedback on hover
- Mobile responsive
- SEO-friendly backlinks

❌ **Does NOT**:
- Collect user data
- Use cookies
- Require authentication
- Slow down page load
- Conflict with other scripts

## 🆘 Need Help?

### Quick Support Checklist
1. Container div has unique ID? ✓
2. Script loaded after container? ✓
3. No JavaScript errors in console? ✓
4. Using HTTPS for production? ✓

### Contact for Advanced Integration
- Technical Issues: Create GitHub issue
- Custom Requirements: Contact CCA team
- Integration Support: Check documentation

## 📝 Sample Integration Report

After integration, verify and report:

```markdown
✅ Map Integration Complete
- Site: [Sister Site Name]
- URL: [Page URL with map]
- States Linking: 36 active states
- Implementation: Standard/Custom
- Issues: None/Resolved
- Screenshot: [Attach if needed]
```

## 🎯 Best Practices

1. **Place Above Fold**: Maximum visibility
2. **Add Context**: Include heading like "Select Your State for Contractor Insurance"
3. **Mobile Test**: Always verify mobile experience
4. **Track Clicks**: Add analytics for conversion tracking
5. **Regular Updates**: Map auto-updates with new states

---

**Last Updated**: 2024
**Component Version**: 1.0.0
**Support**: https://contractorschoiceagency.com