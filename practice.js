const numbers = [2, 4, 5, 6, 7, 8, 9];
const names = ["abul", "kabul", "chabul"];
// const doubled = numbers.map((x) => x * 2);
// console.log(doubled);

// const evenNumber = numbers.filter((x) => x % 2 === 0);
// const greaterThan5 = numbers.find((x) => x > 5);
// names.forEach((x) => {
//   console.log(`hello, ${x}`);
// });
// const square = numbers.map((x) => x * x);
// const divisibleBy3 = numbers.filter((x) => x % 3 === 0);
// const divisibleBy3A = numbers.find((x) => x % 3 === 0);
// console.log(divisibleBy3);
// console.log(divisibleBy3A);
// names.forEach((x) => {
//   console.log(x.length);
// });
// const products = [
//   { id: 1, name: "Laptop", price: 1200 },
//   { id: 2, name: "Phone", price: 800 },
//   { id: 3, name: "Pen", price: 2 },
// ];
// const above100 = products.filter((x) => x.price > 100);

// const students = [
//   { id: 1, name: "David", grade: "A" },
//   { id: 2, name: "Eve", grade: "C" },
//   { id: 3, name: "Frank", grade: "B" },
// ];
// const gradeB = students.find((x) => x.grade === "B");

// const books = [
//   { title: "Book One", pages: 200 },
//   { title: "Book Two", pages: 150 },
//   { title: "Book Three", pages: 300 },
// ];
// books.forEach((x) => {
//   console.log(x.title, x.pages);
// });
// console.log(gradeB);

// const employees = [
//   { id: 1, name: "Sam", salary: 5000 },
//   { id: 2, name: "John", salary: 7000 },
//   { id: 3, name: "Sara", salary: 4000 },
// ];
// const newArray = employees.map((x) => {
//   return {
//     name: x.name,
//     salary: x.salary + x.salary * 0.1,
//   };
// });

// const cars = [
//   { brand: "Toyota", year: 2018 },
//   { brand: "Honda", year: 2020 },
//   { brand: "Ford", year: 2015 },
// ];
// const after2017 = cars.filter((x) => x.year > 2017);

// const movies = [
//   { id: 1, title: "Inception", rating: 8.8 },
//   { id: 2, title: "The Room", rating: 3.6 },
//   { id: 3, title: "Interstellar", rating: 8.6 },
// ];
// const below5 = movies.find((x) => x.rating < 5);

// const players = [
//   { name: "Messi", goals: 30 },
//   { name: "Ronaldo", goals: 25 },
//   { name: "Neymar", goals: 20 },
// ];
// players.forEach((x) => {
//   console.log(x.name, x.goals);
// });

// const courses = [
//   { id: 1, title: "Math", completed: true },
//   { id: 2, title: "English", completed: false },
//   { id: 3, title: "Science", completed: true },
// ];
// const trues = courses.filter((z) => z.completed === true);

// const orders = [
//   { id: 1, total: 250 },
//   { id: 2, total: 400 },
//   { id: 3, total: 150 },
// ];
// const only = orders.map((x) => {
//   return {
//     total: x.total,
//   };
// });

// console.log(only);
const persons = ["samil", "kamil", "nabil", "himel"];
const capitalize = persons.map((p) => p[0].toUpperCase() + p.slice(1));
console.log(capitalize);

// const number = [1, 2, 2, 3, 4, 4, 5];
// const uniqueValue = number.filter(
//   (value, index, self) => self.indexOf(value) === index
// );
// console.log(uniqueValue);
