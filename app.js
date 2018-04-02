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

jediName('Anakin', 'Skywalker');