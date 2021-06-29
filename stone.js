class Stone {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          density:1.2
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.width = radius;
      this.height = radius;
      World.add(world, this.body);

      this.image=loadImage("stone.png")
    }
    
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      image(this.image,pos.x, pos.y, this.width, this.height);
    }
  };