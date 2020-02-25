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


      //collision()
    //   var enemyArray = document.querySelectorAll ('div.enemy');
      
    //  // that.collision = function(enemyArray) {
    //     for(var i = 0; i < enemyArray.length - 1; i++){
    //       var x = (dotLeft + (that.dot.offsetWidth / 2)) - (enemyLeft + (enemyArray[i].offsetWidth / 2));
    //       var y = (dotTop + (that.dot.offsetHeight / 2)) - (enemyTop + (enemyArray[i].offsetHeight / 2));
    //       var sumRadios = that.dot.offsetWidth / 2 + enemyArray[i].offsetWidth / 2;
    //       if (sumRadios > Math.sqrt((x * x) + (y * y))) {
    //         console.log("BOOM!");
    //       }
    //     }
      //}

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
/*
  this.collision = function(enemyArray) {
      var sumRadios = this.dot.offsetWidth / 2 + enemy[0].offsetWidth / 2;
      var x = (dotLeft + (this.dot.offsetWidth / 2)) - (enemyLeft + (enemy[0].offsetWidth / 2));
      var y = (dotTop + (this.dot.offsetHeight / 2)) - (enemyTop + (enemy[0].offsetHeight / 2));
    
      if (sumRadios > Math.sqrt((x * x) + (y * y))) {
        console.log("BOOM!");
      }
  }
  */
}

function Enemy (speed) {
  this.speed = speed
  this.top = 0;
  this.left = Math.ceil(Math.random() * 995);
  this.newEnemy = document.createElement("div");
  this.wrapperEnemy = document.getElementById('wrapper-enemy')

  this.newEnemy.style.left = `${this.left}px`;
  this.newEnemy.classList.add("enemy");

  this.move = function(newDot) {
    this.wrapperEnemy.appendChild(this.newEnemy);
    this.newEnemy.style.top = `${this.top}px`;
    let movement = setInterval(function () {
      this.top++
      this.newEnemy.style.top = `${this.top}px`;
      if (MAth.abs(this.top - Math.round(newDot.dotTop)) < 10) {
        alert('perdite ih')
      }
      if (MAth.abs(this.left - Math.round(newDot.dotLeft)) < 10) {
        alert('perdite ih')
      }
    }.bind(this), 1);
  }
}