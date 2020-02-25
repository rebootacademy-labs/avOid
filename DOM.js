const canvas = document.getElementById("canvas");
var canvasPosition = canvas.getBoundingClientRect() // Nos indica la posición de top,left,rigth y bottom del canvas
const dot = document.getElementById("personaje");
const enemy = document.querySelectorAll(".enemy");
var dotTop; // Situamos al personaje en el eje Y
var dotLeft; // Situamos al personaje en el eje X
var dotBottom;
var dotRight;
var totalSeconds= 0;
var actualLevel = 1;

var enemyTop = 100;
var enemyLeft = 600;
var enemyBottom = 118;
var enemyRight = 618;

function setLevel() {
  actualLevel++;
  level.innerHTML = actualLevel;
}
var timerLevel = setInterval(() => {
  setLevel();
}, 20000)


function setTime() {
  totalSeconds++;
  time.innerHTML = totalSeconds + "s";
}
var timerSeconds = setInterval(() => {
  setTime();
}, 1000);

/*
function Enemy (enemyTop, enemyLeft, width, height, color){
  this.enemyTop = enemyTop;
  this.enemyLeft = enemyLeft;
  this.width = width;
  this.height = height;
  this.color = color,
  this.create = function(){};
  this.move = function(){};
}

*/


var newDot = new MainDot()

newDot.move()

var randomEnemies = setInterval(() => {
  var enemyDot = new Enemy()
  console.log(enemyDot);
  
  enemyDot.move()
}, 100);

