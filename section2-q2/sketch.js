// チェッカー
function setup() {
  createCanvas(400, 400);
  let size = width / 8;
  noStroke();

  fill (150);
  for(let i=0; i<8; i++){
   for(let j=0; j<8;j++){

     if((i+j)%2==1){
 rect(30*i,30*j,30,30)}

    }
    }


  for(let i=0; i<8; i++){
    for(let j=0; j<8; j++){

      if(j<2){
     fill(255,0,0)
      }

      if(j==4,j==3){
        noFill();
      }

      if(j>4){
        fill(0)
      }


      if((i+j)%2==1){
  ellipse(15+i*30,15+j*30,25)
  }
    }
  }
}
