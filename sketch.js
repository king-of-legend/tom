var tomAnimation,tom;
var bg;
var index = 0;
var y = 800;

function preload(){
  bg= loadImage("image/map.png");
  tomAnimation = loadAnimation("image/tom/1.png","image/tom/2.png","image/tom/3.png","image/tom/4.png");

}
function setup(){
canvas = createCanvas(windowWidth,windowHeight);
tom=createSprite(600,600,5,5);
tom.scale= 0.025;
tom.addAnimation("tom",tomAnimation);
}
function draw(){
background(bg);

/*if (keyDown("w")) {
  tom.velocityY=-10;
}*/
drawSprites();
}