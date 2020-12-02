var hr, mn, sc;
var hrAngle, mnAngle, scAngle;

function setup() {
  createCanvas(800,800);
  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc,0,60,0,360)
  hrAngle = map(hr,0,24,0,360)
  mnAngle = map(mn,0,60,0,360)
}

function draw() {
  background(0,0,0);  

  angleMode(DEGREES);

  push();
    rotate(scAngle);
    stroke(255,0,0);
    strokeWeight(7);
    line(0,0,100,0);
    translate(400,400);
  pop();

  push();
    rotate(mnAngle);
    stroke(255,0,0);
    strokeWeight(10);
    line(0,0,100,0);
    translate(400,400)
  pop();
 
  push();
    rotate(hrAngle);
    stroke(0,255,0);
    strokeWeight(7);
    line(0,0,100,0);
    translate(400,400)
  pop();

  drawSprites();
}

//please help it doesnt work i have no idea what to do here im tired