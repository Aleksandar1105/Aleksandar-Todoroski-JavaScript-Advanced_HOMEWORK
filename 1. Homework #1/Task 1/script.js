// Write JS program which calculate sum 1+2+3+...n, where n is inputted by keyboard.

const inputNumber = document.querySelector('#input-number');
const resultText = document.querySelector('#result');

function sumOfNumbers(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
}

inputNumber.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    let numberFromInput = inputNumber.value;
    resultText.innerHTML = `The result is ${sumOfNumbers(numberFromInput)}`;
    console.log(sumOfNumbers(numberFromInput));
  }
})


