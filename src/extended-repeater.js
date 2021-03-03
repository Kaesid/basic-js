const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const convStr = String(str);
  let finalStr = "";
  let numRepeat = 1;
  let separator = "+";
  let addition = "";
  let addRepTime = 1;
  let addSep = "";
  if (options === undefined) return convStr;
  if (options.repeatTimes !== undefined) numRepeat = options.repeatTimes;
  if (options.separator !== undefined) separator = options.separator;
  if (options.addition !== undefined) {
    addition = String(options.addition);
    addSep = "|";
  }

  if (options.additionRepeatTimes !== undefined) {
    addRepTime = options.additionRepeatTimes;
  }
  if (
    options.additionSeparator !== undefined &&
    options.additionRepeatTimes >= 1
  ) {
    addSep = options.additionSeparator;
  }
  // console.log("!!!----", addSep);
  for (let i = 1; i <= numRepeat; i++) {
    finalStr += convStr;
    for (let j = 1; j <= addRepTime; j++) {
      finalStr += addition;
      if (j != addRepTime) finalStr += addSep;
    }
    if (i !== numRepeat) finalStr += separator;
  }
  return finalStr;
};
