const students = [
  { name: "abul", id: 1, mark: 50 },
  { name: "Kabul", id: 2, mark: 90 },
  { name: "Nabul", id: 3, mark: 85 },
  { name: "Dabul", id: 4, mark: 60 },
];

const names = students.map((student) => student.name);
const marks = students.map((student) => student.mark);
const goodStudents = students.filter((student) => student.mark > 80);
const goodStudent = students.find((student) => student.mark > 80);

console.log(names);
console.log(marks);
console.log(goodStudents);
console.log(goodStudent);
