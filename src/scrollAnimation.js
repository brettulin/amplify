let lastScrollTop = 0;
const header = document.getElementById('header');

function ScrollAnimation() {
  window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      // Scroll Down - hide header
      header.style.top = '-80px';
    } else {
      // Scroll Up - show header
      header.style.top = '0';
    }
    lastScrollTop = scrollTop;
  });
}

export default ScrollAnimation;