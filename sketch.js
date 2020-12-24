var gameState = "loginPage1"
var startButton;
function preload() {
  bgIMg = loadImage("spacewarsBg.jpg")
  bgIMg1 = loadImage("spaceBg.jpg")
  

}

function setup() {
  createCanvas(750, 500);
  login1 = new LoginPage1();
  login1.display()
 
}

function draw() {
  
if(gameState==="loginPage2"){
 
  background(bgIMg1);
 
}

  drawSprites();
}
