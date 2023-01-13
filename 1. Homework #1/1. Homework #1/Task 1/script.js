// Write JS program which calculate sum 1+2+3+...n, where n is inputted by keyboard.

const inputNumber = document.querySelector('#input-number');
const resultText = document.querySelector('#result')

inputNumber.addEventListener('keypress', function (event) {

  if (event.key === 'Enter') {
    let numberFromInput = inputNumber.value;

    function sumOfNumbers(num) {
      let sum = 0;
      for (let i = 0; i <= num; i++) {
        sum += i;
      }
      return resultText.innerHTML = `The result is ${sum}`
    }
    console.log(sumOfNumbers(numberFromInput));
  }
})


