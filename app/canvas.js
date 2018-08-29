var canvas = document.querySelector('canvas'); //searches for an html element called Canvas

var c = canvas.getContext('2d'); // c is for context



  // creates a mouse object
  var mouse = {
    x: undefined,
    y: undefined
  }

  var maxRadius = 40;
  // var minRadius = 2;

  var colorArray = [
    '#82AEB1',
    '#93C6D6',
    '#FCD581',
    '#D52941',
    '#990D35'
  ];

  window.onload = resize();

    function resize(){
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

  window.addEventListener('mousemove',
    function(event) {
      mouse.x = event.x;
      mouse.y = event.y;
    }
  );

  window.addEventListener('resize',
    function (){
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    }
  );

  //create a javascript object to replicate code below
  function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random()* colorArray.length)];

    // anonymous function
    this.draw = function(){
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      // c.strokeStyle = "#EC0974";
      // c.stroke();
      c.fillStyle = this.color;
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

          //interactivity
          if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50){
            if(this.radius < maxRadius){
              this.radius += 1;
            }
          }else if(this.radius > this.minRadius){
            this.radius -= 1;
          }

          this.draw();
      }
    }

    var circleArray = []; // place to store all 100 circles

  function init(){
      circleArray = []; //resets array to zero circles
      for(var i = 0; i < 700; i++){
          var radius = Math.random() * 3 + 1;
          var x = Math.random() * (innerWidth - radius * 2) + radius;
          var y = Math.random() * (innerHeight - radius * 2) + radius;
          var dx = Math.random() - 0.5; // x velocity either negative or positive
          var dy = Math.random() - 0.5; // y velocity, multiplying by 8 number increases speed either to 4 or -4

          circleArray.push(new Circle(x, y, dx, dy, radius));
      }
  }

  function animate(){
    requestAnimationFrame(animate); //sets the animate function up as argument to requestAnimationFrame function, which creates a loop
    c.clearRect(0, 0, innerWidth, innerHeight); //clears the screen
      for(var i =0; i < circleArray.length; i++){
        circleArray[i].update();
      }
  }


    init();
    animate(); //calls the animate function
