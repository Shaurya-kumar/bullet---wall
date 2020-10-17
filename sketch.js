var bullet,wall;
var speed,weight;
var thickness;



function setup() {
  createCanvas(1600,400);

speed = random(223,321);
weight = random(32,50);
thickness = random(22,83);

bullet = createSprite(50 , 200, 50, 5);
wall = createSprite(1200,200,thickness,200);

bullet.velocityX = speed;

}

function draw() {
  background("black");  

if (hasCollided(bullet,wall)){

  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed / ( thickness * 
  thickness * thickness );
    
  if(damage > 10){
   
    wall.shapeColor = color(255,0,0);
    bullet.velocityX = 0;

  }

if(damage < 10){

   wall.shapeColor = color(0,255,0);
   bullet.velocityX = 0;
}



}

  hasCollided();
  
  
  drawSprites();
}

function hasCollided(obj1,obj2){

  if(bullet.x - wall.x < bullet.width/2 + wall.width/2 &&
    wall.x - bullet.x < bullet.width/2 + wall.width/2 &&
    bullet.y - wall.y < bullet.height/2 + wall.height/2 &&
    wall.y - bullet.y < bullet.height/2 + wall.height/2){

     return true;
  
    }
  else {

  return false; 


  }










}






























