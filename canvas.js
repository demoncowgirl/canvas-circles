var canvas = document.querySelector('canvas'); //searches for an html element called Canvas
// var background = new Image();
// background.src = "/images/leopard.png";
// in order to cover the entire window, height and width needs to be set in javascript
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d'); // c is for context
c.lineWidth=4;
// c.fillStyle = '#26A97D';
// c.fillRect(100, 100, 150, 150); //(x, y, width, height) x and y are placement coordinates from upper left corner
// c.fillStyle = 'rgba(255, 0, 0, 0.3)'; //last is opacity/alpha
// c.fillRect(400, 100, 100, 100);
// c.fillStyle = 'black';
// c.fillRect(300, 300, 100, 100);
// c.fillStyle = 'grey';
// c.fillRect(540, 400, 150, 150);
// c.fillStyle = '#A94026';
// c.fillRect(700, 500, 150, 150);

// for(var s = 0; s < 15; s++){
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;
//   var r = Math.floor(Math.random()* 256);
//   var g = Math.floor(Math.random()* 256);
//   var b = Math.floor(Math.random()* 256);
//   var cssColor = 'rgb(' + r +', ' + g + ',' + b +')';
//   c.fillStyle = cssColor;
//   c.fillRect(x, y, 100, 100);s
// }

// Line
// c.beginPath();
// c.moveTo(50, 300); //takes x and y argument, point is invisible until a stroke method is called
// c.lineTo(350, 200); //takes x and y argument
// c.lineTo(400, 300);
// c.lineTo(500, 50);
// c.lineTo(650, 400);
// c.lineTo(800, 20);
// c.lineTo(900, 800);
// c.lineTo(950, 40);
// c.strokeStyle = "#7326A9"; //rgba, hex or color
// c.stroke();

// for (var l=0; l < 5; l++){
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;
//   c.beginPath();
//   c.moveTo(5, 5);
//   c.lineTo(x, y);
//   c.lineTo(x * 2, y * 2);
//     c.lineTo(x * 3, y * 3);
//   c.strokeStyle = "black"; //rgba, hex or color
//   c.stroke();
//
// }

// Arc / Circle
// c.arc(x: Int, y: Int, startingAngle: Float, endAngle: Float, drawCounterClockwise: Bool (false)); -- x and y, radius, and radiens
//startAngle - where do you want the arc to start
//endAngle -
// c.beginPath();
// c.arc(300, 500, 30, 0, Math.PI * 2, false);
// c.strokeStyle = "green";
// c.stroke();

// for(var i=0; i<10;i++){
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;
//   c.beginPath();
//   c.arc(x, y, 30, 0, Math.PI * 2, false);
//   c.strokeStyle = "orange";
//   c.stroke();
// }


// for(var i=0; i<10;i++){
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;
//   c.beginPath();
//   c.arc(x, y, 30, 0, Math.PI * 2, false);
//   c.strokeStyle = "red";
//   c.stroke();
// }


// for(var i=0; i<10;i++){
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;
//   c.beginPath();
//   c.arc(x, y, 30, 0, Math.PI * 2, false);
//   c.strokeStyle = "blue";
//   c.stroke();
// }

  //create a javascript object to replicate code below
  function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    // anonymous function
    this.draw = function(){
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.strokeStyle = "#EC0974";
      c.stroke();
      c.fillStyle = "#09EC17";
      c.fill();
    }

    this.update = function(){
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
          this.dx = -this.dx;
        }
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
          this.dy = -this.dy;
        }

          this.x += this.dx;
          this.y += this.dy;

          this.draw();
      }
    }

    var circleArray = []; // place to store all 100 circles

    for(var i = 0; i < 100; i++){
        var radius = 30;
        var x = Math.random() * (innerWidth - radius * 2) + radius;
        var y = Math.random() * (innerHeight - radius * 2) + radius;
        var dx = Math.random() - 0.5; // x velocity either negative or positive
        var dy = Math.random() - 0.5; // y velocity, multiplying by 8 number increases speed either to 4 or -4


        circleArray.push(new Circle(x, y, dx, dy, radius));
    }
      console.log(circleArray);


  function animate(){
    requestAnimationFrame(animate); //sets the animate function up as argument to requestAnimationFrame function, which creates a loop
    c.clearRect(0, 0, innerWidth, innerHeight); //clears the screen
      for(var i =0; i < circleArray.length; i++){
        circleArray[i].update();
      }
  }
    animate(); //calls the animate function
