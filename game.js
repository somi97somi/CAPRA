const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let goatImg = new Image();
goatImg.src = "goat.png";

let groundY = canvas.height - 150; // punto di terra
let jumpHeight = 150; // altezza del salto

let goat = {
  x: canvas.width / 2 - 50,
  y: groundY,
  width: 120,
  height: 120,
  dy: 0,
  jumping: false
};

function drawGoat() {
  ctx.drawImage(goatImg, goat.x, goat.y, goat.width, goat.height);
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // gravità
  if (goat.y < groundY) {
    goat.dy += 0.5;
  } else {
    goat.dy = 0;
    goat.y = groundY;
    goat.jumping = false;
  }

  goat.y += goat.dy;

  drawGoat();
  requestAnimationFrame(gameLoop);
}

function jump() {
  if (!goat.jumping) {
    goat.dy = -12;
    goat.jumping = true;
  }
}

// Compatibilità touch e click
canvas.addEventListener("touchstart", jump);
canvas.addEventListener("mousedown", jump);

gameLoop();
