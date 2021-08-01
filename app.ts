class Ball {
    private size : number;
    private xStartPos : number;
    private yStartPos : number;
    private xSpeed : number;
    private ySpeed : number;

    constructor(size: number, xStartPos: number, yStartPos: number,
         xSpeed: number =6, ySpeed: number=6) { 
      this.size = size;
      this.xStartPos = xStartPos;
      this.yStartPos = yStartPos;
      this.xSpeed = xSpeed;
      this.ySpeed = ySpeed;
  
    }
  
    getBallInfo() {
      console.log(`ball size is ${this.size}`);
      console.log(` X axis start position is ${this.xStartPos}`);
      console.log(` Y axis start position is ${this.yStartPos}`);
      console.log(`Speed is x${this.xSpeed} & y${this.ySpeed} `);
    }
    
    placeBall() {
      let randomPlace = Math.floor(Math.random() * (500 - 1 + 1)) + 1;
      console.log(`xAxis = ${randomPlace} & yAxis = ${randomPlace}`);
  
    }
  }
  
  // let ballPos = Math.floor(Math.random() * (500 - 1 + 1)) + 1;
  let ballPos : any
  
  let ballOne = new Ball(10, ballPos, ballPos);
  let ballTwo = new Ball(20, ballPos, ballPos);
  let ballThree = new Ball(30, ballPos, ballPos);
  let ballFour = new Ball(40, ballPos, ballPos);
  let ballFive = new Ball(50, ballPos, ballPos);
  
  
  let ballContainer = [ballOne, ballTwo, ballThree, ballFour, ballFive];
  
  for(let i : number = 0; i < ballContainer.length; i++ ){
    console.log(ballContainer[i].getBallInfo());
    ballContainer[i].placeBall();
  
  }
  
  //for(let ballInstance of ballContainer){
  //  console.log(ballInstance.getBallInfo());
  //  console.log(ballInstance.placeBall());
  //}
