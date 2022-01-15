// Array.slice()
let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise']

let swimmers = animals.slice(0, 3)
console.log(swimmers)

let mammals = animals.slice(2, 4)
console.log(mammals)

// let reptiles = animals.slice(4, 6)
let reptiles = animals.slice(4)
console.log(reptiles)

let quadruped = animals.slice(-3)
let quadruped2 = animals.slice(-3, -1)
console.log(quadruped)
console.log(quadruped2)

// copy
let copy = animals.slice();
console.log(copy);
