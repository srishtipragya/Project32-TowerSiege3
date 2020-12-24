const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;
var bgImage;
var ground;
var platform1,platform2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var block17,block18,block19,block20,block21,block22,block23,block24,block25;
var polygon,slingShot;
var score=0;
function setup() {
  createCanvas(1350,600);
  engine=Engine.create();
  world=engine.world;
  getTime();

  ground=new Ground(675,590,1350,20);
  platform1=new Ground(650,430,300,10);
  platform2=new Ground(1100,200,200,10);

  block1=new Box(560,405,30,40);
  block2=new Box(590,405,30,40);
  block3=new Box(620,405,30,40);
  block4=new Box(650,405,30,40);
  block5=new Box(680,405,30,40);
  block6=new Box(710,405,30,40);
  block7=new Box(740,405,30,40);
  
  block8=new Box(590,385,30,40);
  block9=new Box(620,385,30,40);
  block10=new Box(650,385,30,40);
  block11=new Box(680,385,30,40);
  block12=new Box(710,385,30,40);

  block13=new Box(620,365,30,40);
  block14=new Box(650,365,30,40);
  block15=new Box(680,365,30,40);

  block16=new Box(650,345,30,40);

  block17=new Box(1040,175,30,40);
  block18=new Box(1070,175,30,40);
  block19=new Box(1100,175,30,40);
  block20=new Box(1130,175,30,40);
  block21=new Box(1160,175,30,40);

  block22=new Box(1070,155,30,40);
  block23=new Box(1100,155,30,40);
  block24=new Box(1130,155,30,40);

  block25=new Box(1100,135,30,40);
  polygon=new Polygon();
  slingShot=new SlingShot(polygon.body,{x:200,y:340});

  Engine.run(engine);
}

function draw() {
  if(bgImage)
    background(bgImage); 

    textSize(20);
    fill(255);
    text("Score:"+score,100,50);

    rectMode(CENTER); 
    ground.display();
    platform1.display();
    platform2.display();
    fill("lightgreen");
    block1.display();
    block1.score();
    block2.display();
    block2.score();
    block3.display();
    block3.score();
    block4.display();
    block4.score();  
    block5.display();
    block5.score();
    block6.display();
    block6.score();
    block7.display();
    block7.score();

    fill("lightpink");
    block8.display();
    block8.score();
    block9.display(); 
    block9.score(); 
    block10.display();
    block10.score();
    block11.display();
    block11.score();
    block12.display();
    block12.score();

      fill("lightblue");
      block13.display();
      block13.score();
      block14.display();
      block14.score();
      block15.display();
      block15.score();

      fill("lightpink");
      block16.display();
      block16.score();

      fill("lightgreen");
      block17.display();
      block17.score();
      block18.display();
      block18.score();  
      block19.display();
      block19.score();
      block20.display();
      block20.score();
      block21.display();
      block21.score();
    
      fill("lightblue");
      block22.display();
      block22.score();
      block23.display();
      block23.score();
      block24.display();
      block24.score();
    
      fill("lightpink");
      block25.display();
      block25.score();

      polygon.display();
      slingShot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(polygon.body,{x:200,y:350});
    slingShot.attach(polygon.body);
  }
}

async function getTime(){
  var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseType=await response.json();
  var time=responseType.datetime;
  var hr=time.slice(11,13);
  console.log(hr);
  if( hr>=6 && hr<=18){
    bgImage=loadImage("light.jpg");
  }
  else{
    bgImage=loadImage("dark.jpg");
  }
}