// ARGUMENTS
/**
  We can also write functions that accept inputs, called arguments
*/

function rollDie() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(`Rolled ${roll}`);
}

function throwDice(numRolls) {
  for (let i = 0; i < numRolls; i++) {
    rollDie();
  }
}

console.log(throwDice(5));

function greet(nickname) {
  console.log(`Hi ${nickname}!`);
}

greet('Komil');
