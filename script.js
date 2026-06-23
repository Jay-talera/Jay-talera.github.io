// ============================================
//  Navbar: add shadow on scroll
// ============================================
const navbar = document.querySelector('.navbar');
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.5)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

// ============================================
//  Hamburger toggle
// ============================================
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close menu when a nav link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target)) {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  }
});

// ============================================
//  Smooth active link highlight on scroll
// ============================================
const sections  = document.querySelectorAll('section[id]');

function highlightNav() {
  let scrollY = window.scrollY;

  sections.forEach(section => {
    const sectionTop    = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const sectionId     = section.getAttribute('id');

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', highlightNav);

// ============================================
//  Set current year in footer
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  const year = document.querySelector('.footer-year');
  if (year) year.textContent = new Date().getFullYear();
});