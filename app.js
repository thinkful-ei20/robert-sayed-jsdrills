'use strict';

function yearOfBirth(age) {
  if (age < 0) {
    throw new Error('Age can not be negative');
  }
  return 2018 - age;
}

function whoAmI(name, age) {
  if (!name || !age || typeof(age) !== 'number' || typeof(name) !== 'string') {
    console.error('Arguments not valid');
  } else {
    let yob;
    try {
      yob = yearOfBirth(age);
      console.log(`Hi, my name is ${name} and I'm ${age} years old`);
      console.log(`I was born in ${yob}`);
    }
    catch(error) {
      console.log('' + error);
    }
  }
}

// whoAmI('Robert', -21);

function jediName(firstName, lastName) {
  return console.log(`${lastName.slice(0, 3)}${firstName.slice(0, 2)}`);
}

//jediName('Anakin', 'Skywalker');

function beyond(num) {
  if (num === Number.POSITIVE_INFINITY || num === Number.NEGATIVE_INFINITY) {
    console.log ('And beyond');
  } else if (num > 0 && num !== Number.POSITIVE_INFINITY ) {
    console.log ('To infinity');
  } else if (num < 0 && num !== Number.NEGATIVE_INFINITY) {
    console.log ('To negative infinity');
  } else if (num === 0) {
    console.log ('Staying home');
  }
}

beyond(10);