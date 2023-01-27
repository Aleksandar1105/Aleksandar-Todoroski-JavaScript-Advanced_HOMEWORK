/* ## Exercise 1

Make 3 functions:
1. Function that takes a number through a parameter and returns how many digits that number has
2. Function that takes a number through a parameter and returns if its even or odd
3. Function that takes a number through a parameter and returns if its positive or negative

Create a function that takes a number through a parameter and calls all three functions for the number that was passed. It should show the results in the console. 
#### Ex: 
**Code:** getNumberStats(-25);
**Console:** 2 Digits, Odd, Negative */

// function 1
function numToDigits(num) {

  if (num < 0) {
    if (num.toString().length - 1 === 1) {
      return `The number ${num} has  ${num.toString().length - 1} Digit.`;
    } else {
      return `The number ${num} has ${num.toString().length - 1} Digits.`;
    }
  }
  if (num.toString().length === 1) {
    return `The number ${num} has ${num.toString().length} Digit.`;
  } else {
    return `The number ${num} has ${num.toString().length} Digits.`;
  }
};
// console.log(numToDigits(-8));

// function 2
function oddOrEvenNumber(num) {
  if (num % 2 === 0) {
    return `The number ${num} is Even.`;
  } else {
    return `The number ${num} is Odd.`;
  }
};
// console.log(oddOrEvenNumber(0));

// function 3
function positiveOrNegativeNumber(num) {
  if (num > 0) {
    return `The number ${num} is positive.`;
  } else if (num < 0) {
    return `The number ${num} is negative.`;
  } else {
    return `The number ${num} is neither positive nor negative.`;
  }
};
// console.log(positiveOrNegativeNumber(-3));

// function that calls all three functions
function getNumberStats(num) {
  if (typeof num !== 'number') {
    return 'Invalid input.Please enter numbers only!'
  }
  return `${numToDigits(num)} ${oddOrEvenNumber(num)} ${positiveOrNegativeNumber(num)}`;
};

console.log(getNumberStats(-600));