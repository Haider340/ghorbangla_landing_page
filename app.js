// Mobile Menu Toggle
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Smooth Scrolling
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop - 80,
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.remove('active');
    }
}
 // Video Modal Functionality
        document.addEventListener('DOMContentLoaded', function() {
            const videoThumbnails = document.querySelectorAll('.video-thumbnail');
            const videoModal = document.getElementById('videoModal');
            const videoFrame = document.getElementById('videoFrame');
            const closeModal = document.getElementById('closeModal');
            
            // Open video modal
            videoThumbnails.forEach(thumbnail => {
                thumbnail.addEventListener('click', function() {
                    const videoUrl = this.getAttribute('data-video');
                    videoFrame.src = videoUrl + "?autoplay=1";
                    videoModal.style.display = 'flex';
                    document.body.style.overflow = 'hidden';
                });
            });
            
            // Close video modal
            closeModal.addEventListener('click', function() {
                videoFrame.src = "";
                videoModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            });
            
            // Close modal when clicking outside
            window.addEventListener('click', function(event) {
                if (event.target === videoModal) {
                    videoFrame.src = "";
                    videoModal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
            });
        });

// Form Submission
function submitOrder(event) {
    event.preventDefault();
    
    // Here you would normally send the form data to your server
    // For demo purposes, we'll just show the confirmation modal
    showModal();
    
    // Reset form
    event.target.reset();
}

// Modal Functions
function showModal() {
    const modal = document.getElementById('orderModal');
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('orderModal');
    modal.style.display = 'none';
}

//// Order Flow Functions
let selectedPaymentMethod = null;

function submitOrder(event) {
    event.preventDefault();
    // Validate form first
    const form = event.target;
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    
    // Show payment options
    showPaymentModal();
}

function showPaymentModal() {
    const modal = document.getElementById('paymentModal');
    modal.style.display = 'flex';
}

function closePaymentModal() {
    const modal = document.getElementById('paymentModal');
    modal.style.display = 'none';
}

function selectPayment(method) {
    selectedPaymentMethod = method;
    const instructions = {
        bkash: `
            <h4>বিকাশে পেমেন্ট করুন</h4>
            <ol>
                <li>*247# ডায়াল করুন</li>
                <li>Payment অপশন সিলেক্ট করুন</li>
                <li>মার্চেন্ট নাম্বার দিন: <strong>01712872026</strong></li>
                <li>Amount দিন: <strong>${document.querySelector('.discounted-price').textContent}</strong></li>
                <li>Reference হিসেবে আপনার নাম লিখুন</li>
            </ol>
            <p>পেমেন্ট সম্পন্ন হলে নিচের Confirm বাটনে ক্লিক করুন</p>
        `,
        nagad: `
            <h4>নগদে পেমেন্ট করুন</h4>
            <ol>
                <li>নগদ অ্যাপ খুলুন</li>
                <li>Send Money সিলেক্ট করুন</li>
                <li>মার্চেন্ট নাম্বার দিন: <strong>01712872026</strong></li>
                <li>Amount দিন: <strong>${document.querySelector('.discounted-price').textContent}</strong></li>
                <li>Reference হিসেবে আপনার নাম লিখুন</li>
            </ol>
            <p>পেমেন্ট সম্পন্ন হলে নিচের Confirm বাটনে ক্লিক করুন</p>
        `,
        cash: `
            <h4>ক্যাশ অন ডেলিভারি</h4>
            <p>আপনার অর্ডার কনফার্ম করা হয়েছে</p>
            <p>আমাদের প্রতিনিধি পণ্য ডেলিভারির সময় টাকা গ্রহণ করবেন</p>
            <p>ডেলিভারি সময়: ২৪-৪৮ ঘন্টা (ঢাকা শহর)</p>
        `
    };
    
    // Show instructions
    const instructionsDiv = document.createElement('div');
    instructionsDiv.className = 'payment-instructions active';
    instructionsDiv.innerHTML = instructions[method];
    
    // Clear previous instructions
    const container = document.querySelector('.payment-options');
    const oldInstructions = document.querySelector('.payment-instructions');
    if (oldInstructions) oldInstructions.remove();
    
    container.after(instructionsDiv);
    
    // Show confirm button (except for COD)
    const confirmBtn = document.createElement('button');
    confirmBtn.className = `payment-confirm-btn ${method !== 'cash' ? 'active' : ''}`;
    confirmBtn.textContent = 'পেমেন্ট সম্পন্ন হয়েছে';
    confirmBtn.onclick = () => {
        closePaymentModal();
        showOrderConfirmation();
        if (method !== 'cash') {
            // Here you would typically verify payment with backend
            console.log(`Verify ${method} payment for order`);
        }
    };
    
    const oldBtn = document.querySelector('.payment-confirm-btn');
    if (oldBtn) oldBtn.remove();
    instructionsDiv.after(confirmBtn);
    
    // Auto-confirm for COD
    if (method === 'cash') {
        setTimeout(() => {
            closePaymentModal();
            showOrderConfirmation();
        }, 2000);
    }
}

function showOrderConfirmation() {
    const modal = document.getElementById('orderModal');
    modal.style.display = 'flex';
    
    // Here you would typically submit the order to your backend
    const form = document.getElementById('orderForm');
    const formData = new FormData(form);
    const orderData = {
        ...Object.fromEntries(formData),
        paymentMethod: selectedPaymentMethod,
        amount: document.querySelector('.discounted-price').textContent
    };
    console.log('Order submitted:', orderData);
}

// Social Links
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

// WhatsApp Order
function openWhatsApp() {
    const phone = '01XXXXXXXX';
    const message = 'আমি অর্জুন হার্ট কেয়ার পাউডার অর্ডার করতে চাই';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Page Navigation
function openPage(page) {
    let url = '';
    switch(page) {
        case 'privacy':
            url = 'privacy.html';
            break;
        case 'refund':
            url = 'refund.html';
            break;
        case 'terms':
            url = 'terms.html';
            break;
    }
    window.location.href = url;
}
// Remove or update this existing function
function openWhatsApp() {
    const phone = '8801712872026'; // With country code for Bangladesh (880)
    const message = 'আমি অর্জুন হার্ট কেয়ার পাউডার অর্ডার করতে চাই';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('orderModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Sticky Navbar on Scroll
window.onscroll = function() {
    const navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 100) {
        navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        navbar.style.padding = '10px 0';
    } else {
        navbar.style.boxShadow = 'none';
        navbar.style.padding = '15px 0';
    }
};