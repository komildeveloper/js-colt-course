let subreddits = ['soccer', 'popheads', 'cringe', 'books'];

/** for (let i = 0; i < subreddits.length; i++) {
  console.log(i, subreddits[i]);
} */

for (let sub of subreddits) {
  console.log(sub);
}

let word = 'cockadoodledoo';

// with for
/** for (let i = 0; i < word.length; i++) {
  console.log(word[i]);
} */

// with for of
for (let char of 'cockadoodledoo') {
  console.log(char);
}
