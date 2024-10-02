let lastScrollTop = 0;

function ScrollAnimation() {
  const header = document.getElementById('header'); // Ensure header is defined

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

  // Smooth scroll for anchor links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

export default ScrollAnimation;