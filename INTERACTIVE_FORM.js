function validateForm() {
    const emailField = document.getElementById('email');
    const email = emailField.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }
    alert('Form submitted successfully!');
    return true;
}