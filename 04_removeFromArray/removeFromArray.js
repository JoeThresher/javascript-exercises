const removeFromArray = function (passedArray, ...args) {
  let returnArray = [];

  for (const i in passedArray) {
    for (const j in args) {
      if (passedArray[i] === args[j]) {
        delete passedArray[i];
      }
    }
  }

  // filters out non-truthy array elements, since delete leaves undefined variables in the array
  return passedArray.filter(Boolean);
};

// Do not edit below this line
module.exports = removeFromArray;
