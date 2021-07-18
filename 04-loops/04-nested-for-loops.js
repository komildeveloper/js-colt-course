// NESTED FOR LOOPS

for (let i = 1; i <= 10; i++) {
  console.log(` OUTER LOOPS: ${i}`);
  for (let j = 10; j >= 0; j -= 2) {
    console.log(`  INNER LOOP ${j}`);
  }
}

const gameBoard = [
  [4, 32, 8, 4],
  [64, 8, 32, 2],
  [8, 32, 16, 4],
  [2, 8, 4, 2]
];

let totalScore = 0;
for (let i = 0; i < gameBoard.length; i++) {
  let row = gameBoard[i];
  for (let j = 0; j < row.length; j++) {
    totalScore += row[j];
  }
}

console.log(totalScore / gameBoard.length);
