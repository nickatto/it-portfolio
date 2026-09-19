(function () {
  const menuButton = document.querySelector('.menu-button');
  const nav = document.querySelector('.nav-links');

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Lightweight GA4 event tracking for the actions that matter on a job portfolio.
  document.addEventListener('click', (event) => {
    const link = event.target.closest('[data-track]');
    if (!link || typeof window.gtag !== 'function') return;

    window.gtag('event', link.dataset.track, {
      link_text: (link.textContent || '').trim().slice(0, 80),
      link_url: link.href || '',
      page_path: window.location.pathname
    });
  });
})();
