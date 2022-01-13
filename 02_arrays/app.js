let ingredients = [
  'water',
  'corn starch',
  'flour',
  'cheese',
  'brown sugar',
  'shrimp',
  'eel',
  'butter'
]

// includes
console.log(ingredients.includes('fish'));
console.log(ingredients.includes('water'));
console.log(ingredients.includes('corn'));

console.log(ingredients.includes('flour', 2));

if(ingredients.includes('flour')) {
  console.log('I AM GLUTTEN FREE, I CANNOT EAT THAT!');
}

// indexOf
console.log(ingredients.indexOf('cheese'));
console.log(ingredients.indexOf('bread'));

console.log(ingredients.indexOf('cheese', 2));
