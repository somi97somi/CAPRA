const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let goatImg = new Image();
goatImg.src = "goat.png"; // Deve stare nella stessa cartella

let groundY = canvas.height - 150; // punto di terra
let goat = {
  x: canvas.width / 2 - 60,
  y: groundY,
  width: 120,
  height: 120,
  dy: 0,
  jumping: false
};

function drawGoat() {
  ctx.drawImage(goatImg, goat.x, goat.y, goat.width, goat.height);
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Gravità
  if (goat.y < groundY) {
    goat.dy += 0.5; // accelerazione verso il basso
  } else {
    goat.dy = 0;
    goat.y = groundY;
    goat.jumping = false;
  }

  goat.y += goat.dy;

  drawGoat();
  requestAnimationFrame(update);
}

function jump() {
  if (!goat.jumping) {
    goat.dy = -12; // forza del salto
    goat.jumping = true;
  }
}

// Eventi touch e click
canvas.addEventListener("touchstart", jump);
canvas.addEventListener("mousedown", jump);

// Avvia il gioco solo quando l'immagine è pronta
goatImg.onload = () => {
  update();
};
