//Name Spacing or Nicknaming
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//Declaring Varibles for Game
let engine;
let world;

var ball, ground, line;
var topWall, rightWall, leftWall;
var up, right;
var angle = 60;

function setup()
{
  createCanvas(400,400);
  
  //Creating Engine for the Game
  engine = Engine.create();
  
  //Creating World for the Game
  //The world of the Game of the is the engine's world
  world = engine.world;

  var ballOptions = {
    restitution: 0.8
    
  }
  ball = Bodies.circle(200, 200, 15, ballOptions);
  World.add(world, ball);

  ground = new Ground(200, 390, 400, 20);
  topWall = new Ground(200, 10, 400, 20);
  rightWall = new Ground(390, 200, 20, 400);
  leftWall = new Ground(10, 200, 20, 400);
  
  up = createImg("up.png");
  up.position(100, 50);
  up.size(50, 50);
  up.mouseClicked(verticalForce);

  right = createImg("right.png");
  right.position(250, 50);
  right.size(50, 50);
  right.mouseClicked(horizontalForce);

  // var lineOptions = {
  //   isStatic: false
  // }
  // line = Bodies.rectangle(200, 200, 60, 10, lineOptions);
  // World.add(world, ground);

  console.log(ball);
}

function draw() 
{
  background(51);

  //To refresh the Engine 
  Engine.update(engine);
  //Makes X and Y as the Center of the rectangle instead of top left
  rectMode(CENTER);
  ellipseMode(RADIUS);

  //Displaying
  ellipse(ball.position.x, ball.position.y, 15);
  ground.display();
  topWall.display();
  rightWall.display();
  leftWall.display();

 

  // Body.rotate(line,angle);
  // angle+=0.1;

  // push();
  // translate(line.position.x, line.position.y);
  // rotate(angle);
  // rect(0, 0, 60, 10);
  // pop();
}

function verticalForce(){
  Body.applyForce(ball, {x:0, y:0}, {x:0, y:-0.01});
}

function horizontalForce(){
  Body.applyForce(ball, {x:0, y:0}, {x:0.01, y:0});
}