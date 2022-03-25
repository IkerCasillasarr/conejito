var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,orangeImg,redImg,carrotImg;


function preload(){
  gardenImg = loadImage("garden.png");

  rabbitImg = loadImage("rabbit.png");

  appleImg = loadImage("apple.png");

  orangeImg = loadImage("orangeLeaf.png");

  redImg = loadImage("redImage.png");
}


function setup(){
  
  createCanvas(400,400);

// Mover el fondo

garden=createSprite(200,200);
garden.addImage(gardenImg);


//crear sprite del conejo moviéndose
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  // mover al conejo en el eje X con el mouse
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
   drawSprites(); 

  // que sea random
   var orangeL = Math.round(random(1,3));
   var redL = Math.round(random(1,3));
   var apple = Math.round(random(1,3));

  
//para su generacion y llamar a las funciones

    if (frameCount % 80 == 0) {
     if (apple == 1) {
        createApples();
    } else if (redL,orangeL == 2) {
        createOrange();
    }else {
        createRed();
    }
  }

}
//funciones

function createApples() {
apple = createSprite(random(50, 350),40, 10, 10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY = 3;
apple.lifetime = 150;
  
}

function createOrange() {
orangeL = createSprite(random(50, 350),40, 10, 10);
orangeL.addImage(orangeImg);
orangeL.scale=0.08;
orangeL.velocityY = 3;
orangeL.lifetime = 150;
}

function createRed() {
redL = createSprite(random(50, 350),40, 10, 10);
redL.addImage(redImg);
redL.scale=0.06;
redL.velocityY = 3;
redL.lifetime = 150;
}
