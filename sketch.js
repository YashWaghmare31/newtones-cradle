
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var roof1;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof1 = new roof(350,100,300,50);
World.add(world.roof1);

    Engine.run(engine);
   
    bobObject1=newBob(250,300);
	bobObject2=newBob(300,300);
	bobObject3=newBob(350,300);
	bobObject4=newBob(400,300);
	bobObject5=newBob(450,300);

    rope1 = new Rope(bobObject1.body,roof.body,-100,0);
	 world.add(world,rope1);

	rope2 = new Rope(bobObject2.body,roof.body,-50,0);
	 world.add(world,rope2);
	 
	rope3 = new Rope(bobObject3.body,roof.body,0,0);
	 world.add(world,rope3);

	rope4 = new Rope(bobObject4.body,roof.body,+100,0);
	 world.add(world,rope4);

	rope5 = new Rope(bobObject5.body,roof.body,+100,0);
	 world.add(world,rope5);
}


function draw() {
  rectMode(CENTER);
  background(0);
  

roof1.display();

bobObject1.display();
bobObject2.display();
bobObject3.display();
bobObject4.display();
bobObject5.display();

rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();


  drawSprites();

}



