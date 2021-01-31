const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;

var thunder,thunder1,thunder2,thunder3,thunder4;
var engine;
var world;

var drops = [];
var rand;
var maxDrops = 200;
var thunderCreatedFrame = 0;

function preload()
{
    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
    thunder4 = loadImage("thunderbolt/4.png");

}

function setup()
{
   engine = Engine.create();
   world = Engine.world;
   createCanvas(400,700);

   umbrella = new Umbrella(200,500);

   //creating the drops
   if(frameCount % 150 === 0)
   {
       for(var i = 0; i < maxDrops; i ++)
       {
           drops.push(new Drops(random(0,400),random(0,400)));
       }
   }
}

function draw()
{
    Engine.update(engine);
    background(0);
    // creating the thunder
    rand = Math.round(random(1,4));
    if(frameCount % 50 === 0)
    {
        thunderCreatedFrame = frameCount;
        thunder = createSprite(random(10,370),random(10,30),10,10);
        switch (rand)
        {
            case 1 :
                thunder.addImage(thunder1);
            break;
            case 2 :
                thunder.addImage(thunder2);
            break;
            case 3 :
                thunder.addImage(thunder3);
            break;
            case 4 :
                thunder.addImage(thunder4);
            break;

        }

        thunder.scale = random(0.2,0.6);

    }
    if(thunderCreatedFrame+10 === frameCount && thunder)
    {
        thunder.destroy();
    }
    umbrella.display();
    for(var i = 0; i < maxDrops ; i++)
    {
        drops[i].showDrop();
        drops[i].updateY();
    }
    drawSprites();
}   

