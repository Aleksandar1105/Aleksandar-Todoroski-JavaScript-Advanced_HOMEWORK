'use strict';
///////////////// ACADEMY TEMPLATE /////////////////
class Academy {
  constructor(name, students, subjects, start, end) {
    this.academyName = name;
    this.students = students || [];
    this.subjects = subjects || [];
    this.start = start;
    this.end = end;
    this.numberOfClasses = subjects.length * 10;
  }

  printStudents() {
    if (!this.students) {
      console.log(`There are not students in the ${this.academyName} academy!`);
      return;
    }
    console.log(`Students in ${this.academyName} are:`);
    console.log(this.students);
    this.students.forEach(student => {
      console.log(`${student.firstName} ${student.lastName} age ${student.age}`);
    });
  }

  printSubjects() {
    if (!this.subjects) {
      console.log(`There are not subjects in the ${this.academyName} academy!`);
      return;
    }
    console.log(`Subjects in ${this.academyName} academy are:`);
    this.subjects.forEach(subject => {
      console.log(subject.title);
    });
  }
}

///////////////// SUBJECT TEMPLATE /////////////////
class Subject {
  constructor(title, isElective, adademyObject, subjectStudents) {
    this.title = title;
    this.numberOfClasses = 10;
    this.isElective = Boolean(isElective);
    this.adademyObject = adademyObject;
    this.subjectStudents = subjectStudents || [];
  }

  overrideClasses(number) {
    if (number >= 3) return `The number of classes is: ${this.numberOfClasses = number}`;
    else return `Number of classes can't be smaller than 3. You have ${number} classes.`
  }
}

///////////////// STUDENT TEMPLATE /////////////////
class Student {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = [];
    this.academy = null;
    this.currentSubject = null;
  }
  // When the student calls StartAcademy, the student should also be added to the Academy property Students ( The academy that he is starting )
  startAcademy(academy) {
    this.academy = academy;
    this.academy.students.push(this.firstName);

  }
  // When the student calls StartSubject the student should also be added to the Subject property Students ( The subject that he is starting ). If there was another subject in the CurrentSubject property, that subject should be transferred to CompletedSubjects and then add the new Subject
  startSubject(subject) {
    subject.subjectStudents.push(`${this.firstName} ${this.lastName}`);
    this.currentSubject = subject;

    if (this.currentSubject) {
      this.completedSubjects.push(this.currentSubject);
    }
    this.currentSubject = subject.title;
  }
}

// Academies objects examples
const sedcAcademy = new Academy('SEDC', [], [], '17.10.2022', '18.10.2023');
const codeAcademy = new Academy('CodeAcademy', [], [], '08.09.2022', '22.11.2023');

// Subjects objects examples
const javascriptSubject = new Subject('JS Advanced', false, sedcAcademy, sedcAcademy.students);
const htmlSubject = new Subject('HTML', true, sedcAcademy, sedcAcademy.students);
const csslSubject = new Subject('CSS', true, sedcAcademy, sedcAcademy.students);
const phpSubject = new Subject('PHP', false, codeAcademy, codeAcademy.students);

// Students objects examples
const aleksandarTodoroski = new Student('Aleksandar', 'Todoroski', 38);
const dragicaTodoroska = new Student('Dragica', 'Todoroska', 35);
const natasaBozinovska = new Student('Natasa', 'Bozinovska', 35);
const kristijanBozinovski = new Student('Kristijan', 'Bozinovski', 10);

aleksandarTodoroski.startAcademy(sedcAcademy);
aleksandarTodoroski.startSubject(javascriptSubject);
dragicaTodoroska.startAcademy(sedcAcademy);
dragicaTodoroska.startSubject(htmlSubject);
aleksandarTodoroski.startSubject(csslSubject);

sedcAcademy.printStudents();
// sedcAcademy.printSubjects();
