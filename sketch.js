const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){
  ballImage = loadImage("wreckingBall.png");
}
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  
}

function draw(){
  background(255);
  image(ballImage,400,400,120,120);
} 