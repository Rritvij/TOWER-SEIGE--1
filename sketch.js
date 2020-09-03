const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg;
var bird, slingShot;
var ground2;



function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
      ground2 = new Ground(600,500,370,20);

    box1 = new Box(600,400,70,70);
    box2 = new Box(670,400,70,70);
    box3 = new Box(530,400,70,70);
    box4 = new Box(740,400,70,70);
    box5 = new Box(460,400,70,70);
    
    box6 = new Box(635,325,70,70);
    box7 = new Box(705,325,70,70);
    box8 = new Box(565,325,70,70);
    box9 = new Box(495,325,70,70);
    box10 = new Box(530,255,70,70);
    box11 = new Box(600,255,70,70);
    box12 = new Box(670,255,70,70);
    box13 = new Box(565,185,70,70);
    box14 = new Box(635,185,70,70);
     box15 = new Box(595,115,70,70);
   
   
  

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:150, y:500});
}

function draw(){
    background(0);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
      ground2.display();
   
  

    box3.display();
    box4.display();
   box5.display();
    box6.display();
    box7.display();
     box8.display();
    box9.display();
     box10.display();
    box11.display();
     box12.display();
    box13.display();
     box14.display();
      box15.display();
  
  

    bird.display();
   
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}