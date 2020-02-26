var startButton = document.getElementById("start");
var startBackground = document.getElementById("menu");
var totalSeconds= 0;
var actualLevel = 1;

function initiate () {
  startButton.addEventListener("click", function(actualLevel, totalSeconds){
    startBackground.classList.add ("desactivate");
    startButton.classList.add ("desactivate");

    dot.classList.remove ("desactivate");
    wrapper.classList.remove("desactivate");
    timerInfo.classList.remove("desactivate");

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
  })
}

const canvas = document.getElementById("canvas");
const dot = document.getElementById("personaje");
var wrapper = document.getElementById("wrapper-enemy");
var timerInfo = document.getElementById("timer");


var newDot = new MainDot(canvas, dot)
newDot.move()

var randomEnemiesTop = setInterval(() => {
  var enemyDotTop = new EnemyTop()
  enemyDotTop.move(newDot)
}, 280);

var randomEnemiesRight = setInterval(() => {
  var enemyDotRight = new EnemyRight()
  enemyDotRight.move(newDot)
}, 280);

initiate();


