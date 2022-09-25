// const numbers = [1, 2, 3, 4, 5, 6];

// const even = numbers.filter(isEven);

// function isEven(value) {
//   return value % 2 == 0;
// }

// console.log(even);

// const people = [
//   {
//     name: "Mati",
//     age: 30,
//   },
//   {
//     name: "Jan",
//     age: 18,
//   },
//   {
//     name: "Kacper",
//     age: 12,
//   },
// ];

// const adults = people.filter((person) => person.age >= 18);

// console.log(adults);

const numbers = [1, 2, 3, 4, 5, 6, 1, 2, 5, 6, 6, 3, 2];

const nums = numbers.filter((value,index,arr)=>{
    return arr.indexOf(value) === index;
})

console.log(nums);