// ============================================
//  Elements
// ============================================
const navbar     = document.querySelector('.navbar');
const hamburger  = document.getElementById('hamburger');
const navLinks   = document.getElementById('nav-links');        
const navOverlay = document.getElementById('nav-overlay');
const links      = document.querySelectorAll('.nav-links a');   
const sections    = document.querySelectorAll('section[id]');


// ============================================
  //  PHASE 5 — Preloader
  // ============================================
  function initPreloader() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;

    // Hide preloader when page fully loads
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.classList.add('hidden');
      }, 800); // slight delay for smooth feel
    });
  }

  // ============================================
  //  PHASE 5 — Scroll Progress Bar
  // ============================================
  function initScrollProgress() {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;

    window.addEventListener('scroll', () => {
      const scrollTop    = window.scrollY;
      const docHeight    = document.documentElement.scrollHeight
                         - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      bar.style.width = `${scrollPercent}%`;
    });
  }

  // ============================================
  //  PHASE 5 — Back to Top Button
  // ============================================
  function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    // Show after scrolling 400px
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    });

    // Smooth scroll to top on click
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

// ============================================
//  Navbar Shadow on Scroll
// ============================================
window.addEventListener('scroll', () => {
  navbar.style.boxShadow = window.scrollY > 50
    ? '0 2px 20px rgba(0,0,0,0.5)'
    : 'none';
});

// ============================================
//  Hamburger Menu
// ============================================
function openMenu() {
  hamburger.classList.add('open');
  navLinks.classList.add('open');
  if (navOverlay) navOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  hamburger.classList.remove('open');
  navLinks.classList.remove('open');
  if (navOverlay) navOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

// Toggle on hamburger click
hamburger.addEventListener('click', () => {
  navLinks.classList.contains('open') ? closeMenu() : openMenu();
});

// Close on overlay click
if (navOverlay) {
  navOverlay.addEventListener('click', closeMenu);
}

// Close when any nav link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Close when clicking outside navbar
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target)) {
    closeMenu();
  }
});

// ============================================
//  Active Nav Link Highlight on Scroll
// ============================================
const sections = document.querySelectorAll('section[id]');

function highlightNav() {
  const scrollY = window.scrollY;

  sections.forEach(section => {
    const sectionTop    = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const sectionId     = section.getAttribute('id');

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      links.forEach(link => {                                   
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
  //  PHASE 4 — Dark / Light Mode Toggle ✅
  // ============================================
  function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon   = document.getElementById('theme-icon');

    if (!themeToggle) return;

    // Load saved preference from localStorage
    const savedTheme = localStorage.getItem('theme') || 'dark';

    if (savedTheme === 'light') {
      document.body.classList.add('light-mode');
      themeIcon.classList.replace('fa-moon', 'fa-sun');
    }

    // Toggle on click
    themeToggle.addEventListener('click', () => {
      const isLight = document.body.classList.toggle('light-mode');

      // Swap icon moon ↔ sun
      if (isLight) {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        themeIcon.style.color = '#d97706';
      } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        themeIcon.style.color = '#818cf8';
      }

      // Save preference
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
  }


// ============================================
//  PHASE 3 — Hero Name Gradient
// ============================================
function initHeroGradient() {
  const heroName = document.querySelector('.hero-name');
  if (!heroName) return;

  setTimeout(() => {
    heroName.classList.add('animate-gradient');
  }, 1300);
}

// ============================================
//  PHASE 3 — Auto Assign Reveal Classes
// ============================================
function assignRevealClasses() {

  document.querySelectorAll('.section-title').forEach(el => {
    el.classList.add('reveal');
  });

  document.querySelectorAll('.about-text').forEach(el => {
    el.classList.add('reveal');
  });

  document.querySelectorAll('.about-card').forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${i * 0.12}s`;
  });

  document.querySelectorAll('.skill-category').forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${i * 0.15}s`;
  });

  document.querySelectorAll('.timeline-item').forEach((el, i) => {
    el.classList.add('reveal-left');
    el.style.transitionDelay = `${i * 0.2}s`;
  });

  document.querySelectorAll('.project-card').forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${i * 0.15}s`;
  });

  document.querySelectorAll('.block-title').forEach(el => {
    el.classList.add('reveal');
  });

  document.querySelectorAll('.edu-card').forEach(el => {
    el.classList.add('reveal-left');
  });

  document.querySelectorAll('.cert-card').forEach((el, i) => {
    el.classList.add('reveal-right');
    el.style.transitionDelay = `${i * 0.15}s`;
  });

  document.querySelectorAll('.contact-card').forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${i * 0.1}s`;
  });
}

// ============================================
//  PHASE 3 — Skill Tags Pop-In
// ============================================
function initSkillTagsAnimation() {

  document.querySelectorAll('.skill-tags .tag').forEach((tag, i) => {
    tag.style.opacity   = '0';
    tag.style.transform = 'scale(0.6)';
    tag.style.transition = `
      opacity   0.35s ease ${i * 0.05}s,
      transform 0.35s ease ${i * 0.05}s,
      background 0.2s ease,
      color      0.2s ease
    `;
  });

  const skillObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.tag').forEach(tag => {
            tag.style.opacity   = '1';
            tag.style.transform = 'scale(1)';
          });
          skillObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  document.querySelectorAll('.skill-tags').forEach(el => {
    skillObserver.observe(el);
  });
}

// ============================================
//  PHASE 3 — Scroll Reveal
// ============================================
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    .forEach(el => observer.observe(el));
}

// ============================================
//  Footer Year
// ============================================
function initFooterYear() {
  const year = document.querySelector('.footer-year');
  if (year) year.textContent = new Date().getFullYear();
}

// ============================================
//  INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initPreloader();       
  initScrollProgress();    
  initBackToTop();
  initThemeToggle();      
  initFooterYear();
  initHeroGradient();
  assignRevealClasses();
  initScrollReveal();
  initSkillTagsAnimation();
});