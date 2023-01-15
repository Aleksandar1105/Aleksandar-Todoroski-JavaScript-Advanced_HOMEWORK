// Copy the odd elements from the given one into a new array. Print the new one in the console. const givenArr = [12, 45, 88, 1, 567, 3, 91];

const changedArray = document.querySelector('#arrayOfOddNumbers');
const button = document.querySelector('button');

const givenArr = [12, 45, 88, 1, 567, 3, 91];

function arrayWithOddNumbers(array) {
  let newArrayWithOddNumbers = [];
  for (const num of array) {
    if (num % 2 !== 0) {
      newArrayWithOddNumbers.push(` ${num}`);
    }
  }
  return newArrayWithOddNumbers;
}

button.addEventListener('click', function () {
  changedArray.innerHTML = `New array of odd numbers is: <b>${arrayWithOddNumbers(givenArr)}</b>`
  console.log(arrayWithOddNumbers(givenArr));
})


