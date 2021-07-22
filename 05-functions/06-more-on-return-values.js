function square(x) {
  return x * x;
  console.log('ALL DONE');
}

console.log(square(4));

/** function isPurple(color) {
  if (color.toLowerCase() === 'purple') {
    return 'Color is purple';
  } else {
    return 'Color is not purple';
  }
}

const clr = isPurple('blue');
console.log(clr); */

// Short way
/** function isPurple(color) {
  if (color.toLowerCase() === 'purple') {
    return 'Color is purple';
  }
  return 'Color is not purple';
}

const clr = isPurple('purple');
console.log(clr); */

/**function isPurple(color) {
  return color.toLowerCase() === 'purple';
}

const clr = isPurple('pink');
console.log(clr); */

function containsPurple(arr) {
  for (let color of arr) {
    if (color === 'purple' || color === 'magenta') {
      return true;
    }
  }
  return false;
}

const item1 = containsPurple(['green', 'magenta']);
const item2 = containsPurple(['green', 'black']);
console.log(item2);
