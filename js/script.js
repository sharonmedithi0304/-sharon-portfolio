// ── Loader ──────────────────────────────────
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
  }, 1200);
});

// ── Custom Cursor ────────────────────────────
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursorFollower');
const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
let mx = 0, my = 0, fx = 0, fy = 0;

if (hasFinePointer) {
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
  });

  function followCursor() {
    fx += (mx - fx) * 0.1;
    fy += (my - fy) * 0.1;
    follower.style.transform = `translate(${fx}px, ${fy}px) translate(-50%, -50%)`;
    requestAnimationFrame(followCursor);
  }
  followCursor();
} else {
  cursor.style.display = 'none';
  follower.style.display = 'none';
}

// ── Scroll Progress Bar ──────────────────────
const progressBar = document.getElementById('scrollProgress');
window.addEventListener('scroll', () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  progressBar.style.width = scrolled + '%';
}, { passive: true });

// ── Navbar scroll behavior ───────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ── Active nav highlight ─────────────────────
const navLinks = document.querySelectorAll('.nav-links a[data-section]');
const sections = document.querySelectorAll('section[id]');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(l => l.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[data-section="${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.35 });

sections.forEach(s => sectionObserver.observe(s));

// ── Hamburger Menu ───────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
const mobileLinks = document.querySelectorAll('.mobile-link');

hamburger.addEventListener('click', () => {
  const open = hamburger.classList.toggle('open');
  mobileNav.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

// ── Typewriter Effect ────────────────────────
const roles = [
  'Software Developer',
  'C++ & DSA Problem Solver',
  'Hackathon Builder',
  'Full-Stack Developer',
  'AI/ML Explorer',
  'LeetCode Problem Solver',
];
let roleIndex = 0, charIndex = 0, isDeleting = false;
const typeEl = document.getElementById('typeText');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function type() {
  const current = roles[roleIndex];
  if (isDeleting) {
    typeEl.textContent = current.substring(0, charIndex--);
  } else {
    typeEl.textContent = current.substring(0, charIndex++);
  }

  let speed = isDeleting ? 40 : 80;

  if (!isDeleting && charIndex > current.length) {
    isDeleting = true;
    speed = 1800;
  } else if (isDeleting && charIndex <= 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    charIndex = 0;
    speed = 400;
  }
  setTimeout(type, speed);
}

if (reducedMotion) {
  typeEl.textContent = roles[0];
} else {
  setTimeout(type, 2800);
}

// ── Scroll-triggered Fade-in ─────────────────
const fadeEls = document.querySelectorAll('.fade-in');
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

fadeEls.forEach(el => fadeObserver.observe(el));

// ── Card Tilt Effect (project/build cards only, fine pointers only) ──
if (hasFinePointer) {
  const cards = document.querySelectorAll('.build-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotX = ((y - cy) / cy) * -4;
      const rotY = ((x - cx) / cx) * 4;
      card.style.transform = `translateY(-8px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// ── Keyboard Navigation ──────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
});