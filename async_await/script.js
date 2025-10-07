
// Using async and await
async function makeRequest(){
    const url='https://dummyjson.com/users/?sleep=5000'

 const response=  await fetch(url);
 console.log(response.json())
 console.log('async waiat fucntion')

}


//Only Fetch()
//  function makeOnlyFetchRequest(){
//     const url='https://dummyjson.com/users/?sleep=5000'

//  const response= fetch(url).then((data)=>data.json());
//  console.log(response)
//  console.log('normal fetch function')

// }

//makeOnlyFetchRequest()
makeRequest()
console.log('Outside the sync function')

// does it means async and await combined make code synchronous?

// No, async and await do not make your code synchronous.
// They only make asynchronous code look and behave like synchronous code within the async function, making it easier to read and write.

// What actually happens:

// Code using await still runs asynchronously (it does not block the main thread).
// The function "pauses" at await until the Promise resolves, but other code outside the function can continue running.
// Summary:
// async/await makes asynchronous code easier to manage, but it does not make it truly synchronous. The underlying operations (like fetch) are still non-blocking and asynchronous.

//so it means, only within async function with await behaves like synchronous code
//Yes, that's correct!

// Only within an async function, code that uses await will "pause" at each await and execute the next line only after the awaited Promise resolves.
// This makes the code inside the async function look and behave like synchronous code, but it is still asynchronous under the hood.

// Outside the async function, the rest of your code continues running without waiting for the await to finish.

//What is the difference between both code
//Here’s the difference between the two functions:

// async function makeRequest(){
//     const url='https://dummyjson.com/users/?sleep=5000'
//     const response = await fetch(url);
//     console.log(response.json())
//     console.log('Hi')
// }

// Uses async/await.
// await fetch(url) pauses the function until the fetch is complete, so response is a Response object.
// console.log(response.json()) logs a Promise (because .json() is async and returns a Promise).
// console.log('Hi') runs after the fetch is done, but before the JSON is resolved.

// function makeOnlyFetchRequest(){
//     const url='https://dummyjson.com/users/?sleep=5000'
//     const response = fetch(url).then((data)=>data.json());
//     console.log(response)
//     console.log('Hi')
// }

// Uses only Promises, not async/await.
// fetch(url).then(...) starts the fetch and sets up a callback for when it finishes.
// console.log(response) logs a Promise (the result of the .then() chain).
// console.log('Hi') runs immediately, before the fetch is done.


// Key Differences
// In both cases, console.log(response) or console.log(response.json()) logs a Promise, not the actual data.
// In makeRequest, code after await fetch(url) waits for the fetch to finish.
// In makeOnlyFetchRequest, code after fetch(url).then(...) runs immediately, not waiting for the fetch.
// To log the actual data, you should await response.json() in the first, or add another .then() in the second.

// Correct way to log the data:

// Async/await
//  

// Promise
// function makeOnlyFetchRequest(){
//     const url='https://dummyjson.com/users/?sleep=5000'
//     fetch(url)
//       .then(data => data.json())
//       .then(data => console.log(data));
//     console.log('Hi')
// }