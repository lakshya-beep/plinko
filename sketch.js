
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

function setup() {
  createCanvas(700,900);


/*
  createSprite(100, 100, 40, 40);
  createSprite(200, 100, 40, 40);
  createSprite(300, 100, 40, 40);
  createSprite(400, 100, 40, 40);
  createSprite(500, 100, 40, 40);

  createSprite(100, 200, 40, 40);
  createSprite(200, 200, 40, 40);
  createSprite(300, 200, 40, 40);
  createSprite(400, 200, 40, 40);
  createSprite(500, 200, 40, 40);

  createSprite(100, 300, 40, 40);
  createSprite(200, 300, 40, 40);
  createSprite(300, 300, 40, 40);
  createSprite(400, 300, 40, 40);
  createSprite(500, 300, 40, 40);

  createSprite(100, 400, 40, 40);
  createSprite(200, 400, 40, 40);
  createSprite(300, 400, 40, 40);
  createSprite(400, 400, 40, 40);
  createSprite(500, 400, 40, 40);
*/
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background("black");  
Engine.update(engine);

  drawSprites();
}