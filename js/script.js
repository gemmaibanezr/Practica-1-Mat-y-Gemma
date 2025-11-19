// Espera a que el DOM esté completamente cargado 
$(document).ready(function() {
    
  // --- HAMBURGER TOGGLE ---
  const $hamburger = $('#hamburger');
  const $menu = $('#menu-overlay');

  if ($hamburger.length && $menu.length) {
    $hamburger.on('click', function() {
      $menu.toggleClass('active');
    });
  }

  // --- CURSOR DEGRADADO ---
  const $cursor = $("#cursor");
  if ($cursor.length) {
    $(document).on("mousemove", function(e) {
      $cursor.css({
        left: e.clientX,
        top: e.clientY
      });
    });
  }

  // --- FORMULARIO LOGIN ---
  const $form = $("form");
  if ($form.length) {
    $form.on("submit", function (e) {
      e.preventDefault();

      const email = $form.find("#floatingInput").val().trim();
      const password = $form.find("#floatingPassword").val().trim();

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
  const cards = $(".evento-card").get(); 
  
  function closeCard(card) {
    const content = card.querySelector(".evento-contenido");
    const header = card.querySelector(".evento-header");
    header.setAttribute("aria-expanded", "false");
    content.setAttribute("aria-hidden", "true");
    card.classList.remove("open");

    // Lógica para medir altura actual y animar desde ahí
    const currentH = content.scrollHeight;
    content.style.height = currentH + "px"; 

    gsap.killTweensOf(content);
    gsap.to(content, {
      height: 0,
      opacity: 0,
      duration: 0.45,
      ease: "power2.inOut",
      onComplete: () => {
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

    // Cerrar otros cards
    cards.forEach(c => {
      if (c !== card && c.classList.contains("open")) closeCard(c);
    });

    // Medición de altura: forzamos auto para obtener scrollHeight, luego animamos desde 0
    content.style.height = "auto";
    const targetH = content.scrollHeight;
    content.style.height = "0px"; 

    gsap.killTweensOf(content);
    gsap.to(content, {
      height: targetH,
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
      onComplete: () => {
        content.style.height = "auto"; 
      }
    });

    const indicator = card.querySelector(".evento-toggle-indicator");
    if (indicator) indicator.textContent = "−";

    // pequeñas animaciones internas
    const img = card.querySelector(".evento-img");
    const texto = card.querySelector(".evento-texto");
    const iframe = card.querySelector(".evento-video iframe");
    if (img) gsap.fromTo(img, {y: 12, opacity: 0}, {y:0, opacity:1, duration: 0.5, ease: "power2.out"});
    if (texto) gsap.fromTo(texto, {y: 8, opacity: 0}, {y:0, opacity:1, duration: 0.45, delay: 0.05});
    if (iframe) gsap.fromTo(iframe, {y: 10, opacity: 0}, {y:0, opacity:1, duration: 0.55, delay: 0.08});

    // Centrar el card en pantalla
    setTimeout(() => {
      card.scrollIntoView({behavior: "smooth", block: "center"});
    }, 200);
  }

  cards.forEach(card => {
    const header = card.querySelector(".evento-header");
    
    const toggle = (e) => {
      e && e.preventDefault && e.preventDefault(); 
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

  cards.forEach(card => {
    const header = card.querySelector(".evento-header2");
    
    const toggle = (e) => {
      e && e.preventDefault && e.preventDefault(); 
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