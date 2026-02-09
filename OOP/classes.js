class User{
    constructor(firstName, lastName, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }   

    getFullName(){
        return this.firstName + " " + this.lastName;
    }
}

const user=new User("John", "Doe", 32);

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