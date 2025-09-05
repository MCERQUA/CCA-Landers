# Common Issues and Solutions

## Contact Modal Not Working

### Issue
The floating contact button modal was not opening when clicked.

### Root Causes
1. Missing JavaScript file inclusion
2. Duplicate form content causing structural issues
3. Incorrect HTML structure

### Solution
1. Added the JavaScript file at the end of the body:
```html
<script src="js/main.js"></script>
```

2. Removed duplicate form content in the modal section
3. Fixed HTML structure and nesting

### Prevention
- Always include necessary JavaScript files
- Avoid duplicate form content
- Maintain proper HTML structure and nesting
- Test interactive elements after making changes
