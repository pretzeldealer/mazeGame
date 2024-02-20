let bricks, tilesGroup;
let lambImage, img;
let vialStatus = 'uncollected';

function preload(){
    img = loadImage('media/placeholder.png');
}

function setup() {
  new Canvas(375, 700);

lamb = new Sprite();
lamb.scale= 0.045
lamb.w = 20;
lamb.h = 15;
lamb.x = 38;
lamb.y = 167;

vial = new Sprite();
vial.image = 'media/vial-03.png';
vial.scale= 0.0055
vial.w = 10;
vial.h = 20;
vial.x = 305;
vial.y = 165;

noStroke();
allSprites.colour = color('#15475C')

  bricks = new Group();
  bricks.collider = "static";
  bricks.w = 24;
  bricks.h = 24;
  bricks.tile = 'W'
  bricks.border = 'none'


  tilesGroup = new Tiles(
    [
      'WWWWWWWWWWWWWWW',
      'W       W  W  W',
      'WWW WWW   WWW W',
      'W   W   W   W W',
      'W W W W W WWW W',
      'W W   W     W W',
      'W   W WW WW   W',
      'WWWWW     W W W',
      'W   WW WW     W',
      'W W    WW WWWWW',
      'W W WW    W   W',
      'W W W WWWWW W W',
      'W   W W     W W',
      'WWW     WW WW W',
      'WWWWWWWWWWWWW W'
    ],
    18,
    140,
    bricks.w,
    bricks.h
  );

  }


function draw() {
  clear();

  background('#0C1F2C');

  image(img, 0, 0)
  img.width = windowWidth;

  lamb.image = lambImage;

  lamb.rotation = 0;

  if (mouseIsPressed == false){
    lamb.vel.x = 0;
    lamb.vel.y = 0;
    lambImage = 'media/lambStill.png'
  }


  let leftButton = createButton('&#8678');
  leftButton.position(86, 530);
  leftButton.mousePressed(() => {
    lamb.vel.x = -10;
    lambImage = 'media/lambAni.gif'
    lamb.mirror.x = false
  });

  let rightButton = createButton('&#8680');
  rightButton.position(215, 530);
  rightButton.mouseReleased(() => {
    lamb.vel.x = 10;
    lambImage = 'media/lambAni.gif'
    lamb.mirror.x = true;
  });

  let upButton = createButton('&#8679');
  upButton.position(150, 500);
  upButton.mousePressed(() => {
    lamb.vel.y -= 10;
    lambImage = 'media/lambAni.gif'
  });

  let downButton = createButton('&#8681');
  downButton.position(150, 565);
  downButton.mousePressed(() => {
    lamb.vel.y += 10;
    lambImage = 'media/lambAni.gif'
  });

  if (lamb.overlaps(vial)) {
    vial.remove();
    vialStatus = 'collected'
}

}
