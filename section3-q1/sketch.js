
// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46",20,70,148,0,211,155,90);

}

function balloon(t,x,y,a,b,c,cx,cy){
  push();

  let w = textWidth(t);　
  let h = textAscent() + textDescent();
  let p = 2;

  noStroke();
  fill(a,b,c);
  rect(x, y, w + p * 2, h + p * 2);
  fill(255);
  text(t, x+p, y+h+p);

  let e = x+w+p*2 ;
  let f = y+h+p*2 ;
  fill(a,b,c);
  triangle(e,f,e,f-10,cx,cy);

  pop();
}
