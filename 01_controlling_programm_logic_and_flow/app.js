let loggedInUser;

// If there isn't a loggedInUser

if(!loggedInUser) {
  console.log('GET OUT OF HERE!');  
}

let flavor = 'grape'

/* if(flavor !== 'grape' && flavor !== 'cherry') {
  console.log('we don\'t have that flavor!'); 
} */

if(!(flavor === 'grape' || flavor === 'cherry')) {
  console.log('we only have grape and cherry!'); 
}
