let gridSize = 120;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(60, 40, 30); // Dark brown background

  textSize(60);
  textAlign(CENTER, CENTER);
  fill(193, 154, 107); // Gold color
  
  // Drawing grid pattern
  for (let y = 0; y < height; y += gridSize) {
    for (let x = 0; x < width; x += gridSize) {
      // LV Monogram at some positions
      if ((x / gridSize + y / gridSize) % 4 == 0) {
        text("LV", x + gridSize / 2, y + gridSize / 2);
      } else if ((x / gridSize + y / gridSize) % 4 == 1) {
        drawClover(x + gridSize / 2, y + gridSize / 2);
      } else if ((x / gridSize + y / gridSize) % 4 == 2) {
        drawDiamondFlower(x + gridSize / 2, y + gridSize / 2);
      } else {
        drawSimpleFlower(x + gridSize / 2, y + gridSize / 2);
      }
    }
  }
}

// First floral pattern: Clover-like shape inside a circle
function drawClover(x, y) {
  push();
  translate(x, y);
  fill(193, 154, 107); 
  ellipse(0, 0, 60, 60); 
  for (let i = 0; i < 4; i++) {
    ellipse(0, -15, 15, 30); 
    rotate(HALF_PI);
  }
  pop();
}

// Second floral pattern: Diamond with petals
function drawDiamondFlower(x, y) {
  push();
  translate(x, y);
  fill(193, 154, 107); 
  beginShape();
  vertex(0, -40);
  vertex(30, 0);
  vertex(0, 40);
  vertex(-30, 0);
  endShape(CLOSE);
  
  for (let i = 0; i < 4; i++) {
    ellipse(0, -20, 20, 40);
    rotate(HALF_PI);
  }
  pop();
}

// Third floral pattern: Simple four-petal flower
function drawSimpleFlower(x, y) {
  push();
  translate(x, y);
  fill(193, 154, 107);
  for (let i = 0; i < 4; i++) {
    ellipse(0, -20, 20, 40); 
    rotate(HALF_PI);
  }
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
