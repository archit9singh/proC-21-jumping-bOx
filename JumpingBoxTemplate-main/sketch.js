var canvas;
var music;
var bounceB, redB, orangeB, purpleB

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);

    bounceB = createSprite(random(20,750),100,30,30);
    bounceB.velocityX = 2;
    bounceB.velocityY = 2;

    redB = createSprite(50,600,200,70);
    redB.shapeColor = "red"

    orangeB = createSprite(260,600,200,70);
    orangeB.shapeColor ="orange"
    
    purpleB = createSprite(470,600,200,70);
    purpleB.shapeColor ="purple"
    
    blueB = createSprite(680,600,200,70);
    blueB.shapeColor ="blue"

}


function draw() {
    background("black")

    edges = createEdgeSprites();
    bounceB.bounceOff(edges);

   console.log(bounceB.velocityX)
     
    if(bounceB.isTouching(redB)){
        bounceB.velocityY = bounceB.velocityY*-1;
        bounceB.shapeColor = "red";
    }
    if(bounceB.isTouching(orangeB)){
        bounceB.velocityY = bounceB.velocityY*-1;
        bounceB.shapeColor = "orange";
    }
    if(bounceB.isTouching(blueB)){
        bounceB.velocityY = bounceB.velocityY*-1;
        bounceB.shapeColor = "blue";
    }
    if(bounceB.isTouching(purpleB)){
        bounceB.velocityX = 0;
        bounceB.velocityY = 0;
        bounceB.shapeColour = "purple"
        music.stop();
    }
    if(frameCount % 200 == 0){
        bounceB.velocityX = bounceB.velocityX + 1;
        bounceB.velocityY = bounceB.velocityY + 1;
    }
    
    if(bounceB.isTouching(blueB)  ||  bounceB.isTouching(redB) || bounceB.isTouching(orangeB) ){
        music.play();
    }
    

  
    drawSprites();
   
    
}