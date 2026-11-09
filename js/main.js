/* ==========================================================================
   VERNON & VALE — Master Leather Footwear Manufacturer
   Main JavaScript (Exact Sole Craft Architecture & Interactions)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initStickyHeader();
  initMobileDrawer();
  initBackToTop();
  initNewsletter();
});

/* --- Theme Management (.dark class) --- */
function initTheme() {
  const storedTheme = localStorage.getItem('vv_theme') || 'dark';
  if (storedTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  const themeToggle = document.getElementById('theme-toggle');
  const mobileThemeToggle = document.getElementById('mobile-theme-toggle');

  updateThemeIcons();

  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
  if (mobileThemeToggle) {
    mobileThemeToggle.addEventListener('click', toggleTheme);
  }

  function toggleTheme(e) {
    if (e) e.preventDefault();
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('vv_theme', isDark ? 'dark' : 'light');
    updateThemeIcons();
    showToast('Theme Updated', `Switched to ${isDark ? 'Dark Espresso' : 'Light Cream'} mode.`);
  }

  function updateThemeIcons() {
    const isDark = document.documentElement.classList.contains('dark');
    if (themeToggle) {
      themeToggle.innerHTML = isDark 
        ? '<i class="bi bi-sun-fill text-base xl:text-lg text-[#0F0F0F]"></i>' 
        : '<i class="bi bi-moon-fill text-base xl:text-lg text-[#0F0F0F]"></i>';
    }
    if (mobileThemeToggle) {
      mobileThemeToggle.innerHTML = isDark
        ? '<i class="bi bi-sun-fill text-lg text-gold"></i>'
        : '<i class="bi bi-moon-fill text-lg text-gold"></i>';
    }
  }
}

/* --- RTL / Language Direction --- */
function initLanguage() {
  const langToggle = document.getElementById('lang-toggle');
  const mobileLangToggle = document.getElementById('mobile-lang-toggle');
  const langText = document.getElementById('lang-text');
  const mobileLangText = document.getElementById('mobile-lang-text');

  const storedDir = localStorage.getItem('vv_dir') || 'ltr';
  applyDirection(storedDir);

  if (langToggle) {
    langToggle.addEventListener('click', toggleDir);
  }
  if (mobileLangToggle) {
    mobileLangToggle.addEventListener('click', toggleDir);
  }

  function toggleDir(e) {
    if (e) e.preventDefault();
    const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
    const newDir = currentDir === 'ltr' ? 'rtl' : 'ltr';
    applyDirection(newDir);
    localStorage.setItem('vv_dir', newDir);
    showToast('Layout Direction', `Switched layout to ${newDir.toUpperCase()}.`);
  }

  function applyDirection(dir) {
    document.documentElement.setAttribute('dir', dir);
    if (langText) langText.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
    if (mobileLangText) mobileLangText.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
  }
}

/* --- Sticky Header with Glassmorphism on Scroll --- */
function initStickyHeader() {
  const header = document.querySelector('header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('glass-panel', 'py-3');
      header.classList.remove('py-5', 'bg-transparent');
    } else {
      header.classList.remove('glass-panel', 'py-3');
      header.classList.add('py-5', 'bg-transparent');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Active navigation link highlighting
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && (href === currentPath || href.startsWith(currentPath))) {
      link.classList.add('text-gold', 'active');
      const parentDropdown = link.closest('.nav-item-has-dropdown');
      if (parentDropdown) {
        const toggleBtn = parentDropdown.querySelector('button');
        if (toggleBtn) toggleBtn.classList.add('text-gold', 'active');
      }
    }
  });
}

