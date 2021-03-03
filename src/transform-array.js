const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new TypeError();
  let discardNexFlag = 0;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    switch (arr[i]) {
      case "--discard-next":
        i++;
        discardNexFlag = 1;
        break;
      case "--discard-prev":
        if (newArr.length !== 0 && i !== 0 && discardNexFlag == 0) {
          delete newArr[i - 1];
        } else if (discardNexFlag !== 0) discardNexFlag = 0;
        break;
      case "--double-next":
        if (i < arr.length) newArr[i] = arr[i + 1];
        break;
      case "--double-prev":
        if (i !== 0 && discardNexFlag === 0) {
          newArr[i] = arr[i - 1];
        } else if (discardNexFlag !== 0) discardNexFlag = 0;
        break;
      default:
        if (discardNexFlag !== 0) discardNexFlag = 0;
        newArr[i] = arr[i];
    }
  }
  const filtered = newArr.filter(function (el) {
    return el != null;
  });
  return filtered;
};

// input: [1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5],
