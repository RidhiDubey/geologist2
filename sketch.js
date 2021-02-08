
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(600,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	plane=new Plane(100,600,1000,30);
	stone=new Stone(300,500,100,50,PI/7);
	rubber=new Rubber(500,500);
	hammer=new Hammer(500,300,20,20);
	Engine.run(engine);
  
}


function draw() {
	background("lavender");
	Engine.update(engine);
  plane.display();
  hammer.display();
  stone.display();
  rubber.display();
  
 
}



