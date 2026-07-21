document.addEventListener("DOMContentLoaded", () => {

    // 1. Initialize AOS Animation
    AOS.init({
        duration: 800,
        easing: 'slide',
        once: true,
        offset: 50
    });

    // 2. Sticky Navbar & Back to Top Button
    const navbar = document.querySelector('.navbar');
    const backToTopBtn = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    // 3. Smooth Scrolling for Nav Links & Back to Top
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.hash !== "") {
                const targetElement = document.querySelector(this.hash);

                // If the target element exists on the current page, smooth scroll to it
                if (targetElement && (this.pathname === window.location.pathname || this.pathname === '/')) {
                    e.preventDefault();
                    const navHeight = document.querySelector('.navbar').offsetHeight;
                    window.scrollTo({
                        top: targetElement.offsetTop - navHeight,
                        behavior: 'smooth'
                    });

                    // Close mobile menu if open
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse.classList.contains('show')) {
                        document.querySelector('.navbar-toggler').click();
                    }
                }
            }
        });
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 4. Active Navigation Highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    // Highlight active link based on current page URL
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === currentPath || (currentPath === 'index.html' && href === 'index.html#home')) {
            link.classList.add('active');
        }
    });

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const navHeight = document.querySelector('.navbar').offsetHeight;

            if (window.scrollY >= (sectionTop - navHeight - 100)) {
                current = section.getAttribute('id');
            }
        });

        if (current) {
            navLinks.forEach(link => {
                const href = link.getAttribute('href');
                // Only modify active state for hash/anchor links during scroll
                if (href && href.includes('#')) {
                    link.classList.remove('active');
                    if (href === `#${current}` || href === `index.html#${current}`) {
                        link.classList.add('active');
                    }
                }
            });
        }
    });

    // 5. Animated Counters
    const counters = document.querySelectorAll('.counter-value');
    let hasCounted = false;

    const runCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const speed = 200; // lower is faster
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target + "+";
                }
            };
            updateCount();
        });
    };

    // Use Intersection Observer for counters
    const counterSection = document.getElementById('statistics');
    if (counterSection) {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !hasCounted) {
                runCounters();
                hasCounted = true;
            }
        }, { threshold: 0.5 });

        observer.observe(counterSection);
    }

    // 6. EmailJS Form Submission
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    // Helper function to display alert messages
    function showMessage(msg, type) {
        if (formMessage) {
            formMessage.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
            ${msg}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
            setTimeout(() => {
                formMessage.innerHTML = '';
            }, 5000);
        }
    }

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            const subjectInput = document.getElementById('subject');

            if (!nameInput.value || !emailInput.value || !messageInput.value) {
                showMessage('Please fill all required fields.', 'danger');
                return;
            }

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...';
            submitBtn.disabled = true;

            emailjs.sendForm('service_jhayhmj', 'template_lfmo6qg', contactForm, 'QsaPmbCfE48kiipiD')
                .then(function () {
                    // Clear the form FIRST before triggering UI updates
                    contactForm.reset();

                    if (nameInput) nameInput.value = '';
                    if (emailInput) emailInput.value = '';
                    if (subjectInput) subjectInput.value = '';
                    if (messageInput) messageInput.value = '';

                    // Show success message without crashing
                    showMessage('Message sent successfully!', 'success');
                })
                .catch(function (error) {
                    showMessage('Failed to send message. Please try again later.', 'danger');
                    console.error('EmailJS Error:', error);
                })
                .finally(function () {
                    submitBtn.innerHTML = originalBtnText;
                    submitBtn.disabled = false;
                });
        });
    }

    // 7. Particles.js Initialization
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 70,
                    "density": { "enable": true, "value_area": 800 }
                },
                "color": { "value": "#00D4FF" },
                "shape": { "type": "circle" },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": { "enable": false }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": { "enable": false }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#00D4FF",
                    "opacity": 0.3,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": { "enable": false }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": { "enable": true, "mode": "grab" },
                    "onclick": { "enable": true, "mode": "push" },
                    "resize": true
                },
                "modes": {
                    "grab": { "distance": 140, "line_linked": { "opacity": 0.8 } },
                    "push": { "particles_nb": 3 }
                }
            },
            "retina_detect": true
        });
    }
});
