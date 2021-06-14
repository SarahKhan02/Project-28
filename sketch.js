const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var treeObj,tree,stoneObj,groundObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var world,boyimg,boy,attach;

//Declare launcherObject and launchForce variable here


function preload(){
	boyimg = loadImage("images/boy.png");
  treeObj = loadImage("images/tree.png");
  }

function setup() {
	createCanvas(1000, 650);
	engine = Engine.create();
	world = engine.world;

	stoneObj = new Stone(100,460,23); 

	mango1 = new Mango(600,290,34);
  mango2 = new Mango(855,325,35);
	mango3 = new Mango(670,260,35);
	mango4 = new Mango(730,200,35);
	mango5 = new Mango(710,320,36);
	mango6 = new Mango(780,250,35);
	mango7 = new Mango(825,170,33);
	mango8 = new Mango(880,260,35);
	mango9 = new Mango(940,220,35);
	mango10 = new Mango(980,305,35);

  tree = createSprite(775,368);
  tree.addImage(treeImage);
  tree.scale = 0.42;

  boy = createSprite(160,550);
  boy.addImage(boyImg);
  boy.scale = 0.15;

	groundObject = new Ground();
  //create launcherObject here
  attach = new Throw(stones.body,{x:100,y:465});


	Engine.run(engine);
}

function draw() {
  rectMode(CENTRE);
  background("grey");

  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  fill("black");

  image(boy ,200,340,200,300);
  

  treeObj.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  stoneObj.display();
  groundObject.display();
  // display launcher object here
    
fly();

  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
  detectollision(stoneObj,mango8);
  detectollision(stoneObj,mango9);
  detectollision(stoneObj,mango10);

  drawSprites();
}

//create mouseDragged function here
function mouseDragged(){
  Matter.Body.setPosition(stones.body,{x:mouseX,y:mouseY});
}

//create mouseReleased function here
function mouseReleased(){
  attach.fly();
}

//create keyPressed function here
function keyPressed(){
  if(keyCode === 12){
    Matter.Body.setPosition(stones.body,{x:100,y:465});
    attach.Launch(stones.body);
  }
}

function detectollision(lstone,lmango){

  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  	if(distance<=lmango.r+lstone.r)
    {
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }