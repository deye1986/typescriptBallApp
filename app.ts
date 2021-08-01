let ballPos = 0
let speed = 6
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
  private size : number;
  private xStartPos : number;
  private yStartPos : number;
  private xSpeed : number;
  private ySpeed: number;
  private colour: number;
  private infoPosX : number
  
  constructor(size, xStartPos, yStartPos, xSpeed, ySpeed, colour,) { 
    this.size = size;
    this.xStartPos = xStartPos;
    this.yStartPos = yStartPos;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.colour = colour;
    

  }

  getBallInfo() {
    console.log(`ball size is ${this.size}`);
    this.infoPosX = this.placeBall();
    console.log(` X axis start position is ${this.infoPosX}`);
    console.log(` Y axis start position is ${this.yStartPos}`);
    console.log(`Speed is x${this.xSpeed} & y${this.ySpeed}`);
    console.log(`data for colour: ${this.colour}`);
  }
  
  placeBall() { 
    let randomPlace = Math.floor(Math.random() * (499 - 1 + 1)) + 1; //seems to work
    console.log(`xAxis = ${randomPlace} & yAxis = ${randomPlace}`) 
    return randomPlace
  }

  drawBall(this) {
    let testBall = new PIXI.graphics();
    testBall.beginFill(this.colour);
    // im not sure the below line is firing placeball(), i thought an arrow functn
    testBall.drawCircle(this.placeBall(), this.placeBall(), this.size);
    testBall.endFill();
    app.stage.addChild(testBall);
    console.log(testBall);
    return this.testBall
  }
}

// let ballPos = Math.floor(Math.random() * (500 - 1 + 1)) + 1;



let ballOne = new Ball(10, ballPos, ballPos, speed, speed, ballColour);
let ballTwo = new Ball(20, ballPos, ballPos, speed, speed, ballColour);
let ballThree = new Ball(30, ballPos, ballPos, speed, speed, ballColour);
let ballFour = new Ball(40, ballPos, ballPos, speed, speed, ballColour);
let ballFive = new Ball(50, ballPos, ballPos, speed, speed, ballColour);


let ballContainer = [ballOne, ballTwo, ballThree, ballFour, ballFive];

for(let i = 0; i < ballContainer.length; i++ ){
  console.log(ballContainer[i].getBallInfo());
  ballContainer[i].placeBall();
}

ballOne.drawBall();