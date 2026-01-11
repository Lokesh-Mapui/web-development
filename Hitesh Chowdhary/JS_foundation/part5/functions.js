/*
1. write a function named `maketea` that takes one parameter, `typeoftea` and returns a string like "make green tea" when called with "green tea" store the result in a variable name `teaorder` .
*/

// function maketea(typeoftea){
//     return `Making ${typeoftea}`;
// }
// let teaorder = maketea("green tea");
// console.log(teaorder);


/*
2. creative function named `ordertea` that takes one parameter `teatype` inside this function create another function named `confirmorder` that returns a message like "order confirmed  for chai" call `confirmorder` from within `ordertea` and return the result
*/

// function ordertea(teatype) {
//     function confirmorder(){
//         return `order confirmed for ${teatype}`;
//     }
//     return confirmorder()
// }
// let orderconfirmation = ordertea ("chai" )
// console.log(orderconfirmation);

/*
3. write an arrow function named `calculatetotal` that takes two parameters `price` and `quantity`. the function should return the total cost by multiplying the `price` and `quantity`
 store the result in a variable name `totalcost`
*/

// const calculatetotal = (price, quantity) => {
//     return price * quantity;
// };

// let totalcost = calculatetotal(5,5)
// console.log(totalcost);


/*
4. write a function named `processteaorder` that takes another function `maketea` as a parameter and calls it with the argument  "earl grey" return the result of calling `maketea`
*/
// function maketea(typeoftea) {
//     return `maketea: ${typeoftea}`
// }

// function processteaorder(teafunction) {
//     return teafunction("earl grey")
// }

// let order = processteaorder(maketea)
// console.log(order);

/*
5. write a function named `createteamaker` that returns another function The Return function should take one parameter `teatype` and return a message like "making green tea" store the returned function in a variable name `Teamaker` and call it with "Gren tea".
*/

function createteamaker() {
    return function(teatype) {
        return `making ${teatype}`;
    };
}

let Teamaker = createteamaker();
console.log(Teamaker("Gren tea"));
