// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link, .footer-section a[data-page]');
    const pages = document.querySelectorAll('.page');
    const contactForm = document.getElementById('contactForm');

    // Navigation switching
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all nav links (only header nav links, not footer)
            document.querySelectorAll('.top-nav .nav-link').forEach(nav => nav.classList.remove('active'));
            pages.forEach(page => page.classList.remove('active'));
            
            // Add active class to clicked link (only if it's a header nav link)
            if (this.closest('.top-nav')) {
                this.classList.add('active');
            } else {
                // If clicked from footer, activate the corresponding header nav link
                const targetPage = this.getAttribute('data-page');
                const headerNavLink = document.querySelector(`.top-nav .nav-link[data-page="${targetPage}"]`);
                if (headerNavLink) {
                    headerNavLink.classList.add('active');
                }
            }
            
            // Show corresponding page
            const targetPage = this.getAttribute('data-page');
            document.getElementById(targetPage).classList.add('active');
            
            // Update URL hash
            window.location.hash = targetPage;
        });
    });

    // Handle initial page load with hash
    function loadPageFromHash() {
        const hash = window.location.hash.substring(1);
        if (hash && document.getElementById(hash)) {
            // Remove active from all
            document.querySelectorAll('.top-nav .nav-link').forEach(nav => nav.classList.remove('active'));
            pages.forEach(page => page.classList.remove('active'));
            
            // Activate the correct page and nav
            document.getElementById(hash).classList.add('active');
            const targetNav = document.querySelector(`.top-nav .nav-link[data-page="${hash}"]`);
            if (targetNav) {
                targetNav.classList.add('active');
            }
        }
    }

    // Load page from hash on initial load
    loadPageFromHash();

    // Handle back/forward browser buttons
    window.addEventListener('hashchange', loadPageFromHash);

    // Contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = {};
            
            formData.forEach((value, key) => {
                data[key] = value;
            });

            // Validate required fields
            const requiredFields = ['name', 'email', 'subject', 'message'];
            let isValid = true;
            
            requiredFields.forEach(field => {
                const input = document.getElementById(field);
                if (!data[field] || data[field].trim() === '') {
                    input.style.borderColor = '#e74c3c';
                    isValid = false;
                } else {
                    input.style.borderColor = '#e1e5e9';
                }
            });

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (data.email && !emailRegex.test(data.email)) {
                document.getElementById('email').style.borderColor = '#e74c3c';
                isValid = false;
            }

            if (!isValid) {
                showMessage('Please fill in all required fields correctly.', 'error');
                return;
            }

            // Simulate form submission (replace with actual email service)
            submitContactForm(data);
        });
    }

    // Form submission function
    async function submitContactForm(data) {
        const submitBtn = document.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        try {
            // Send data to backend server
            const response = await fetch('/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (response.ok && result.success) {
                // Show success message
                showMessage(result.message, 'success');
                
                // Reset form
                contactForm.reset();
                
                console.log('Lunexa Healthcare email sent successfully');
            } else {
                // Show error message
                showMessage(result.message || 'Sorry, there was an error sending your message. Please try again.', 'error');
                console.error('Email sending failed:', result);
            }

        } catch (error) {
            console.error('Network error:', error);
            showMessage('Sorry, there was a network error. Please check your connection and try again.', 'error');
        } finally {
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    }

    // Show message function
    function showMessage(message, type) {
        // Remove existing messages
        const existingMessages = document.querySelectorAll('.message');
        existingMessages.forEach(msg => msg.remove());

        // Create message element
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}-message`;
        messageDiv.innerHTML = `
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-triangle'}"></i>
            ${message}
        `;

        // Insert message before form
        contactForm.insertBefore(messageDiv, contactForm.firstChild);

        // Remove message after 5 seconds
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }

    // Smooth scrolling for better UX
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Add animation on scroll (optional enhancement)
    function animateOnScroll() {
        const elements = document.querySelectorAll('.company-section, .value-item, .info-item');
        const windowHeight = window.innerHeight;
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - 50) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }

    // Initialize elements for animation
    const animatedElements = document.querySelectorAll('.company-section, .value-item, .info-item');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Listen for scroll events
    window.addEventListener('scroll', animateOnScroll);
    
    // Initial animation check
    animateOnScroll();
});

// Additional CSS for messages (add to your CSS)
const additionalCSS = `
.message {
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    font-weight: 500;
}

.message i {
    margin-right: 10px;
    font-size: 1.2rem;
}

.success-message {
    background: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
}

.error-message {
    background: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
}
`;

// Add additional CSS to head
const style = document.createElement('style');
style.textContent = additionalCSS;
document.head.appendChild(style);