/**
 * Useful Studio 57 - Main JavaScript
 * Full Mobile Navigation & Interactive Features
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

  // Smooth Header Shadow on Scroll
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
    } else {
      header.style.boxShadow = 'none';
    }
  });

  // Intersection Observer for smooth reveal
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.08
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll('.strength-card, .service-card, .product-card, .metric-card');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out';
    observer.observe(el);
  });
});
