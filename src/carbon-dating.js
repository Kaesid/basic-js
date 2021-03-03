const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== `string`) {
    return false;
  }
  if (+sampleActivity > 0 && +sampleActivity <= MODERN_ACTIVITY) {
    let rateConstant = Math.log(2) / HALF_LIFE_PERIOD;
    let appAge = Math.ceil(
      Math.log(MODERN_ACTIVITY / sampleActivity) / rateConstant
    );
    return appAge;
  } else {
    return false;
  }
};
