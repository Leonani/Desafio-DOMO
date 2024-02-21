document.addEventListener("DOMContentLoaded", function() {
  const miBoton = document.getElementById("btnCambiarHamburguesa");
  const miIcono = document.getElementById("cambiarHamburguesa");

  miBoton.addEventListener("click", function() {
    // Cambiar la clase del icono según el estado actual
    if (miIcono.classList.contains("fa-x")) {
      miIcono.classList.remove("fa-x");
      miIcono.classList.add("fa-fa-bars");
    } else {
      miIcono.classList.remove("fa-fa-bars");
      miIcono.classList.add("fa-x");
    }
  });
});