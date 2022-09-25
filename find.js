// const names = ["jakub", "mati", "jan"];

// const res = names.find(findIvan);

// function findIvan(item) {
//   return item === "mati";
// }

// console.log(res);

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

const res = persons.find(findMati).name;

function findMati(person) {
  return person.name === "mati";
}

console.log(res);
