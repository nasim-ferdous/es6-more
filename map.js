const numbers = [2, 4, 5, 8, 9];
// array er prottek ta upadan k double korbo

// normal way
// const doubled = [];
// for (const num of numbers) {
//   const result = num * 2;
//   doubled.push(result);
// }
// console.log(doubled);

// using function in map
// const doubleIt = (x) => x * 2;
// const doubled = numbers.map(doubleIt);
// console.log(doubled);

// using direct function in map

const doubled = numbers.map((x) => x * 2);
const fiveTime = numbers.map((num) => num * 5);
const square = numbers.map((num) => num * num);

const persons = ["Jamil", "Kamil", "Nabil", "Himel"];
const nameLength = persons.map((name) => name.length);
const firstLetter = persons.map((name) => name[0].toLowerCase());
console.log(nameLength);
console.log(firstLetter);

const result = numbers.map((num, index) => {
  console.log(num * index);
  return index * num; //result return kora lagbe
});
