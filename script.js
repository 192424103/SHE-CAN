/**
 * She Can Foundation Webpage Script
 * -----------------------------------------
 * Author: Nithya
 * Purpose: Beginner-friendly form validation & interaction handlers.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Fetch DOM elements
  const contactForm = document.getElementById('contactForm');
  const successOverlay = document.getElementById('successOverlay');
  const resetFormButton = document.getElementById('resetFormButton');

  // Input Field Fields
  const fullNameInput = document.getElementById('fullName');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  // 2. Client-side Form Validation Helpers
  
  /**
   * Display visual validation error for a specific form field
   * @param {HTMLElement} inputElement - The HTML input/textarea element
   * @param {string} message - The error explanation text
   */
  function showError(inputElement, message) {
    const formGroup = inputElement.closest('.form-group');
    formGroup.classList.add('error');
    
    // Check if error message element already exists, if not, create it
    let errorSpan = formGroup.querySelector('.error-message');
    if (!errorSpan) {
      errorSpan = document.createElement('span');
      errorSpan.className = 'error-message';
      formGroup.appendChild(errorSpan);
    }
    errorSpan.textContent = message;
    errorSpan.style.display = 'block';
  }

  /**
   * Clear validation errors for a specific form field
   * @param {HTMLElement} inputElement - The HTML input/textarea element
   */
  function clearError(inputElement) {
    const formGroup = inputElement.closest('.form-group');
    formGroup.classList.remove('error');
    
    const errorSpan = formGroup.querySelector('.error-message');
    if (errorSpan) {
      errorSpan.textContent = '';
      errorSpan.style.display = 'none';
    }
  }

  /**
   * Validates if email format matches a standard email regular expression
   * @param {string} email - The email string to test
   * @returns {boolean} True if email is valid, false otherwise
   */
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // 3. Real-time validation listeners to remove error classes while typing
  fullNameInput.addEventListener('input', () => {
    if (fullNameInput.value.trim() !== '') {
      clearError(fullNameInput);
    }
  });

  emailInput.addEventListener('input', () => {
    if (emailInput.value.trim() !== '' && isValidEmail(emailInput.value.trim())) {
      clearError(emailInput);
    }
  });

  messageInput.addEventListener('input', () => {
    if (messageInput.value.trim() !== '') {
      clearError(messageInput);
    }
  });

  // 4. Handle Form Submission
  contactForm.addEventListener('submit', (event) => {
    // Prevent default form transmission (reloading the page)
    event.preventDefault();

    let isFormValid = true;

    // Retrieve input values, stripping extra whitespace
    const nameVal = fullNameInput.value.trim();
    const emailVal = emailInput.value.trim();
    const messageVal = messageInput.value.trim();

    // Validate Full Name
    if (nameVal === '') {
      showError(fullNameInput, 'Full Name is required.');
      isFormValid = false;
    } else if (nameVal.length < 2) {
      showError(fullNameInput, 'Name must be at least 2 characters.');
      isFormValid = false;
    } else {
      clearError(fullNameInput);
    }

    // Validate Email
    if (emailVal === '') {
      showError(emailInput, 'Email Address is required.');
      isFormValid = false;
    } else if (!isValidEmail(emailVal)) {
      showError(emailInput, 'Please enter a valid email address.');
      isFormValid = false;
    } else {
      clearError(emailInput);
    }

    // Validate Message
    if (messageVal === '') {
      showError(messageInput, 'Message is required.');
      isFormValid = false;
    } else if (messageVal.length < 10) {
      showError(messageInput, 'Message must be at least 10 characters.');
      isFormValid = false;
    } else {
      clearError(messageInput);
    }

    // 5. Success Action
    if (isFormValid) {
      // Custom action (e.g., simulating API post)
      console.log('Form data submitted successfully:', {
        fullName: nameVal,
        email: emailVal,
        message: messageVal
      });

      // Show the customized success state with smooth animation
      successOverlay.classList.add('active');
    }
  });

  // 6. Reset Form to original state
  resetFormButton.addEventListener('click', () => {
    // Hide the success panel
    successOverlay.classList.remove('active');
    
    // Clear form inputs
    contactForm.reset();
    
    // Clear all error decorations
    clearError(fullNameInput);
    clearError(emailInput);
    clearError(messageInput);
  });
});
