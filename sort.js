//const names = ["Jakub", "Janusz", "Adam", "Zbyszek"];
//names.sort();

// const numbers = [74,18,10,2,90,100]

// numbers.sort(compereFunction);

// function compereFunction(a,b){
// 1. < 0 ... a comes first
// 2. 0... nothing will be changed
// 3. > 0 ... b comes first
//      return a-b;
// }

// console.log(numbers);

const products = [
    {
        name: 'laptop',
        price: 1000
    },
    {
        name: 'desktop',
        price: 1500
    },
    {
        name: 'phone',
        price: 500
    }
];

products.sort((a,b) =>{
    return b.price - a.price;
});



console.log(products);