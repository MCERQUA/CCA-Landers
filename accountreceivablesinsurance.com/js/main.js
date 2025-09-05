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
            if (show) {
                contactModal.style.display = 'flex';
                // Use setTimeout to trigger animation after display change
                setTimeout(() => {
                    contactModal.classList.add('visible');
                }, 10);
                document.body.style.overflow = 'hidden';
            } else {
                contactModal.classList.remove('visible');
                // Wait for animation to complete before hiding
                setTimeout(() => {
                    contactModal.style.display = 'none';
                    document.body.style.overflow = '';
                }, 300);
            }
        };

        // Modal functionality (hover effects handled by CSS)
        
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

// Enhanced spam protection for forms
const initSpamProtection = () => {
    document.querySelectorAll('form[data-netlify]').forEach(form => {
        const startTime = Date.now();
        
        // Add hidden timestamp field
        const timeField = document.createElement('input');
        timeField.type = 'hidden';
        timeField.name = 'form_start_time';
        timeField.value = startTime;
        form.appendChild(timeField);
        
        form.addEventListener('submit', (e) => {
            const submitTime = Date.now();
            const timeDiff = submitTime - startTime;
            
            // Block if submitted too quickly (under 2 seconds)
            if (timeDiff < 2000) {
                e.preventDefault();
                alert('Please take a moment to review your information before submitting.');
                return false;
            }
            
            // Check for honeypot field completion
            const honeypots = ['website', 'company_name', 'referral_source', 'email_address'];
            for (const field of honeypots) {
                const honeypotField = form.querySelector(`input[name="${field}"]`);
                if (honeypotField && honeypotField.value !== '') {
                    e.preventDefault();
                    alert('Please refresh the page and try again.');
                    return false;
                }
            }
            
            // Check for suspicious content
            const formData = new FormData(form);
            for (let [key, value] of formData.entries()) {
                // Skip checking email field for URL patterns
                if (key !== 'email' && typeof value === 'string') {
                    // Check for URLs, spam keywords, or repeated characters
                    if (/https?:\/\/|SEO|marketing|promote|rank.*website|(.)\1{4,}/i.test(value)) {
                        e.preventDefault();
                        alert('Please remove any links or promotional content from your message.');
                        return false;
                    }
                }
            }
            
            // Add timing data to submission
            const submitTimeField = document.createElement('input');
            submitTimeField.type = 'hidden';
            submitTimeField.name = 'submit_timing';
            submitTimeField.value = timeDiff;
            form.appendChild(submitTimeField);
        });
    });
};

// Initialize scroll animations
const initScrollAnimations = () => {
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Stop observing after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });

    // Add staggered animation to cards
    document.querySelectorAll('.feature-card, .testimonial-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
};

// FAQ Accordion Functionality
const initFAQ = () => {
    const faqItems = document.querySelectorAll('.faq-item h3');
    
    faqItems.forEach(item => {
        item.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const isOpen = content.style.display === 'block';
            
            content.style.display = isOpen ? 'none' : 'block';
            this.setAttribute('aria-expanded', !isOpen);
        });
    });
};

// Smooth Scrolling for Anchor Links
const initSmoothScrolling = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    initMenu();
    initModal();
    initScrollAnimations();
    initSpamProtection();
    initFAQ();
    initSmoothScrolling();
});
