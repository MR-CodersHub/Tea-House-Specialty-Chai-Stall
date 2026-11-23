/**
 * TEA HOUSE & SPECIALTY CHAI - SHARED UTILITIES (main.js)
 * Global utility functions shared across all pages.
 * Frontend-only vanilla JavaScript (Zero dependencies).
 */

(function () {
  'use strict';

  /**
   * Show a toast notification.
   * @param {string} message - The notification message to display.
   */
  window.showToast = function (message) {
    let toastContainer = document.getElementById('toastNotificationContainer');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.id = 'toastNotificationContainer';
      toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
      toastContainer.style.zIndex = '1200';
      document.body.appendChild(toastContainer);
    }

    const toastId = 'toast_' + Date.now();
    const toastHtml = `
      <div id="${toastId}" class="toast align-items-center text-white border-0" style="background-color: #123D2E; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.25);" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="d-flex">
          <div class="toast-body d-flex align-items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#A7B397"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            <span>${message}</span>
          </div>
          <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
      </div>
    `;

    toastContainer.insertAdjacentHTML('beforeend', toastHtml);
    const toastElem = document.getElementById(toastId);
    if (window.bootstrap && bootstrap.Toast) {
      const bsToast = new bootstrap.Toast(toastElem, { delay: 4000 });
      bsToast.show();
      toastElem.addEventListener('hidden.bs.toast', () => toastElem.remove());
    }
  };
})();
