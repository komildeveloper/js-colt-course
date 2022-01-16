const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while(guess !== target) {
  console.log(`Target: ${target} Guess: ${guess}`);
  guess = Math.floor(Math.random() * 10);
}

console.log(`Target: ${target} Guess: ${guess}`);
console.log('CONGRATS YOU WIN!');

// while (some condition)
// in the loop, update or attempt to make that condition false
