let fizzBuzz = [];

for (let i = 1; i <= 100; i += 1) {
  fizzBuzz.push(i);
  for (let j = 0; j < 100; j += 1) {
    if (fizzBuzz[j] % 3 === 0 && fizzBuzz[j] % 5 === 0) {
      fizzBuzz[j] = 'FizzBuzz';
    } else if (fizzBuzz[j] % 3 === 0) {
      fizzBuzz[j] = 'Fizz';
    } else if (fizzBuzz[j] % 5 === 0) {
      fizzBuzz[j] = 'Buzz';
    }
  }
}

document.querySelector('#fizzbuzz').innerHTML = fizzBuzz.join(', ');