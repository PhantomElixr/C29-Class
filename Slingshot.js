class SlingShot{
    constructor(bodyA, pointB, pointC){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.pointC = pointC
        this.sling = Constraint.create(options);
        this.image = loadImage("./sprites/sling1.png");
        this.image2 = loadImage("./sprites/sling2.png");
        this.image3 = loadImage("./sprites/sling3.png");
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.image, 190, 25, this.width, this.height);
        image(this.image2, 165, 25, this.width, this.height); 
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            var pointC = this.pointC;
            strokeWeight(4);
            stroke(48,22,8)
            image(this.image3, pointA.x - 20, pointA.y - 20, 10, 30); 
            line(pointA.x - 20, pointA.y - 10, pointB.x, pointB.y);
            line(pointA.x - 20,pointA.y - 10,pointC.x,pointC.y);
        }
    }
    
}