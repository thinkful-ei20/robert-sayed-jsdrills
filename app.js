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

// beyond(10);

function decode(string) {
  let splitString = string.split(' ');
  let decoded = [];
  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i][0] === 'a') {
      decoded.push(splitString[i][1]);
    } else if (splitString[i][0] === 'b') {
      decoded.push(splitString[i][2]);
    } else if (splitString[i][0] === 'c') {
      decoded.push(splitString[i][3]);
    } else if (splitString[i][0] === 'd') {
      decoded.push(splitString[i][4]);
    } else {
      decoded.push(' ');
    }
  }
  console.log(decoded.join(''));
  return decoded.join('');
}

// decode('craft block argon meter bells brown croon droop');

function dayCounter(month, leapYear) {
  switch(month) {
  case 'February':
    if (leapYear) {
      console.log (`${month} has 29 days`);
    } else {
      console.log (`${month} has 28 days`);
    }
    break;
  case 'January':
  case 'March':
  case 'May':
  case 'July':
  case 'August':
  case 'October':
  case 'December':
    console.log (`${month} has 31 days`);
    break;
  case 'April':
  case 'June':
  case 'September':
  case 'November':
    console.log (`${month} has 30 days`);
    break;
  default:
    console.log ('Must provide a valid month.');
  }
}

// dayCounter('Bacon', true);

function rockPaperScissors(num) {
  const randomNo = Math.floor(Math.random() * 3) + 1;
  if (num !== 1 && num !== 2 && num !== 3) {
    throw 'error';
  }
  if (randomNo === num) {
    console.log('the result is a tie');
  }
  if (num === 1) {
    if (randomNo === 3) {
      console.log('Rock beats scissors');
      console.log('Player wins');
    } else if (randomNo === 2) {
      console.log('Paper beats rock');
      console.log('Computer wins');
    }
  } else if (num === 3) {
    if (randomNo === 1) {
      console.log('Rock beats scissors');
      console.log('Computer wins');
    } else if (randomNo === 2) {
      console.log('Scissors beats paper');
      console.log('Player wins');
    }
  } else if (num === 2) {
    if (randomNo === 3) {
      console.log('Scissors beats paper');
      console.log('Computer wins');
    } else if (randomNo === 1) {
      console.log('Paper beats rock');
      console.log('Player wins');
    }
  }
}

rockPaperScissors(3);