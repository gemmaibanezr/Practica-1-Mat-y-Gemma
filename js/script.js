// Espera a que el DOM esté cargado y ejecuta todas las inicializaciones
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

      const email = form.querySelector("#floatingInput").value.trim();
      const password = form.querySelector("#floatingPassword").value.trim();

      if (!email || !password) {
        alert("Por favor completa todos los campos.");
        return;
      }

      window.location.href = "./index.html";
    });
  }
  
  // pequeño retardo para asegurar que todo está en DOM y CSS cargado
  setTimeout(setupEventos, 50);

});

// GSAP - LÓGICA DE ACORDEÓN 

function setupEventos() {
  const cards = Array.from(document.querySelectorAll(".evento-card"));

  function closeCard(card) {
    const content = card.querySelector(".evento-contenido");
    const header = card.querySelector(".evento-header");
    header.setAttribute("aria-expanded", "false");
    content.setAttribute("aria-hidden", "true");
    card.classList.remove("open");

    // Si está en auto, tomamos altura actual para animar desde ahí
    const currentH = content.scrollHeight;
    content.style.height = currentH + "px"; // Se mantiene: prepara el punto de partida

    gsap.killTweensOf(content);
    gsap.to(content, {
      height: 0,
      opacity: 0,
      duration: 0.45,
      ease: "power2.inOut",
      onComplete: () => {
        // limpiar inline style cuando termine
        content.style.height = "";
      }
    });

    const indicator = card.querySelector(".evento-toggle-indicator");
    if (indicator) indicator.textContent = "+";
  }

  function openCard(card) {
    const content = card.querySelector(".evento-contenido");
    const header = card.querySelector(".evento-header");
    header.setAttribute("aria-expanded", "true");
    content.setAttribute("aria-hidden", "false");
    card.classList.add("open");

    // cerrar otros cards (si quieres solo 1 abierto)
    cards.forEach(c => {
      if (c !== card && c.classList.contains("open")) closeCard(c);
    });

    // Medimos altura real: forzamos auto temporalmente para obtener scrollHeight
    content.style.height = "auto";
    const targetH = content.scrollHeight;
    content.style.height = "0px"; // volver a 0 para animar desde 0

    gsap.killTweensOf(content);
    gsap.to(content, {
      height: targetH,
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
      onComplete: () => {
        content.style.height = "auto"; // permitir reflow interno
      }
    });

    const indicator = card.querySelector(".evento-toggle-indicator");
    if (indicator) indicator.textContent = "−";

    // pequeñas animaciones internas (opcional)
    const img = card.querySelector(".evento-img");
    const texto = card.querySelector(".evento-texto");
    const iframe = card.querySelector(".evento-video iframe");
    if (img) gsap.fromTo(img, {y: 12, opacity: 0}, {y:0, opacity:1, duration: 0.5, ease: "power2.out"});
    if (texto) gsap.fromTo(texto, {y: 8, opacity: 0}, {y:0, opacity:1, duration: 0.45, delay: 0.05});
    if (iframe) gsap.fromTo(iframe, {y: 10, opacity: 0}, {y:0, opacity:1, duration: 0.55, delay: 0.08});

    // Centrar el card en pantalla para que usuario vea contenido
    setTimeout(() => {
      card.scrollIntoView({behavior: "smooth", block: "center"});
    }, 200);
  }

  cards.forEach(card => {
    const header = card.querySelector(".evento-header");
    
    const toggle = (e) => {
      e && e.preventDefault && e.preventDefault(); // Prevenir acción por defecto
      
      // CLAVE: Detener la propagación del evento para evitar eventos fantasmas
      e && e.stopPropagation && e.stopPropagation(); 

      if (card.classList.contains("open")) closeCard(card);
      else openCard(card);
    };
    
    header.addEventListener("click", toggle);
    header.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle(e);
      }
    });
  });
}