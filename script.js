// Login form functionality
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const signInButton = document.querySelector('.sign-in-button');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const rememberCheckbox = document.getElementById('remember');

    // Form validation
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validatePassword(password) {
        return password.length >= 6;
    }

    function showError(input, message) {
        // Remove existing error
        const existingError = input.parentNode.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }

        // Add error styling
        input.style.borderColor = '#e74c3c';
        
        // Create error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.color = '#e74c3c';
        errorDiv.style.fontSize = '12px';
        errorDiv.style.marginTop = '5px';
        errorDiv.textContent = message;
        
        input.parentNode.appendChild(errorDiv);
    }

    function clearError(input) {
        const existingError = input.parentNode.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        input.style.borderColor = '#e1e5e9';
    }

    // Real-time validation
    emailInput.addEventListener('input', function() {
        if (this.value && !validateEmail(this.value)) {
            showError(this, 'Please enter a valid email address');
        } else {
            clearError(this);
        }
    });

    passwordInput.addEventListener('input', function() {
        if (this.value && !validatePassword(this.value)) {
            showError(this, 'Password must be at least 6 characters long');
        } else {
            clearError(this);
        }
    });

    // Form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const remember = rememberCheckbox.checked;
        
        // Clear previous errors
        clearError(emailInput);
        clearError(passwordInput);
        
        let isValid = true;
        
        // Validate email
        if (!email) {
            showError(emailInput, 'Email is required');
            isValid = false;
        } else if (!validateEmail(email)) {
            showError(emailInput, 'Please enter a valid email address');
            isValid = false;
        }
        
        // Validate password
        if (!password) {
            showError(passwordInput, 'Password is required');
            isValid = false;
        } else if (!validatePassword(password)) {
            showError(passwordInput, 'Password must be at least 6 characters long');
            isValid = false;
        }
        
        if (!isValid) {
            return;
        }
        
        // Show loading state
        signInButton.classList.add('loading');
        signInButton.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            // Hide loading state
            signInButton.classList.remove('loading');
            signInButton.disabled = false;
            
            // Simulate successful sign in
            alert(`Sign in successful!\nEmail: ${email}\nRemember me: ${remember ? 'Yes' : 'No'}`);
            
            // In a real application, you would:
            // 1. Send credentials to your authentication API
            // 2. Handle the response (success/error)
            // 3. Redirect to dashboard or show error message
            // 4. Store authentication token if remember me is checked
            
        }, 2000);
    });

    // Handle "Remember me" functionality
    rememberCheckbox.addEventListener('change', function() {
        if (this.checked) {
            console.log('Remember me enabled - user preferences will be saved');
        } else {
            console.log('Remember me disabled - session will not persist');
        }
    });

    // Handle forgot password link
    document.querySelector('.forgot-password').addEventListener('click', function(e) {
        e.preventDefault();
        alert('Forgot password functionality would be implemented here.\nThis would typically open a password reset form or redirect to a password reset page.');
    });

    // Handle sign up link
    document.querySelector('.sign-up-link').addEventListener('click', function(e) {
        e.preventDefault();
        alert('Sign up functionality would be implemented here.\nThis would typically redirect to a registration page.');
    });

    // Add some keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Enter key to submit form when focused on inputs
        if (e.key === 'Enter' && (document.activeElement === emailInput || document.activeElement === passwordInput)) {
            loginForm.dispatchEvent(new Event('submit'));
        }
    });

    // Focus management
    emailInput.focus();
});