// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if(bass < 20){
  background(255, 0, 0)}
  else{
    background(200)

  } 
  textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER);

  let blue = color(3, 86, 252);
  let green = color(45, 252, 3);
  let mapForColorLerp = map(vocal, 0, 100, 0, 1);
  let mappedColour = lerpColor(blue, green, mapForColorLerp);
  let rectSize = map(drum, 0, 100, 100, 100,);
  let circleYOffset = map(other, 0, 100, -100, 100);
 
  fill(255) // circle to stay white
  rect(width / 2 , height / 2, rectSize, rectSize, 1, 1)


  let textBackgroundSize = map(words.length, 0, 12, 0, width / 2)

  // display "words"
  fill(mappedColour)
  textAlign(CENTER);
  rect(width / 2, height / 3, textBackgroundSize, 100)
  fill(255)
  // textSize(vocal);
  // text(words, width / 2, height / 3);


  
}