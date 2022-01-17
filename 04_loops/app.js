const movieReviews = {
  Arrival: 9.5,
  Alien: 9,
  Amelie: 8,
  'In Bruges': 9,
  Amadeus: 10,
  'Kill Bill': 8,
  'Little Miss Sunshine': 8.5,
  Coraline: 7.5,
}

for(let movie of Object.keys(movieReviews)) {
  console.log(movie, movieReviews[movie]);
}

const ratings = Object.values(movieReviews);

let total = 0;
for(let r of ratings) {
  total += r;
}

/*
total /= ratings.length
console.log(total);
*/

let avg = total / ratings.length;
console.log(avg);

// console.log(Object.keys(movieReviews));
