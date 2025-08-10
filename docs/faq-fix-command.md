# /FAQ-FIX Command Workflow

## Command Purpose
Automated diagnostic and resolution tool for FAQ section visibility issues across CCA-Landers sites.

## Usage
```
/FAQ-FIX
```

## Automated Workflow Steps

### Phase 1: Diagnostic
1. **Identify Current Site**
   - Check if in CCA-Landers project directory
   - Detect specific site (*.com folder)
   - Verify site has FAQ section

2. **Problem Detection**
   - Check for `.section { opacity: 0 }` in CSS
   - Scan for duplicate CSS blocks
   - Verify FAQ section exists in HTML
   - Test if FAQ content is present in `data/faq.md`

3. **Issue Classification**
   - **Type A**: CSS animation system causing invisibility
   - **Type B**: Duplicate CSS blocks creating conflicts
   - **Type C**: Missing FAQ content or build issues

### Phase 2: Automated Resolution

#### For Type A (Animation Issue) - Most Common
1. **Backup CSS**
   ```bash
   cp css/styles.css css/styles.css.backup
   ```

2. **Apply Animation Fix**
   - Change `.section { opacity: 0 }` to `.section { opacity: 1 }`
   - Add optional animation classes for future use
   - Preserve transition timing

3. **Rebuild CSS**
   ```bash
   npm run build:css
   ```

#### For Type B (Duplicate CSS)
1. **Detect Duplicates**
   - Count lines in CSS file
   - Identify duplicate blocks

2. **Remove Duplicates**
   - Keep first instance of CSS rules
   - Remove duplicate blocks (usually lines 300+)

3. **Rebuild CSS**

#### For Type C (Content Issues)
1. **Check FAQ Generation**
   ```bash
   npm run build
   ```

2. **Verify FAQ Content**
   - Check `data/faq.md` exists and has content
   - Run FAQ build script if available

### Phase 3: Verification
1. **Local Testing** (if possible)
   - Check if FAQ section immediately visible
   - Verify hero section unchanged
   - Test other page sections

2. **Automated Checks**
   - Confirm CSS contains fix
   - Verify no duplicate content remains
   - Check build completed successfully

### Phase 4: Deployment
1. **Git Commit**
   ```bash
   git add .
   git commit -m "Fix FAQ visibility issue - /FAQ-FIX automated resolution"
   ```

2. **Push Changes**
   ```bash
   git push origin main
   ```

3. **Confirm Netlify Deployment**
   - Wait for auto-deployment trigger
   - Report success/failure

## Command Implementation

### Prerequisites Check
- Must be in CCA-Landers project
- Must have Node.js/npm available
- Must have git repository
- CSS files must be editable

### Success Criteria
✅ **Command succeeds when:**
- FAQ section becomes immediately visible
- Hero section remains unchanged
- All other sections function normally
- CSS rebuild completes without errors
- Changes committed and pushed successfully

### Failure Handling
❌ **Command fails if:**
- Not in correct project directory
- CSS files are locked/read-only
- Build process fails
- Git operations fail
- Unable to detect FAQ section

### Rollback Procedure
If `/FAQ-FIX` causes issues:
1. **Restore CSS Backup**
   ```bash
   cp css/styles.css.backup css/styles.css
   npm run build:css
   ```

2. **Revert Git Changes**
   ```bash
   git reset --hard HEAD~1
   git push origin main --force
   ```

## Sites Applicable For This Command

### Confirmed Compatible:
- ✅ hoodventcleaninginsurance.com (tested successfully)
- 🔍 [Add other sites as tested]

### Site Requirements:
- Has `css/styles.css` file
- Uses standard CCA build system
- FAQ section with class `.faq-section`
- Standard animation CSS patterns

## Example Output Log
```
🤖 [CC-CCA-LANDER-VENT-INS] /FAQ-FIX INITIATED
🔍 Detected site: hoodventcleaninginsurance.com
🚨 Problem found: .section opacity set to 0 in CSS
🛠️ Applying fix: Setting default section opacity to 1
✅ CSS rebuilt successfully
✅ Changes committed: "Fix FAQ visibility issue"
✅ Pushed to GitHub - Netlify deploying
🎯 FAQ-FIX COMPLETED - FAQ section should be visible
```

## Manual Override Options
- `--skip-backup`: Don't create CSS backup
- `--no-commit`: Apply fix but don't commit
- `--dry-run`: Show what would be changed without applying
- `--force`: Skip safety checks and apply fix

---

**Command Status:** Ready for implementation  
**Last Updated:** 2025-08-10  
**Success Rate:** 100% (based on manual process)