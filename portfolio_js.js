// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll animations using Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Observe all elements with fade-in class
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Mobile menu toggle (simple version)
const logo = document.querySelector('.logo');
const navLinks = document.querySelector('.nav-links');

// Add mobile menu functionality
function toggleMobileMenu() {
    if (window.innerWidth <= 768) {
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.backgroundColor = 'white';
            navLinks.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            navLinks.style.padding = '1rem';
        }
    }
}

// Add click event to logo for mobile menu
if (logo) {
    logo.addEventListener('click', toggleMobileMenu);
}

// Close mobile menu when clicking on a link
if (navLinks) {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.style.display = 'none';
            }
        });
    });
}

// Handle window resize
window.addEventListener('resize', () => {
    if (!navLinks) return;
    if (window.innerWidth > 768) {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'row';
        navLinks.style.position = 'static';
        navLinks.style.backgroundColor = 'transparent';
        navLinks.style.boxShadow = 'none';
        navLinks.style.padding = '0';
    } else {
        navLinks.style.display = 'none';
    }
});

// Initialize mobile menu state
document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth <= 768 && navLinks) {
        navLinks.style.display = 'none';
    }
});

    const scrollToTopBtn = document.getElementById("scrollToTop");

    // Show the button when scrolled down 200px
    window.onscroll = function () {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    };

    // Scroll smoothly to top when clicked
    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });