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

// Initialize modern navigation
const initNavigation = () => {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const navigation = document.getElementById('navigation');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-nav-cta');
    
    if (hamburger && mobileMenu) {
        const toggleMenu = (show) => {
            if (show) {
                hamburger.classList.add('active');
                mobileMenu.classList.add('active');
                hamburger.setAttribute('aria-expanded', 'true');
                document.body.style.overflow = 'hidden';
            } else {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        };

        hamburger.addEventListener('click', () => {
            const isActive = hamburger.classList.contains('active');
            toggleMenu(!isActive);
        });
        
        // Close menu when clicking mobile links
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                toggleMenu(false);
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (event) => {
            if (!hamburger.contains(event.target) && !mobileMenu.contains(event.target)) {
                toggleMenu(false);
            }
        });
    }
    
    // Add scroll effect to navigation
    if (navigation) {
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 50) {
                navigation.classList.add('scrolled');
            } else {
                navigation.classList.remove('scrolled');
            }
            
            lastScroll = currentScroll;
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

// Initialize FAQ accordion
const initFAQ = () => {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        if (question && answer) {
            question.addEventListener('click', () => {
                // Toggle current item
                const isActive = item.classList.contains('active');
                
                // Close all other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                    }
                });
                
                // Toggle current item
                if (isActive) {
                    item.classList.remove('active');
                    question.setAttribute('aria-expanded', 'false');
                } else {
                    item.classList.add('active');
                    question.setAttribute('aria-expanded', 'true');
                }
            });
        }
    });
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initModal();
    initScrollAnimations();
    initFAQ();
});
