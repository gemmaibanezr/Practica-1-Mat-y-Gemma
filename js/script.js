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