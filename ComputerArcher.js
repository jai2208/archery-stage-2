class ComputerArcher {
    constructor(x, y, width, height,angleValue) {
      var options = {
        isStatic: true
      };
  
      this.body = Bodies.rectangle(x, y, width, height, options);
  
      this.width = width;
      this.height = height;
      this.image = loadImage("computerArcher.png");
      this.angleValue=angleValue
      World.add(world, this.body);
    }
  
   
    display() {
var move
   if(move === "UP" && computerArcher.body.angle < 1.77){
    this.angleValue=0.1
     } else{
      this.angleValue=-0.1
    }

    if(move === "DOWN" && computerArcher.body.angle > 1.47){
      this.angleValue= -0.1
      } else{
        this.angleValue= 0.1
     }

      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      Matter.Body.setAngle(this.body,-PI/2)
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }