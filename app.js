let password = 'hellokitty';

if (password.length >= 6) {
  if (password.indexOf(' ') === -1) {
    console.log('VALID PASSWORD!');
  } else {
    console.log('Password is long enough, but cannot contain spaces');
  }
} else {
  console.log('PASSWORD MUST BE LONG!');
}
