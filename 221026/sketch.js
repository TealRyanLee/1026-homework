function setup() {
  createCanvas(windowWidth, windowHeight);
  // mic=new p5.Audtion

}

  // let x=width/2
  // let y=height/2
function draw() {
  background(220);
  textSize(40)
  text("x:"+mouseX+"  y:"+mouseY,50,50)
  // for(var i=0;i<6;i++){
  push()
    translate(width/2,height/2)
    fill('#e6ccb2')
    ellipse(0,0,400)
    fill('#f2e8cf')
    ellipse(0,0,100,50)
    fill(255)
    ellipse(-25,0,20)
    ellipse(25,0,20)

    ellipse(-75,-100,60)
    ellipse(75,-100,60)

    fill(0)
    ellipse(-75+map(mouseX,0,width,-20,20),-100+map(mouseY,0,height,-20,20),20)
    ellipse(75+map(mouseX,0,width,-20,20),-100+map(mouseY,0,height,-20,20),20)
    
    if(mouseIsPressed){
      fill(255)
      arc(0,75,200,300,0,PI)
    }
    else{
      fill('#132a13')
      arc(0,75,200,75,0,PI)
    }
    // arc(0,75,200,75+micLevel*1000,0,180)
    fill('#e6ccb2')
    arc(0,74,200,50,0,PI)
    pop()

  // push()
  // pop()
  // }


}
