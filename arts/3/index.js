function setup () {
  createCanvas(500, 500);
  smooth()
  background(255)

  let xStart = random(10)
  let xNoise = xStart
  let yNoise = random(10)

  for (let y = 0; y <= height; y += 5) {
    yNoise += 0.01
    xNoise += xStart

    for (let x = 0; x <= width; x+= 1) {
      xNoise += 0.1
      xNoise = xStart

      for (let x = 0; x <= width; x += 5) {
        xNoise += 0.1
        drawPoint(x, y, noise(xNoise, yNoise))
      }
    }
  }
}

function draw () {

}

function keyPressed () {
  if (keyCode === ENTER) {
    saveFrames('screen')
  }
}

function drawPoint (x, y, noiseFactor) {
  push()
  translate(x, y)
  rotate(noiseFactor * radians(360))
  stroke(0, 150)
  line(0, 0, 20, 0)
  pop()
}