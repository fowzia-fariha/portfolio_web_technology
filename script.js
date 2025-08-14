// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const scrollUp = document.getElementById('scroll-up');
    
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    if (window.scrollY > 500) {
        scrollUp.classList.add('show');
    } else {
        scrollUp.classList.remove('show');
    }
});

// Scroll to top
document.getElementById('scroll-up').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Form submission using EmailJS
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (!name || !email || !subject || !message) {
        showMessage('Please fill in all fields', 'error');
        return;
    }
    
    // Show loading state
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Send email using EmailJS
    emailjs.send('service_xxxxxx', 'template_xxxxxx', {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
        to_email: 'farihashaj75@gmail.com'
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        showMessage('Thank you! Your message has been sent successfully.', 'success');
        document.getElementById('contactForm').reset();
        
        // Restore button
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
    }, function(error) {
        console.log('FAILED...', error);
        showMessage('Failed to send message. Please try again later.', 'error');
        
        // Restore button
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
    });
});

function showMessage(text, type) {
    const messageDiv = document.getElementById('formMessage');
    messageDiv.textContent = text;
    messageDiv.className = type;
    messageDiv.style.display = 'block';
    
    // Hide message after 5 seconds
    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 5000);
}

// Skills accordion functionality
document.querySelectorAll('.skill-header').forEach(header => {
    header.addEventListener('click', function() {
        const skillItem = this.parentElement;
        skillItem.classList.toggle('active');
    });
});

// Add floating animation to hero image
window.addEventListener('load', function() {
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        heroImage.classList.add('floating');
    }
});