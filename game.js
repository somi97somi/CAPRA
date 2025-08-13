const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let groundY = canvas.height - 150; // punto "terra"

let goat = {
  x: canvas.width / 2 - 50,
  y: groundY,
  width: 100,
  height: 100,
  dy: 0,
  jumping: false
};

function drawGoat() {
  ctx.fillStyle = "red"; // Capra provvisoria
  ctx.fillRect(goat.x, goat.y, goat.width, goat.height);
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Gravità
  if (goat.y < groundY) {
    goat.dy += 0.5;
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
  console.log("Salto!"); // Debug
  if (!goat.jumping) {
    goat.dy = -12;
    goat.jumping = true;
  }
}

canvas.addEventListener("touchstart", jump);
canvas.addEventListener("mousedown", jump);

update();
