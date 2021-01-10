//Create variables here

var dog,happyDog,database,foodS,foodStock;
var dogImg,happyDogImg;




function preload()
{
  //load images here
  dogImg=loadImage("dogImg.png");
  happyDogImg=loadImage("dogImg.png");

}

function setup() {
	createCanvas(500, 500);
  


  database=firebase.database();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);


  dog=createSprite(250,250);
  dog.addImage(dogImg);

  dog.scale=0.5;
}


function draw() {  

background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDogImg);
}










  drawSprites();
  //add styles here

  textSize(15);

  fill("white");

  stroke("black");

  text("Note:Press up arrow to feed the doggo milk", 200,400);
  text(foodS+"food left for the doggo",250,400)
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
 
 if(x<=0){
   x=0;
 }
 else{
   x=x-1;
 }
 
 
  database.ref('/').update({
    Food:x
  })
}

