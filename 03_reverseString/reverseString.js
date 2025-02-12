const reverseString = function (forwardString) {
  let stringArray = forwardString.split("");
  let reverseStringArray = [];

  for (const i in stringArray) {
    reverseStringArray.unshift(stringArray[i]);
  }

  return reverseStringArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
