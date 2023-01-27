// TASK 1
const btnShowFirstTenPlanets = document.querySelector('#show-planets');
const tableBody = document.querySelector('#table-body');
const buttonsContainers = document.querySelector('#next-previous-buttons');
const table = document.querySelector('table');
table.style.visibility = 'hidden';
const page1_URL = 'https://swapi.dev/api/planets/?page=1';

// fetching data from API
async function fetchPlanetsFromApi(URL) {
  const response = await fetch(URL);
  const result = await response.json();
  return result;
};

// creating table for first 10 planets
async function printFirstTenPlanets() {
  const data = await fetchPlanetsFromApi(page1_URL);
  console.log(data);
  const planets = data.results;
  console.log(planets);
  for (const planet of planets) {
    tableBody.innerHTML += `
    <tr>
        <td>${planet.name}</td>
        <td>${planet.population}</td>
        <td>${planet.climate}</td>
        <td>${planet.gravity}</td>
      </tr>
    `
  }
};

// TASK 2
const page2_URL = 'https://swapi.dev/api/planets/?page=2';

// showing first 10 planets
btnShowFirstTenPlanets.addEventListener('click', async function (e) {
  e.preventDefault();
  await printFirstTenPlanets();
  table.style.visibility = 'visible';
  btnShowFirstTenPlanets.style.visibility = 'hidden';
  buttonsContainers.innerHTML = ` 
  <button id="previous-ten">PREVIOUS 10</button>
  <button id="next-ten">NEXT 10</button>
  `;

  const btnShowNextTenPlanets = document.querySelector('#next-ten');
  const btnShowPreviousTenPlanets = document.querySelector('#previous-ten');

  btnShowPreviousTenPlanets.style.visibility = 'hidden';

  // showing next 10 planets
  btnShowNextTenPlanets.addEventListener('click', async function (e) {
    e.preventDefault();
    tableBody.innerHTML = '';
    await printNextTenPlanets();
    btnShowFirstTenPlanets.style.visibility = 'hidden';
    btnShowPreviousTenPlanets.style.visibility = 'visible';
    btnShowNextTenPlanets.style.visibility = 'hidden';
  });

  // showing previous 10 planets
  btnShowPreviousTenPlanets.addEventListener('click', async function (e) {
    e.preventDefault();
    tableBody.innerHTML = '';
    await printFirstTenPlanets();
    btnShowFirstTenPlanets.style.visibility = 'hidden';
    btnShowNextTenPlanets.style.visibility = 'visible';
    btnShowPreviousTenPlanets.style.visibility = 'hidden';
  });
});

// creating table for next 10 planets
async function printNextTenPlanets() {
  const data = await fetchPlanetsFromApi(page2_URL);
  console.log(data);
  const planets = data.results;
  console.log(planets);
  for (const planet of planets) {
    tableBody.innerHTML += `
    <tr>
        <td>${planet.name}</td>
        <td>${planet.population}</td>
        <td>${planet.climate}</td>
        <td>${planet.gravity}</td>
      </tr>
    `
  }
};
