let fisrtRun = true

let Bunny = [];

function draw_one_frame(words, vocal, drum, bass, other,counter) {
  if(firstRun)  {
    rectMode(CENTER);
    Bunny.push(loadImage('bunnyImage_0.png'));
    Bunny.push(loadImage('bunnyImage_0.png'));
    Bunny.push(loadImage('bunnyImage_0.png'));
    Bunny.push(loadImage('bunnyImage_0.png'));

    Bunny.push(loadImage('bunnyImage_1.png'));


    
    fisrtRun = false
  }
  background(255);

var VocalFrame = int(map(vocal, 0, 100, 0, 1));
push();
scale(0.2);
image(Bunny[VocalFrame], width/2, height/2)
pop();



  }