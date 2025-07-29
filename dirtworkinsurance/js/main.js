document.addEventListener('DOMContentLoaded', function() {
    // Enhanced spam protection function
    function detectSpam(form) {
        const honeypotFields = ['website', 'company_name', 'referral_source', 'email_address'];
        
        for (let field of honeypotFields) {
            const input = form.querySelector(`input[name="${field}"]`);
            if (input && input.value.trim() !== '') {
                return true; // Spam detected
            }
        }
        
        // Additional spam detection: form submission too fast
        const submitTime = Date.now();
        const formLoadTime = window.formLoadTime || submitTime;
        const timeDiff = submitTime - formLoadTime;
        
        if (timeDiff < 3000) { // Less than 3 seconds
            return true; // Likely spam
        }
        
        return false;
    }
    
    // Set form load time
    window.formLoadTime = Date.now();
    
    // Add spam protection to all forms
    const forms = document.querySelectorAll('form[data-netlify="true"]');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            if (detectSpam(form)) {
                e.preventDefault();
                console.log('Spam detected, form submission blocked');
                return false;
            }
        });
    });

    // Mobile menu toggle
    const menuButton = document.getElementById('menuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', function() {
            if (mobileMenu.style.display === 'none' || mobileMenu.style.display === '') {
                mobileMenu.style.display = 'block';
            } else {
                mobileMenu.style.display = 'none';
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (event.target !== menuButton && !menuButton.contains(event.target) && 
                event.target !== mobileMenu && !mobileMenu.contains(event.target)) {
                mobileMenu.style.display = 'none';
            }
        });
    }
    
    // Contact modal functionality
    const contactButton = document.getElementById('contactButton');
    const contactModal = document.getElementById('contactModal');
    const closeModal = document.getElementById('closeModal');
    
    if (contactButton && contactModal && closeModal) {
        // Add hover effect
        contactButton.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.boxShadow = '0 6px 10px rgba(0, 0, 0, 0.2)';
        });
        
        contactButton.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
        
        // Open modal on click
        contactButton.addEventListener('click', function() {
            contactModal.style.display = 'flex';
        });
        
        // Close modal
        closeModal.addEventListener('click', function() {
            contactModal.style.display = 'none';
        });
        
        // Close modal when clicking outside
        contactModal.addEventListener('click', function(event) {
            if (event.target === contactModal) {
                contactModal.style.display = 'none';
            }
        });
    }
});
