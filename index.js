//object literal
let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1603',
      grades: [ 89, 34, 67 ]
    },
    {
      course: 'INFO 1601',
      grades: [ 89, 34, 67 ]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1601',
      grades: [ 100, 89, 79 ]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1600',
      grades: [ 89, 34, 67 ]
    }
  ]
};

const students = [bob, sally, paul];


function getaverageGrade(student, course) {
  let total = 0, num = 0;

  for (let j = 0; j < student.transcript.length; j++) {
      if (student.transcript[j].course === course) {
          for (let k = 0; k < student.transcript[j].grades.length; k++) {
              total += student.transcript[j].grades[k];
              num++;
          }
          return total / num;
      }
  }
  return -1;
}

function getAssignmentMark(student, course, num) {
  for (let i = 0; i < student.transcript.length; i++) {
      if (student.transcript[i].course === course) {
          return student.transcript[i].grades[num - 1]; 
      }
  }
  return -1;
}

function averageAssessment(students, courseName, assignment) {
  let total = 0, num = 0;

  for (let i = 0; i < students.length; i++) {
      for (let j = 0; j < students[i].transcript.length; j++) {
          if (students[i].transcript[j].course === courseName) {
              if (assignment > 0 && assignment <= students[i].transcript[j].grades.length) {
                  total += students[i].transcript[j].grades[assignment - 1]; 
                  num++;
              }
          }
      }
  }
  return num === 0 ? -1 : total / num;
}


console.log(getaverageGrade(bob, 'INFO 1601'));
console.log(getAssignmentMark(paul, 'INFO 1600', 2)); 
console.log(averageAssessment(students, 'INFO 1601', 1));