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
        <tr>
        <th scope="row">Height:</th>
        <th scope="row">Weight:</th>
        <th scope="row">Eye color:</th>
        <th scope="row">Hair color:</th>
        </tr>
        <tr>
        <td>${response.height}</td>
        <td>${response.mass}</td>
        <td>${response.eye_color}</td>
        <td>${response.hair_color}</td>
        </tr>`;
        $("table, th, td").css({ 'border': '1px solid black', 'border-collapse': 'collapse', 'text-align': 'center', 'min-width': '100px' });
      },
      error: function (error) {
        console.log(error);
      }
    })
  })
})