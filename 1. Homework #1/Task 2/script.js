// Print all digits of a given number

const inputNumber = document.querySelector('#number');
const numberToDigits = document.querySelector('#number-to-digits');

inputNumber.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    function writeDigitsOfGivenNumber(number) {
      let digitsOfNumber = [];
      number = number.toString();
      for (let i = 0; i < number.length; i++) {
        digitsOfNumber.push(number[i]);
      }
      return numberToDigits.innerHTML = `The digits of the number are ${digitsOfNumber}`;
    }
    console.log(writeDigitsOfGivenNumber(inputNumber.value));
  }
})

