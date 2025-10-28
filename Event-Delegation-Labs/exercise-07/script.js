// Exercise 7: Form Validation
// Goal: Validate form inputs using event delegation on the form

const form = document.getElementById('user-form');
const submitBtn = document.getElementById('submit-btn');

// TODO: Add ONE 'input' event listener to the form
// HINT: Check if e.target has class 'form-input'
// HINT: Get the input's value and name
// HINT: Validate based on the input name:
//       - username: must be at least 5 characters
//       - email: must contain '@'
//       - password: must be at least 8 characters
// HINT: If valid: add 'valid' class, remove 'invalid', clear error message
// HINT: If invalid: add 'invalid' class, remove 'valid', show error in error-message span
// HINT: Enable submit button only when all inputs are valid

// Your code here:
form.addEventListener('input', (e) => {
    if (e.target.classList.contains('form-input')) {
        const input = e.target;
        const value = input.value;
        const name = input.name;
        const errorMessageSpan = input.nextElementSibling;
        let isValid = false;
        if (name === 'username') {
            isValid = value.length >= 5;
            if (!isValid) {
                errorMessageSpan.textContent = 'Username must be at least 5 characters long.';
            }
        } else if (name === 'email') {
            isValid = value.includes('@');
            if (!isValid) {
                errorMessageSpan.textContent = 'Email must contain "@" symbol.';
            }
        } else if (name === 'password') {
            isValid = value.length >= 8;
            if (!isValid) {
                errorMessageSpan.textContent = 'Password must be at least 8 characters long.';
            }
        }
        if (isValid) {
            input.classList.add('valid');
            input.classList.remove('invalid');
            errorMessageSpan.textContent = '';
        } else {
            input.classList.add('invalid');
            input.classList.remove('valid');
        }
        // Check if all inputs are valid to enable submit button
        const allInputs = form.querySelectorAll('.form-input');
        const allValid = Array.from(allInputs).every(inp => inp.classList.contains('valid'));
        submitBtn.disabled = !allValid;
    }
});

// TODO: Add submit event listener to prevent default form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
});
