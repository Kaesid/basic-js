const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    let flagToContinue = false;
    for (let i = 0; i < arr.length; i++)
      if (Array.isArray(arr[i])) {
        flagToContinue = true;
        break;
      }
    if (flagToContinue) {
      const arr2 = arr.flat();
      return depth + this.calculateDepth(arr2);
    } else {
      return depth;
    }
  }
};
