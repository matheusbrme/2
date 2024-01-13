    





    
function preload(){
seaimage = loadimage("sea.png");
ship = loadanimation("ship-1.png","ship-2.png")
}

function setup(){
  createCanvas(400,400);
  oi.addimage(seaimage);
  ship1.addanimation(ship);


}

function draw() {
  background("blue");
   if(oi.x < 0 ) {
   oi.x = oi.width/2;
   }
    drawSprites();

 
}
