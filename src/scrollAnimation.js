let lastScrollTop = 0;

function ScrollAnimation() {
  const header = document.getElementById('header'); // Get header element
  const headerHeight = header.offsetHeight; // Get the full height of the header
  
  window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
      // Scroll Down - completely hide header
      header.style.top = `-${headerHeight + 10}px`; // Add extra 10px to ensure full hide
    } else {
      // Scroll Up - show header again
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