/* --- Mobile Drawer Navigation --- */
function initMobileDrawer() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileDrawerOverlay = document.getElementById('mobile-drawer-overlay');
  const mobileDrawerClose = document.getElementById('mobile-drawer-close');

  if (!mobileMenuBtn || !mobileDrawer || !mobileDrawerOverlay) return;

  mobileMenuBtn.addEventListener('click', openDrawer);
  if (mobileDrawerClose) mobileDrawerClose.addEventListener('click', closeDrawer);
  mobileDrawerOverlay.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
  });

  const drawerLinks = mobileDrawer.querySelectorAll('nav a');
  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (!link.classList.contains('mobile-dropdown-toggle')) {
        closeDrawer();
      }
    });
  });

  // Mobile dropdown accordion toggles
  const dropdownToggles = mobileDrawer.querySelectorAll('.mobile-dropdown-toggle');
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      const menu = toggle.nextElementSibling;
      const icon = toggle.querySelector('i');
      if (menu) {
        menu.classList.toggle('hidden');
        if (icon) icon.classList.toggle('rotate-180');
      }
    });
  });

  function openDrawer() {
    document.body.classList.add('overflow-hidden');
    mobileDrawerOverlay.classList.remove('hidden');
    mobileDrawerOverlay.offsetWidth;
    mobileDrawerOverlay.classList.add('opacity-100');
    mobileDrawer.classList.remove('translate-x-full');
  }

  function closeDrawer() {
    mobileDrawerOverlay.classList.remove('opacity-100');
    mobileDrawer.classList.add('translate-x-full');
    document.body.classList.remove('overflow-hidden');
    setTimeout(() => {
      mobileDrawerOverlay.classList.add('hidden');
    }, 300);
  }
}

/* --- Back To Top --- */
function initBackToTop() {
  const btn = document.querySelector('.back-to-top') || document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.classList.add('visible');
      btn.classList.remove('opacity-0', 'pointer-events-none');
      btn.classList.add('opacity-100', 'pointer-events-auto');
    } else {
      btn.classList.remove('visible');
      btn.classList.remove('opacity-100', 'pointer-events-auto');
      btn.classList.add('opacity-0', 'pointer-events-none');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* --- Newsletter Validation --- */
function initNewsletter() {
  const forms = document.querySelectorAll('.newsletter-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (!input) return;
      const email = input.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email)) {
        showToast('Invalid Email', 'Please enter a valid email address.', 'error');
        return;
      }
      showToast('Subscription Confirmed', `Thank you! Manufacturing updates will be sent to ${email}.`, 'success');
      form.reset();
    });
  });
}

/* --- Toast Notifications --- */
function showToast(titleOrMsg, messageOrType, type = 'info') {
  let container = document.getElementById('toastContainer') || document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container fixed bottom-4 inset-x-4 sm:inset-x-auto sm:left-6 sm:bottom-6 z-[10001] flex flex-col gap-2 pointer-events-none sm:max-w-md';
    document.body.appendChild(container);
  } else {
    container.classList.add('fixed', 'bottom-4', 'inset-x-4', 'sm:inset-x-auto', 'sm:left-6', 'sm:bottom-6', 'z-[10001]');
  }

  let finalTitle = titleOrMsg;
  let finalMsg = messageOrType;
  let finalType = type;

  if (arguments.length === 2 && (messageOrType === 'success' || messageOrType === 'error' || messageOrType === 'info')) {
    finalTitle = messageOrType.toUpperCase();
    finalMsg = titleOrMsg;
    finalType = messageOrType;
  }

  const toast = document.createElement('div');
  toast.className = 'toast glass-panel p-4 rounded-xl border border-gold/30 shadow-2xl flex items-center gap-3 bg-[#0F0F0F]/95 text-[#F3ECE0] pointer-events-auto w-full max-w-full sm:max-w-md transition-all duration-300';
  
  const iconClass = finalType === 'success' 
    ? 'bi-check-circle-fill text-emerald-400' 
    : (finalType === 'error' ? 'bi-exclamation-triangle-fill text-red-400' : 'bi-info-circle-fill text-gold');

  toast.innerHTML = `
    <i class="bi ${iconClass} text-xl shrink-0"></i>
    <div class="flex-1 min-w-0">
      <div class="font-bold text-xs uppercase tracking-wider text-gold mb-0.5">${finalTitle}</div>
      <div class="text-xs text-gray-300 leading-snug break-words">${finalMsg}</div>
    </div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

window.showToast = showToast;

// Global modal open trigger for sample request
window.openSampleModal = function(productName = '', productSku = '') {
  const modalBackdrop = document.getElementById('sampleModalBackdrop');
  if (!modalBackdrop) return;

  const productField = modalBackdrop.querySelector('#sampleProductTarget');
  if (productField && productName) {
    productField.value = `${productName} (${productSku})`;
  }

  modalBackdrop.classList.remove('hidden');
  modalBackdrop.classList.add('flex');
  document.body.classList.add('overflow-hidden');
};

window.closeSampleModal = function() {
  const modalBackdrop = document.getElementById('sampleModalBackdrop');
  if (modalBackdrop) {
    modalBackdrop.classList.add('hidden');
    modalBackdrop.classList.remove('flex');
    document.body.classList.remove('overflow-hidden');
  }
};
