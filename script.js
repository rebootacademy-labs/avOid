const canvas = document.getElementById("canvas");
const dot = document.getElementById("personaje");
var wrapper = document.getElementById("wrapper-enemy");
var timerInfo = document.getElementById("timer");
var startButton = document.getElementById("start");
var startBackground = document.getElementById("menu");
var loseButton = document.getElementById("lose");

var totalSeconds = 0;
var actualLevel = 1;

var timerId;
const colors = ["green", "blue", "yellow", "black"];

function setLevel() {
  actualLevel++;
  clearInterval(timerId);
  timerId = dotsGeneration(actualLevel);

  if (actualLevel > 10) {
    actualLevel = 10;
  }
  level.innerHTML = actualLevel;

}

function setTime() {
  totalSeconds++;
  time.innerHTML = totalSeconds;
}

function music() {
  var startAudio = new Audio("./music/background-sound")
  startAudio.loop = true;
  startAudio.play();
}

function MainDot(canvas, dot) {
  this.actualLevel = actualLevel;
  this.dot = dot;
  this.canvas = canvas;
  this.canvasPosition = this.canvas.getBoundingClientRect();
  this.dotLeft;
  this.dotTop;
  this.dotRight;
  this.dotBottom;
  this.lifes = 3;
  this.onGame = false;


  this.move = function () {
    canvas.addEventListener("mousemove", function (e) {
      var canvasMouseX = e.clientX - (this.canvasPosition.left + 12);
      var canvasMouseY = e.clientY - (this.canvasPosition.top + 12);

      this.dotLeft = canvasMouseX - this.dot.offsetWidth / 2;
      this.dotTop = canvasMouseY - this.dot.offsetHeight / 2;
      this.dotRight = this.dotLeft + this.dot.offsetWidth;
      this.dotBottom = this.dotTop + this.dot.offsetHeight;

      this.dot.style.left = this.dotLeft + "px";
      this.dot.style.top = this.dotTop + "px";
      this.dot.style.right = this.dotRight + "px";
      this.dot.style.bottom = this.dotBottom + "px";

      if (this.dotLeft <= 0 || this.dotRight >= 1000) {
        lose.classList.remove("desactivate");
        startBackground.classList.remove("desactivate");
        dot.classList.add("desactivate");

        document.getElementById(level).innerHTML = this.actualLevel;
        loseButton.addEventListener("click", function () {
          location.reload()
        })
      }
      if (this.dotTop <= 0 || this.dotBottom >= 600) {
        lose.classList.remove("desactivate");
        startBackground.classList.remove("desactivate");
        dot.classList.add("desactivate");
        loseButton.addEventListener("click", function () {
          location.reload()
        })
      }
    }.bind(this))
  }
}

function EnemyTop(speed) {
  this.actualLevel = actualLevel;
  this.speed = speed;
  this.top = 0;
  this.left = Math.ceil(Math.random() * 1000);
  this.newEnemy = document.createElement("div");
  this.wrapperEnemy = document.getElementById('wrapper-enemy')

  this.newEnemy.style.left = `${this.left}px`;
  this.newEnemy.classList.add("enemy");

  this.move = function (newDot) {
    this.wrapperEnemy.appendChild(this.newEnemy);
    this.newEnemy.style.top = `${this.top}px`;
    this.newEnemy.style.left = `${this.left}px`;

    var intervalChange = this.speed - (this.actualLevel + 6);

    let movement = setInterval(function () {
      if (newDot && newDot.dotLeft < this.newEnemy.offsetLeft + 6 &&
        newDot.dotTop < this.newEnemy.offsetTop + 6 &&
        newDot.dotLeft + 10 > this.newEnemy.offsetLeft &&
        newDot.dotTop + 10 > this.newEnemy.offsetTop) {

        this.newEnemy.remove();
        newDot.lifes--;
      }

      this.top += 2
      this.left += -3
      this.newEnemy.style.top = `${this.top}px`;
      this.newEnemy.style.left = `${this.left}px`
      if (this.top >= 590 || this.left <= 0) {
        clearInterval(movement);
        this.newEnemy.remove();
      }

    }.bind(this), intervalChange);
  }
}

