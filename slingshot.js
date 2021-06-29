class Slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
        this.pointB=pointB
        this.image=loadImage("boy.png")
    }
    fly(){
        this.chain.bodyA=null

    }

    display(){
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            stroke("white")
            strokeWeight(4);
            image(this.image,pointA.x, pointA.y, pointB.x, pointB.y);
        }
        
        
    }
    
}