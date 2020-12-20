
var monkey , monkey_running
var banana,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;
var bananaGroup, obstacleGroup;
var survivalTime;
var survivalTime = ("frameRate");
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
} 



function setup() {
  
monkey=createSprite(80, 315, 20, 20);
monkey.addAnimation("moving", monkey_running);
monkey.scale=0.1;

  
ground=createSprite(400, 350, 900, 10);
ground.velocityX = -4;

console.log(ground.x);

bananaGroup = new Group();
obstacleGroup = new Group();
  
}


function draw() {
background("green");

if(keyDown("space")&& monkey.y >=310){
monkey.velocityY = -13
}
monkey.velocityY = monkey.velocityY + 0.8
monkey.collide(ground);
ground.x = ground.width/2;

if(frameCount % 80 === 0){
  spawnBanana();
}  
if(frameCount > 300 && frameCount % 60 === 0){
  spawnObstacle();
}
  
stroke("white");
textSize(20);
fill("white")
text("Score: "+score, 10, 50);
  
stroke("black")
textSize(20);
fill("black")
survivalTime = Math.ceil(frameCount/frameRate())
text("Survival Time : "+ survivalTime, 200, 50);
  
drawSprites()
}

function spawnBanana(){
banana=createSprite(600, Math.round(random(170, 300)), 20, 20);
banana.addImage(bananaImage);
banana.velocityX = -4;
banana.scale = 0.1;
banana.lifetime = 300;
bananaGroup.add(banana);
}
function spawnObstacle(){
obstacle=createSprite(600, 315, 20, 20);
obstacle.addImage(obstacleImage);
obstacle.velocityX = -4;
obstacle.lifetime = 300;
obstacle.scale = 0.15;
obstacleGroup.add(obstacle)

}




