const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let goatImg = new Image();
goatImg.src = "goat.png";

let goat = {
  x: canvas.width / 2 - 50,
  y: canvas.height - 150,
  width: 100,
  height: 100,
  dy: 0,
  jumping: false
};

function drawGoat() {
  ctx.drawImage(goatImg, goat.x, goat.y, goat.width, goat.height);
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // gravità
  if (goat.y < canvas.height - 150) {
    goat.dy += 0.5;
  } else {
    goat.dy = 0;
    goat.y = canvas.height - 150;
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

canvas.addEventListener("touchstart", jump);

gameLoop();