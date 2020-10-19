function setup() {
  createCanvas(1200,800);
 fixedRec= createSprite(400,600,60,90)
 fixedRec.shapeColor="green"
 fixedRec.velocityY=-3
 movingRec= createSprite(400,200,70,85)
 movingRec.shapeColor="green"
 movingRec.velocityY=3 ;
}

function draw() {
  background(0);  
  //movingRec.x=mouseX;
  //movingRec.y= mouseY;
  if(movingRec.x-fixedRec.x<movingRec.width/2+fixedRec.width/2 && 
    fixedRec.x-movingRec.x<movingRec.width/2+fixedRec.width/2){
  fixedRec.velocityX=fixedRec.velocityX*-1
  movingRec.velocityX=movingRec.velocityX*-1
  } 
  if(movingRec.y-fixedRec.y<movingRec.height/2+fixedRec.height/2 &&
    fixedRec.y-movingRec.y<movingRec.height/2+fixedRec.height/2){
      fixedRec.velocityY=fixedRec.velocityY*-1
      movingRec.velocityY=movingRec.velocityY*-1
  }
  drawSprites();
}