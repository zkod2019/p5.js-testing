let x = 0
let y = 0
const lightsLocation = 800
function setup() {
  createCanvas(800, 800)
  background(255) // one number 0-255 is dark to light
}
function draw() {
  background(255, 10) // luminosity and alpha
  for(let counter=0; counter<100; counter++) {
    r = random(255); 
    g = random(255); 
    b = random(255);
    a = random(200, 255); 
  
    noStroke();
    fill(r, g, b, a);
      x = (random(-lightsLocation, lightsLocation)
            +random(-lightsLocation, lightsLocation)
            +random(-lightsLocation, lightsLocation)
            +random(-lightsLocation, lightsLocation)
            +random(-lightsLocation, lightsLocation))
      y = (random(-lightsLocation, lightsLocation)
            +random(-lightsLocation, lightsLocation)
            +random(-lightsLocation, lightsLocation)
            +random(-lightsLocation, lightsLocation)
            +random(-lightsLocation, lightsLocation))
      
      ellipse(x, y, 5, 5) // square
  }
}