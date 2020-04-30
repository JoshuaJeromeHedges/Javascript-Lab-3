let scores = [
  { name: "Jane", score: 95, date: "2020 - 01 - 24", passed: true },
  { name: "Joe", score: 77, date: "2018 - 05 - 14", passed: true },
  { name: "Jack", score: 59, date: "2019 - 07 - 05", passed: false },
  { name: "Jill", score: 88, date: "2020 - 04 - 02", passed: true },
];

const addScore = (array, newName, newScore, newDate) => {
  let newObject = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  };

  array.push(newObject);
};
addScore(scores, "Janice", 66, "2019 - 06 - 06");

// console.log(studentScores);

const deleteScoreByIndex = (array, index) => {
  // Functionality: remove the object from the array at the specified index using
  // the splice method.
  array.splice(index, 1);
};
deleteScoreByIndex(scores, 1);
// console.log(studentScores);

const deleteScoreByName = (array, name) => {
  // Functionality: remove the object from the array that has the provided name.
  // Incorporate the findIndex method and the splice method.
  let indexToRemove = array.findIndex((person) => {
    return person.name === name;
  });
  array.splice(indexToRemove, 1);
};

deleteScoreByName(scores, "Jack");
// console.log(studentScores);

const editScore = (array, index, score) => {
  //: update an object’s score in the array at the specified index. Use
  // conditional statements to set the value for the passed property to true if the
  // score is greater than or equal to 60 and false otherwise.

  array[index].score = score;
  array[index].passed = score >= 60;
};

editScore(scores, 2, 99);
// console.log(scores);

const findScoreByName = (array, name) => {
  return array.find((person) => {
    return person.name === name;
  });
};

// console.log(findScoreByName(scores, "Jill"));

const findLowestScore = (array) => {
  let lowestScore = array[0];
  array.forEach((person) => {
    if (person.score < lowestScore.score) {
      lowestScore = person;
    }
  });
  //   return with the lowest score within the score array, so searches for lowestScore.within score element in the objects
  return lowestScore.score;
};
// console.log(findLowestScore(scores));

const findAverageQuizScore = (array) => {
  let total = 0;
  for (let person of array) {
    total += person.score;
  }

  return total / array.length;
};
// console.log(findAverageQuizScore(scores));

const filterScores = (array, value) => {
  return array.filter((object) => {
    return object.name === value;
  });
};
// console.log(filterScores(scores, "name", "Joe"));

// try using if else statements instead!!!
const sortScoresAsc = (array) => {
  return array.sort((a, b) => {
    return a.scores < b.scores ? 1 : -1;
  });
};
// console.log(sortScoresAsc(scores));
