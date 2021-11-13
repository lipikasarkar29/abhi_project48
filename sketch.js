var PLAY = 1;
var END = 2;
var START = 0;
var gameState = START;
var score=0;
var life=3;


function preload(){
 bgImg = loadImage ("bg3.jpg")
 bgImg2 = loadImage ("bg2.jpg")
 playImg = loadImage("play_button.png");

 turtleImg = loadImage("turtle.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  bg = createSprite(width/2,height/2)
  bg.addImage(bgImg);
  bg.scale=0.5

  bg2 = createSprite(width/2,height/2);
  bg2.addImage(bgImg2);
  bg2.visible=false
  bg2.scale =0.8

 playBtn = createSprite(windowWidth/2, windowHeight/2)
 playBtn.addImage(playImg)
 playBtn.scale = 0.1

 diver1=createImg("diver1.png")
 diver1.position(width/2-200,height/2-200)
 diver1.size(100,80)
 //diver1.mouseClicked(player1_select)

 diver2=createImg("diver2.png")
 diver2.position(width/2-200,height/2+100)
 diver2.size(100,80)
// diver2.mouseClicked(player2_select)

 diver3=createImg("diver3.png")
 diver3.position(width/2+200,height/2-200)
 diver3.size(100,80)
 //diver3.mouseClicked(player3_select)

 turtlegroup=new Group()
 
}


function draw() {
  
  background("skyblue");
  drawSprites();
  fill("yellow");
  textSize(20)
  text("Score: "+score,width-200,80);
  text("Lives: "+life,width-200,100);
  //displaying score
  if(gameState===START){
    //restart.visible=false
     if(mousePressedOver(playBtn)){
       gameState = PLAY
     }
   }
  
   if(gameState===PLAY){
    //restart.visible=false
    
    bg.visible=false;
    playBtn.visible=false;
    bg2.visible= true;
    bg2.velocityX=-5;

    if(bg2.x<380){
      bg2.x=bg2.width/3
    }
    //player.visible=true;
    spawnTurtle()

    }
    
    
  }  


  

  
function spawnTurtle(){
  if(frameCount%80==0){
    var turtle = createSprite(width,random(height/2-600,height/2+600),50 , 50 )
    turtle.addImage(turtleImg);
    turtle.scale=0.05;
   turtle.velocityX=-1
   // A1.rotation=180;
   turtle.lifetime=800;
   turtlegroup.add(turtle)
  }
  }  

  function player1_select(){
    player1=createSprite()
    player1.addImage(diver1.png)
  }
  


