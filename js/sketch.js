// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Arriving "vehicle" follows the mouse position

// Implements Craig Reynold's autonomous steering behaviors
// One vehicle "arrive"
// See: http://www.red3d.com/cwr/

let v;

function setup() {
  createCanvas(windowWidth, windowHeight);
  v = new Vehicle(width / 2, height / 2);
}

function draw() {
  background(53);
  clear();

  let mouse = createVector(mouseX, mouseY);

  // Call the appropriate steering behaviors for our agents
  v.arrive(mouse);
  v.update();
  v.display();
}
