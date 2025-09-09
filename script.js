// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Typewriter effect for hero title
const heroTitle = document.getElementById('hero-title');
const titleText = "Hello, I'm MD. Wasim Khan";
let charIndex = 0;

function typeWriter() {
    if (charIndex < titleText.length) {
        heroTitle.textContent += titleText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    typeWriter();
});

// Function to handle scroll-in animations
const handleScrollAnimation = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // observer.unobserve(entry.target); // Uncomment to animate only once
        }
    });
};

// Intersection Observer setup
const observer = new IntersectionObserver(handleScrollAnimation, {
    root: null, // viewport
    threshold: 0.2, // Trigger when 20% of the element is visible
});

// Select all elements to be animated
document.querySelectorAll('.animated-element').forEach(element => {
    observer.observe(element);
});

// Form submission (mockup)
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // In a real application, you would send this data to a server.
    // This is a mockup to show the user a success message.
    console.log("Form submitted!");
    contactForm.reset();
    formMessage.classList.remove('hidden');
    setTimeout(() => {
        formMessage.classList.add('hidden');
    }, 3000);
});
