/* Create a reminder app
There should be:
An input for entering the title
An input for entering priority
An input for color
A textarea for adding a description
A button for adding the reminder
A button for showing all reminders
When the button for adding is clicked an object needs to be created with the properties from the inputs ( title, priority, color, and description )
The object should then be added to an array of reminders
When the button for showing all reminders is clicked it should show a table with title, priority, and description columns
The title should be the color of the "color" property */

const titleElem = document.querySelector('#title');
const priorityElem = document.querySelector('#priority');
const colorElem = document.querySelector('#color');
const descriptionElem = document.querySelector('#description');
const btnAddReminder = document.querySelector('#btnAddReminder');
const btnShowReminder = document.querySelector('#btnShowReminder');
const result = document.querySelector('#result');

let reminders = [];

// constructor function for creating reminders
function Reminder(title, priority, color, description) {
  this.title = title;
  this.priority = priority;
  this.color = color;
  this.description = description;
};

// adds a new reminder
function addReminder() {
  let reminder = new Reminder(titleElem.value, priorityElem.value, colorElem.value, descriptionElem.value);
  reminders.push(reminder);
  // return reminder;
};

btnAddReminder.addEventListener('click', function (event) {
  event.preventDefault();

  if (!titleElem.value) {
    console.log('You must enter Title!');
    return;
  }
  if (!priorityElem.value) {
    console.log('You must enter last priority!');
    return;
  }
  if (!colorElem.value) {
    console.log('You must choose color!');
    return;
  }
  if (!descriptionElem.value) {
    console.log('You must add a description!');
    return;
  }
  addReminder();
  titleElem.value = '';
  priorityElem.value = '';
  descriptionElem.value = '';
});

// show new reminders in table
function showReminder(remindersArray) {
  result.innerHTML = `<table id="table" border="1px solid"></table>`;
  let table = document.querySelector('#table');
  table.innerHTML = `
  <thead id="tableHead"></thead>
  <tbody id="tableBody"></tbody>
  `;
  let tableHead = document.querySelector('#tableHead');
  tableHead.innerHTML = `
  <tr>
    <th>Title</th>
    <th>Priority</th>
    <th>Description</th>
  </tr>
  `;
  let tableBody = document.querySelector('#tableBody');

  for (let reminder of remindersArray) {
    tableBody.innerHTML += `
    <tr>
      <td style="color: ${reminder.color}"><b>${reminder.title}</b></td>
      <td>${reminder.priority}</td>
      <td>${reminder.description}</td>
    </tr>
    `;
  }
  table.appendChild(tableHead);
  table.appendChild(tableBody);
  return table;
};

btnShowReminder.addEventListener('click', function (event) {
  event.preventDefault();

  showReminder(reminders);
});