let r = 120;
let x0 = 0, y0 = r;
p = [];
p[0] = (1 - r);
let i = 0;
let x = x0; let y = y0;
let s = 300;
function setup() {
  createCanvas(600, 600);
}

function draw() {
  fill(255, 255, 255);
  if(x <= y) {
    if(p[i] < 0) {
      console.log(x + 1, y);
      ellipse(x + s, y - 1 + s, 4);
      ellipse(y - 1 + s, x + s, 4);
      ellipse(s - x, s + (y - 1), 4);
      ellipse(s - x, s - (y - 1), 4);
      ellipse(s + (y - 1), s - x, 4);
      ellipse((s + x), s - (y - 1), 4);
      ellipse(s - (y - 1), s - x, 4);
      ellipse(s - (y - 1), s + x, 4);

      p[i + 1] = p[i] + 2*(x + 1) + 1;
      x = x + 1;
    }else if(p[i] >= 0) {
      console.log(x + 1 , y - 1);
      ellipse(x + 1 + s, y - 1 + s, 4);
      ellipse(y - 1 + s, x + 1 + s, 4);
      ellipse(s - (x + 1), s + (y - 1), 4);
      ellipse(s - (x + 1), s - (y - 1), 4);
      ellipse(s + (y - 1), s - (x + 1), 4);
      ellipse((s + (x + 1)), s - (y - 1), 4);
      ellipse(s - (y - 1), s - (x + 1), 4);
      ellipse(s - (y - 1), s + x, 4);

      p[i + 1] = p[i] - 2*(y - 1) + 1 + 2*(x + 1);
      x = x + 1;
      y = y - 1;
    }
    i++;
  }
}