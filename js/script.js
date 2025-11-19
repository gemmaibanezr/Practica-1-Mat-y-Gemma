document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    //  MENÚ HAMBURGUESA
    // ==========================
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu-overlay");

    if (hamburger && menu) {
        hamburger.addEventListener("click", () => {
            menu.classList.toggle("active");
        });
    }



    // ==========================
    //  CURSOR
    // ==========================
    const cursor = document.getElementById("cursor");

    if (cursor) {
        document.addEventListener("mousemove", (e) => {
            cursor.style.left = e.clientX + "px";
            cursor.style.top = e.clientY + "px";
        });
    }



// ==========================
//  ESTELA + ZIGZAG (solo index.html)
// ==========================
const canvas = document.getElementById("trail-canvas");
const plus = document.getElementById("plus-zigzag");

if (canvas && plus) {  // solo si existen
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let x = canvas.width / 2;
    let y = canvas.height / 2;
    let dir = 1;
    let speed = 2;
    let amplitude = canvas.height / 2 - 200;
    let angle = 0;

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    function animate() {
        requestAnimationFrame(animate);
        ctx.globalCompositeOperation = "destination-out";
        ctx.fillStyle = "rgba(0,0,0,0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.globalCompositeOperation = "lighter";
        angle += 0.02;
        y = canvas.height / 2 + Math.sin(angle * 2) * amplitude;
        x += speed * dir;

        if (x > canvas.width - 50 || x < 0) dir *= -1;

        ctx.fillStyle = "#FF6037";
        ctx.shadowBlur = 25;
        ctx.shadowColor = "#F82524";
        ctx.beginPath();
        ctx.arc(x + 20, y + 20, 8, 0, Math.PI * 2);
        ctx.fill();

        plus.style.transform = `translate(${x}px, ${y}px)`;
    }

    animate();
}

// ==========================
// AVISO SONIDO SOLO INDEX.HTML
// ==========================
const notice = document.getElementById("audio-notice");
const okBtn = document.getElementById("audio-ok");
const hoverSound = document.getElementById("hover-sound");

if (notice && okBtn && hoverSound) {

    // Revisar si ya lo vio antes
    const firstVisit = !localStorage.getItem("audioEnabled");

    if (firstVisit) {
        notice.classList.remove("hidden"); // Mostrar aviso la primera vez
    } else {
        notice.classList.add("hidden"); // Ocultar si ya lo vio
    }

    function enableAudio() {
        hoverSound.play().then(() => {
            hoverSound.pause();
            hoverSound.currentTime = 0;
        }).catch(() => {});

        notice.classList.add("hidden");
        localStorage.setItem("audioEnabled", "true"); // Guardar que ya activó
    }

    okBtn.addEventListener("click", enableAudio);
    document.addEventListener("click", enableAudio, { once: true });
}





    // ==========================
    //  LOGIN
    // ==========================
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", e => {
            e.preventDefault();

            const email = document.getElementById("floatingInput").value.trim();
            const pass = document.getElementById("floatingPassword").value.trim();

            if (!email || !pass) {
                alert("Por favor completa todos los campos.");
                return;
            }

            window.location.href = "./index.html";
        });
    }



    // ==========================
    //  ACORDEÓN TIPO 1 + 2
    // ==========================
    setupAcordeon(".evento-card", ".evento-header", ".evento-contenido", ".evento-toggle-indicator", false);
    setupAcordeon(".evento-card2", ".evento-header2", ".evento-contenido2", ".evento-toggle-indicator2", true);

});


// =====================================================
// FUNCIÓN GENERAL PARA AMBOS TIPOS
// =====================================================
function setupAcordeon(cardSelector, headerSelector, contentSelector, indicatorSelector, closeOthers) {

    const cards = document.querySelectorAll(cardSelector);

    cards.forEach(card => {
        const header = card.querySelector(headerSelector);

        header.addEventListener("click", () => {

            if (closeOthers) {
                document.querySelectorAll(cardSelector + ".open").forEach(other => {
                    if (other !== card) closeAcordeon(other, contentSelector, indicatorSelector);
                });
            }

            if (card.classList.contains("open")) {
                closeAcordeon(card, contentSelector, indicatorSelector);
            } else {
                openAcordeon(card, contentSelector, indicatorSelector);
            }
        });
    });
}


// ============================
// ABRIR
// ============================
function openAcordeon(card, contentSelector, indicatorSelector) {

    const content = card.querySelector(contentSelector);
    const indicator = card.querySelector(indicatorSelector);

    card.classList.add("open");
    indicator.textContent = "−";

    content.style.height = "auto";
    let fullHeight = content.scrollHeight;
    content.style.height = "0px";

    gsap.to(content, {
        height: fullHeight,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => content.style.height = "auto"
    });
}

// ============================
// CERRAR
// ============================
function closeAcordeon(card, contentSelector, indicatorSelector) {

    const content = card.querySelector(contentSelector);
    const indicator = card.querySelector(indicatorSelector);

    card.classList.remove("open");
    indicator.textContent = "+";

    gsap.to(content, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power2.in"
    });
}
