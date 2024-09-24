function setup() {
  createCanvas(600, 400);  // Adjust canvas size to fit both shapes
}
function draw() {
  background(600, 0, 0);  // Set the background color to red (RGB: Red 255, Green 0, Blue 0)
  // Draw a white square at (0, 0) with a side length of 100
  fill(255);  // White color
  square(0, 0, 80);  // Draw the square at (0, 0) with size 100
  // Set the fill color to green
  fill(0, 255, 0);  // Green (RGB: Red 0, Green 255, Blue 0)  
  // Set the outline (stroke) color to black
 noStroke();  // No outline for the circle

  // Draw the circle at (400, 80) with a diameter of 160
  ellipse(400, 80, 140, 140);  // Draw the circle
  //Draw green 
  triangle(250, 130, 200, 280, 250, 280); 
  // Set fill color to magneta
  // Create a p5.Color object using a named color.
  let c = color('magenta');
  //Draw a eclipse
   fill(c);
  noStroke();
  ellipse (300,400,80)
   // Create a p5.Color object using HSB values.
  let c2 = color(50, 55, 100);
  // Draw.a rectangle
  fill(c2);
  noStroke();
  rect(450, 250, 125, 140)
 // Create a p5.Color object using RGB values.
  let c1 = color(255, 204, 0);
  // Draw the left circle.
  fill(c1);
  noStroke();
  circle(0, 250, 180);  
}


  