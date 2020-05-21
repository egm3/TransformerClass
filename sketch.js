let angle = 0.0;
let x = 500;
function setup() {
  createCanvas(1000, 1000);
  angleMode(DEGREES);
  ellipseMode(CORNER);
}

function draw() {
  background(0);
  
  push();
  translate(width/2, width/2);
  for(var i = 0; i < x; i+=2) {
    scale(0.95);
    rotate(angle);
    ellipse(i*20+20, 0, 20+i, 20+i);
  }
  pop();
  angle+= 0.1;
}
