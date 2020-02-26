var totalSeconds= 0;
var actualLevel = 1;
var levelTime = 1;
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

const canvas = document.getElementById("canvas");
const dot = document.getElementById("personaje");

var newDot = new MainDot(canvas, dot)
newDot.move()

var randomEnemies = setInterval(() => {
  var enemyDot = new Enemy()
  enemyDot.move(newDot)
}, 100);


