var ball, position, database;

function setup() {
  createCanvas(500, 500);

  ball = createSprite(250, 250, 20, 20);
  ball.shapeColor = "blue";
}

function draw() {
  background("white");

  if (keyDown(RIGHT_ARROW)) {
    ball.x = ball.x + 5;
  }

  if (keyDown(LEFT_ARROW)) {
    ball.x = ball.x - 5;
  }
  if (keyDown(UP_ARROW)) {
    ball.y -= 5;
  }
  if (keyDown(DOWN_ARROW)) {
    ball.y += 5;
  }

  drawSprites();
}
