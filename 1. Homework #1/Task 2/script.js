// Print all digits of a given number

const numberToDigits = document.querySelector('#number-to-digits');
let input = document.querySelector('#number');

function writeDigitsOfGivenNumber(number) {
  let digitsOfNumber = [];

  if (typeof number !== 'number' || !Number(number) && number !== 0) {
    return numberToDigits.innerHTML = `You have entered an invalid input. All inputs must be numbers!`;
  } else {
    number = number.toString();
    for (let i = 0; i < number.length; i++) {
      digitsOfNumber.push(Number(number[i]));
    }
  }
  return digitsOfNumber;
};

input.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    numberToDigits.innerHTML = `The digits of the number are: ${writeDigitsOfGivenNumber(Number(input.value))}`;
    console.log(writeDigitsOfGivenNumber(Number(input.value)));
  }
});