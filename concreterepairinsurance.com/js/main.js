// Use passive listeners for better scroll performance
const passiveSupported = () => {
    let passive = false;
    try {
        const options = Object.defineProperty({}, 'passive', {
            get: function() { passive = true; }
        });
        window.addEventListener('test', null, options);
        window.removeEventListener('test', null, options);
    } catch(err) {}
    return passive;
}

const passiveListener = passiveSupported() ? { passive: true } : false;

// Initialize menu functionality
const initMenu = () => {
    const menuButton = document.getElementById('menuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (menuButton && mobileMenu) {
        const toggleMenu = (show) => {
            mobileMenu.style.display = show ? 'block' : 'none';
            if (show) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        };

        menuButton.addEventListener('click', () => {
            const isVisible = mobileMenu.style.display === 'block';
            toggleMenu(!isVisible);
        }, passiveListener);
        
        // Close menu when clicking outside
        document.addEventListener('click', (event) => {
            if (event.target !== menuButton && !menuButton.contains(event.target) && 
                event.target !== mobileMenu && !mobileMenu.contains(event.target)) {
                toggleMenu(false);
            }
        }, passiveListener);
    }
};

// Initialize modal functionality
const initModal = () => {
    const contactButton = document.getElementById('contactButton');
    const contactModal = document.getElementById('contactModal');
    const closeModal = document.getElementById('closeModal');
    
    if (contactButton && contactModal && closeModal) {
        const toggleModal = (show) => {
            contactModal.style.display = show ? 'flex' : 'none';
            if (show) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        };

        // Use CSS transitions instead of direct style manipulation
        contactButton.classList.add('hover:scale-110', 'hover:shadow-lg', 'transition-transform', 'duration-200');
        
        // Event listeners with passive option where applicable
        contactButton.addEventListener('click', () => toggleModal(true), passiveListener);
        closeModal.addEventListener('click', () => toggleModal(false), passiveListener);
        
        // Close modal when clicking outside
        contactModal.addEventListener('click', (event) => {
            if (event.target === contactModal) {
                toggleModal(false);
            }
        }, passiveListener);
    }
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    initMenu();
    // Lazy load modal initialization
    const contactButton = document.getElementById('contactButton');
    if (contactButton) {
        contactButton.addEventListener('mouseenter', () => {
            initModal();
            contactButton.removeEventListener('mouseenter', initModal);
        }, passiveListener);
    }
});
