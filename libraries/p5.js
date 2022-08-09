// module aliases
var Engine = Matter.Engine,
    // Render = Matter.Render,
    Bodies = Matter.Bodies,
    World = Matter.World;

var engine;
var world;
var circleA;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  engine = Engine.create();
  world = engine.world;
  circleA = Bodies.circle(200, 100, 80);
  Engine.run(engine);
  World.add(world, circleA);
}

function draw() {
  background(255);

  circle(circleA.position.x, circleA.position.y, 20);
}
