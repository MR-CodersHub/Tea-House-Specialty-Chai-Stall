(function () {
  'use strict';

  const form = document.getElementById('loginForm');
  const emailInput = document.getElementById('loginEmail');
  const passwordInput = document.getElementById('loginPassword');
  const status = document.getElementById('loginStatus');
  const forgotPassword = document.getElementById('forgotPassword');
  let submitted = false;

  if (!form || !emailInput || !passwordInput || !status) {
    throw new Error('Login form markup is incomplete.');
  }

  function setError(input, message) {
    const error = document.getElementById(input.id + 'Error');
    input.setAttribute('aria-invalid', message ? 'true' : 'false');
    if (error) {
      error.textContent = message;
    }
    return !message;
  }

  function validateEmail() {
    const email = emailInput.value.trim();
    emailInput.value = email;

    if (!email) {
      return setError(emailInput, 'Enter your email address.');
    }
    if (!emailInput.validity.valid) {
      return setError(emailInput, 'Enter a valid email address.');
    }
    return setError(emailInput, '');
  }

  function validatePassword() {
    if (!passwordInput.value) {
      return setError(passwordInput, 'Enter your password.');
    }
    return setError(passwordInput, '');
  }

  function validateField(input) {
    return input === emailInput ? validateEmail() : validatePassword();
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

  [emailInput, passwordInput].forEach(function (input) {
    input.addEventListener('input', function () {
      status.hidden = true;
      if (submitted || input.getAttribute('aria-invalid') === 'true') {
        validateField(input);
      }
    });
    input.addEventListener('blur', function () {
      if (input.value || submitted) {
        validateField(input);
      }
    });
  });

  forgotPassword.addEventListener('click', function () {
    status.textContent = 'Password recovery is not connected yet. No reset email was sent.';
    status.hidden = false;
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    submitted = true;
    status.hidden = true;

    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    if (!isEmailValid || !isPasswordValid) {
      form.querySelector('[aria-invalid="true"]').focus();
      return;
    }

    status.textContent = 'Your details passed frontend validation, but sign-in is not connected to an authentication service. No account was accessed.';
    status.hidden = false;
  });
})();
