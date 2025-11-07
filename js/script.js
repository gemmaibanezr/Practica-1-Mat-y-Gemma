const plus = document.getElementById("plus");

let x = 0;
let y = 0;
let dir = 1; // 1 = derecha, -1 = izquierda

function animate() {
  // Avance diagonal
  x += 4 * dir;
  y += 2;

  // Mover el + sin transform
  plus.style.left = x + "px";
  plus.style.top = y + "px";

  // Estela naciendo exactamente donde está el +
  const dot = document.createElement("div");
  dot.className = "trail";
  dot.style.left = x + "px";
  dot.style.top = y + "px";
  document.body.appendChild(dot);

  // Rebotar laterales
  if (x > window.innerWidth - 30) dir = -1;
  if (x < 0) dir = 1;

  // Detener cuando llega al final
  if (y < document.body.scrollHeight - 100) {
    requestAnimationFrame(animate);
  }
}

animate();
