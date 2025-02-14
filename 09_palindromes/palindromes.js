const palindromes = function (contestant) {
  const validCharacters = "abcdefghijklmnopqrstuvwxyz123456789";

  const stringClean = contestant
    .toLowerCase()
    .split("")
    .filter((char) => validCharacters.includes(char))
    .join("");

  let reverse = stringClean.split("").reverse().join("");

  if (stringClean === reverse) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
