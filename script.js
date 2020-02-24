// SECTION HTML
const canvas = document.getElementById("canvas");
var canvasPosition = canvas.getBoundingClientRect() // Nos indica la posición de top,left,rigth y bottom del canvas
const dot = document.getElementById("personaje");
var dotTop = 275; // Situamos al personaje en el eje Y
var dotLeft = 475; // Situamos al personaje en el eje X

//Al empezar el personaje no debería verse: display:none o visibility: hidden en css
//Cuando pulsas el botón start aparece:
//const buttonStart = document.getElementById("id");
//buttonStart.addEventListener("click", function (e){
//    --//Cambiar estado personaje en Css
//})

// MOVIMIENTO DEL PERSONAJE:

// 1.Ver coordenadas del puntero
canvas.addEventListener("mousemove", function (e) {
  var mousePositionX = e.clientX - (canvasPosition.left + 8);
  var mousePositionY = e.clientY - (canvasPosition.top + 8);
  var coor = "Coordinates: (" + mousePositionX + "," + mousePositionY + ")";
  document.getElementById("demo").innerHTML = coor;

  // 2. Relacionar la posición del dot con puntero
  dot.style.left = mousePositionX - 8 + "px";
  dot.style.top = mousePositionY - 8 + "px";

  // 3. Alerta LOSE
  if (e.clientX <= canvasPosition.left || e.clientX >= canvasPosition.right) {
    console.log("U LOSE");
  }
  if (e.clientY <= canvasPosition.top || e.clientY >= canvasPosition.bottom) {
    console.log("U LOSE");
  }
  //.addEventListener("mouseleave", restartGame (e) )
})

// APARACIÓN DE ENEMIGOS

// 1. Generador de Enemigos

function addEnemy() {
  var randomNumber = Math.ceil(Math.random() * 99500);
  var newEnemy = document.createElement("div");
  newEnemy.style.left = Math.ceil(Math.random() * 995) + "px";
  newEnemy.classList.add("enemy");
  newEnemy.id = "enemy" + randomNumber;
  canvas.appendChild(newEnemy);
  var movementEnemy = document.getElementById("enemy" + randomNumber);
  movementEnemy.style.top = 0 + "px";
  let movement = setInterval(function () {
    movementEnemy.style.top = parseInt(movementEnemy.style.top.slice(0, movementEnemy.style.top.length - 2)) + 1 + "px";
    if (movementEnemy.style.top == "590px") {
      clearInterval(movement);
      movementEnemy.remove();
    }
  }, 10);
}
var randomEnemies = setInterval(() => {
  addEnemy()
}, 200);

function restartGame() {
  alert("U LOSE");
}

//Necesitamos el boton START para establecer un setInterval para los niveles  y otro para la vida
//const buttonStart = document.getElementById("id");
//buttonStart.addEventListener("click", function (e){
//    --//timerId = setInterval(function(){}, time)
//})
//clearInterval(timerId) when LOSE;




