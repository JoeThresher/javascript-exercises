const fibonacci = function (x) {
  // let fibArr = [1, 1];
  // let sumArr = [];
  // let curSum;

  // switch (x) {
  //   case 0:
  //     return 0;
  //   case 1:
  //     return 1;
  // }

  // for (let i = 0; i < 200; i++) {
  //   sumArr = fibArr.slice(-1);
  //   curSum = sumArr[0] + sumArr[1];
  //   fibArr = fibArr.concat(curSum);
  // }

  // return fibArr[x];

  if (x < 0) {
    return "OOPS";
  }

  let fib = [0, 1];

  for (let i = 2; i < 200; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }

  x = Number(x);
  return fib[x];
};

// Do not edit below this line
module.exports = fibonacci;
