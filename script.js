// ============================================
//  Elements
// ============================================
const navbar     = document.querySelector('.navbar');
const hamburger  = document.getElementById('hamburger');
const navLinks   = document.getElementById('nav-links');
const navOverlay = document.getElementById('nav-overlay');

// ============================================
//  Navbar shadow on scroll
// ============================================
window.addEventListener('scroll', () => {
  navbar.style.boxShadow = window.scrollY > 50
    ? '0 2px 20px rgba(0,0,0,0.5)'
    : 'none';
});

// ============================================
//  Open / Close Menu
// ============================================
function openMenu() {
  hamburger.classList.add('open');
  navLinks.classList.add('open');
  navOverlay.classList.add('open');
  document.body.style.overflow = 'hidden'; // prevent bg scroll
}

function closeMenu() {
  hamburger.classList.remove('open');
  navLinks.classList.remove('open');
  navOverlay.classList.remove('open');
  document.body.style.overflow = '';       // restore scroll
}

// Toggle on hamburger click
hamburger.addEventListener('click', () => {
  navLinks.classList.contains('open') ? closeMenu() : openMenu();
});

// Close on overlay click
navOverlay.addEventListener('click', closeMenu);

// Close when any nav link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// ============================================
//  Active link highlight on scroll
// ============================================
const sections = document.querySelectorAll('section[id]');
const links    = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  sections.forEach(section => {
    const top    = section.offsetTop - 100;
    const height = section.offsetHeight;
    const id     = section.getAttribute('id');

    if (scrollY >= top && scrollY < top + height) {
      links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
});

// ============================================
//  Dynamic footer year
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  const year = document.querySelector('.footer-year');
  if (year) year.textContent = new Date().getFullYear();
});