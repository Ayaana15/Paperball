var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody1,ground,dustbin1
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
	packageBody1 = new packageBody(30,30,30)
	dustbin1 = new dustbin(100,100,500,500)
	var ground = new Ground(0,650,800,50)


	packageBody1 = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  //packageBody1.display()
  dustbin1.display()
  ground.display()
}

function keypressed(){
if (keycode === UP_ARROW){
Matter.Body.applyForce(packageBody1.body,packageBody1.body.position,{x:500,y: 500})

}
}