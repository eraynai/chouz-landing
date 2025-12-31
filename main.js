// main.js

(function () {
  const heroCtaButton = document.getElementById('hero-cta');
  const signupSection = document.getElementById('signup');

  const signupForm = document.getElementById('signup-form');
  const emailInput = document.getElementById('email');
  const signupButton = document.getElementById('signup-button');
  const formMessage = document.getElementById('form-message');

  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Smooth scroll from hero CTA to signup section
  if (heroCtaButton && signupSection) {
    heroCtaButton.addEventListener('click', () => {
      signupSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  function clearMessage() {
    if (!formMessage) return;
    formMessage.textContent = '';
    formMessage.className = 'form-message';
  }

  function setErrorMessage(text) {
    if (!formMessage) return;
    formMessage.textContent = text;
    formMessage.className = 'form-message form-message--error';
  }

  function setSuccessMessage(text) {
    if (!formMessage) return;
    formMessage.textContent = text;
    formMessage.className = 'form-message form-message--success';
  }

  // Email validation and simulated submit
  if (signupForm && emailInput && signupButton) {
    signupForm.addEventListener('submit', function (event) {
      event.preventDefault();

      clearMessage();
      emailInput.setAttribute('aria-invalid', 'false');

      const value = emailInput.value.trim();

      if (!EMAIL_REGEX.test(value)) {
        setErrorMessage('Please enter a valid email address.');
        emailInput.setAttribute('aria-invalid', 'true');
        emailInput.focus();
        return;
      }

      const originalButtonText = signupButton.textContent || '';
      signupButton.disabled = true;
      signupButton.textContent = 'Joining...';

      window.setTimeout(function () {
        signupButton.disabled = false;
        signupButton.textContent = originalButtonText;

        emailInput.value = '';
        emailInput.setAttribute('aria-invalid', 'false');

        setSuccessMessage("Thank you. You’re on the path.");
      }, 600);
    });
  }
})();
