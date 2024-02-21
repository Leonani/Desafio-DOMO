document.addEventListener("DOMContentLoaded", function() {
  const elementsToAnimate = document.querySelectorAll('.animation-flicker, .animation-shadow');

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.7,
  };

  const flicker = (entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('flicker-in');
        }, index * 100); 
        
        observer.unobserve(entry.target);
      }
    });
  };
  const shadow = (entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('shadow-pop');
        }, index * 100); 
        
        observer.unobserve(entry.target);
      }
    });
  };

  const observerFlicker = new IntersectionObserver(flicker, options);
  const observerShadow = new IntersectionObserver(shadow, options);

  elementsToAnimate.forEach(element => {
    if (element.classList.contains('animation-flicker')) {
      observerFlicker.observe(element);
    } else if (element.classList.contains('animation-shadow')) {
      observerShadow.observe(element);
    }
  });

});

document.addEventListener("DOMContentLoaded", function() {
  const miBoton = document.getElementById("btnCambiarIcono");
  const miIcono = document.getElementById("cambiarIcono");

  miBoton.addEventListener("click", function() {
    // Cambiar la clase del icono según el estado actual
    if (miIcono.classList.contains("fa-chevron-up")) {
      miIcono.classList.remove("fa-chevron-up");
      miIcono.classList.add("fa-chevron-down");
    } else {
      miIcono.classList.remove("fa-chevron-down");
      miIcono.classList.add("fa-chevron-up");
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const miBoton = document.getElementById("btnCambiarIcono2");
  const miIcono = document.getElementById("cambiarIcono2");

  miBoton.addEventListener("click", function() {
    // Cambiar la clase del icono según el estado actual
    if (miIcono.classList.contains("fa-chevron-up")) {
      miIcono.classList.remove("fa-chevron-up");
      miIcono.classList.add("fa-chevron-down");
    } else {
      miIcono.classList.remove("fa-chevron-down");
      miIcono.classList.add("fa-chevron-up");
    }
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const miBoton = document.getElementById("btnCambiarIcono3");
  const miIcono = document.getElementById("cambiarIcono3");

  miBoton.addEventListener("click", function() {
    // Cambiar la clase del icono según el estado actual
    if (miIcono.classList.contains("fa-chevron-up")) {
      miIcono.classList.remove("fa-chevron-up");
      miIcono.classList.add("fa-chevron-down");
    } else {
      miIcono.classList.remove("fa-chevron-down");
      miIcono.classList.add("fa-chevron-up");
    }
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const miBoton = document.getElementById("btnCambiarIcono4");
  const miIcono = document.getElementById("cambiarIcono4");

  miBoton.addEventListener("click", function() {
    // Cambiar la clase del icono según el estado actual
    if (miIcono.classList.contains("fa-chevron-up")) {
      miIcono.classList.remove("fa-chevron-up");
      miIcono.classList.add("fa-chevron-down");
    } else {
      miIcono.classList.remove("fa-chevron-down");
      miIcono.classList.add("fa-chevron-up");
    }
  });
});