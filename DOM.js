var newDot = null;

document.addEventListener('keypress', playKey);
function playKey(p) {
  music();
}
/*
document.addEventListener('keypress', playKey);
function playKey(i) {
  //debugger
}*/
var timerSeconds;
var timerLevel;
startButton.addEventListener("click", function () {
  //newDot = true;
  newDot = new MainDot(canvas, dot);
  newDot.move();

  startBackground.classList.add("desactivate");
  startButton.classList.add("desactivate");

  dot.classList.remove("desactivate");
  wrapper.classList.remove("desactivate");
  timerInfo.classList.remove("desactivate");


  timerSeconds = setInterval(() => {
    setTime();
  }, 10);
  timerLevel = setInterval(() => {
    setLevel();
  }, 6000)
})

var dotsGeneration = function (myLevel) {
  var intervalGenerator = 250 - (myLevel * 15);
  return enemyGenerator = setInterval(function () {
    var enemyDotTop = new EnemyTop(20)
    enemyDotTop.move(newDot)

    var enemyDotRight = new EnemyRight(20);
    enemyDotRight.move(newDot);
  }, intervalGenerator);
}
timerId = dotsGeneration(actualLevel);

var randomColorBoost = setInterval((() => {
  var boostTop = new BoostTop(["green", "blue"]);
  boostTop.move(newDot);

  var boostRight = new BoostRight(["green", "blue"]);
  boostRight.move(newDot);
}), 5000);
