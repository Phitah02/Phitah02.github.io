// Contact form validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#contact form');
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const messageInput = document.querySelector('#message');

    form.addEventListener('submit', function(e) {
        let isValid = true;
        let errors = [];

        // Validate name
        if (nameInput.value.trim().length < 2) {
            isValid = false;
            errors.push('Name must be at least 2 characters long.');
            nameInput.style.borderColor = '#ff6b6b';
        } else {
            nameInput.style.borderColor = '#38ef7d';
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            isValid = false;
            errors.push('Please enter a valid email address.');
            emailInput.style.borderColor = '#ff6b6b';
        } else {
            emailInput.style.borderColor = '#38ef7d';
        }

        // Validate message
        if (messageInput.value.trim().length < 10) {
            isValid = false;
            errors.push('Message must be at least 10 characters long.');
            messageInput.style.borderColor = '#ff6b6b';
        } else {
            messageInput.style.borderColor = '#38ef7d';
        }

        if (!isValid) {
            e.preventDefault();
            alert('Please fix the following errors:\n' + errors.join('\n'));
        } else {
            // Optional: Show success message
            alert('Thank you for your message! I will get back to you soon.');
        }
    });

    // Real-time validation feedback
    [nameInput, emailInput, messageInput].forEach(input => {
        input.addEventListener('input', function() {
            if (this.value.trim() !== '') {
                this.style.borderColor = '#38ef7d';
            } else {
                this.style.borderColor = '#38ef7d'; // Reset to original
            }
        });
    });
});
