import  productsData from "./productsData.js";//default import
// import  {usersData, myName, getFirstUser } from "./usersdata.js"; //named import

import  * as something from "./usersdata.js";

console.log(productsData)
// console.log(usersData)
// console.log(myName)
// console.log(getFirstUser())

console.log(something.usersData)
 console.log(something.myName)
console.log(something.getFirstUser())