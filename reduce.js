const numbers = [3, 4, 6, 7, 8, 9];

// let sum = 0;
// for (const num of numbers) {
//   sum = sum + num;
// }

const total = numbers.reduce((acc, curr) => acc + curr);
console.log(total);
// acc hocche previos ba 1st value.
//  curr hocche current ba tarporer value
