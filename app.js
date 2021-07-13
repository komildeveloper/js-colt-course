// Truthy & Falsy values

// Falsy Values
/**
 * false
 * 0
 * "" (empty string)
 * null
 * undefined
 * NaN
 */

// Everything else is truthy!

let mystery;

if (mystery) {
  console.log('TRUTHY!');
} else {
  console.log('FALSY!');
}

let loggedInUser = '';

if (loggedInUser) {
  console.log('YOU ARE LOGGED IN!');
} else {
  console.log('PLEASE LOG IN!');
}
