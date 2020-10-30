
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var tree,floor;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
   floor = new Ground(400,675,800,50);

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  floor.display();






  //drawSprites();
 
}



