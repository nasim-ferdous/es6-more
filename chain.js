const student = {
  name: "Rafan",
  age: 30,
  family: {
    title: "vhuiya",
    // mother: {
    //   name: "nur jahan",
    //   age: 50,
    // },
  },
  1: 50,
  "home-address": "kochu khet",
};
console.log(student.family.mother?.age); //optional chain=> kono kichu jodi undefined pai tahole r agabe na. tobe break khabe na
