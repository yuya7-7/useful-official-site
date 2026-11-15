/**
 * Useful Studio 57 - Main JavaScript
 * Mobile Navigation & Smooth Scroll Reveal
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mainNav = document.getElementById('main-nav');
  const navLinks = document.querySelectorAll('.nav-link, .nav-contact-btn');
  const body = document.body;

  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', () => {
      const isActive = mainNav.classList.toggle('active');
      mobileToggle.classList.toggle('active');
      body.classList.toggle('no-scroll', isActive);
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        mobileToggle.classList.remove('active');
        body.classList.remove('no-scroll');
      });
    });
  }

  // Subtle Header Shadow on Scroll
  const header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 16) {
        header.style.boxShadow = '0 4px 20px rgba(17, 20, 24, 0.05)';
      } else {
        header.style.boxShadow = 'none';
      }
    });
  }

  // Smooth fade-in reveal for Bento Cards
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.06
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll(
    '.bento-card, .strength-card, .studio-info-card, .contact-card'
  );
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(12px)';
    el.style.transition = 'opacity 0.35s ease-out, transform 0.35s ease-out';
    observer.observe(el);
  });
});
