'use strict';

function countBulls(guessNumber, secretNumber) {
  var bulls = 0;

  for (var i = 0; i < guessNumber.length; i++) {
    if (guessNumber[i] === secretNumber[i]) {
      bulls += 1;
    }
  }

  return bulls;
}

function countCows(guessNumber, secretNumber) {
  var cows = 0;

  for (var i = 0; i < guessNumber.Length; i++) {
    for (var j = 0; j < secretNumber.Length; j++) {
      if (i !== j && guessNumber[i] === secretNumber[j]) {
        cows += 1;
      }
    }
  }

  return cows;
}

module.exports = {
  countBulls: countBulls,
  countCows: countCows
};
