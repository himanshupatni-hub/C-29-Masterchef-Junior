var cake, cakeImg

function preload(){    
  cakeImg = loadImage("maxresdefault.jpg")
}

function setup(){
    var canvas = createCanvas(1200,600);
    background("brown")

    
}

function draw(){
   
  
 image(cakeImg,350,100,500,300)
  

   
    Engine.update(engine);
    
    drawSprites()
}
