// Change the character (-) of the members of the array let numArr = [4, -9, -98, -1, 444, 3, -555];
const changedArray = document.querySelector('#changedArray');
const button = document.querySelector('button');

let numArr = [4, -9, -98, -1, 444, 3, -555];

button.addEventListener('click', function () {

  function changeArrayOfNumbers(arrayOfNumbers) {
    let numArrChanged = [];
    for (const num of arrayOfNumbers) {
      if (Math.sign(num) === -1 || Math.sign(num) === 1 || Math.sign(num) === 0) {
        numArrChanged.push(` ${Math.abs(num)}`);
      }
    }
    return numArrChanged;
  }
  changeArrayOfNumbers(numArr);
  console.log(changeArrayOfNumbers(numArr));
  changedArray.innerHTML = `The changed array is: <b>${changeArrayOfNumbers(numArr)}</b>`
})

