const sumAll = function (startInt, endInt) {
  let allNums = [];
  let sum = 0;

  if (
    startInt < 0 ||
    endInt < 0 ||
    !Number.isInteger(startInt) ||
    !Number.isInteger(endInt)
  ) {
    return "ERROR";
  }

  // Logic

  if (startInt > endInt) {
    for (let i = endInt; i <= startInt; i++) {
      allNums.push(i);
    }
  } else {
    for (let i = startInt; i <= endInt; i++) {
      allNums.push(i);
    }
  }

  for (const i in allNums) {
    sum += allNums[i];
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
