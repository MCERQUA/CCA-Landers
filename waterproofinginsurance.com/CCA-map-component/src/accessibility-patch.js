/**
 * Accessibility enhancements for CCA Interactive Map
 * Adds ARIA labels, keyboard navigation, and screen reader support
 */

function addAccessibilityFeatures(mapInstance) {
  if (!mapInstance || !mapInstance.svg) return;
  
  const svg = mapInstance.svg;
  const container = mapInstance.mapWrapper;
  
  // Add ARIA labels to SVG
  svg.setAttribute('role', 'img');
  svg.setAttribute('aria-label', 'Interactive United States map for selecting contractor insurance by state');
  
  // Add keyboard navigation
  let focusedStateIndex = -1;
  const states = svg.querySelectorAll('path[data-state]');
  const availableStates = Array.from(states).filter(path => {
    const stateCode = path.getAttribute('data-state');
    return mapInstance.options.stateRoutes && mapInstance.options.stateRoutes[stateCode];
  });
  
  // Make container focusable
  container.setAttribute('tabindex', '0');
  container.setAttribute('role', 'application');
  container.setAttribute('aria-label', 'Interactive state selector map. Use arrow keys to navigate between states and Enter to select.');
  
  // Keyboard event handler
  container.addEventListener('keydown', (e) => {
    if (!availableStates.length) return;
    
    switch(e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault();
        focusedStateIndex = (focusedStateIndex + 1) % availableStates.length;
        focusState(availableStates[focusedStateIndex]);
        break;
        
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        focusedStateIndex = focusedStateIndex <= 0 ? availableStates.length - 1 : focusedStateIndex - 1;
        focusState(availableStates[focusedStateIndex]);
        break;
        
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (focusedStateIndex >= 0) {
          const state = availableStates[focusedStateIndex];
          const stateCode = state.getAttribute('data-state');
          const stateName = state.getAttribute('data-name');
          mapInstance.handleStateClick(stateCode, stateName);
        }
        break;
        
      case 'Escape':
        e.preventDefault();
        clearFocus();
        break;
        
      case 'Tab':
        // Allow normal tab navigation
        if (e.shiftKey && focusedStateIndex === 0) {
          clearFocus();
        } else if (!e.shiftKey && focusedStateIndex === availableStates.length - 1) {
          clearFocus();
        }
        break;
        
      default:
        // Letter key navigation - jump to state starting with that letter
        if (e.key.length === 1 && /[a-zA-Z]/.test(e.key)) {
          const letter = e.key.toUpperCase();
          const matchingState = availableStates.find(state => {
            const name = state.getAttribute('data-name');
            return name && name.toUpperCase().startsWith(letter);
          });
          
          if (matchingState) {
            focusedStateIndex = availableStates.indexOf(matchingState);
            focusState(matchingState);
          }
        }
    }
  });
  
  // Focus state visually and announce to screen reader
  function focusState(stateElement) {
    // Clear previous focus
    availableStates.forEach(s => {
      s.removeAttribute('data-focused');
      s.style.outline = 'none';
    });
    
    // Add focus to current state
    stateElement.setAttribute('data-focused', 'true');
    stateElement.style.outline = '3px solid #000';
    stateElement.style.outlineOffset = '2px';
    
    // Announce to screen reader
    const stateName = stateElement.getAttribute('data-name');
    announceToScreenReader(`${stateName} selected. Press Enter to view contractor insurance information.`);
  }
  
  // Clear focus
  function clearFocus() {
    focusedStateIndex = -1;
    availableStates.forEach(s => {
      s.removeAttribute('data-focused');
      s.style.outline = 'none';
    });
  }
  
  // Screen reader announcement
  function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.style.position = 'absolute';
    announcement.style.left = '-10000px';
    announcement.style.width = '1px';
    announcement.style.height = '1px';
    announcement.style.overflow = 'hidden';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }
  
  // Add state descriptions for screen readers
  states.forEach(state => {
    const stateCode = state.getAttribute('data-state');
    const stateName = state.getAttribute('data-name');
    const hasRoute = mapInstance.options.stateRoutes && mapInstance.options.stateRoutes[stateCode];
    
    state.setAttribute('role', 'button');
    state.setAttribute('aria-label', 
      hasRoute 
        ? `${stateName} - Click to view contractor insurance information`
        : `${stateName} - Coming soon`
    );
    
    if (!hasRoute) {
      state.setAttribute('aria-disabled', 'true');
    }
  });
  
  // Add skip link for keyboard users
  const skipLink = document.createElement('a');
  skipLink.href = '#skip-map';
  skipLink.className = 'cca-map-skip-link';
  skipLink.textContent = 'Skip interactive map';
  skipLink.style.cssText = `
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  `;
  
  skipLink.addEventListener('focus', () => {
    skipLink.style.left = '10px';
    skipLink.style.width = 'auto';
    skipLink.style.height = 'auto';
    skipLink.style.padding = '10px';
    skipLink.style.background = '#fff';
    skipLink.style.zIndex = '10000';
  });
  
  skipLink.addEventListener('blur', () => {
    skipLink.style.left = '-10000px';
    skipLink.style.width = '1px';
    skipLink.style.height = '1px';
  });
  
  container.parentNode.insertBefore(skipLink, container);
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = addAccessibilityFeatures;
} else {
  window.CCAMapAccessibility = addAccessibilityFeatures;
}