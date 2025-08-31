const student = {
  name: "Rafan",
  age: 30,
  1: 50,
  "home-address": "kochu khet",
};
// Dot Notation
const studentName = student.name;
// console.log(studentName);

// bracket Notation
const studentName2 = student["name"];

const studentNumber = student["1"];
// console.log(studentNumber);
// console.log(studentName2);

for (const keys in student) {
  const value = student[keys];
  console.log(keys);
  // console.log(value);
}
