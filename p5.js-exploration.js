function setup() {
  createCanvas(950, 800);  
  background(100);
  stroke(200);
  // strokeWeight(2);
  //stroke(20);
  // rect(2, 2, 800-2, 800-2);
}
////make a way for ppl to open a pic and then trace it

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}