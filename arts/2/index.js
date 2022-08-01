let centx = 250
let centy = 150

function setup(){
  createCanvas(500, 500);
  background(255)
  strokeWeight(0.5)
  smooth()

  let x
  let y

  for(let i = 0; i < 100; i++) {
    let lastx = -999
    let lasty = -999
    let radiusNoise = random(10)
    let radius = 10
    stroke(random(20), random(50), random(70), 80)

    let startAngle = int(random(360))
    let endAngle = int(random(1440))
    let angleStep = 5 + int(random(3))

    for(let ang = startAngle; ang <= endAngle; ang += angleStep) {
      radiusNoise += 0.05
      radius += 0.5
      let thisRadius = radius + (noise(radius) * 200) - 100
      let rad = radians(ang)
      x = centx + (thisRadius * cos(rad))
      y = centy + (thisRadius * sin(rad))

      if (lastx > -999) {
        line(x, y, lastx, lasty)
      }

      lastx = x
      lasty = y
    }
  }

}

function draw(){
}

function keyPressed() {
  if (keyCode === ENTER) {
    saveFrames('screen')
  }
}