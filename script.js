let studentScores = [
  { name: "Jane", score: 95, date: "2020 - 01 - 24", passed: true },
  {
    name: "Joe",
    score: 77,
    date: "2018 - 05 - 14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2019 - 07 - 05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020 - 04 - 02",
    passed: true,
  },
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

addScore(studentScores, "Janice", 66, "2019 - 06 - 06");
// console.log(studentScores);

const deleteScoreByIndex = (array, index) => {
  // Functionality: remove the object from the array at the specified index using
  // the splice method.
  array.splice(index, 1);
};
deleteScoreByIndex(studentScores, 0);
// console.log(studentScores);

function deleteScoreByName(array, name) {
  // Functionality: remove the object from the array that has the provided name.
  // Incorporate the findIndex method and the splice method.
  const indexToRemove = array.findIndex((scoreElement) => {
    return scoreElement.name === name;
  });
  array.splice(indexToRemove, 1);
}
deleteScoreByName(studentScores, "Jack");
// console.log(studentScores);

const editScore = (array, index, score) => {
  //: update an object’s score in the array at the specified index. Use
  // conditional statements to set the value for the passed property to true if the
  // score is greater than or equal to 60 and false otherwise.

  let passed = null;
  if (score >= 60) {
    passed = true;
  } else {
    passed = false;
  }
  array[index].score = score;
  array[index].passed = passed;
};

editScore(studentScores, 0, 45);
console.log(studentScores);

const findScoreByName = (array, name) => {
  return array.find((scoreElement) => {
    return (scoreElement.name = name);
  });
};

console.log(findScoreByName(studentScores, "Jill"));

const findLowestScore = (array) => {
  let currentLowestScore = array[0];
  array.forEach((element) => {
    if (element.score < currentLowestScore.score) {
      currentLowestScore = element;
    }
  });
  return currentLowestScore;
};
console.log(findLowestScore(studentScores));

const findAverageQuizScore = (array) => {
  let currentScores = 0;
  for (let object of array) {
    currentScores += object.score;
  }

  return currentScores / array.length;
};
console.log(findAverageQuizScore(studentScores));

const filterScores = (array, value) => {
  return array.filter((object) => {
    return object.name === value;
  });
};
console.log(filterScores(scores, "name", "Joe"));

const sortScoresAsc = (array) => {
  return array.sort((a, b) => {
    return a.score < b.score;
  });
};
console.log(sortScoresAsc(studentScores));
