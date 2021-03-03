const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnSpeed) {
  // turn/hour= turn/60min= turn/60min*60sec    turn/3600 sec  4308/3600 // sec= turn/ turn/sec
  let numberOfTurns = 2 ** disksNumber - 1;
  // console.log(numberOfTurns);
  let timeSol = Math.floor(numberOfTurns / (turnSpeed / 3600));
  // console.log(timeSol);
  let a = {
    turns: numberOfTurns,
    seconds: timeSol,
  };

  return a;
};
