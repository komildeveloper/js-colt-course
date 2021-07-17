let fruits = ['apple', 'banana'];
let veggies = ['asparagus', 'brussel sprouts'];
let meats = ['steak', 'chicken breast'];
let cars = ['bmw', 'merc', 'bugatti'];

console.log(fruits.concat(veggies));
console.log(veggies.concat(fruits, cars));
console.log(fruits.concat(cars, veggies));

let allFood = fruits.concat(veggies, meats);
console.log(allFood);
