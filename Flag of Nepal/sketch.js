function setup() {
  createCanvas(screen.width,screen.height);
  console.log (screen.width);
  console.log (screen.height); 
  }

function draw() {
	strokeWeight(8);
	stroke(0,56,147);
	beginShape();
		  vertex(500, 150);
  		vertex(700, 300);
  		vertex(550, 300);
  		vertex(700, 450);
  		vertex(500, 450);
  		vertex(500, 150);
  		fill(220,20,60);
  	endShape();
  		noStroke();
  		strokeWeight(1);
  		fill(255,255,255);
      arc(555,250,60,50,0,PI);
      star(555, 250, 25, 18, 20); 
    star(555, 395, 30, 20, 12); 
}
  
function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape();
}