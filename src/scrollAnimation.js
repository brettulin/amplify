let lastScrollTop = 0;

function ScrollAnimation() {
  const header = document.getElementById('header'); // Move inside the function to ensure it's defined

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