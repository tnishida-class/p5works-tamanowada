// 最終課題を制作しよう

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

let x, y, z, vx, vy;
let count, cycle;
let A, B;
let cx,cy,s,t;

function setup(){
  createCanvas(windowWidth, windowHeight);
  reset();
}

function reset(){
  x = width
  y = height / 2;
  vx = 5;
  vy = 5;
  count = 0;
  cycle = 100;
  cx = width/2;
  cy = 0;
  s = width / 2
  t = height / 2
}

function draw(){
  background(135,206,235);

  for(let i = 0; i < 200; i++){
  let x = (i+1)*20 ;
  push();
  stroke(176,224,230);
  line(x, 0, x-50, windowHeight);
  pop();
}


  pacman(x,y,100);
  x += 2;
  push();

  noStroke();
  fill(255,127,80)
  ellipse(cx,cy,30,30);
  fill(255,250,205);
  ellipse(s,t,50,50)
  pop();

  cx += vx;
  cy += vy;

   if(cx < 0 || cx > width ){
    vx = -1 * vx; }
  if(cy < 0 || cy > height){
    vy = -1 * vy; }

  if(dist(s,t,cx,cy)<=35){
    vx = -1 * vx;
    vy = -1 * vy; }


  if(dist(x,y,cx,cy)<=65){
    vx = 0;
    vy = 0;
    push();
    noStroke();
    fill(47,79,79);
    rect(0,0,width,height);
    pop();
  }

  cx = constrain(cx, 0, width);
  cy = constrain(cy, 0, height);

  if(x > width){ x = 0; }
  else if(x < 0){ x = width; }
  if(y > height){ y = 0; }
  if(y < 0){ y = height; }

    if(keyIsDown(LEFT_ARROW)){ s -= 10; }
  if(keyIsDown(RIGHT_ARROW)){ s += 10; }
  if(keyIsDown(UP_ARROW)){ t -= 10; }
  if(keyIsDown(DOWN_ARROW)){ t += 10; }


}

function pacman(x, y, z){
  push();
  fill(32,178,170);
  arc(x,y,z,z,A,B,PIE);
  fill(64,224,208);
  ellipse (x+5,y-25,13);
  pop();

  count = (count + 1) % cycle;
  if(count<50){A = 0+QUARTER_PI,B=PI+QUARTER_PI*3;}
  else{A=0 , B=PI+HALF_PI*2 ,line(x,y,x+50,y);}
}

 function mouseClicked(){
  s = mouseX;
  t = mouseY;
}
  function keyPressed(){
  if(key == " "){ reset(); }
}
