const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu-overlay');


hamburger.addEventListener('click', () => {
menu.classList.toggle('active');
});


// Cursor degradado
const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", e => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});
