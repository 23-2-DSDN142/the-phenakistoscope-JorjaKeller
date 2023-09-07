const SLICE_COUNT = 14;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);

  pScope.load_image("Bug","png")
  pScope.load_image_sequence("Lizard","png",14);

  angleMode(DEGREES);
}

function setup_layers(pScope){

  new PLayer(null, 148, 117, 78);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(Lizard);
  layer1.mode( RING );
  layer1.set_boundary( 200, 900 );

  var layer2 = new PLayer(Bug);
  layer2.mode( SWIRL(2) );
  layer2.set_boundary( 0, 400 );

  var layer3 = new PLayer(Ant);
layer3.mode(RING);
layer3.set_boundary(900,1000);

}

function Lizard(x,y,animation,pScope){
  push();
  rotate(180);
  pScope.draw_image_from_sequence("Lizard",x,y+665,animation.frame);
  pop();
}

function faces(x, y, animation, pScope){
  
  scale(animation.frame*2);

  ellipse(0,0,50,50); // draw head
  fill(30);
  ellipse(-10,-10,10,10); //draw eye
  ellipse(10,-10,10,10); // draw eye
  arc(0,10,20,10,0,180); // draw mouth

}

//function Ant(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  //let angleOffset = (360 / SLICE_COUNT) / 2
  // let backgroundArcStart = 270 - angleOffset;
  // let backgroundArcEnd = 270 + angleOffset;

  

 // fill(255)
 // rect(-10,-300-animation.wave()*50,20,20) // .wave is a cosine wave btw
//}

function Ant(x, y, animation, pScope){
  fill(54, 26, 28)
  ellipse(100,950,20,20)
  ellipse(115,950,20,20)
  ellipse(80,950,35,20)
}
  function Bug(x,y, animation, pScope){
   /*let angleOffset = (360 / SLICE_COUNT) / 2
    let backgroundArcStart = 270 - angleOffset;
    let backgroundArcEnd = 270 + angleOffset;*/
    pScope.draw_image("Bug",x,y)

  
}
