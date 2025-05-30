// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission
const orderForm = document.querySelector('.order-form form');
if (orderForm) {
    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[type="text"]').value;
        const phone = this.querySelector('input[type]').value);

        // Mobile Navigation
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        const hamburger = document.querySelector('.hamburger');
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling function
function scrollToSection(sectionId) {
    const targetElement = document.querySelector(sectionId);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    }
}

// Form submission
function submitOrder(event) {
    event.preventDefault();
    
    // Get form values
    const name = event.target.querySelector('input[type="text"]').value;
    const phone = event.target.querySelector('input[type="tel"]').value;
    const address = event.target.querySelector('textarea').value;
    const quantity = event.target.querySelector('select').value;
    
    // Here you would typically send this data to your server
    console.log('Order submitted:', { name, phone, address, quantity });
    
    // Show confirmation modal
    showModal();
    
    // Reset form
    event.target.reset();
}

// Show modal function
function showModal() {
    const modal = document.getElementById('orderModal');
    modal.style.display = 'flex';
    
    // Close modal after 5 seconds
    setTimeout(() => {
        modal.style.display = 'none';
    }, 5000);
}

// Close modal function
function closeModal() {
    const modal = document.getElementById('orderModal');
    modal.style.display = 'none';
}

// Payment method selection
function showPaymentMethod(method) {
    let message = '';
    switch(method) {
        case 'bkash':
            message = 'বিকাশ নম্বর: ০১XXXXXXXX (ট্রান্সাকশন আইডি অবশ্যই দিন)';
            break;
        case 'nagad':
            message = 'নগদ নম্বর: ০১XXXXXXXX (ট্রান্সাকশন আইডি অবশ্যই দিন)';
            break;
        case 'cash':
            message = 'ক্যাশ অন ডেলিভারি (শুধুমাত্র ঢাকা শহরের জন্য)';
            break;
    }
    alert(message);
}

// Social media links
function openSocialLink(platform) {
    let url = '';
    switch(platform) {
        case 'facebook':
            url = 'https://facebook.com/ghorbangla';
            break;
        case 'youtube':
            url = 'https://youtube.com/ghorbangla';
            break;
        case 'instagram':
            url = 'https://instagram.com/ghorbangla';
            break;
    }
    window.open(url, '_blank');
}

// WhatsApp function
function openWhatsApp() {
    const phone = '8801XXXXXXXX';
    const message = 'আমি অর্জুন হার্ট কেয়ার পাউডার অর্ডার করতে চাই।';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Page navigation
function openPage(page) {
    let url = '';
    switch(page) {
        case 'privacy':
            url = 'privacy-policy.html';
            break;
        case 'refund':
            url = 'refund-policy.html';
            break;
        case 'terms':
            url = 'terms-conditions.html';
            break;
    }
    window.location.href = url;
}

// Initialize animations when elements come into view
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.content-box, .certification-card, .testimonial-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
});

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('orderModal');
    if (event.target === modal) {
        closeModal();
    }
});