const SLICE_COUNT = 14;

let Antline = 950;
let Antbody = 0;
let Anthead = Antbody+15;
let antMoveY =  0;
let antMoveX = 0;
let Anttail = Antbody-20;
function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);

  pScope.load_image("Bug","png");
  pScope.load_image_sequence("Lizard","png",14);

  angleMode(DEGREES);
}

function setup_layers(pScope){

  new PLayer(null, 148, 117, 78);  

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


function Ant(x, y, animation, pScope){
  translate(-100,Antline);
  translate(0, 100);
  fill(54, 26, 28);
  ellipse(Antbody+antMoveX,0+antMoveY,20,20);
  ellipse(Anthead+antMoveX,0+antMoveY,20,20);
  ellipse(Anttail+antMoveX,0+antMoveY,35,20);

 if(animation.frame<0.5){
    antMoveY-=20;
  }
  else{
    antMoveY+=20;
  }

  antMoveX+=15;
  if(animation.frame==0){ 
  antMoveX = 0;
  }
  

}
  function Bug(x,y, animation, pScope){
  pScope.draw_image("Bug",x,y);

  
}
