

let firstRun = true

let Bunny = [];


function draw_one_frame(words, vocal, drum, bass, other,counter) {

  if(firstRun)  {
    rectMode(CENTER);
    Bunny.push(loadImage('bunnyImage_0.png'));
    Bunny.push(loadImage('bunnyImage_0.png'));
    Bunny.push(loadImage('bunnyImage_1.png'));


    
    firstRun = false
  }
  
  background(255);

var VocalFrame = int(map(vocal, 0, 100, 0, 3));

if(bass < 20){ // backround colour flicker

  background(255, 182, 193)}
  else{
    background(255)

  } 
push();
scale(0.2);
image(Bunny[VocalFrame], width/2, height/2)
pop();


let blue = color(3, 86, 252);
let green = color(45, 252, 3);
let mapForColorLerp = map(vocal, 0, 100, 0, 1);
let mappedColour = lerpColor(blue, green, mapForColorLerp);
let EllipseSize = map(drum, 0, 50, 50, 50);
let circleYOffset = map(other, 0, 100, -100, 100);

fill(random(300)) // random colour grey/black
rect(width / 2 + circleYOffset, height / 2, EllipseSize, EllipseSize)


  }