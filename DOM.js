var startButton = document.getElementById("start");
var startBackground = document.getElementById("menu");
var totalSeconds = 0;
var actualLevel = 1;
//var levelSum = "";
var timerId;

function initiate() {
  startButton.addEventListener("click", function () {
    startBackground.classList.add("desactivate");
    startButton.classList.add("desactivate");

    dot.classList.remove("desactivate");
    wrapper.classList.remove("desactivate");
    timerInfo.classList.remove("desactivate");

    function setLevel() {
      actualLevel++;
      clearInterval(timerId);
      timerId = dotsGeneration(actualLevel);

      //levelSum = actualLevel++
      if (actualLevel > 10) {
        actualLevel = 10;
      }
      level.innerHTML = actualLevel;

    }
    var timerLevel = setInterval(() => {
      setLevel();
    }, 5000)

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



var dotsGeneration = function (myLevel) {
  var intervalGenerator = 180 - (myLevel * 15);

  return enemyGenerator = setInterval(function () {

    var enemyDotTop = new EnemyTop(20)
    // enemyDotTop.myLevel = this.actualLevel;
    enemyDotTop.move(newDot)

    var enemyDotRight = new EnemyRight(20);
    // enemyDotRight.myLevel = this.actualLevel;
    enemyDotRight.move(newDot);

    }, intervalGenerator);
}

timerId = dotsGeneration(actualLevel);

/*
var randomEnemiesTop = setInterval(() => {
  var enemyDotTop = new EnemyTop(20)
  enemyDotTop.myLevel = this.actualLevel;
  enemyDotTop.move(newDot)
  console.log(actualLevel);
}, 300);

//var timeGenerator = 200;
//var moreEnemies = timeGenerator / this.actualLevel;
var randomEnemiesRight = setInterval((() => {
  var enemyDotRight = new EnemyRight(20);
  enemyDotRight.myLevel = this.actualLevel;
  enemyDotRight.move(newDot);

}), 300);
*/

initiate();




