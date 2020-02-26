function MainDot (canvas, dot) {
  this.dot = dot;
  this.canvas = canvas;
  this.canvasPosition = this.canvas.getBoundingClientRect();
  this.dotLeft;
  this.dotTop;
  this.dotRight;
  this.dotBottom;

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
  this.life = function(){
    
  }
}

function EnemyTop (speed) {
  this.speed = speed
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
      var x = (newDot.dotLeft + (newDot.dot.offsetWidth / 2)) - (this.newEnemy.offsetLeft + (this.newEnemy.offsetWidth / 2));
      var y = (newDot.dotTop + (newDot.dot.offsetHeight / 2)) - (this.newEnemy.offsetTop + (this.newEnemy.offsetHeight / 2));
      var sumRadios = newDot.dot.offsetWidth / 2 + this.newEnemy.offsetWidth / 2;

      if (sumRadios > Math.sqrt((x * x) + (y * y))) {
         alert("BOOM!sss");
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
  this.actualLevel = actualLevel
  this.speed = speed
  this.top = Math.ceil(Math.random() * 600);
  this.left = 992;
  this.newEnemy = document.createElement("div");
  this.wrapperEnemy = document.getElementById('wrapper-enemy');

  this.newEnemy.style.top = `${this.top}px`;
  this.newEnemy.classList.add("enemy");

  this.myLevel;

  this.move = function(newDot) {
    this.wrapperEnemy.appendChild(this.newEnemy);
    this.newEnemy.style.top = `${this.top}px`;
    this.newEnemy.style.left = `${this.left}px`;

    var intervalChange = this.speed / ( this.myLevel + 0.3 );

    let movement = setInterval(function () {
      var x = (newDot.dotLeft + (newDot.dot.offsetWidth / 2)) - (this.newEnemy.offsetLeft + (this.newEnemy.offsetWidth / 2));
      var y = (newDot.dotTop + (newDot.dot.offsetHeight / 2)) - (this.newEnemy.offsetTop + (this.newEnemy.offsetHeight / 2));
      var sumRadios = newDot.dot.offsetWidth / 2 + this.newEnemy.offsetWidth / 2;

      if (sumRadios > Math.sqrt((x * x) + (y * y))) {
         alert("BOOM!");
      }

      
      /*if(this.actualLevel > 1 ){ 

      }else{*/

        this.top += 2;
        this.left += -3;
      //}
      
      /*var speed1 = [this.top+2 , this.top+2.5]
      var speed2 = [this.left-3 ,this.left-3.5]
      var realspeed1 = Math.round(Math.random(speed1 *2 ));
      console.log()
      var realspeed2 = Math.round(Math.random(speed2 * 2));*/

      this.newEnemy.style.top = `${this.top}px`;
      this.newEnemy.style.left = `${this.left}px`
      if (this.top >= 590 || this.left <= 0) {
        clearInterval(movement);
        this.newEnemy.remove();
      }

      
    }.bind(this), intervalChange);
  }
}
