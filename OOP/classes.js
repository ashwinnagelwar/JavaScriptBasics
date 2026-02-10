// class User{
//     constructor(firstName, lastName, email){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.email = email;
//     }   

//     getFullName(){
//         return this.firstName + " " + this.lastName;
//     }
// }

// const user=new User("John", "Doe", 32);

// user
// User {firstName: 'John', lastName: 'Doe', email: 32}
// new User('Ashwin','Nagelwar',32)
// User {firstName: 'Ashwin', lastName: 'Nagelwar', email: 32}email: 32firstName: "Ashwin"lastName: "Nagelwar"[[Prototype]]: Object
// index.html:1 Unchecked runtime.lastError: Could not establish connection. Receiving end does not exist.Understand this error
// const user=new User('Abhi','Shek',33);
// VM382:1 Uncaught SyntaxError: Identifier 'user' has already been declaredUnderstand this error
// const user1=new User('Abhi','Shek',33);
// undefined
// user1.getFullName()
// 'Abhi Shek'


//Private properties and methods
// class User1{
    
//     #age    
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.#age = age;
//     }

//     #hi='Hello'
//     getAge(){
//         return this.#age;
//     }
// }   

// const user1=new User1("John", "Doe", 32);

//static property
//we can directly access static property using class name without creating object of class

// class User2{
//     static count=0  
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         User2.count++;
//     }

//     //static block
//     static {
//         console.log("Static block executed");
//     }

//     //static method 
//     static getCount(){
//         return User2.count++;
//     }

// }

//Getters and Setters
   
const user={
    firstName: "John",
    lastName: "Doe",
    get fullName(){
        return this.firstName + " " + this.lastName;
    },

    //at console do below
    //user.fullName-- It will return Jhone Doe
    set fullName(name){
        console.log(name);
    }
    //at consoel do below
    //user.fullName="Ashwin Nagelwar"-- It will print Ashwin Nagelwar in console  
    
}



