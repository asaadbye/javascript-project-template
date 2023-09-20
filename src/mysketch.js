function setup () {
  createCanvas(windowWidth, windowHeight)
}

function draw () {
  background(0)
  fill(255)
  textAlign(CENTER, CENTER)
  textSize(32)
  text('Velkommen til Programmering', width / 2, height / 2)
}

export { setup, draw }
