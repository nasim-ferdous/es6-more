/****
 * class ----> Template
 * properties
 * method( a special type of function inside a class without the function keyword)
 *
 * object
 *
 *
 */

// declaring class : class likhte hobe tarpor variable tarpor second bracket..variable er first letter capital letter hobe
class Player {
  constructor(name, age) {
    // constructor method
    this.name = name;
    this.age = age;
    this.location = "Bangladesh";
    // console.log("calling the constructor method", name);
  }
  goal() {
    console.log("he has scored");
  }
  getTeamName() {
    return "Borsha";
  }
}

const player1 = new Player("Kismot", 24); // object
const player2 = new Player("Sokhina", 29); // object
// player1.goal();
console.log(player1);
console.log(player1 instanceof Player);
console.log(player2);
