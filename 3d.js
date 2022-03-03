function setup() {
    createCanvas(800, 800, WEBGL);//enables 3D render
  }
  
  function draw() {
    background(0);
    noFill();
    stroke(100, 100, 240);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(45, 45, 45);
  }