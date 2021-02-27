const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bgimg;
var ground;
var hero;
var slingshot;

function preload() {
bgimg = loadImage("GamingBackground.png");

}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,600,1200,20);
    hero = new Hero(300,400,150,150);
    slingshot = new SlingShot(hero.body,{x:430,y:50});

}

function draw() {
  background(bgimg);
  Engine.update(engine);

  ground.display();
  hero.display();
  slingshot.display();
}
function mouseDragged() {
    Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}
