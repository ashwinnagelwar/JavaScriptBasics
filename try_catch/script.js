//without try catch blcok, when error occured the execution stop
 
// console.log(a)
// console.log(6+7)


//With try catch block even error happended in try block
//the catch block handle the error and continue the execution of next code
try{
    console.log(a)
}catch(error)
{
    console.log(error)
}finally{
    console.log('finally block')//finally block always run error occured or not 
}

console.log(6+7)