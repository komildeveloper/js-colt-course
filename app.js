let rating = 4;

if (rating === 3) {
  console.log('YOU ARE A SUPERSTAR!');
} else if (rating === 2) {
  console.log('MEETS EXPECTATIONS');
} else if (rating === 1) {
  console.log('NEEDS IMPROVEMENT');
} else {
  console.log('INVALID RATING!');
}

let highScore = 1430;
let userScore = 1200;

if (userScore >= highScore) {
  console.log(`Congrats, you have the new high score of ${userScore}`);
  highScore = userScore;
} else {
  console.log(
    `Good game. Your score of ${userScore} did not beat the high score of ${highScore}`
  );
}
