let angle=0
let value=0
function setup() {
  createCanvas(700, 700);
  background(250, 142, 219);
}

function draw() {
  translate(350,350)
  rotate(angle)
  fill(0)
  circle(0,20,100)
  circle(70,50,20)
  circle(100,200,165)
  fill(255,255,255)
 circle(200,250,30)
  
  angle=angle+0.01
}


function mousePressed(){
  //start/stop animation loop{
  if(isLooping()){
    noLoop()
} else{
  loop();
}
}

