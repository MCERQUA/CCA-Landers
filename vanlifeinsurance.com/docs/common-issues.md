## FAQ Section Scroll Animation Not Working

**Problem:** FAQ section disappears after build-faq.js runs because scroll animations weren't applied.

**Solution:** Modified initScrollAnimations() in main.js to observe both `.section` and `#faq` elements.

**Prevention Checklist:**
- When adding new sections needing scroll animations:
  - Mark with `.section` class OR
  - Explicitly add to observer query selector
