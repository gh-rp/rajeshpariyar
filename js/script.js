document.addEventListener('DOMContentLoaded', () => {

  /* ----- footer year ----- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ----- mobile nav toggle ----- */
  const navToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = siteNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    siteNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        siteNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ----- active nav link on scroll ----- */
  const navLinks = document.querySelectorAll('[data-nav]');
  const sections = Array.from(navLinks)
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if (sections.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = '#' + entry.target.id;
        const link = document.querySelector(`[data-nav][href="${id}"]`);
        if (!link) return;
        if (entry.isIntersecting) {
          navLinks.forEach(l => l.classList.remove('is-active'));
          link.classList.add('is-active');
        }
      });
    }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

    sections.forEach(section => observer.observe(section));
  }

  /* ----- project filtering ----- */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      const filter = btn.dataset.filter;
      projectCards.forEach(card => {
        const categories = card.dataset.category.split(' ');
        const match = filter === 'all' || categories.includes(filter);
        card.hidden = !match;
      });
    });
  });

  /* ----- contact form validation (client-side only) ----- */
  const form = document.getElementById('contactForm');
  const statusEl = document.getElementById('formStatus');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;

      const fields = [
        { id: 'name', message: 'Enter your name.' },
        { id: 'email', message: 'Enter a valid email address.', type: 'email' },
        { id: 'message', message: 'Add a few details about your project.' },
      ];

      fields.forEach(({ id, message, type }) => {
        const input = document.getElementById(id);
        const row = input.closest('.form-row');
        const errorEl = row.querySelector('.form-error');
        let fieldValid = input.value.trim().length > 0;

        if (fieldValid && type === 'email') {
          fieldValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
        }

        if (!fieldValid) {
          valid = false;
          row.classList.add('has-error');
          errorEl.textContent = message;
        } else {
          row.classList.remove('has-error');
          errorEl.textContent = '';
        }
      });

      if (!valid) {
        statusEl.textContent = 'Please fix the highlighted fields.';
        statusEl.classList.remove('is-success');
        return;
      }

      // NOTE: This form has no backend. Wire it up to a service such as
      // Formspree, Getform, or your own endpoint — see README.md.
      statusEl.textContent = 'Thanks — your message details are ready. Connect this form to an email service to send it (see README.md).';
      statusEl.classList.add('is-success');
      form.reset();
    });
  }

});
