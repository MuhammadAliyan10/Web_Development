//Currying in js means that a function take an argument and return a funtion that take another argument and return the value which 
//we want. It is very help full. It makes the code simple and eassy to find the error.

//First there is function which take two value and return the sum

// function sum(a, b, c) {
//     return a + b + c
// }
// console.log(sum(10, 10, 10))

//In curring we can make a deep function like this

// function sum(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c
//         }
//     }
// }

// console.log(sum(10)(10)(10));


//In this function first we take a value as an argument is the parent funtion and it will return a function as a child and the child will
//return another funtion which will return all the value



// function evaluate(opration) {
//     return function (a) {
//         return function (b) {
//             if (opration === "sum") {
//                 return a + b
//             }
//             else if (opration === "subtract") {
//                 return a - b
//             }
//             else if (opration === "multiply") {
//                 return a * b
//             }
//             else if (opration === "divide") {
//                 return a / b
//             }
//             else {
//                 return console.log("Invalid opreation");
//             }

//         }

//     }

// }


// console.log(evaluate("multiply")(10)(10));



// function sum(a) {
//     return function (b) {
//         if (b) return sum(a + b)
//         return a

//     }

// }

// console.log(sum(2)(3)());


//In this case first we make a funtion which takes a parameter a and return a function which takes the params b and after that there is an condition
//let we have 2 in a and the it will return a function which take a params and we give 3 so it will check that if there is something in the
//b params as we provided 3 so it will call the funtion again sum and return us the sum of a + b and after that we provided an empty value
//so after a it wil check b and there is nothing in it so it will return us a and that the infinte sum currying function



// function curry(fun) {
//     return function curryFun(...args) {
//         if (args.length >= fun.length) {
//             return fun(...args)
//         }
//         else {
//             return function (...next) {
//                 return curryFun(...args, ...next)
//             }
//         }

//     }

// }

// function sum(a, b, c, d) {
//     return a + b + c + d

// }
// const finalSum = curry(sum)

// console.log(finalSum(10)(10)(10)(10));