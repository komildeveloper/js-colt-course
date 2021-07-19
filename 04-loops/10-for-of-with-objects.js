const movieReviews = {
  Arrival: 9.5,
  Alien: 9,
  Amelie: 8,
  'In Bruges': 9,
  Amedeus: 10,
  'Kill Bill': 8,
  'Little Miss Sunshine': 8.5,
  Coraline: 7.5
};

/** for (let x of movieReviews) {
  console.log(x);
} */

// console.log(Object.keys(movieReviews));
// console.log(Object.values(movieReviews));

for (let movie of Object.keys(movieReviews)) {
  console.log(movie, movieReviews[movie]);
}

const ratings = Object.values(movieReviews);
let total = 0;

for (let r of ratings) {
  total += r;
}

let avg = total / ratings.length;
console.log(avg);
