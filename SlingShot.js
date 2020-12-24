class SlingShot{
    constructor(polygonBody,point){
        var option={
            bodyA:polygonBody,
            pointB:point,
            stiffness:0.04,
            length:10
        }
        this.shot=Constraint.create(option);
        this.pointB=point;
        World.add(world,this.shot);
    }
    attach(body){
        this.shot.bodyA=body;
    }
    fly(){
        this.shot.bodyA=null;
    }
    display(){
        if(this.shot.bodyA){
        push();
        stroke(255);
        strokeWeight(3);
        line(this.shot.bodyA.position.x,this.shot.bodyA.position.y,this.pointB.x,this.pointB.y);
        pop();
        }

    }
}