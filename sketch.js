var ball,ground1
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world=engine.world
	
	rect1=createSprite(600,645,200,20);
	rect2=createSprite(500,600,20,100);
	rect3=createSprite(700,600,20,100);
	rect1.shapeColor="red"
	rect2.shapeColor="red"
	rect3.shapeColor="red"

	ball=new paper(50,322,20)
	ground1=new ground()
}


function draw() {
	rectMode(CENTER);
	background(0);
	ground1.display()
	ball.display();
	keyPressed();
	drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,{x:50,y:322},{x:85,y:-85});
	}
}


