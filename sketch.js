let gridname = "Richard's Project 1 : Art 101"
let currentkey = '1';
let bgc ;
let mario;
let goomba;
let shroom;
let gkcount;
let rand = 150;
// ------------------------------------------------------------
function preload(){
  mario = loadImage('mario.png')
  goomba = loadImage('goomba.png');
  shroom = loadImage('shroom.png');
}
//-------------------------------------------------------------
function setup() {
    createCanvas(800, 800);
    background(255);
    loadImage('1-1backgroudpng.png', img => {
      image(img, -250, -250);
    });
    smooth();
    bgc = color(225,225,255);
    richard_tickrate = 69;
    richard_tickrate2 = 14;
}
// ------------------------------------------------------------
function draw() {
    if( keyIsPressed) {
    clear_da_canvas();
}
if(mouseIsPressed) {
  drawChoice();
  }
}
//---------------------------------------------------------------
function drawChoice() {
 let currentkey = key;
switch(currentkey) {
  case '0':
    消しゴム(bgc,mouseX, mouseY,25);
     break;
//----------------------
case '1':
    richard_brush(richard_tickrate, mouseX, mouseY, pmouseX, pmouseY);
    if (richard_tickrate > 255 ) {
        richard_tickrate = 14;
    } else {
        richard_tickrate+=14;
    }
    break;
//----------------------
  case '2':
      da_brush(richard_tickrate2, mouseX, mouseY, pmouseX, pmouseY);
      if (richard_tickrate2 > 200 ) {
          richard_tickrate2 = 20;
      } else {
          richard_tickrate2+=25;
      }
      break;
//----------------------
  case '3':
    atomizer(mouseX, mouseY, pmouseX, pmouseY);
  break;
//----------------------
case '4':
    za_WORLDO(color(255, 51, 0), mouseX, mouseY, pmouseX, pmouseY);
  break;
//----------------------
case '5':
    ハイエロファントグリーン(color(0, 153, 51), mouseX, mouseY, pmouseX, pmouseY);
  break;
  //----------------------
  case '6':
    SQUAREE(mouseX, mouseY, pmouseX, pmouseY);
  break;
//----------------------------------------------------------
// "images"
    //----------------------
    case '7':
    image(mario, mouseX, mouseY, 50, 50);
    break;
      //----------------------
    case '8':
      image(shroom, mouseX, mouseY, 50, 50);
    break;
        //----------------------
    case '9':
      image(goomba, mouseX, mouseY, 50, 50);
    break;
       //----------------------
default:
  break;
}

}
//---------------------------------------------------------------
function richard_brush(kcount, lx, ly,  px, py) {
  strokeWeight(random(10, 50));
  stroke(1,kcount,5);
  stroke(color(20, 180, 255));
  line(lx, ly, px, py);
}
//----------------------
function da_brush(kcount, lx, ly,  px, py) {
  strokeWeight(random(10, 10, 10));
  stroke(3,kcount,2);
  stroke(color(102, 51, 0));
  line(lx, ly, px, py);
}
//----------------------
function atomizer(x, y, px, py) {
  let speed = abs(x - px) + abs(y - py);
  stroke(speed/5);
  stroke(color(255, 255, 0));
  ellipse(x, y, speed, speed);
}
//----------------------
function za_WORLDO( k,  lx, ly,  px, py) {
  strokeWeight(5);
  stroke(k);
  line(lx, ly, px, py);
}
//----------------------
function ハイエロファントグリーン( k,  lx, ly,  px, py) {
  strokeWeight(20);
  stroke(k);
  line(lx, ly, px, py);
}
//----------------------
function SQUAREE(x, y, px, py) {
  let speed = abs(x - px) + abs(y - py);
  stroke(speed/3);
  stroke(color(255, 0, 225));
  rect(x, y, speed, speed);
}
//----------------------
function 消しゴム( k, lx, ly, sz) {
  stroke(k);
  stroke(color(255,255,255));
  ellipse(lx, ly, sz,sz);
}
//----------------------
function clear_da_canvas() {
  if (key == 'x' || key == 'X') {
     background(255);
     loadImage('1-1backgroudpng.png', img => {
       image(img, -250, -250);
     });
  } else if (key == 'p' || key == 'P') {
      saveFrames('image-0', 'png', 1, 1);
      key = '';  // resets the key so it does not make more than one image.
  }
}
