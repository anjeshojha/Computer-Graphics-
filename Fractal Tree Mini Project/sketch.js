var angle = 0;
var temp;
function setup() {
  createCanvas(1270, 600);
  temp = PI;
}

function draw() {
  stroke(0);
  fill(30, 144, 255);
  rect(0, 0, width, 100);
  fill(96,128,56);
  rect(0, 100, width, height);
  fill(169,169,169);
  quad(625,100,675,100,900,600,400,600);
  stroke(255);
  strokeWeight(2);
  beginShape();
  line(650,150,650,200);
  line(650,250,650,300);
  line(650,350,650,400);
  line(650,450,650,500);
  line(650,550,650,600);
  stroke(0);
  endShape();
  angle = temp;
  translate(200, height);
  left1tree(90);
  left2tree(80);
  left3tree(50);
  right1tree(45);
  right2tree(75);
  right3tree(90);
  stroke(165,42,42);
}
//left bottom tree
function left1tree(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 4) {
    push();
    rotate(angle/5);
    left1tree(len * 0.67);
    pop();
    push();
    rotate(-angle/7);
    left1tree(len * 0.67);
    pop();
  }
}
//left mid tree
function left2tree(len) {
    line(200,-2*len,200,-3*len);
    translate(200, -3*len);
    if (len > 4) {
    push();
    rotate(angle/6);
    left1tree(len * 0.67);
    pop();
    push();
    rotate(-angle/5);
    left1tree(len * 0.67);
    pop();
  }
   
}
//left top tree
function left3tree(len) {
    line(170,-2*len,170,-3*len);
    translate(170, -3*len);
    if (len > 4) {
    push();
    rotate(angle/5);
    left1tree(len * 0.67);
    pop();
    push();
    rotate(-angle/4);
    left1tree(len * 0.67);
    pop();
  }
   
}

//right bottom tree
function right1tree(len) {
  line(150, 0, 150, -0.5*len);
  translate(150, -0.5*len);
  if (len > 4) {
    push();
    rotate(angle/7);
    left1tree(len * 0.67);
    pop();
    push();
    rotate(-angle/7);
    left1tree(len * 0.67);
    pop();
  }
}
//right mid tree
function right2tree(len) {
    line(150,2*len,150,3*len);
    translate(150,2*len);
    if (len > 4) {
    push();
    rotate(angle/6);
    left1tree(len * 0.67);
    pop();
    push();
    rotate(-angle/5);
    left1tree(len * 0.67);
    pop();
  }
   
}
//right top tree
function right3tree(len) {
    line(150,3*len,150,4*len);
    translate(150,3*len);
    if (len > 4) {
    push();
    rotate(angle/5);
    left1tree(len * 0.67);
    pop();
    push();
    rotate(-angle/4);
    left1tree(len * 0.67);
    pop();
  }
   
}