// Theme Toggle
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  
  // Default to Light mode
  if (localStorage.theme === 'dark' || (!('theme' in localStorage))) {
    document.documentElement.classList.add('dark');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
  } else {
    document.documentElement.classList.remove('dark');
    themeIcon.classList.replace('fa-sun', 'fa-moon');
  }

  toggleBtn.addEventListener('click', () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      themeIcon.classList.replace('fa-sun', 'fa-moon');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      themeIcon.classList.replace('fa-moon', 'fa-sun');
    }
  });
}

// Initialize everything
window.addEventListener('load', () => {
  initTheme();

  // Form submission
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you! Your message has been received. We\'ll get back to you soon.');
      form.reset();
    });
  }
});