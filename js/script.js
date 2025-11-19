// ==========================
//  MENÚ HAMBURGUESA
// ==========================
$(document).ready(function () {
    const $hamburger = $('#hamburger');
    const $menu = $('#menu-overlay');

    if ($hamburger.length && $menu.length) {
        $hamburger.on('click', function () {
            $menu.toggleClass('active');
        });
    }

    // ==========================
    //  CURSOR
    // ==========================
    const $cursor = $("#cursor");
    if ($cursor.length) {
        $(document).on("mousemove", function (e) {
            $cursor.css({
                left: e.clientX,
                top: e.clientY
            });
        });
    }


        // ==========================
    // ESTELA +
    // ==========================
const plus = document.getElementById("plus-zigzag");
const canvas = document.getElementById("trail-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let x = canvas.width / 2;
let y = canvas.height / 2;
let direction = 1;
let speed = 2;
let amplitude = canvas.height / 2 - 100; 
let angle = 0;

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Guardamos el modo original
ctx.globalCompositeOperation = "source-over";

function animate() {
    requestAnimationFrame(animate);

    //  BORRADO SUAVE SIN COLOR — totalmente transparente
    ctx.globalCompositeOperation = "destination-out";
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Volvemos al modo normal para dibujar la estela
    ctx.globalCompositeOperation = "lighter";

    angle += 0.03;
y = canvas.height / 2 + Math.sin(angle * 2) * amplitude;
    x += speed * direction;

    if (x > canvas.width - 50 || x < 0) {
        direction *= -1;
    }

    // Estela luminosa sin pintar fondo
    ctx.fillStyle = "rgba(255, 0, 150, 1)";
    ctx.shadowBlur = 25;
    ctx.shadowColor = "#00aaff";

    ctx.beginPath();
    ctx.arc(x + 20, y + 20, 8, 0, Math.PI * 2);
    ctx.fill();

    // Mover el símbolo +
    plus.style.transform = `translate(${x}px, ${y}px)`;
}

animate();



    // ==========================
    //  LOGIN
    // ==========================
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

    // ==========================
    //  Acordeón de EVENTOS música/danza
    // ==========================
    setupEventosTipo1();

    // ==========================
    //  Acordeón de TEATRO (evento-card2)
    // ==========================
    setupEventosTipo2();
});


// ===============================================
//  1) EVENTOS TIPO 1: .evento-card
// ===============================================
function setupEventosTipo1() {

    const cards = document.querySelectorAll(".evento-card");

    cards.forEach(card => {
        const header = card.querySelector(".evento-header");

        header.addEventListener("click", () => toggleCardTipo1(card));
        header.addEventListener("keydown", e => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleCardTipo1(card);
            }
        });
    });

}

function toggleCardTipo1(card) {
    if (card.classList.contains("open")) closeCardTipo1(card);
    else openCardTipo1(card);
}

function openCardTipo1(card) {
    const content = card.querySelector(".evento-contenido");
    const indicator = card.querySelector(".evento-toggle-indicator");

    card.classList.add("open");
    indicator.textContent = "−";

    content.style.height = "auto";
    const targetH = content.scrollHeight;
    content.style.height = "0px";

    gsap.to(content, {
        height: targetH,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => content.style.height = "auto"
    });
}

function closeCardTipo1(card) {
    const content = card.querySelector(".evento-contenido");
    const indicator = card.querySelector(".evento-toggle-indicator");

    card.classList.remove("open");
    indicator.textContent = "+";

    gsap.to(content, {
        height: 0,
        opacity: 0,
        duration: 0.45,
        ease: "power2.in"
    });
}



// ===============================================
//  2) EVENTOS TIPO 2 (TEATRO): .evento-card2
// ===============================================
function setupEventosTipo2() {

    const cards = document.querySelectorAll(".evento-card2");

    cards.forEach(card => {
        const header = card.querySelector(".evento-header2");

        header.addEventListener("click", () => toggleCardTipo2(card));
        header.addEventListener("keydown", e => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleCardTipo2(card);
            }
        });
    });
}

function toggleCardTipo2(card) {
    if (card.classList.contains("open")) closeCardTipo2(card);
    else openCardTipo2(card);
}

function openCardTipo2(card) {
    const content = card.querySelector(".evento-contenido2");
    const indicator = card.querySelector(".evento-toggle-indicator2");

    // Cerrar otros
    document.querySelectorAll(".evento-card2.open").forEach(c => {
        if (c !== card) closeCardTipo2(c);
    });

    card.classList.add("open");
    indicator.textContent = "−";

    content.style.height = "auto";
    const targetH = content.scrollHeight;
    content.style.height = "0px";

    gsap.to(content, {
        height: targetH,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => content.style.height = "auto"
    });
}

function closeCardTipo2(card) {
    const content = card.querySelector(".evento-contenido2");
    const indicator = card.querySelector(".evento-toggle-indicator2");

    card.classList.remove("open");
    indicator.textContent = "+";

    gsap.to(content, {
        height: 0,
        opacity: 0,
        duration: 0.45,
        ease: "power2.in"
    });
}