# FAQ Visibility Fix Guide

## 🚨 CRITICAL ISSUE: FAQ Section Invisible White Space Overlay

### Problem Description
Multiple CCA-Landers sites experience an issue where the FAQ section appears as empty white space, despite having content. Users can see the FAQ content flash briefly before disappearing behind an invisible overlay.

### Root Cause Analysis
**EXACT TECHNICAL CAUSE:**
- CSS animation system sets all `.section` elements to `opacity: 0` by default
- JavaScript intersection observer should add `.visible` class to reveal sections
- FAQ sections never properly receive the `.visible` class or JavaScript fails
- Result: FAQ content loads, flashes briefly, then becomes invisible

### Symptoms Checklist
✅ **Confirm you have this issue if:**
- [ ] FAQ section shows empty white space
- [ ] FAQ content flashes for ~1 second then disappears  
- [ ] Other page sections (hero, features, etc.) work normally
- [ ] Scrolling to FAQ shows no content despite HTML being present

### Technical Investigation Steps

#### Step 1: Verify CSS Animation System
```bash
# Check for problematic CSS pattern
grep -n "\.section.*opacity.*0" css/styles.css
```

**Expected Problem Pattern:**
```css
.section {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
```

#### Step 2: Check for Duplicate CSS
```bash
# Look for duplicate stylesheets
wc -l css/styles.css
# If line count is unusually high (>400), likely has duplicates
```

### 🛠️ SOLUTION IMPLEMENTATION

#### Primary Fix: Disable Problematic Animation
**Location:** `css/styles.css`

**BEFORE (Problematic):**
```css
.section {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.section.visible {
    opacity: 1;
    transform: translateY(0);
}
```

**AFTER (Fixed):**
```css
.section {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.section.animate-on-scroll {
    opacity: 0;
    transform: translateY(20px);
}

.section.animate-on-scroll.visible {
    opacity: 1;
    transform: translateY(0);
}
```

#### Step-by-Step Fix Process

1. **Navigate to Site Directory**
   ```bash
   cd [site-name].com
   ```

2. **Edit CSS Animation System**
   ```bash
   # Open css/styles.css
   # Find the .section animation rules
   # Change default opacity from 0 to 1
   ```

3. **Rebuild CSS**
   ```bash
   npm run build:css
   ```

4. **Test Locally** (if possible)
   - Open index.html in browser
   - Verify FAQ section is immediately visible
   - Confirm other sections still work properly

5. **Commit and Deploy**
   ```bash
   git add .
   git commit -m "Fix FAQ visibility by disabling problematic animation system"
   git push origin main
   ```

### 🚨 CRITICAL WARNINGS

**❌ DO NOT:**
- Remove the entire animation system without checking other sections
- Edit FAQ content in HTML files (use `data/faq.md` only)
- Change JavaScript animation code without testing
- Apply fixes without first confirming the exact problem

**✅ ALWAYS:**
- Test that hero section still works after changes
- Verify all page sections remain functional
- Rebuild CSS with `npm run build:css` after changes
- Push changes to trigger Netlify auto-deployment

### Alternative Solutions (If Primary Fix Fails)

#### Option 2: Remove Duplicate CSS
If `css/styles.css` contains duplicate content:
```bash
# Check file length
wc -l css/styles.css

# If >400 lines, likely has duplicates
# Remove duplicate CSS blocks (usually lines 300+)
```

#### Option 3: JavaScript Animation Debug
If animation system must be preserved:
```javascript
// Add debug logging to js/main.js
console.log('FAQ section found:', document.getElementById('faq'));
console.log('Intersection observer triggered for:', entry.target);
```

### Sites Known to Have This Issue
- ✅ hoodventcleaninginsurance.com (FIXED)
- 🔍 [Add other affected sites as discovered]

### Success Verification
**After applying fix, verify:**
1. FAQ section immediately visible (no flash/disappear)
2. FAQ content displays properly formatted
3. Hero section unchanged and functional
4. All other page sections work normally
5. Mobile and desktop views both work

### /FAQ-FIX Command Reference
For quick resolution of this exact issue:
1. Run `/FAQ-FIX` command
2. Follow automated diagnostic and fix process
3. Verify results and commit changes

---

**Last Updated:** 2025-08-10  
**Verified On:** hoodventcleaninginsurance.com  
**Fix Success Rate:** 100% (1/1 sites tested)