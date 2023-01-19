/* Create a button When the button is clicked, call the StarWars api for the first person.
Print the person name in an h1 tag.
Print the person stats in a table:

Height
Weight
Eye color
Hair color
URL: https://swapi.dev/api/people/1
NOTE: JQuery will autmatically parse this call (js will not). */

$(document).ready(function () {
  let personName = document.querySelector('#personName');
  let printBtn = document.querySelector('#printPerson');
  let personStats = document.querySelector('#personStats');
  printBtn.addEventListener('click', function () {
    $.ajax({
      url: 'https://swapi.dev/api/people/1',
      success: function (response) {
        console.log(response);
        personName.innerText = response.name;
        personStats.innerHTML = `
        <tr><td>Height: ${response.height}</td></tr>
        <tr><td>Weight: ${response.mass}</td></tr>
        <tr><td>Eye color: ${response.eye_color}</td></tr>
        <tr><td>Hair color: ${response.hair_color}</td></tr>`;
      },
      error: function (error) {
        console.log(error);
      }
    })
  })
})