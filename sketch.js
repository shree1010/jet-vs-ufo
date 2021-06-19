const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var background,backgroundImg;
var jet,jetImg;
var bg;
var ufo,ufoImg,ufoG;
var laser,laserImg,laserG;
var score=0;
function preload(){
    backgroundImg=loadImage("background.jpg");
   jetImg=loadImage("jet.png");
   ufoImg=loadImage("ufo.png");
   laserImg=loadImage("laser.png");
}
function setup(){
    createCanvas(1000,600);
    engine=Engine.create();
    world=engine.world;
    
bg=createSprite(500,300)
bg.addImage(backgroundImg);
bg.scale=2.5;
jet=createSprite(150,350,10,10);
jet.addImage(jetImg);
jet.scale=0.2;
ufoG=createGroup();
laserG=createGroup();
ufoG=createGroup();
}
function draw(){
background(backgroundImg);

bg.velocityX=-4;
if(bg.x<375){
    bg.x=500;
    
}
if(laserG.isTouching(ufoG)){
    ufoG.destroyEach();
    score=score+5;
}
ufos();
drawSprites();
textSize(20);
    fill("white");
    text("Score: " + score, 900, 50);
}
function ufos(){
    if(frameCount%150===0){
        ufo=createSprite(1000,300,10,20);
        ufo.debug=false;
        //ufo.setCollider("rectangle",0,0,270,150)
        ufo.velocityX=-7;
        ufo.scale=0.5;
        ufo.y=Math.round(random(300,500))
        ufo.addImage(ufoImg);
        ufoG.add(ufo);
    }
  
}
function keyPressed(){
    if(keyCode===UP_ARROW){
        jet.y=jet.y-20;
    }
    if(keyCode===DOWN_ARROW){
        jet.y=jet.y+20;
    }
    if(keyCode===32){
        Laser();
    }
}
function Laser(){
    laser=createSprite(jet.x+170,jet.y-30,10,10);
    laser.addImage(laserImg);
    laser.velocityX=4;
    laser.debug=false;
    laser.setCollider("rectangle",-110,30,50,2)
    laserG.add(laser);
    
}