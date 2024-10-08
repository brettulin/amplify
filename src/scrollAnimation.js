// src/scrollAnimation.js
let lastScrollTop = 0;

function ScrollAnimation() {
  const header = document.getElementById('header');
  if (!header) return;

  const headerHeight = header.offsetHeight;

  window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
      // Scroll Down - hide header
      header.style.top = `-${headerHeight + 10}px`;
    } else {
      // Scroll Up - show header
      header.style.top = '0';
    }

    lastScrollTop = scrollTop;
  });
}

export default ScrollAnimation;
