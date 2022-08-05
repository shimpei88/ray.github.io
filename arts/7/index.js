'use strict';
const fr = 60

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  frameRate(fr);
  noLoop()
}

function draw() {
  const positionX = random(0, windowWidth)
  const positionY = random(0, windowHeight)
  const rectWidth = 5
  const rectHeight = random(0, 300)
  const dig = random(0, 360)

  fill(0)
  rotate(dig);
  rect(positionX, positionY, rectWidth, rectHeight)
}

function keyReleased() {
  if (keyCode == DELETE) background(255);
  if (key == 's' || key == 'S') saveCanvas('s', 'png');
}
 