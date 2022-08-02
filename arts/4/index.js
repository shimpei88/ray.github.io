let _num = 1

function setup() {
  createCanvas(windowWidth, windowHeight);
  smooth()
  background(0)
  strokeWeight(1)
  fill(150, 50)
  drawCircles()
}

function draw () {

}

function keyPressed() {
  if (keyCode === ENTER) {
    saveFrames('screen')
  }
}

function mouseReleased() {
  drawCircles()
}

function drawCircles() {
  for(let i = 0; i <= _num; i++) {
    let x = random(width)
    let y = random(height)
    let radius = random(100) + 10
    noStroke()
    ellipse(x, y, radius * 2, radius * 2)
    stroke(0, 150)
    ellipse(x, y, 10, 10)
  }
}