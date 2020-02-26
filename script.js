function MainDot (canvas, dot) {
  this.dot = dot;
  this.canvas = canvas;
  this.canvasPosition = this.canvas.getBoundingClientRect();
  this.dotLeft;
  this.dotTop;
  this.dotRight;
  this.dotBottom;
  this.lifes = 2;

  this.move = function() {
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
    
      if (this.dotLeft <= 0 || this.dotRight == 1000) {
        console.log("U LOSE");
      }
      if (this.dotTop <= 0 || this.dotBottom >= 600) {
        console.log("U LOSE");
      }
    }.bind(this))
  }
}

function EnemyTop (speed) {
  this.actualLevel = actualLevel;
  this.speed = speed;
  this.top = 0;
  this.left = Math.ceil(Math.random() * 1000);
  this.newEnemy = document.createElement("div");
  this.wrapperEnemy = document.getElementById('wrapper-enemy')

  this.newEnemy.style.left = `${this.left}px`;
  this.newEnemy.classList.add("enemy");

  this.move = function(newDot) {
    this.wrapperEnemy.appendChild(this.newEnemy);
    this.newEnemy.style.top = `${this.top}px`;
    this.newEnemy.style.left = `${this.left}px`;

    var intervalChange = this.speed / ( this.myLevel + 0.3 );

    let movement = setInterval(function () {
      if (newDot.dotLeft < this.newEnemy.offsetLeft + 6   &&	
        newDot.dotTop < this.newEnemy.offsetTop + 6  &&	
        newDot.dotLeft + 8  > this.newEnemy.offsetLeft  &&	
        newDot.dotTop + 8 > this.newEnemy.offsetTop) {
        console.log("BOOM!");
        this.newEnemy.remove();
        if(newDot.lifes != 0){
          newDot.lifes = newDot.lifes - 1;
        }
        else {
          alert("LOSE ALL YOUR LIFES")
        };
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

function EnemyRight (speed) {
  this.actualLevel = actualLevel;
  this.speed = speed;
  this.top = Math.ceil(Math.random() * 600);
  this.left = 992;
  this.newEnemy = document.createElement("div");
  this.wrapperEnemy = document.getElementById('wrapper-enemy')

  this.newEnemy.style.top = `${this.top}px`;
  this.newEnemy.classList.add("enemy");

  this.myLevel;

  this.move = function(newDot) {
    this.wrapperEnemy.appendChild(this.newEnemy);
    this.newEnemy.style.top = `${this.top}px`;
    this.newEnemy.style.left = `${this.left}px`;

    var intervalChange = this.speed / ( this.myLevel + 0.3 );

    let movement = setInterval(function () {
      if (newDot.dotLeft < this.newEnemy.offsetLeft + 6   &&	
        newDot.dotTop < this.newEnemy.offsetTop + 6  &&	
        newDot.dotLeft + 8  > this.newEnemy.offsetLeft  &&	
        newDot.dotTop + 8 > this.newEnemy.offsetTop) {
        console.log("BOOM!");
        this.newEnemy.remove();
        if(newDot.lifes != 0){
          newDot.lifes = newDot.lifes - 1;
        }
        else {
          alert("LOSE ALL YOUR LIFES")
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