let w = 50; // Width of the shape
let h = 70; // Height of the shape

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(200, 160, 400);
  myShape(width / 4, height / 2, 1);
  myShape(3 * width / 4, height / 2, 0.8);
  myShape(width / 2, height / 4, 1.2);
}

function myShape(x, y, s) {
  push(); // Create a separate layer
  translate(x, y); // Move the origin point
  scale(s);
  fill(500, 200, 300);

  ellipse(0, 0, w, h); // Head
  fill(200, 90, 400);
  ellipse(-10, -10, 10, 10); // Eyes
  ellipse(10, -10, 10, 10);
  

  beginShape();   // Mouth
  vertex(-10, 10); 
  quadraticVertex(0, 30, 10, 10);
  fill(380, 90, 20)
  endShape();

  pop(); // Dispose of the layer
}
