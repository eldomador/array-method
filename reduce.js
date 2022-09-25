const numbers = [1, 2, 3, 4, 5, 3, 54, 3];

// const total = numbers.reduce(sum, 0);

// function sum(accumlator,value){
//     return accumlator + value;
// };

// const max = numbers.reduce(callback, -Infinity);

// function callback(accumlator, value) {
//   if (accumlator > value) {
//     return accumlator;
//   } else {
//     return value;
//   }
// }
// console.log(max);

const store = [
  {
    product: "laptop",
    value: 1000,
    count: 3,
  },
  {
    product: "desktop",
    value: 1500,
    count: 4,
  },
  {
    product: "mobile",
    value: 500,
    count: 10,
  },
];

const totalValueStore = store.reduce(
  (acc, item) => acc + item.value * item.count,
  0
);
console.log(totalValueStore)