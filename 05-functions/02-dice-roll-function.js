function rollDie() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(`Rolled ${roll}`);
}

function throwDice() {
  rollDie();
  rollDie();
  rollDie();
  rollDie();
  rollDie();
  rollDie();
}

throwDice();
