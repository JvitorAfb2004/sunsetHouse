document.addEventListener('DOMContentLoaded', function() {
    // Scroll animation
    const scrollDown = document.querySelector('.scroll-down');
    if (scrollDown) {
        scrollDown.addEventListener('click', function() {
            const benefitsSection = document.getElementById('benefits');
            benefitsSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Fade-in animation
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const fadeInOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };
    
    const fadeInObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, fadeInOptions);
    
    fadeElements.forEach(element => {
        fadeInObserver.observe(element);
    });

    // Add animation delay to stagger elements
    document.querySelectorAll('.benefits-list li, .objection, .social-proof-features .feature').forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.1}s`;
    });

    // Mobile menu toggle (if needed in the future)
    // const menuToggle = document.querySelector('.menu-toggle');
    // const navMenu = document.querySelector('.nav-menu');
    // if (menuToggle && navMenu) {
    //     menuToggle.addEventListener('click', function() {
    //         navMenu.classList.toggle('active');
    //         menuToggle.classList.toggle('active');
    //     });
    // }
});

  const items = document.querySelectorAll('.gallery-item');
  const fullscreen = document.getElementById('fullscreen');
  const fullscreenImg = document.getElementById('fullscreen-img');

  items.forEach(item => {
    item.addEventListener('click', () => {
      const imgSrc = item.getAttribute('data-img');
      fullscreenImg.src = imgSrc;
      fullscreen.style.display = 'flex';
    });
  });

  function closeFullscreen() {
    fullscreen.style.display = 'none';
    fullscreenImg.src = '';
  }

