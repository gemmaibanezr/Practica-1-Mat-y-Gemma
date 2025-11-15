// Espera a que el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {

  // --- HAMBURGER TOGGLE ---
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu-overlay');

  if (hamburger && menu) {
    hamburger.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  }

  // --- CURSOR DEGRADADO ---
  const cursor = document.getElementById("cursor");
  if (cursor) {
    document.addEventListener("mousemove", e => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });
  }

  // --- FORMULARIO LOGIN ---
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Evita que el formulario haga submit real

      // Obtener valores de los campos
      const email = form.querySelector("#floatingInput").value.trim();
      const password = form.querySelector("#floatingPassword").value.trim();

      // Validación simple
      if (!email || !password) {
        alert("Por favor completa todos los campos.");
        return;
      }

      // Redirección al index.html
      window.location.href = "./index.html";
    });
  }

});