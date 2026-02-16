const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebarNav');
const navLinks = Array.from(document.querySelectorAll('.nav-list a'));
const anchorLinks = navLinks.filter((link) => (link.getAttribute('href') || '').startsWith('#'));
const sections = anchorLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

function closeMenuOnMobile() {
  if (window.innerWidth <= 980 && sidebar && menuToggle) {
    sidebar.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
}

if (menuToggle && sidebar) {
  menuToggle.addEventListener('click', () => {
    const isOpen = sidebar.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    closeMenuOnMobile();
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const currentId = `#${entry.target.id}`;
      anchorLinks.forEach((link) => {
        const isActive = link.getAttribute('href') === currentId;
        link.classList.toggle('active', isActive);
      });
    });
  },
  {
    rootMargin: '-45% 0px -45% 0px',
    threshold: 0,
  }
);

sections.forEach((section) => observer.observe(section));

window.addEventListener('resize', () => {
  if (window.innerWidth > 980 && sidebar && menuToggle) {
    sidebar.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menú');
  }
});
