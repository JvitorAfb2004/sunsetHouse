// GALLERY CAROUSEL
const carousel = document.getElementById('gallery-carousel');
const leftBtn = document.querySelector('.gallery-arrow.left');
const rightBtn = document.querySelector('.gallery-arrow.right');

leftBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: -300, behavior: 'smooth' });
});

rightBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: 300, behavior: 'smooth' });
});

// FADE-IN ON SCROLL
const fadeIns = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

fadeIns.forEach(el => {
  observer.observe(el);
});



document.addEventListener('DOMContentLoaded', () => {
  const faders = document.querySelectorAll('.fade-in');

  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add('visible');
        appearOnScroll.unobserve(entry.target);
      }
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});
