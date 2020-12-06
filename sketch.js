var fixed, moving; 
var car1, car2;
var bus1, bus2;
var wall;

function setup() 
{ createCanvas(1200,400); 
  fixed=createSprite(300,200,60,100); 
  moving=createSprite(800,200,100,60); 
  fixed.shapeColor="green"; 
  moving.shapeColor="green";

  wall= createSprite(800, 100, 20, 50)
  wall.shapeColor="green";

  bus1= createSprite(1100, 50, 30, 30)
  bus1.shapeColor="cyan"
  bus1.velocityY=5;

  bus2= createSprite(1100, 350, 30, 30)
  bus2.shapeColor="pink";
  bus2.velocityY=-5;
  
  car1= createSprite(100, 300, 50, 50);
  car2= createSprite(1000, 300, 50, 50);
  car1.shapeColor="orange";
  car2.shapeColor="blue";

  car1.velocityX=5;
  car2.velocityX=-5;
}

  
function draw() 
{
   background(0); 
   moving.x=World.mouseX; 
   moving.y=World.mouseY; 
   
   
      
   if (myisTouching(fixed, moving))

   {


    fixed.shapeColor="yellow"; 
    moving.shapeColor="yellow"; 

   }

   else
   {

    fixed.shapeColor="green"; 
    moving.shapeColor="green"; 

   }

   if (myisTouching(moving, wall))
   {

    wall.shapeColor="red"; 
    moving.shapeColor="red"; 

   }

   else
   {

    wall.shapeColor="green"; 
    moving.shapeColor="green"; 

   }

  mybounceOff(car1, car2);
  
  mybounceOff(bus1, bus2)

      
      drawSprites(); 
}

  

