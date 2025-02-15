const findTheOldest = function (people) {
  let ageArr = people.map((person) => {
    if (person.includes(yearOfBirth) && person.includes(yearOfDeath)) {
      return person.yearOfDeath - person.yearOfBirth;
    }
  });
  return ageArr;
};

// Do not edit below this line
module.exports = findTheOldest;
