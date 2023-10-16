let firstRun = true
let speaker;
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if(firstRun){
    rectMode(CENTER);
    speaker = loadImage('Untitled_Artwork.png');

    firstRun = false
  }

  background(20);
  
  image(speaker, 500,80)

}
