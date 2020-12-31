
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    box1 = new Box(550,660,200,20)
	box2 = new Box(450,600,20,100)
	box3 = new Box(650,600,20,100)

	ground = new Ground(400,670,800,20)
	ball = new Paper(150,600,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  box1.display()
  box2.display()
  box3.display()

  ground.display()
  ball.display()

}

function keyPressed() {
if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(ball.body, ball.body.position,{x:50,y:-50})
}

}


