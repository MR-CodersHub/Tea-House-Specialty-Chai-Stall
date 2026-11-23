(function () {
  'use strict';

  const form = document.getElementById('signupForm');
  const nameInput = document.getElementById('signupName');
  const emailInput = document.getElementById('signupEmail');
  const phoneInput = document.getElementById('signupPhone');
  const passwordInput = document.getElementById('signupPassword');
  const confirmInput = document.getElementById('signupConfirmPassword');
  const termsInput = document.getElementById('acceptTerms');
  const status = document.getElementById('signupStatus');
  const strengthMeter = document.getElementById('passwordStrengthMeter');
  const strengthLabel = document.getElementById('passwordStrengthLabel');
  const passwordRules = Array.from(document.querySelectorAll('[data-password-rule]'));
  let submitted = false;

  if (!form || !nameInput || !emailInput || !phoneInput || !passwordInput || !confirmInput || !termsInput || !status || !strengthMeter || !strengthLabel) {
    throw new Error('Signup form markup is incomplete.');
  }

  function setError(input, message) {
    const error = document.getElementById(input.id + 'Error');
    input.setAttribute('aria-invalid', message ? 'true' : 'false');
    if (error) {
      error.textContent = message;
    }
    return !message;
  }

  function evaluatePassword(password) {
    return {
      length: password.length >= 8,
      lowercase: /[a-z]/.test(password),
      uppercase: /[A-Z]/.test(password),
      number: /\d/.test(password),
      symbol: /[^A-Za-z0-9]/.test(password)
    };
  }

  function updatePasswordStrength() {
    const rules = evaluatePassword(passwordInput.value);
    const metCount = Object.values(rules).filter(Boolean).length;
    const label = passwordInput.value
      ? ['Very weak', 'Weak', 'Fair', 'Good', 'Strong'][metCount - 1] || 'Very weak'
      : 'Add a password';

    passwordRules.forEach(function (item) {
      item.classList.toggle('is-met', rules[item.dataset.passwordRule]);
    });
    strengthMeter.dataset.strength = String(metCount);
    strengthMeter.setAttribute('aria-valuenow', String(metCount));
    strengthMeter.setAttribute('aria-valuetext', label);
    strengthLabel.textContent = label;
    return metCount === 5;
  }

  function validateName() {
    nameInput.value = nameInput.value.trim();
    if (nameInput.value.length < 2) {
      return setError(nameInput, 'Enter your full name.');
    }
    return setError(nameInput, '');
  }

  function validateEmail() {
    emailInput.value = emailInput.value.trim();
    if (!emailInput.value) {
      return setError(emailInput, 'Enter your email address.');
    }
    if (!emailInput.validity.valid) {
      return setError(emailInput, 'Enter a valid email address.');
    }
    return setError(emailInput, '');
  }

  function validatePhone() {
    const value = phoneInput.value.trim();
    const digitCount = value.replace(/\D/g, '').length;
    const allowedCharacters = /^\+?[\d\s().-]+$/.test(value);
    if (!value) {
      return setError(phoneInput, 'Enter your phone number.');
    }
    if (!allowedCharacters || digitCount < 7 || digitCount > 15) {
      return setError(phoneInput, 'Enter a valid phone number with 7 to 15 digits.');
    }
    return setError(phoneInput, '');
  }

  function validatePassword() {
    if (!passwordInput.value) {
      return setError(passwordInput, 'Create a password.');
    }
    if (!updatePasswordStrength()) {
      return setError(passwordInput, 'Meet all five password requirements.');
    }
    return setError(passwordInput, '');
  }

  function validateConfirmation() {
    if (!confirmInput.value) {
      return setError(confirmInput, 'Confirm your password.');
    }
    if (confirmInput.value !== passwordInput.value) {
      return setError(confirmInput, 'The passwords do not match.');
    }
    return setError(confirmInput, '');
  }

  function validateTerms() {
    const error = document.getElementById('signupTermsError');
    const message = termsInput.checked ? '' : 'Accept the Terms and Conditions to continue.';
    if (error) {
      error.textContent = message;
    }
    termsInput.setAttribute('aria-invalid', message ? 'true' : 'false');
    return !message;
  }

  function validateField(input) {
    if (input === nameInput) return validateName();
    if (input === emailInput) return validateEmail();
    if (input === phoneInput) return validatePhone();
    if (input === passwordInput) return validatePassword();
    if (input === confirmInput) return validateConfirmation();
    if (input === termsInput) return validateTerms();
    return true;
  }

  form.querySelectorAll('[data-password-toggle]').forEach(function (button) {
    button.addEventListener('click', function () {
      const input = document.getElementById(button.dataset.passwordToggle);
      if (!input) {
        return;
      }

      const showPassword = input.type === 'password';
      input.type = showPassword ? 'text' : 'password';
      button.setAttribute('aria-pressed', showPassword ? 'true' : 'false');
      const currentLabel = button.getAttribute('aria-label') || 'Show password';
      button.setAttribute('aria-label', currentLabel.replace(/^(Show|Hide)/, showPassword ? 'Hide' : 'Show'));
      button.querySelector('i').className = showPassword ? 'bi bi-eye-slash' : 'bi bi-eye';
    });
  });

  [nameInput, emailInput, phoneInput, passwordInput, confirmInput, termsInput].forEach(function (input) {
    input.addEventListener('input', function () {
      status.hidden = true;
      if (input === passwordInput) {
        updatePasswordStrength();
        if (confirmInput.value && (submitted || confirmInput.getAttribute('aria-invalid') === 'true')) {
          validateConfirmation();
        }
      }
      if (submitted || input.getAttribute('aria-invalid') === 'true') {
        validateField(input);
      }
    });
    input.addEventListener('change', function () {
      status.hidden = true;
      if (input === termsInput && (submitted || input.getAttribute('aria-invalid') === 'true')) {
        validateTerms();
      }
    });
    input.addEventListener('blur', function () {
      if (input !== termsInput && (input.value || submitted)) {
        validateField(input);
      }
    });
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    submitted = true;
    status.hidden = true;

    const valid = [
      validateName(),
      validateEmail(),
      validatePhone(),
      validatePassword(),
      validateConfirmation(),
      validateTerms()
    ].every(Boolean);

    if (!valid) {
      form.querySelector('[aria-invalid="true"]').focus();
      return;
    }

    status.textContent = 'Your details passed frontend validation, but account creation is not connected to an authentication service. No account was created.';
    status.hidden = false;
  });
})();
