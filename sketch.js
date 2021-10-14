//variables for the images
var bg, issImage, sc1Image, sc2Image, sc3Image, sc4Image;

//variables for the sprites
var iss, spacecraft, hasDocked = false;


function preload()
{
  bg = loadImage("Docking-undocking/spacebg.jpg");
  issImage = loadImage("Docking-undocking/iss.png");
  sc1Image = loadImage("Docking-undocking/spacecraft1.png");
  sc2Image = loadImage("Docking-undocking/spacecraft2.png");
  sc3Image = loadImage("Docking-undocking/spacecraft3.png");
  sc4Image = loadImage("Docking-undocking/spacecraft4.png");
}

function setup() {
  createCanvas(800,400);
  
  iss = createSprite(400, 200, 50, 50);
  iss.addImage(issImage);
  iss.scale = 0.9;

  spacecraft = createSprite(400, 350, 50, 50);
  spacecraft.addImage(sc1Image);
  spacecraft.scale = 0.2;

}

function draw() {
  background(bg);  
  
  if(!hasDocked){
    if(keyDown("UP_ARROW"))
    {
     spacecraft.y = spacecraft.y - 3;
    }

    if(keyDown("LEFT_ARROW"))
    {
     spacecraft.x = spacecraft.x - 3;
     spacecraft.addImage(sc4Image);
    }

    if(keyDown("RIGHT_ARROW"))
    {
     spacecraft.x = spacecraft.x + 3;
     spacecraft.addImage(sc3Image);
    }

    if(keyDown("DOWN_ARROW"))
    {
      spacecraft.y = spacecraft.y + 3;
      spacecraft.addImage(sc2Image);
    }
}

    if(spacecraft.y<=(iss.y+90) && spacecraft.x<=(iss.x-10))
    {
      hasDocked = true;
      textSize(30);
      text("Docking Successful",400,200);
      

    }

  
  
  
  
  
  
  
  
  
  
  
  
  
  drawSprites();


}