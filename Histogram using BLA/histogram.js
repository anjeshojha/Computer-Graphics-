x = 200, y = 300 , xinc = 25;

function setup() {
 createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  translate(width / 4, height / 4);
  yinc = [50, 280, 110, 250, 70, 300, 240, 100, 150];
  j = 0;
  stroke(0, 255, 255);
  DDA(200, 300, 700, 300);
  DDA(200, 0, 200, 300);
  stroke(255, 255, 255);
  for(let i = 1; i < 19; i += 2) {
    DDA((x + (i * xinc)), y, (x + (i * xinc)), y - yinc[j]);
    DDA((x + ((i + 1) * xinc)), y, (x + ((i + 1) * xinc)), (y - yinc[j]));
    DDA((x + i * xinc), (y - yinc[j]), (x + ((i + 1) * xinc )), (y - yinc[j]));   
    j++;
  }
}

function DDA(x0, y0, x1, y1) {
  if(y0 >= y1){
    let dx, dy;
    let stepSize;
    let x = x0, y = y0;
    dx = x1 - x0;
    dy = y0 - y1;
    if(abs(dx) > abs(dy)) {
      stepSize = dx;
    }else {
      stepSize = dy;
    }
    xInc = (dx / stepSize);
    yInc = (dy / stepSize);
    while(x1 >= x && y1 <= y) {
      x += xInc;
      y -= yInc;
      point(x, y);
    }
  }else if(y0 < y1) {
    let dx, dy;
    let stepSize;
    let x = x0, y = y0;
    dx = x1 - x0;
    dy = y1 - y0;
    if(abs(dx) > abs(dy)) {
      stepSize = dx;
    }else {
      stepSize = dy;
    }
    xInc = (dx / stepSize);
    yInc = (dy / stepSize);

    while(x1 >= x && y1 >= y) {
      x += xInc;
      y += yInc;
      point(x, y);
    }    
  }
}
