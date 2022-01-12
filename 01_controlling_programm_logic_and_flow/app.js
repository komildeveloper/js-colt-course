// LOGICAL AND (&&)
let password = 'chicken Gal'

if(password.length >= 8 && password.indexOf(' ') === -1) {
  console.log('VALID PASSWORD!');
} else {
  console.log('INVALID PASSWORD');
}

let num = 1
if(num >= 1 && num < 11) {
  console.log('Number is between 1 and 10');
} else {
  console.log('Please guess a number between 1 and 10');
}
