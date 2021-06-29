
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1600,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(800,550,1600,35)
	tree=new Tree(1150,55,400,500)
	mango=new Mango(1200,250,30,30)
	mango1=new Mango(1400,300,30,30)
	mango2=new Mango(1300,150,30,30)
	mango3=new Mango(1200,250,30,30)
	mango4=new Mango(1200,250,30,30)
	mango5=new Mango(1200,250,30,30)
	mango6=new Mango(1200,250,30,30)
	stone=new Stone(200,400,70)
	slingshot=new Slingshot(stone.body,{x:200,y:300})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  tree.display()
  mango.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  stone.display()
  slingshot.display()
  
  drawSprites();
 
}

function mouseDragged(){
Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY})

}

function mouseReleased(){
slingshot.fly()

}

function detectCollision(){
mangoBodyPosition=mango.body.position
stoneBodyPosition=stone.body.position

var distance=dist(stoneBodyPosition.x, stoneBodyPosition,y, mangoBodyPosition.x, mangoBodyPosition.y)
if(distance<=mango.r+stone.r)
{
	Matter.Body.setStatic(mango.body,false);
}

}

