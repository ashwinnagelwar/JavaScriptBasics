// const user={
//     name: "John Doe",
//     age: 30,
//     email: "ashwin.nagelwar@gmail.com"
// }

// const userArray=['Sagar', 'Ashwin', 'Nagelwar'];
// const numbers=[1,2,3,4,5];
// const omgArray=[['X',null,null],[null,null,'O'],['O',null,'X']];


//copy Object/Array
//  const user1={
//     name: "John Doe",
//     age: 3}
// const user2={...user1}; // shallow copy
// user2.age=4; // changing user2 will not affect user1    
// console.log(user1); // { name: 'John Doe', age: 3 }
// console.log(user2); // { name: 'John Doe', age: 4 }


//deep copy
// const user1={
//     name: "John Doe",
//     age: 3,
//     address: {
//         city: "Pune",
//         state: "MH"
//     }   
// }
// const user2=JSON.parse(JSON.stringify(user1)); // deep copy
// user2.address.city="Mumbai"; // changing user2 will not affect user1    
// console.log(user1); // { name: 'John Doe', age: 3, address: { city: 'Pune', state: 'MH' } }
// console.log(user2); // { name: 'John Doe', age: 3, address: { city: 'Mumbai', state: 'MH' } }

// const user3 = structuredClone(user1); // deep copy using structuredClone
// user3.address.city = "Delhi"; // changing user3 will not affect user1   
// console.log(user1); // { name: 'John Doe', age: 3, address: { city: 'Pune', state: 'MH' } }
// console.log(user3); // { name: 'John Doe', age: 3, address: { city: 'Delhi', state: 'MH' } }
// user1.address.city="Mumbai"; // changing user1 will affect user2
// console.log(user1); // { name: 'John Doe', age: 3, address: { city: 'Mumbai', state: 'MH' } }
// console.log(user2); // { name: 'John Doe', age: 3,   address: { city: 'Pune', state: 'MH' } }

//Hoisting
// console.log(a); // undefined
// var a = 10; // hoisted to the top of the function scope  
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
// let b = 20; // not hoisted in the same way as var
// console.log(c); // ReferenceError: Cannot access 'c' before initialization
// const c = 30; // not hoisted in the same way as var
// console.log(d); // ReferenceError: Cannot access 'd' before initialization
// function hoistedFunction() {
//     console.log("This function is hoisted!");
// }                

// hoistedFunction(); // This function is hoisted!
// console.log(hoistedVariable); // undefined
// var hoistedVariable = "I am hoisted!"; // hoisted to the top of the function scope
// console.log(hoistedLetVariable); // ReferenceError: Cannot access 'hoistedLetVariable' before initialization
// let hoistedLetVariable = "I am not hoisted!"; // not hoisted 

// console.log(hoistedConstVariable); // ReferenceError: Cannot access 'hoistedConstVariable' before initialization
// const hoistedConstVariable = "I am also not hoisted!"; // not hoisted
// console.log(x); // [Function: hoistedFunction]
// const x=function(){
//     console.log("This is a function expression");   
// }
// x(); // This is a function expression        

//Event Loop and Callback Queue
// console.log("Start");
// setTimeout(() => {
//     console.log("Timeout 1");
// }, 0);  

// setTimeout(() => {

//     console.log("Timeout 2");
// }, 0);  
// console.log("End");
// Output:  
// Start
// End
// Timeout 1

// Timeout 2
// Explanation: The synchronous code runs first, then the event loop processes the callback queue, executing the setTimeout callbacks in the order they were added. 
// The setTimeout callbacks are executed after the synchronous code has completed, even if they have a delay of 0 milliseconds. This is because they are placed in the callback queue and executed after the current call stack is empty.

//Closures
// function outerFunction() {
//     let outerVariable = "I am from outer function";

//     function innerFunction() {
//         console.log(outerVariable); // Accessing outerVariable from the outer function
//     }

//     return innerFunction; // Returning the inner function
// }   
// const closureFunction = outerFunction(); // closureFunction now holds the inner function
// closureFunction(); // Output: I am from outer function  
// Explanation: The inner function has access to the variables of the outer function even after the outer function has finished executing. This is known as a closure.


//methods
// const calc={
//     add: function(a, b) {
//         return a + b;
//     },
//     subtract(a, b) { //ES6 shorthand method definition
//         return a - b;
//     },
//     multiply(a, b) {
//         return a * b;
//     },
//     divide(a, b) {
//         if (b === 0) {
//             throw new Error("Cannot divide by zero");
//         }
//         return a / b;
//     }
// }

// calc.add

// function add(x,y){
//     return x+y;
// }   

//map method
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

//filter method
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4]

// const students=[
//     { name: "John", age: 20 },
//     { name: "Jane", age: 17 },
//     { name: "Jack", age: 12 },
//     { name: "Jill", age: 21 }    
// ];

// const adults = students.filter(student =>
// {
//     return student.age >=18;
// })  
// console.log(adults); // Output: [ { name: 'John', age: 20 }, { name: 'Jill', age: 21 } ]

//reduce method 
// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// });
// console.log(sum); // Output: 15


// // reduce method for multiplication
// const product = numbers.reduce((accumulator, currentValue) => {
//     return accumulator * currentValue;
// },1); // Initial value is set to 1 for multiplication  
// console.log(product); // Output: 120    

// const names = ["Alice", "Bob", "Charlie"];
// const concatenatedNames = names.reduce((accumulator, currentValue) => {
//     return accumulator + " " + currentValue;
// });
// console.log(concatenatedNames); // Output: " Alice Bob Charlie"

//spread operator
const arr1 = [1, 2, 3];     
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]
// const user = {
//     name: "John Doe",
//     age: 30}
// const userDetails = {
//     ...user,
//     email: "xyz@gmail.com",
//     address: "123 Main St"      
// };
// console.log(userDetails); // Output: {name: 'John Doe', age: 30, email: 'xyz@gmail.com', address: '123 Main St'}

const sume=function(...xyz) {
    let sum=0;
    for(let i=0;i<xyz.length;i++){
        sum+=xyz[i];
    }   
    return sum;
} 
console.log(sume(...combinedArray));   // Output: 21