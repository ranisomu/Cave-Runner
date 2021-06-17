var man, manImage;
var ground, BackgroundImage;
var rex, rexImage;
var inGround;
var mon2, mon2Image, monGroup;
var ran;
var gameImg,Over;

function preload() {

 manImage = loadImage("man.png");
 BackgroundImage = loadImage("Untitled.png");
 rexImage = loadImage("mon.png");
 mon2Image = loadImage("mon2.png");
 gameImg = loadImage("over.jpg");

}

function setup() {
createCanvas(1200,500);

ground = createSprite(600,300);
ground.addImage("ground",BackgroundImage);
ground.scale =0.8;
ground.velocityX = -5;

inGround = createSprite(600,470,1200,15);
inGround.visible = false;

man = createSprite(380,420);
man.addImage("man",manImage);
man.scale = 0.28;
//man.debug = true;
man.setCollider("rectangle",0,0,250,650);

rex = createSprite(110,310);
rex.addImage("rex",rexImage);
rex.scale = 1.0;
//rex.debug = true;
rex.setCollider("rectangle",0,0,200,330);

monGroup = new Group();

ran = Math.round(random(150,180));

}

function draw() {
background("black");

if(ground.x < 450) {
    ground.x = 1400;
}

if(keyDown(UP_ARROW) && man.y > 350) {
    man.velocityY = -12;
}

man.velocityY = man.velocityY + 0.6;
man.collide(inGround);

if(monGroup.isTouching(man)) {
   man.x = man.x - 70;
   monGroup.destroyEach();
}

if (monGroup.isTouching(rex)) {
    rex.velocityY = -10;
}

rex.velocityY = rex.velocityY + 0.6;
rex.collide(inGround);

if(man.isTouching(rex)) {
    console.log("GameOver");
    Over = createSprite(600,300);
    Over.addImage("over",gameImg);
    man.destroy();
    rex.destroy();
    mon2.destroyEach();
}

Obstacles();

drawSprites();
}

function Obstacles() {
    if(frameCount % ran === 0) {
        rex.velocityY = -10;
        mon2 = createSprite(1100,410);
        mon2.addImage("mon2",mon2Image);
        mon2.scale = 0.08;
        mon2.velocityX = -8
        mon2.lifetime = 150;
        //mon2.debug = true;
        monGroup.add(mon2);
    }
}