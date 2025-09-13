const numbers = [5, 6, 12, 45, 10, 6, 8];

const greaterThan10 = numbers.filter((x) => x > 10); // sorter
// sathe milbe ey rokom sob value k return korbe
// filter sob somoy array return kore
const evenNumber = numbers.filter((x) => x % 2 === 0);
console.log(evenNumber);

const nums = [1, 2, 3, 4, 5];
let output = nums.filter((n) => n % 2); // eta maney not equal zero
console.log(output);
