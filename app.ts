// for pixi.js
let appWidth = 500;
let appHeight = 500;
let ballColour = 0x0000FF;
let app = new PIXI.Application({
  backgroundColor: 0xe3e3e3,
  height: appHeight,
  width: appWidth
});
document.body.appendChild(app.view);

class Ball {
  private size:number;
  private xStartPos:number;
  private yStartPos: number;
  private xSpeed: number;
  private ySpeed: number;
  private colour;
  
  constructor(size, xStartPos, yStartPos, xSpeed=6, ySpeed=6, colour=ballColour) { 
    this.size = size;
    this.xStartPos = xStartPos;
    this.yStartPos = yStartPos;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.colour = colour;

  }

  getBallInfo(this) {
    console.log(`ball size is ${this.size}`);
    console.log(` X axis start position is ${this.xStartPos}`);
    console.log(` Y axis start position is ${this.yStartPos}`);
    console.log(`Speed is x${this.xSpeed} & y${this.ySpeed}`);
    console.log(`data for colour: ${this.colour}`);
  }
  
  placeBall() {
    let randomPlace: number = Math.floor(Math.random() * (500 - 1 + 1)) + 1;
    console.log(`xAxis = ${randomPlace} & yAxis = ${randomPlace}`)
    return randomPlace
  }

  drawBall(this) {
    let testBall = new PIXI.graphics();
    testBall.beginFill(this.colour);
    testBall.drawCircle(this.placeBall(), this.placeBall(), this.size);
    testBall.endFill();
    console.log(testBall);
    app.stage.addChild(testBall);
    return testBall
  }
}

// let ballPos = Math.floor(Math.random() * (500 - 1 + 1)) + 1;

let ballPos

let ballOne = new Ball(10, ballPos, ballPos);
let ballTwo = new Ball(20, ballPos, ballPos);
let ballThree = new Ball(30, ballPos, ballPos);
let ballFour = new Ball(40, ballPos, ballPos);
let ballFive = new Ball(50, ballPos, ballPos);


let ballContainer = [ballOne, ballTwo, ballThree, ballFour, ballFive];

for(let i = 0; i < ballContainer.length; i++ ){
  console.log(ballContainer[i].getBallInfo());
  ballContainer[i].placeBall();
}

ballOne.drawBall();


//for(let ballInstance of ballContainer){
//  console.log(ballInstance.getBallInfo());
//  console.log(ballInstance.placeBall());
//}
  
  
  
  
  
  
  