var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var redzoneB,redzoneL,redzoneR;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground 
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} ); 
	World.add(world, ground); 

	redzoneB = Bodies.rectangle(width/2-20, 640, 150, 20, {isStatic: true});
	World.add(world,redzoneB);

	redzoneL = Bodies.rectangle(width/2-105,560,20,150,{isStatic:true});
	World.add(world,redzoneL);

	redzoneR = Bodies.rectangle(width/2+65,560,20,150,{isStatic:true});
	World.add(world,redzoneR);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  drawSprites();

  fill('red');
   rectMode(CENTER);
	 rect(redzoneB.position.x,redzoneB.position.y,150,20);

  fill('red');
   rectMode(CENTER);
	 rect(redzoneL.position.x,redzoneL.position.y,20,150);

  fill('red');
   rectMode(CENTER);
    rect(redzoneR.position.x,redzoneR.position.y,20,150);
	
  keyPressed();

  Engine.update(engine);

  drawSprites();
}

function keyPressed() {
	if(keyDown('DOWN_ARROW')) {
		Matter.Body.setStatic(packageBody,false);
  }
}