function EnemyRight(speed) {
  this.actualLevel = actualLevel;
  this.speed = speed;
  this.top = Math.ceil(Math.random() * 600);
  this.left = 992;
  this.newEnemy = document.createElement("div");
  this.wrapperEnemy = document.getElementById('wrapper-enemy');

  this.newEnemy.style.top = `${this.top}px`;
  this.newEnemy.classList.add("enemy");


  this.move = function (newDot) {
    this.wrapperEnemy.appendChild(this.newEnemy);
    this.newEnemy.style.top = `${this.top}px`;
    this.newEnemy.style.left = `${this.left}px`;


    var intervalChange = this.speed - (this.actualLevel + 6);

    let movement = setInterval(function () {
      if (newDot &&
        newDot.dotLeft < this.newEnemy.offsetLeft + 6 &&
        newDot.dotTop < this.newEnemy.offsetTop + 6 &&
        newDot.dotLeft + 10 > this.newEnemy.offsetLeft &&
        newDot.dotTop + 10 > this.newEnemy.offsetTop) {

        this.newEnemy.remove();
        if (newDot.lifes > 0) {
          newDot.lifes--;
          life.innerHTML = newDot.lifes;
        }

        if (newDot.lifes == 0) {
          lose.classList.remove("desactivate");
          startBackground.classList.remove("desactivate");
          dot.classList.add("desactivate");
          loseButton.addEventListener("click", function () {
            location.reload()
          })
        };
      }

      this.top += 2;
      this.left += -3;
      this.newEnemy.style.top = `${this.top}px`;
      this.newEnemy.style.left = `${this.left}px`
      if (this.top >= 590 || this.left <= 0) {
        clearInterval(movement);
        this.newEnemy.remove();
      }


    }.bind(this), intervalChange);
  }
}

function BoostTop(colors) {
  this.colors = colors;
  this.top = 0;
  this.left = Math.ceil(Math.random() * 1000);
  this.newBoost = document.createElement("div");
  this.wrapperEnemy = document.getElementById('wrapper-enemy')
  const randomColor = Math.floor(Math.random() * 3);

  this.newBoost.style.left = `${this.left}px`;
  this.newBoost.classList.add(colors[randomColor]);

  this.move = function (newDot) {
    this.wrapperEnemy.appendChild(this.newBoost);
    this.newBoost.style.top = `${this.top}px`;
    this.newBoost.style.left = `${this.left}px`;

    let movement = setInterval(function () {
      if (newDot &&
        newDot.dotLeft < this.newBoost.offsetLeft + 18 &&
        newDot.dotTop < this.newBoost.offsetTop + 18 &&
        newDot.dotLeft + 10 > this.newBoost.offsetLeft &&
        newDot.dotTop + 10 > this.newBoost.offsetTop) {

        this.newBoost.remove();
        if (this.newBoost.classList == "green") {
          greenLife();
        }
        if (this.newBoost.classList == "blue") {
          blueShield();
        }
        if (this.newBoost.classList == "purple") {
          purpleGravity();
        }
        /*
        if(this.newBoost.classList == "orange"){
          orangeRandom();
        }
        */
      }

      this.top += 2
      this.left += -3
      this.newBoost.style.top = `${this.top}px`;
      this.newBoost.style.left = `${this.left}px`
      if (this.top >= 590 || this.left <= 0) {
        clearInterval(movement);
        this.newBoost.remove();
      }

    }.bind(this), 10);
  }
}

function BoostRight(colors) {
  this.colors = colors;
  this.top = Math.ceil(Math.random() * 600);
  this.left = 992;
  this.newBoost = document.createElement("div");
  this.wrapperEnemy = document.getElementById('wrapper-enemy')
  const randomColor = Math.floor(Math.random() * 3);

  this.newBoost.style.left = `${this.left}px`;
  this.newBoost.classList.add(colors[randomColor]);

  this.move = function (newDot) {
    this.wrapperEnemy.appendChild(this.newBoost);
    this.newBoost.style.top = `${this.top}px`;
    this.newBoost.style.left = `${this.left}px`;

    let movement = setInterval(function () {
      if (newDot && newDot.dotLeft < this.newBoost.offsetLeft + 18 &&
        newDot.dotTop < this.newBoost.offsetTop + 18 &&
        newDot.dotLeft + 10 > this.newBoost.offsetLeft &&
        newDot.dotTop + 10 > this.newBoost.offsetTop) {

        this.newBoost.remove();
        if (this.newBoost.classList == "green") {
          greenLife();
        }
        if (this.newBoost.classList == "blue") {
          blueShield();
        }

        if (this.newBoost.classList == "purple") {
          purpleGravity();
        }
        /*
        if(this.newBoost.classList == "orange"){
          orangeRandom();
        }
        */
      }

      this.top += 2
      this.left += -3
      this.newBoost.style.top = `${this.top}px`;
      this.newBoost.style.left = `${this.left}px`
      if (this.top >= 590 || this.left <= 0) {
        clearInterval(movement);
        this.newBoost.remove();
      }

    }.bind(this), 10);
  }
}

function greenLife() {
  if (newDot.lifes > 0) {
    newDot.lifes++;
    life.innerHTML = newDot.lifes;
  }
}

function blueShield() {
  newDot.dot.classList.add("dotblue");
  //newDot = false;
  //newDot.move();
  timerShield = setTimeout(function () {
    newDot.dot.classList.remove("dotblue")
    // newDot = true;
  }, 4000)
}

function purpleGravity() {
  newDot.dot.classList.add("dotpurple");

  // newDot = false;
  //newDot.move();
  timerShield = setTimeout(function () {
    newDot.dot.classList.remove("dotpurple")
    //  newDot = true;
  }, 6000)
}