const Body = Matter.Body;
const Engine = Matter.Engine;
const Bodies =  Matter.Bodies;
const World = Matter.World;

var bg = "snow3.jpg"
var snowflake;
var snowflakes = [];
var human;
var backgroundImage;
var engine, world;
function preload(){
  backgroundImage = loadImage(bg)
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  snowflake = new Snowflake(300,100)

}


function draw() {
  background(backgroundImage);  
  Engine.update(engine);
 // drawSprites();
 if(frameCount%30 === 0){
   snowflakes.push(new Snowflake(random(1,800),random(1,300)))
 }
 for(var i = 0; i <snowflakes.length ; i++){
   snowflakes[i].display();
 }
}