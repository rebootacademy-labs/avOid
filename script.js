function MainDot (canvas, dot) {
  this.dot = dot;
  this.canvas = canvas;
  this.canvasPosition = this.canvas.getBoundingClientRect();
  
  this.move = function() {
    var that = this
    canvas.addEventListener("mousemove", function (e) {
      var canvasMouseX = e.clientX - (that.canvasPosition.left + 12);
      var canvasMouseY = e.clientY - (that.canvasPosition.top + 12);      

      var dotLeft = canvasMouseX - that.dot.offsetWidth / 2;
      var dotTop = canvasMouseY - that.dot.offsetHeight / 2;
      var dotRight = dotLeft + that.dot.offsetWidth;
      var dotBottom = dotTop + that.dot.offsetHeight;


      //collision()
      var moving = false;
      var enemyArray = document.getElementsByClassName("enemy");
      that.collision = function(enemyArray) {
        if (!moving){
          for(var i = 0; i < enemyArray.length - 1; i++){
            var sumRadios = that.dot.offsetWidth / 2 + enemy[i].offsetWidth / 2;
            var x = (dotLeft + (that.dot.offsetWidth / 2)) - (enemyLeft + (enemy[i].offsetWidth / 2));
            var y = (dotTop + (that.dot.offsetHeight / 2)) - (enemyTop + (enemy[i].offsetHeight / 2));
            if (sumRadios > Math.sqrt((x * x) + (y * y))) {
              console.log("BOOM!");
            }
          }
        }
      }

      that.dot.style.left = dotLeft + "px";
      that.dot.style.top = dotTop + "px";
      that.dot.style.right = dotRight + "px";
      that.dot.style.bottom = dotBottom + "px";
    
      if (dotLeft <= 0 || dotRight == 1000) {
        console.log("U LOSE");
      }
      if (dotTop <= 0 || dotBottom >= 600) {
        console.log("U LOSE");
      }
    })
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
  this.newEnemy = document.createElement("div");
  this.wrapperEnemy = document.getElementById('wrapper-enemy')

  this.newEnemy.style.left = Math.ceil(Math.random() * 995) + "px";
  this.newEnemy.classList.add("enemy");

  this.move = function() {
    this.wrapperEnemy.appendChild(this.newEnemy);
    this.newEnemy.style.top = 0 + "px";
    var that = this
    let movement = setInterval(function () {
      that.newEnemy.style.top = parseInt(that.newEnemy.style.top.slice(0, that.newEnemy.style.top.length - 2)) + 1 + "px";
      if (that.newEnemy.style.top == "590px") {
        clearInterval(movement);
        that.newEnemy.remove();
      }
    }, 1);
  }
}