// ギリシャ国旗
function setup() {
  const blue = color(0, 51, 160);
  createCanvas(270, 180);
  noStroke();
  background(255);

  let d = height / 9;

  for(let i = 0; i < 9; i++){
    if(i%2==1){
      fill(255);
    }
    else{
      fill(blue)
    }

    rect(0, i * d, width, (i + 1) * d);
  }

  fill(blue);
  let size = d * 5;
  rect(0, 0, size, size);

  fill(255);
  rect(0,40,100,20);
  rect(40,0,20,100);
}
