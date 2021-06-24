const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var drops=[];
var maxDrops=100;
var batman;


function preload(){
    
}

function setup(){
    engine = Engine.create();
    world = engine.world;
   createCanvas(400,800)
   background(0)

   for(var i=0; i<maxDrops; i++){
       drops.push(new Drops(random(0,400),random(0,400)));
   }

   drop1=new Drops(200,0);
   batman=new Umbrella(100,500);
    
}

function draw(){
    Engine.update(engine);
    background(0);
    batman.display();
    for(var i=0; i<maxDrops; i++){
       drops[i].display()
       drops[i].update();
    }

    
    
}   

