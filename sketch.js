var bg;
const Bodies=Matter.Bodies;
const Engine=Matter.Engine;
const World =Matter.World;
var snow=[];
var maximumsnow=100;
var world,engine;
function preload(){
   bg =loadImage("snow1.jpg")
}


function setup() {
  
  createCanvas(800,400);
 engine=Engine.create();
 world=engine.world; 
 if(frameCount%70===0){
  for(var i=0;i<maximumsnow;i++){
   snow.push(new Snow(random(10,750),random(0,400)))
 }
}
}

function draw() {
  background(bg);  
  Engine.update(engine)
   for(var i=0;i<maximumsnow;i++){
  snow[i].display();
  snow[i].updateY();

   }
  drawSprites();
}