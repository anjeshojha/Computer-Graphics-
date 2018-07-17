x = 10; y = 10;
xinc = 20;

function setup() {
 createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  translate(width / 3, height / 3);
  xLine = [0, 10, 20, 50, 0, 14, 66, 2, 55, 59, 47, 150, 200];
  stroke(255, 255, 255);
  DDA(0, 250, 0, 0);
  DDA(0, 250, 300, 250);
  for(let k = 1; k < xLine.length; k++) {
    DDA((x + (k * xinc)), xLine[k - 1], (x + ((k + 1) * xinc)), xLine[k]);
  }  
}

function DDA(x0, y0, x1, y1) {
   var dx = x1-x0;
  var dy = y1-y0;

  if (Math.abs(dx) > Math.abs(dy)){
    var steps = Math.abs(dx);
  }
  else{
    var steps = Math.abs(dy);
  }

  var Xinc = dx/steps;
  var Yinc = dy/steps;

  var X = x0;
  var Y = y0;
  beginShape();
  for ( var i = 0; i <= steps; i++){
    point(X,Y);
    X += Xinc;
    Y += Yinc;
  }
  endShape();
}
