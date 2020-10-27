var fish, fishImg;
var water, waterImg, waste, wasteImg;
var can, canImg, canGroup;
var seed, seedImg, seedGroup;
var sewage, sewageImg, sewageGroup;
var heart, heart2, heart3, heartImg;
var button;
var score=0;
var health=100;

var gameState = 0;

function preload(){
	fishImg = loadImage("QueenFish (2).png");
	waterImg = loadImage("Water.png");

	canImg = loadImage("Can.png");
  sewageImg = loadImage("sewage.png");

	heartImg = loadImage("heart.png");
}

function setup() {
  createCanvas(1000,800);

  water = createSprite(500, 400);
  water.addImage(waterImg);
  water.scale = 2.2;

  fish = createSprite(260, 600);
  fish.addImage(fishImg);
  fish.scale = 0.2;

  heart = createSprite(100, 50);
  heart.addImage(heartImg);
  heart.scale = 0.1;

    sewage = createSprite(80, 410);
    sewage.addImage(sewageImg);
    sewage.scale = 1.6;
    //sewage.visible = false;

  canGroup = new Group();
  seedGroup = new Group();
}

function draw() {
  background(0);

    if(gameState===1){

      if(keyDown(UP_ARROW)){
      fish.velocityY = -4;
      }   else if(keyWentUp(UP_ARROW)){
          fish.velocityY = 0;
          }
      if(keyDown(DOWN_ARROW)){
      fish.velocityY = 4;
      }   else if(keyWentUp(DOWN_ARROW)){
          fish.velocityY = 0;
          }

water.velocityX = -5;

  if (water.x < 0){
    water.x = 500;
  }

if(fish.y<100){
  fish.y = 130;
}
if(fish.y>690){
  fish.y = 660;
}

if(frameCount%38===0){
  spawnCans();
 }

if(canGroup.isTouching(fish)){
      health = health - 1;
}

if(health===0){
gameState = 2;
}     else if(health!==0 && score===500){
      gameState = 3;
      }
}

if(gameState===2){
  canGroup.destroyEach();
  fish.visible = false;
  water.visible = false;
  sewage.visible = false;
  heart.visible = false;
  background(0);
}else if(gameState===3){
  canGroup.destroyEach();
  fish.visible = false;
  water.visible = false;
  sewage.visible = false;
  heart.visible = false;
  background(0);
}

  drawSprites();

if(gameState === 1){
  textSize(35);
  fill("red");
  text("Score: "+ score, 80,125);
  score = score + Math.round(getFrameRate()/60);

  fill(255);
  text("YOU HAVE :" + health + ": MUCH HEALTH", 150, 60);
}
  if(gameState===2){
    textSize(20);
  fill(255);
  text("YOU WERE NOT ABLE TO SAVE THE FISH....TRY AGAIN", 30, 200);
  text("THERE ARE MANY FISHES WHICH LOSE THEIR LIVES WITHOUT ANY FAULT", 30, 300);
  text("SPREAD AWARENESS FOR THE JUSTICE THEY MUST GET", 30, 400);
  text("AND PREVENT MANY MORE DEATHS WHICH MIGHT BE TAKING PLACE CURRENTLY", 30, 500);
  text("AND STOP WATER POLLUTION", 30, 550);
  }   else if(gameState===3){
      textSize(60);
      fill(255, 136, 45);
      text("BRILLIANT !! YOU WON THE GAME",0, 200);

      textSize(20);
      text("YOU SAVED A FISH", 30, 300);
      text("YOU WERE GREAT", 30, 400);
      text("YOU ARE THE REAL FRIEND OF THE FISH", 30, 500);
  }

  if(gameState===0){
          background(100);

          fill(0);
          textSize(25);
          text("WELCOME TO THE GAME", 300, 200);
          text("USE THE ARROW KEYS TO MOVE THE FISH", 200, 500);
          text("EAT SEEDS TO INCREASE HEALTH", 200, 400);
          text("AVOID CONTACT WITH CANS AS THEY WILL REDUCE YOUR HEALTH", 100, 450);
          text("PRESS SPACE TO CONTINUE", 350, 600);

          textSize(60);
          text("ALL THE BEST", 350, 700);

            if(keyCode===32){
              gameState = 1;
            }
        }

}



function spawnCans(){
	var can = createSprite(1000, 400);
	can.addImage(canImg);
	can.scale = 0.3;
	can.y = Math.round(random(100, 700));
	can.velocityX = -5;
	can.lifetime = 200;

	canGroup.add(can);
}