let ingredients = [
  'water',
  'corn scatrch',
  'flour',
  'cheese',
  'brown sugar',
  'shrimp',
  'eel',
  'butter'
];

// includes
console.log(ingredients.includes('fish'));
console.log(ingredients.includes('flour', 2));

if (ingredients.includes('cheese')) {
  console.log('I EAT CHEESE');
}

// indexOf
console.log(ingredients.indexOf('flour'));
console.log(ingredients.indexOf('shrimp', 4));
