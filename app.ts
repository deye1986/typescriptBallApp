import * as PIXI from 'pixi.js'


let ballSize = 32
let ballPos = 0
let speed = 6
let appWidth = 500;
let appHeight = 500;
let ballColour = 0x0000FF;
let app = new PIXI.Application({
  backgroundColor: 0xffff00, // app works if yellow
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
  
  constructor(size, xStartPos, yStartPos, xSpeed, ySpeed, colour) { 
    this.size = size;
    this.xStartPos = xStartPos;
    this.yStartPos = yStartPos;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.colour = colour;
    this.drawBall();

  }

  getBallInfo() {
    console.log(`ball size is ${this.size}`);
    let infoPosX = this.placeBall();
    console.log(`Speed is x${this.xSpeed} & y${this.ySpeed}`);
    console.log(`data for colour: ${this.colour}`);
  }
  
  placeBall() { 
    let randomPlace = Math.floor(Math.random() * (499 - 1 + 1)) + 1;
    console.log(`xAxis position = ${randomPlace} & yAxis = ${randomPlace}`) 
    return randomPlace
  }

  drawBall() {
    let testBall = new PIXI.Graphics();
      testBall.beginFill(ballColour);
      // it works the issue was above Graphics = graphics, thats why it did not work
      testBall.drawCircle(this.placeBall(), this.placeBall(), ballSize);
      testBall.endFill();
      app.stage.addChild(testBall);
      console.log(testBall);
      return testBall
  }
  
  testDisplay() {
    let circle = new PIXI.Graphics();
      circle.beginFill(0x9966FF);
      circle.drawCircle(0, 0, 32);
      circle.endFill();
      circle.x = 64;
      circle.y = 130;
      app.stage.addChild(circle);
  }
}



let ballOne = new Ball(ballSize, ballPos, ballPos, speed, speed, ballColour);
let ballTwo = new Ball(ballSize, ballPos, ballPos, speed, speed, ballColour);
let ballThree = new Ball(ballSize, ballPos, ballPos, speed, speed, ballColour);
let ballFour = new Ball(ballSize, ballPos, ballPos, speed, speed, ballColour);
let ballFive = new Ball(ballSize, ballPos, ballPos, speed, speed, ballColour);
let ballSix = new Ball(ballSize, ballPos, ballPos, speed, speed, 0xFF0000)

let ballContainer = [ballOne, ballTwo, ballThree, ballFour, ballFive, ballSix];

for(let i = 0; i < ballContainer.length; i++ ){
  console.log(ballContainer[i].getBallInfo());
  ballContainer[i].placeBall();
}

// ballOne.testDisplay(); // a tester

// function gameLoop(delta){
//   if(ballOne.x >= appWidth - size || ballOne.x < size)
//     ballOne.dx *= -1;
//   if(ballOne.y >= appHeight - size)
//     ballOne.dy = -18;
  
//   ballOne.x += ballOne.dx;
//   ballOne.dy += 0.4;
//   ballOne.y += ballOne.dy
  
// };

// ballOne.dx = 4;
// ballOne.dy = -0.8;

// app.ticker.add(delta => gameLoop(delta));