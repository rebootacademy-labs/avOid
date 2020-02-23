const canvas = document.getElementById("canvas");
var canvasPosition = canvas.getBoundingClientRect() // Nos indica la posición de top,left,rigth y bottom del canvas
const dot = document.getElementById("personaje");
var personajeTop  // Situamos al personaje en el eje Y
var personajeLeft // Situamos al personaje en el eje X

/*
Al empezar el personaje no debería verse: display:none o visibility: hidden en css
Cuando pulsas el botón start aparece:
const buttonStart = document.getElementById("id");
buttonStart.addEventListener("click", function (e){
    --//Cambiar estado personaje en Css
})
*/
// MOVIMIENTO DEL PERSONAJE:

// 1.Ver coordenadas del puntero
canvas.addEventListener("mousemove", function (e) {
    var mousePositionX = e.clientX;
    var mousePositionY = e.clientY;
    var coor = "Coordinates: (" + mousePositionX + "," + mousePositionY + ")";
    document.getElementById("demo").innerHTML = coor;

// 2. Relacionar la posición del dot con puntero
    personaje.style.left = mousePositionX + "px";
    personaje.style.top = mousePositionY + "px";

// 3. Alerta LOSE
    if (e.clientX <= canvasPosition.left || e.clientX >= canvasPosition.right) {
        alert("U LOSE");
    }
    if (e.clientY <= canvasPosition.top || e.clientY >= canvasPosition.bottom) {
        alert("U LOSE");
    }
})

/*
Necesitamos el boton START para establecer un setInterval para los niveles  y otro para la vida
const buttonStart = document.getElementById("id");
buttonStart.addEventListener("click", function (e){
    --//timerId = setInterval(function(){}, time)
})
clearInterval(timerId) when LOSE;
*/

