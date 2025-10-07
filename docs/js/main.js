/**
 * Captain Derkin Website - Main JavaScript
 * Handles navigation, smooth scrolling, and interactions
 */

(function() {
  'use strict';

  // ===================================
  // Mobile Navigation Toggle
  // ===================================
  
  function initMobileNav() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (!navToggle || !navMenu) return;
    
    navToggle.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      
      this.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('is-active');
      
      // Prevent body scroll when menu is open on mobile
      document.body.style.overflow = isExpanded ? '' : 'hidden';
    });
    
    // Close menu when clicking nav links
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('is-active');
        document.body.style.overflow = '';
      });
    });
    
    // Close menu on window resize if open
    let resizeTimer;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        if (window.innerWidth > 768) {
          navToggle.setAttribute('aria-expanded', 'false');
          navMenu.classList.remove('is-active');
          document.body.style.overflow = '';
        }
      }, 250);
    });
  }

  // ===================================
  // Smooth Scrolling for Anchor Links
  // ===================================
  
  function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Skip empty anchors or just '#'
        if (!href || href === '#') {
          e.preventDefault();
          return;
        }
        
        const target = document.querySelector(href);
        
        if (target) {
          e.preventDefault();
          
          const headerHeight = document.getElementById('header')?.offsetHeight || 70;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // ===================================
  // Header Scroll Effect
  // ===================================
  
  function initHeaderScroll() {
    const header = document.getElementById('header');
    if (!header) return;
    
    let lastScrollTop = 0;
    const scrollThreshold = 100;
    
    window.addEventListener('scroll', function() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > scrollThreshold) {
        header.style.boxShadow = '0 2px 16px rgba(0, 0, 0, 0.3)';
      } else {
        header.style.boxShadow = '';
      }
      
      lastScrollTop = scrollTop;
    }, { passive: true });
  }

  // ===================================
  // Screenshot Gallery (Optional Lightbox)
  // ===================================
  
  function initScreenshotGallery() {
    const screenshots = document.querySelectorAll('.screenshot-item');
    
    if (screenshots.length === 0) return;
    
    // Simple lightbox functionality
    screenshots.forEach((item, index) => {
      item.addEventListener('click', function() {
        const img = this.querySelector('img');
        if (!img) return;
        
        // Create lightbox
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
          <div class="lightbox-backdrop"></div>
          <div class="lightbox-content">
            <button class="lightbox-close" aria-label="Close lightbox">&times;</button>
            <img src="${img.src}" alt="${img.alt}" />
          </div>
        `;
        
        // Add styles dynamically
        if (!document.getElementById('lightbox-styles')) {
          const style = document.createElement('style');
          style.id = 'lightbox-styles';
          style.textContent = `
            .lightbox {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              z-index: 9999;
              display: flex;
              align-items: center;
              justify-content: center;
              animation: fadeIn 0.2s ease;
            }
            .lightbox-backdrop {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-color: rgba(0, 0, 0, 0.9);
              cursor: pointer;
            }
            .lightbox-content {
              position: relative;
              max-width: 90vw;
              max-height: 90vh;
              z-index: 1;
            }
            .lightbox-content img {
              max-width: 100%;
              max-height: 90vh;
              display: block;
              border-radius: 8px;
            }
            .lightbox-close {
              position: absolute;
              top: -40px;
              right: 0;
              background: none;
              border: none;
              color: white;
              font-size: 2rem;
              cursor: pointer;
              padding: 0;
              width: 40px;
              height: 40px;
              line-height: 1;
              transition: opacity 0.2s;
            }
            .lightbox-close:hover {
              opacity: 0.7;
            }
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
          `;
          document.head.appendChild(style);
        }
        
        // Add to body
        document.body.appendChild(lightbox);
        document.body.style.overflow = 'hidden';
        
        // Close handlers
        function closeLightbox() {
          lightbox.remove();
          document.body.style.overflow = '';
        }
        
        lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
        lightbox.querySelector('.lightbox-backdrop').addEventListener('click', closeLightbox);
        
        // Keyboard support
        function handleKeyboard(e) {
          if (e.key === 'Escape') {
            closeLightbox();
            document.removeEventListener('keydown', handleKeyboard);
          }
        }
        document.addEventListener('keydown', handleKeyboard);
      });
    });
  }

  // ===================================
  // Lazy Loading Enhancement
  // ===================================
  
  function initLazyLoading() {
    if ('loading' in HTMLImageElement.prototype) {
      // Browser supports native lazy loading
      return;
    }
    
    // Fallback for browsers that don't support lazy loading
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.src;
            img.removeAttribute('loading');
            imageObserver.unobserve(img);
          }
        });
      });
      
      lazyImages.forEach(img => imageObserver.observe(img));
    } else {
      // Fallback for old browsers - load all images
      lazyImages.forEach(img => {
        img.src = img.src;
        img.removeAttribute('loading');
      });
    }
  }

  // ===================================
  // Update Store Links (placeholder for future)
  // ===================================
  
  function updateStoreLinks() {
    // When you have actual store URLs, you can update them here
    // For now, the links in HTML are placeholders (#)
    
    // Example:
    // const appStoreLinks = document.querySelectorAll('a[aria-label*="App Store"]');
    // appStoreLinks.forEach(link => {
    //   link.href = 'https://apps.apple.com/your-app-link';
    // });
    
    // const playStoreLinks = document.querySelectorAll('a[aria-label*="Google Play"]');
    // playStoreLinks.forEach(link => {
    //   link.href = 'https://play.google.com/store/apps/details?id=your.app.id';
    // });
  }

  // ===================================
  // Analytics Helper (optional)
  // ===================================
  
  function trackEvent(category, action, label) {
    // Placeholder for analytics tracking
    // Implement with your preferred analytics service
    // Example: Google Analytics, Plausible, etc.
    
    if (typeof gtag === 'function') {
      gtag('event', action, {
        'event_category': category,
        'event_label': label
      });
    }
    
    console.log('Event:', category, action, label);
  }
  
  // Track store button clicks
  function initAnalytics() {
    const storeButtons = document.querySelectorAll('.btn-store');
    storeButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        const storeName = this.getAttribute('aria-label');
        trackEvent('Store', 'Click', storeName);
      });
    });
  }

  // ===================================
  // Initialize All
  // ===================================
  
  function init() {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
      return;
    }
    
    initMobileNav();
    initSmoothScroll();
    initHeaderScroll();
    initScreenshotGallery();
    initLazyLoading();
    updateStoreLinks();
    initAnalytics();
    
    console.log('Captain Derkin website initialized ⚓');
  }
  
  // Start initialization
  init();

})();
