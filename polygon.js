class Polygon{
    constructor(){
       /* var option={
            restitution:1,
            friction:1,
            density:1.5
        }*/
        this.body=Bodies.circle(200,350,20);
        this.image=loadImage("polygon.png");
        World.add(world,this.body);
    }
    display(){
        push();
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,40,40);
        pop();
    }
}