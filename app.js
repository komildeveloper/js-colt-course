// Logical OR (||)

/**let age = 76;

if (age < 6 || age >= 65) {
  console.log('YOU GET IN FOR FREE');
} else {
  console.log('YOU MUST PAYYYY!');
}

let color = 'violet';

if ((color === 'purple', color === 'lilac', color === 'violet')) {
  console.log('GREAT CHOISE!');
} */

// NOT Operator (!)

// let loggedInUser;

// If there isn't a logged in user

/**if (!loggedInUser) {
  console.log('GET OUT OF HERE!');
}

let flavor = 'watermelon';

if (flavor !== 'grape' && flavor !== 'cherry') {
  console.log('WE DONT HAVE THAT FLAVOR!');
}

if (!(flavor === 'grape' || flavor === 'cherry')) {
  console.log('WE ONLY HAVE GRAPE AND CHERRY!');
} */

// let x = 3;

// Operator Precedence
// console.log((x === 3 || x <= 5) && x === 2);

// The switch statement

/**let day = 8;

switch (day) {
  case 1:
    console.log('MONDAY');
    break;
  case 2:
    console.log('TUESDAY');
    break;
  case 3:
    console.log('WEDNESDAY');
    break;
  case 4:
    console.log('THRUSDAY');
    break;
  case 5:
    console.log('FRIDAY');
    break;
  case 6:
    console.log('SATURDAY');
    break;
  case 7:
    console.log('SUNDAY');
    break;
  default:
    console.log('INVALID DAY');
} */

/**let emoji = 'sad face';

switch (emoji) {
  case 'sad face':
  case 'happy face':
    console.log('yellow');
    break;
  case 'eggplant':
    console.log('purple');
    break;
  case 'heart':
  case 'lips':
    console.log('red');
    break;
  default:
    console.log('not emoji');
} */

// Ternary Operator

/**let num = 7;

if (num === 7) {
  console.log('LUCKY!');
} else {
  console.log('BAD!');
}

num === 7 ? console.log('LUCKY!') : console.log('BAD!'); */

let status = 'offline';

/**let color;

if(status === 'offline'){
  color = red;
} else {
  color = 'green'
} */

let color = status === 'offline' ? 'red' : 'green';
console.log(color);
