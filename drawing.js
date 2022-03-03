function setup() {
    createCanvas(950, 800); 
    fill(255,182,193);
    strokeWeight(2);
    stroke(51);
    rect(2, 2, 950-2, 800-2);
    noStroke();
  }
  
  function draw() {
    
    if (mouseIsPressed) {
      fill(0);
    } else{
        noFill();
    }
    
    ellipse(mouseX, mouseY, 3, 3);
  }
