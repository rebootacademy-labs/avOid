const canvas = document.getElementById("canvas");
var canvasPosition = canvas.getBoundingClientRect() // Nos indica la posición de top,left,rigth y bottom del canvas
const dot = document.getElementById("personaje");
const enemy = document.getElementById("enemigo");
var dotTop; // Situamos al personaje en el eje Y
var dotLeft; // Situamos al personaje en el eje X
var dotBottom;
var dotRight;
var enemyTop = 100; 
var enemyLeft = 600;
var enemyBottom = 118;
var enemyRight = 618;

//Al empezar el personaje no debería verse: display:none o visibility: hidden en css
//Cuando pulsas el botón start aparece:
//const buttonStart = document.getElementById("id");
//buttonStart.addEventListener("click", function (e){
//    --//Cambiar estado personaje en Css
//})

// MOVIMIENTO DEL PERSONAJE:

// 1.Ver coordenadas del puntero
canvas.addEventListener("mousemove", function (e) {
  var canvasMouseX = e.clientX - (canvasPosition.left + 12);
  var canvasMouseY = e.clientY - (canvasPosition.top + 12);
  var coor = "Canvas Coordinates: (" + canvasMouseX + "," + canvasMouseY + ")";
  document.getElementById("demo").innerHTML = coor;

// 2. Relacionar la posición del dot con puntero
  dotLeft = canvasMouseX - dot.offsetWidth / 2;
  dotTop = canvasMouseY - dot.offsetHeight / 2;
  dotRight = dotLeft + dot.offsetWidth;
  dotBottom = dotTop + dot.offsetHeight;
  dot.style.left = dotLeft + "px";
  dot.style.top = dotTop + "px";
  dot.style.right = dotRight + "px";
  dot.style.bottom = dotBottom + "px";

// ALERTA LOSE
  if (dotLeft <= 0 || dotRight >= 1000) {
   console.log("U LOSE");//Cambiar console por desactivar display:none de la pantalla LOSE
  }
  if (dotTop <= 0 || dotBottom >= 600) {
    console.log("U LOSE");
  }
  // También podemos plantearlo sin calculos con un canvas.addEventListener("mouseleave", restartGame (e) )

//COLISION
/*
//Cuadrada
  if(dotLeft < enemyLeft + 18   &&
    dotTop < enemyTop + 18  &&
    dotLeft + 18  > enemyLeft  &&
    dotTop + 18 > enemyTop){
      alert("LOSE");
    }
*/
//Circular

    var sumRadios;
    var x;
    var y;
  
    sumRadios = dot.offsetWidth / 2 + enemy.offsetWidth / 2;
    x = (dotLeft + (dot.offsetWidth / 2))  - (enemyLeft + (enemy.offsetWidth / 2));
    y = (dotTop + (dot.offsetHeight / 2))  - (enemyTop + (enemy.offsetHeight / 2));
  
    if (sumRadios > Math.sqrt((x * x) + (y * y))) {
      console.log("BOOM!");
    } 
})

//Necesitamos el boton START para establecer un setInterval para los niveles  y otro para la vida
//const buttonStart = document.getElementById("id");
//buttonStart.addEventListener("click", function (e){
//    --//timerId = setInterval(function(){}, time)
//})
//clearInterval(timerId) when LOSE
