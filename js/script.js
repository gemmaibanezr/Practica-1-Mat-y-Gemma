const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu-overlay');


hamburger.addEventListener('click', () => {
menu.classList.toggle('active');
});