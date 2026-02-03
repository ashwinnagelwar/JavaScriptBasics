// const user={
//     firstName: firstName,
//     lastName: lastName,
//     age:age,
//     getFullName () {
//         return new Date().getFullYear() - this.age;
//     }
// }

// user.getFullName(24);

//factory fucntion
//in factory function we return object, if arguments and parameters are same, then 
// //we dont need to maintain key value and directly use only key as below'
//  we can use shorthand property as below
function createUser(firstName, lastName, age) {
  return {
    firstName,
    lastName,
    age,
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  };
} 
const user1=createUser('John','Doe',30);
console.log(user1.getFullName());
const user2=createUser('Jane','Smith',25);
console.log(user2.getFullName());
