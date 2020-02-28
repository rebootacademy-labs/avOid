
var playMusic = document.getElementById("my_audio");
playMusic.addEventListener('keydown', (p) => {
})

startButton.addEventListener("click", function () {
  //newDot = true;
  startBackground.classList.add("desactivate");
  startButton.classList.add("desactivate");

  dot.classList.remove("desactivate");
  wrapper.classList.remove("desactivate");
  timerInfo.classList.remove("desactivate");


  var timerSeconds = setInterval(() => {
    setTime();
  }, 10);
  var timerLevel = setInterval(() => {
    setLevel();
  }, 15000)
})

var newDot = new MainDot(canvas, dot);
newDot.move();
//newDot = false;

var dotsGeneration = function (myLevel) {
  var intervalGenerator = 200 - (myLevel * 15);
  return enemyGenerator = setInterval(function () {
    var enemyDotTop = new EnemyTop(20)
    enemyDotTop.move(newDot)
    var enemyDotRight = new EnemyRight(20);
    enemyDotRight.move(newDot);
  }, intervalGenerator);
}
timerId = dotsGeneration(actualLevel);

var randomColorBoost = setInterval((() => {
  var boostTop = new BoostTop(["green", "blue", "purple"]);
  boostTop.move(newDot);

  var boostRight = new BoostRight(["green", "blue", "purple"]);
  boostRight.move(newDot);
}), 5000);





