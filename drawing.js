const CANVAS_LENGTH = 800;
const BORDER_WEIGHT = 10;
const BRUSH_WEIGHT = 3;

function setup() {
    createCanvas(CANVAS_LENGTH, CANVAS_LENGTH); 
    fill(255,182,193);
    strokeWeight(BORDER_WEIGHT);
    rect(
      BORDER_WEIGHT,
      BORDER_WEIGHT,
      CANVAS_LENGTH - BORDER_WEIGHT * 2,
      CANVAS_LENGTH - BORDER_WEIGHT * 2
    );
    noStroke();
  }
  
  function draw() {
    noStroke();
    
    if (mouseIsPressed) {
      fill(0);
    } else{
        noFill();
    }
    
    ellipse(mouseX, mouseY, BRUSH_WEIGHT, BRUSH_WEIGHT);
  }
