// Delete all elements of the array except the numbers

let array = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];

const arayOfNumbers = document.querySelector('#arrayOfNumbers');
const button = document.querySelector('button');

button.addEventListener('click', function () {

  let arrayOfNumbers = [];
  for (const item of array) {
    if (typeof item === 'number' && item) {
      arrayOfNumbers.push(` ${item}`);
    }
  }
  arayOfNumbers.innerHTML = `The aray of numbers is: <b>${arrayOfNumbers}</b>`
  console.log(arrayOfNumbers);
})

