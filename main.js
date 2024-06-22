document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    let isValid = true;

    // Validate email
    const email = document.getElementById('floating_email');
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    // Validate passwords
    const password = document.getElementById('floating_password');
    const repeatPassword = document.getElementById('floating_repeat_password');
    const passwordError = document.getElementById('passwordError');
    if (password.value !== repeatPassword.value) {
        passwordError.style.display = 'block';
        isValid = false;
    } else {
        passwordError.style.display = 'none';
    }

    // Validate other fields
    const requiredFields = [
        'floating_first_name',
        'floating_last_name',
        'floating_phone',
        'floating_company'
    ];
    requiredFields.forEach(function(fieldId) {
        const field = document.getElementById(fieldId);
        if (field.value.trim() === '') {
            field.classList.add('border-red-500');
            isValid = false;
        } else {
            field.classList.remove('border-red-500');
        }
    });

    if (isValid) {
        // All validations passed, submit the form
        this.submit();
    }
});
