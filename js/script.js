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



// =========================
// ESTELA + ZIGZAG RESPONSIVA
// =========================
if (document.getElementById("plus-zigzag") && document.getElementById("trail-canvas")) {

    const plus = document.getElementById("plus-zigzag");
    const canvas = document.getElementById("trail-canvas");
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let x = canvas.width / 2;
    let y = canvas.height / 2;
    let dir = 1;
    let speed = 2;
    let amplitude = canvas.height / 2 - 200;
    let angle = 0;

    function animate() {
        requestAnimationFrame(animate);

        // Borrado gradual
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
// AVISO SONIDO (solo index.html)
// ==========================
const notice = document.getElementById("audio-notice");
const okBtn = document.getElementById("audio-ok");
const bgMusic = document.getElementById("background-audio");

if (notice && okBtn && bgMusic) {

    function enableAudio() {
        // Ocultar aviso
        notice.classList.add("hidden");

        // Activar audio de fondo en bucle
        bgMusic.volume = 0.6;
        bgMusic.loop = true;
        bgMusic.play().catch(() => {
            // Si el navegador bloquea autoplay, reproducir al siguiente click
            document.addEventListener("click", () => bgMusic.play(), { once: true });
        });

        // Guardar estado para que no vuelva a mostrar el aviso
        localStorage.setItem("audioActivated", "true");
    }

    // Si ya aceptó antes, ocultar aviso y reproducir audio de fondo
    if (localStorage.getItem("audioActivated") === "true") {
        notice.classList.add("hidden");
        bgMusic.volume = 0.6;
        bgMusic.loop = true;
        bgMusic.play().catch(() => {
            document.addEventListener("click", () => bgMusic.play(), { once: true });
        });
    } else {
        okBtn.addEventListener("click", enableAudio, { once: true });
        // También ocultar aviso al hacer click en cualquier parte
        document.addEventListener("click", enableAudio, { once: true });
        window.addEventListener("scroll", () => { notice.classList.add("hidden"); }, { once: true });
    }
}






// ==========================
// SONIDO VÍDEO DANZA
// ==========================
document.addEventListener("DOMContentLoaded", () => {

    const video = document.getElementById("video-danza");

    // Solo funciona en danza.html
    if (!video) return;

    function enableVideoSound() {
        video.muted = false;

        video.play()
            .then(() => {
                console.log(" Video con sonido activado por clic");
            })
            .catch(err => {
                console.warn("No se pudo reproducir:", err);
            });

        document.removeEventListener("click", enableVideoSound);
    }

   
    document.addEventListener("click", enableVideoSound, { once: true });
});





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

// ==========================
//  AVISO + AUDIO GLOBAL
// ==========================
const audioNotice = document.getElementById("audio-notice");
const audioOk = document.getElementById("audio-ok");
const bgMusic = document.getElementById("bg-music"); 

// Ocultar aviso si ya se aceptó antes
if (localStorage.getItem("audioActivated") === "true") {
    if (audioNotice) audioNotice.classList.add("hidden");
    iniciarAudioGlobal();
} else {
   
    if (audioNotice) audioNotice.classList.remove("hidden");
}


if (audioOk) {
    audioOk.addEventListener("click", () => {
        localStorage.setItem("audioActivated", "true");
        if (audioNotice) audioNotice.classList.add("hidden");
        iniciarAudioGlobal();
    });
}

// Función que inicia el audio global sin reiniciarlo al hacer hover
function iniciarAudioGlobal() {
    if (!bgMusic) return;

    bgMusic.volume = 1.0;

    // intentar reproducir
    bgMusic.play().catch(() => {
       
        document.addEventListener("click", () => bgMusic.play(), { once: true });
    });
}


// ===== TELÓN — SE ABRE AL HACER SCROLL UNA SOLA VEZ =====

const telonContainer = document.getElementById("telon-container");
const telonSound = document.getElementById("sound-telon");

let telonAbierto = false;

function abrirTelon() {

    if (telonAbierto) return;
    telonAbierto = true;


    if (telonSound) {
        telonSound.currentTime = 0;
        telonSound.play().catch(() => {});
    }

    // Animación de apertura
    const telonContainer = document.getElementById("telon-container");
if (telonContainer) {
    telonContainer.classList.add("telon-open");
}



    setTimeout(() => {
        telonContainer.style.display = "none";
    }, 1500);
}

// Detectar primer scroll REAL
window.addEventListener("scroll", abrirTelon, { once: true });


window.addEventListener("mousemove", abrirTelon, { once: true });
window.addEventListener("click", abrirTelon, { once: true });



// Slider por clic en móvil
document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth <= 768) {
        const cards = document.querySelectorAll(".card");
        let index = 0;

        // estilo slider
        const container = document.querySelector(".container");
        container.style.display = "flex";
        container.style.flexDirection = "row";
        container.style.overflowX = "hidden";
        container.style.scrollBehavior = "smooth";

        // cada card = ancho pantalla
        cards.forEach(card => {
            card.style.minWidth = "100%";
        });

        // clic avanza
        cards.forEach(card => {
            card.addEventListener("click", () => {
                index++;
                if (index >= cards.length) index = 0;
                container.scrollTo({
                    left: index * container.clientWidth,
                    behavior: "smooth"
                });
            });
        });
    }
});



// ACTIVAR AUDIO AL PULSAR "ENTENDIDO"
document.addEventListener("DOMContentLoaded", () => {
    const audioBtn = document.getElementById("audio-ok");
    const audioNotice = document.getElementById("audio-notice");
    const audio = document.getElementById("background-audio");

    audio.volume = 0.6; 

    audioBtn.addEventListener("click", () => {
        audioNotice.classList.add("hidden");

        
        audio.play()
            .catch(err => console.log("Error de reproducción:", err));


        setTimeout(() => {
            audioNotice.style.display = "none";
        }, 600);
    });
});

