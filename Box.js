class Box{
    constructor(x,y,width,height){
        var option={
            restitution:0.4,
            friction:0
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
        this.visiblity=255;
    }
    display(){
        if(this.body.speed<3){
            push();
            translate(this.body.position.x,this.body.position.y);
            rotate(this.body.angle);
            strokeWeight(3);
            rect(0,0,this.width,this.height);
            pop();
        }
        else{
            World.remove(world,this.body);
            push();
            this.visiblity-=5;
            pop();
        }
    }
    score(){
        if(this.visiblity<0 && this.visiblity>-105){
            score++;
        }
    }
}