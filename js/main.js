(() => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
  }

  const header = document.querySelector('.site-header');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const onScroll = () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 18);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Reveal content as it enters the viewport.
  const revealTargets = document.querySelectorAll('.section-head, .feature, .news-feature, .news-mini, .gallery-card, .person-card, .profile-card, .quote-card, .contact-card, .cta, .gallery-preview');
  revealTargets.forEach((el, i) => {
    el.setAttribute('data-reveal', el.classList.contains('quote-card') ? 'right' : '');
    el.style.setProperty('--reveal-delay', `${Math.min((i % 4) * 70, 210)}ms`);
  });

  if (!reduceMotion && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -45px' });
    revealTargets.forEach(el => observer.observe(el));
  } else {
    revealTargets.forEach(el => el.classList.add('is-visible'));
  }

  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

  document.querySelectorAll('.gallery-card').forEach(card => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img');
      if (!img) return;
      const overlay = document.createElement('div');
      overlay.className = 'lightbox';
      overlay.innerHTML = `<button aria-label="Tutup">×</button><img src="${img.src}" alt="${img.alt}">`;
      document.body.appendChild(overlay);
      requestAnimationFrame(() => overlay.classList.add('show'));
      const close = () => overlay.remove();
      overlay.addEventListener('click', e => { if (e.target === overlay || e.target.tagName === 'BUTTON') close(); });
      document.addEventListener('keydown', function esc(e){ if(e.key==='Escape'){close();document.removeEventListener('keydown',esc)} });
    });
  });
})();
