/** const animals = ['lion', 'tigers', 'bears'];

for (let i = 0; i < animals.length; i++) {
  console.log(i, animals[i]);
} */

/** const examScores = [98, 77, 84, 91, 57, 66];

for (let i = 0; i < examScores.length; i++) {
  console.log(i, examScores[i]);
} */

const myStudents = [
  {
    firstName: 'Zeus',
    grade: 86
  },
  {
    firstName: 'Aremis',
    grade: 97
  },
  {
    firstName: 'Hera',
    grade: 72
  },
  {
    firstName: 'Apollo',
    grade: 90
  }
];

/** for (let i = 0; i < myStudents.length; i++) {
  let student = myStudents[i];
  console.log(`${student.firstName} scored - ${student.grade}`);
} */

let total = 0;

for (let i = 0; i < myStudents.length; i++) {
  let student = myStudents[i];
  total += student.grade;
}

console.log(total / myStudents.length);

/** const word = 'steressed';
let reverseWord = '';

for (let i = word.length - 1; i >= 0; i--) {
  reverseWord += word[i];
  console.log(reverseWord);
  // console.log(i, word[i]);
}

// console.log(reverseWord); */
