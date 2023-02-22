class Academy {
  constructor(name, students, subjects, start, end) {
    this.name = name;
    this.students = students ? students : [];
    this.subjects = subjects ? subjects : [];
    this.start = start;
    this.end = end;

    // optional chaining => ?.(similar to ternary operator, execute the code after the "?" only if the previous code is true!)
    this.numberOfClasses = this.subjects?.length * 10;
  }

  printStudents() {
    if (this.students.length === 0) {
      console.log(`${this.name} doesn't have any students yet!`);
      return;
    }

    console.log(`${this.name} students:`, this.students)
    // this.students.forEach((student) => {
    //   // console.log(`${index + 1}. ${student.firstName} ${student.lastName} ${student.age}`);
    //   console.log(`${this.name} students:`, student.academy.students);
    //   // this.students.push(student)
    // })
  }

  printSubjects() {
    console.log(this.subjects)
    this.subjects.forEach(subject => {
      console.log(subject);
    });
  }
}

class Subject {
  constructor(title, isElective, academy, students) {
    this.title = title;
    this.numberOfClasses = 10;
    this.isElective = isElective;
    this.academy = academy; // instance of class Academy
    this.students = students; // instance of class Academy
  }

  overrideClasses(num) {
    if (num >= 3) {
      this.numberOfClasses = num;
    } else {
      console.log('Number of classes can not be smaller than 3');
    }
  }
}

class Student {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = [];
    this.academy = null;
    this.currentSubject = null;
  }

  // When the student calls StartAcademy, the student should also be added to the Academy property Students (The academy that he is starting)
  startAcademy(academy) {
    // checks if the parameter "academy" is object (instance) made from the class Academy
    if (!academy instanceof Academy) {
      console.log('You entered invalid academy!');
      return;
    }
    this.academy = academy;
    academy.students.push(this);
    console.log(`${this.firstName} ${this.lastName} started the ${academy.name} academy.`)
  }

  // When the student calls StartSubject the student should also be added to the Subject property Students ( The subject that he is starting ). If there was another subject in the CurrentSubject property, that subject should be transferred to CompletedSubjects and then add the new Subject
  startSubject(subject) {

    if (!subject instanceof Subject) {
      console.log('You entered invalid subject!');
      return;
    }

    subject.students.push(this)

    if (this.currentSubject !== null) {
      this.completedSubjects.push(this.currentSubject);
      this.currentSubject = subject;
    } else {
      if (this.currentSubject) {
        console.log(`You have not started with learning yet!`)
      } else {
        this.currentSubject = subject;
      }
    }
  }
}

const sedcAcademy = new Academy('SEDC Academy', [], [], '17.10.2022', '18.10.2023');
const codeAcademy = new Academy('Code Academy', [], [], '12.11.2022', '13.11.2023');

const htmlSubject = new Subject('HTML', true, sedcAcademy, []);
const csslSubject = new Subject('CSS', false, sedcAcademy, []);
const javascriptSubject = new Subject('JavaScript', false, sedcAcademy, []);
const phpSubject = new Subject('PHP', true, codeAcademy, []);
const csharplSubject = new Subject('Csharp', false, codeAcademy, []);

const student1 = new Student('Aleksandar', 'Todoroski', 37);
const student2 = new Student('Dragica', 'Todoroska', 35);
const student3 = new Student('Lina', 'Todoroska', 6);

// start academy
student1.startAcademy(sedcAcademy);
student2.startAcademy(sedcAcademy);
student3.startAcademy(codeAcademy);
student1.startAcademy(codeAcademy);

// start subject
student1.startSubject(htmlSubject);
student1.startSubject(csslSubject);
student1.startSubject(javascriptSubject);
// student2.startSubject(javascriptSubject);

sedcAcademy.printStudents();
codeAcademy.printStudents();
sedcAcademy.printSubjects();

// console.log('JavaScript Students:', javascriptSubject.students);
console.log('HTML Students:', htmlSubject.students);

// codeAcademy.printStudents();

// console.log(student1)
// console.log(sedcAcademy)

console.log('Your current subject is:', student1.currentSubject)
console.log('You have completed the subjects:', student1.completedSubjects)
// console.log(student1.completedSubjects)