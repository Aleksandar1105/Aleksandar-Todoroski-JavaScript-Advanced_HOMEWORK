/* There is a JSON file with students. Make a call to the file and get the following data from it:

All students with an average grade higher than 3
All female student names with an average grade of 5
All male student full names who live in Skopje and are over 18 years old
The average grades of all female students over the age of 24
All male students with a name starting with B and average grade over 2
Use higher order functions to find the answers Link: https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json */


const fetchUrl = 'https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json';
const container = document.querySelector('#container');
const taskHeader = document.querySelector('#taskHeader');

// fetch data
const getStudents = async (baseUrl) => {
  const response = await fetch(baseUrl);
  const data = await response.json();
  console.log(data);
  return data;
}


// All students with an average grade higher than 3
const averageGradeHigherThanThree = async () => {
  const studentsArray = await getStudents(fetchUrl);
  const students = studentsArray.filter(student => student.averageGrade > 3);
  taskHeader.innerText = 'All students with an average grade higher than 3';
  container.innerHTML = `
  <table style="width: 800px; margin: auto" class="table table-hover table-sm table-striped">
  <caption>All female student names with an average grade of 5</caption>
    <thead class="table-light">
      <tr>
        <th scope="col">#</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Average grade</th>
      </tr>
    </thead>
    <tbody id="students" class="table-group-divider">
    </tbody>
  </table>  
  `;
  const studentList = document.querySelector('#students');

  for (let i = 0; i < students.length; i++) {
    console.log(`${i + 1}. ${students[i].firstName} ${students[i].lastName}, average grade = ${students[i].averageGrade}`);
    studentList.innerHTML += `    
    <tr>
      <th scope="row">${i + 1}</th>
      <td scope="col">${students[i].firstName}</td>
      <td scope="col">${students[i].lastName}</td>
      <td scope="col">${students[i].averageGrade}</td>
    </tr>    
  `;
  }
}


// All female student names with an average grade of 5
const femaleWithAverageGradeFive = async () => {
  const studentsArray = await getStudents(fetchUrl);
  const students = studentsArray.filter(student => student.averageGrade === 5 && student.gender === 'Female').map(student => (student.firstName));
  // console.log(students);
  taskHeader.innerText = 'All female student names with an average grade of 5';
  container.innerHTML = `
  <table style="width: 800px; margin: auto" class="table table-hover table-sm table-striped">
  <caption>All female student names with an average grade of 5</caption>
    <thead class="table-light">
      <tr>
        <th scope="col">#</th>
        <th scope="col">First Name</th>
      </tr>
    </thead>
    <tbody id="students" class="table-group-divider">
    </tbody>
  </table>  
  `;
  const studentList = document.querySelector('#students');

  for (let i = 0; i < students.length; i++) {
    console.log(`${i + 1}. ${students[i]}`);
    studentList.innerHTML += `
      <tr >
      <th scope="row">${i + 1}</th>
      <td scope="col">${students[i]}</td>
    </tr >
  `;
  }
}


// All male student full names who live in Skopje and are over 18 years old
const maleFromSkopjeOver18 = async () => {
  const studentsArray = await getStudents(fetchUrl);
  const students = studentsArray.filter(student => student.city === 'Skopje' && student.age >= 18 && student.gender >= 'Male');
  taskHeader.innerText = 'All male student full names who live in Skopje and are over 18 years old';
  container.innerHTML = `
  <table table style = "width: 800px; margin: auto" class="table table-hover table-sm table-striped" >
  <caption>All male student full names who live in Skopje and are over 18 years old</caption>
    <thead class="table-light">
      <tr>
        <th scope="col">#</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Gender</th>
        <th scope="col">Age</th>
        <th scope="col">City</th>
      </tr>
    </thead>
    <tbody id="students" class="table-group-divider">
    </tbody>
  </table >
  `;
  const studentList = document.querySelector('#students');

  for (let i = 0; i < students.length; i++) {
    console.log(`${i + 1}. ${students[i].firstName} ${students[i].lastName} - age ${students[i].age}, from ${students[i].city} `);
    studentList.innerHTML += `
  <tr tr >
        <th scope="row">${i + 1}</th>
        <td scope="col">${students[i].firstName}</td>
        <td scope="col">${students[i].lastName}</td>
        <td scope="col">${students[i].gender}</td>
        <td scope="col">${students[i].age}</td>
        <td scope="col">${students[i].city}</td>
      </tr >
  `;
  }
}


// The average grades of all female students over the age of 24
const femaleAverageGradesOver24 = async () => {
  const studentsArray = await getStudents(fetchUrl);
  const students = studentsArray.filter(student => student.gender === 'Female' && student.age >= 24);
  taskHeader.innerText = 'The average grades of all female students over the age of 24';
  container.innerHTML = `
  <table table style = "width: 800px; margin: auto" class="table table-hover table-sm table-striped" >
  <caption>The average grades of all female students over the age of 24</caption>
    <thead class="table-light">
      <tr>
        <th scope="col">#</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Gender</th>
        <th scope="col">Age</th>
        <th scope="col">Average grade</th>
      </tr>
    </thead>
    <tbody id="students" class="table-group-divider">
    </tbody>
  </table >
  `;
  const studentList = document.querySelector('#students');

  for (let i = 0; i < students.length; i++) {
    console.log(`${i + 1}. ${students[i].firstName} ${students[i].lastName} - age ${students[i].age}, average grade = ${students[i].averageGrade} `);
    studentList.innerHTML += `
  <tr tr >
      <th scope="row">${i + 1}</th>
      <td scope="col">${students[i].firstName}</td>
      <td scope="col">${students[i].lastName}</td>
      <td scope="col">${students[i].gender}</td>
      <td scope="col">${students[i].age}</td>
      <td scope="col">${students[i].averageGrade}</td>
    </tr >
  `;
  }
}


// All male students with a name starting with B and average grade over 2
const maleAverageGradeOver2WithB = async () => {
  const studentsArray = await getStudents(fetchUrl);
  const students = studentsArray.filter(student =>
    student.gender === 'Male' &&
    student.firstName[0] === 'B' &&
    student.averageGrade >= 2
  );
  taskHeader.innerText = 'All male students with a name starting with B and average grade over 2';
  container.innerHTML = `
  <table table style = "width: 800px; margin: auto" class="table table-hover table-sm table-striped" >
  <caption>All male students with a name starting with B and average grade over 2</caption>
    <thead class="table-light">
      <tr>
        <th scope="col">#</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Gender</th>
        <th scope="col">Age</th>
        <th scope="col">Average grade</th>
      </tr>
    </thead>
    <tbody id="students" class="table-group-divider">
    </tbody>
  </table >
  `;
  const studentList = document.querySelector('#students');

  for (let i = 0; i < students.length; i++) {
    console.log(`${i + 1}. ${students[i].firstName} ${students[i].lastName} - age ${students[i].age}, average grade = ${students[i].averageGrade} `);
    studentList.innerHTML += `
  <tr tr >
      <th scope="row">${i + 1}</th>
      <td scope="col">${students[i].firstName}</td>
      <td scope="col">${students[i].lastName}</td>
      <td scope="col">${students[i].gender}</td>
      <td scope="col">${students[i].age}</td>
      <td scope="col">${students[i].averageGrade}</td>
    </tr >
  `;
  }
}


// CALLING THE FUNCTIONS
// averageGradeHigherThanThree();
femaleWithAverageGradeFive();
// maleFromSkopjeOver18();
// femaleAverageGradesOver24();
// maleAverageGradeOver2WithB();