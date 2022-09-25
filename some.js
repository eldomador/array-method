// const numbers = [1, 2, 3, 4];

// const res = numbers.some(greatherThanFour);

// function greatherThanFour(item) {
//   return item > 4;
// }

// console.log(res)

const persons = [
  {
    name: "jakub",
    age: 25,
  },
  {
    name: "mati",
    age: 19,
  },
  {
    name: "jan",
    age: 12,
  },
];

const res = persons.some(isAdult);

function isAdult(person) {
  return person.age >= 18;
}

console.log(res);
