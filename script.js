const object = document.getElementById('object');
const gameContainer = document.getElementById('game-container');
// Altezza massima a cui l'oggetto può salire (es. 70% dell'altezza dello schermo)
const maxHeight = window.innerHeight * 0.7;
// Funzione per far salire l'oggetto
function moveUp() {
   object.style.bottom = `${maxHeight}px`;
}
// Funzione per far scendere l'oggetto
function moveDown() {
   object.style.bottom = '0px';
}
// Evento quando l'utente tocca lo schermo (per smartphone) o preme il mouse
gameContainer.addEventListener('touchstart', moveUp);
gameContainer.addEventListener('mousedown', moveUp);
// Evento quando l'utente rilascia lo schermo o il mouse
gameContainer.addEventListener('touchend', moveDown);
gameContainer.addEventListener('mouseup', moveDown);