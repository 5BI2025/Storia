// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
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

// Quote slider
const quotes = document.querySelectorAll('.quote');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentQuote = 0;

function showQuote(index) {
    quotes.forEach(quote => quote.classList.remove('active'));
    quotes[index].classList.add('active');
}

nextBtn.addEventListener('click', function() {
    currentQuote = (currentQuote + 1) % quotes.length;
    showQuote(currentQuote);
});

prevBtn.addEventListener('click', function() {
    currentQuote = (currentQuote - 1 + quotes.length) % quotes.length;
    showQuote(currentQuote);
});

// Auto-rotate quotes
let quoteInterval = setInterval(() => {
    currentQuote = (currentQuote + 1) % quotes.length;
    showQuote(currentQuote);
}, 5000);

// Pause auto-rotation when hovering over slider
const slider = document.querySelector('.quotes-slider');
slider.addEventListener('mouseenter', () => {
    clearInterval(quoteInterval);
});

slider.addEventListener('mouseleave', () => {
    quoteInterval = setInterval(() => {
        currentQuote = (currentQuote + 1) % quotes.length;
        showQuote(currentQuote);
    }, 5000);
});

// Initialize first quote
showQuote(0);