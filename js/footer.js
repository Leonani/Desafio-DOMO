document.addEventListener("DOMContentLoaded", function() {
  var goToTopBtn = document.getElementById('scrollToTop');

  goToTopBtn.addEventListener('click', function() {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
});