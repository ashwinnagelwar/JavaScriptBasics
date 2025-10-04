
//For GET method using fetch API

fetch('https://dummyjson.com/users')
.then((usersList)=> usersList.json())//this used to convert response promise object into json object
.then((usersList)=>fetch(`https://dummyjson.com/users/${usersList.users[0].id}`))
.then((singleUser)=>singleUser.json())
.then((singleUser)=>fetch(`https://dummyjson.com/users/${singleUser.id}/posts`))
.then((allPost)=>allPost.json())
.then((allPost)=>fetch(`https://dummyjson.com/comments/post/${allPost.posts[0].id}`))
.then((singlePost)=>singlePost.json())
.then((singlePost)=>console.log(singlePost))


//For other like POST, PUT, DELETE, PATCH method

//following API for adding new user using POST api

fetch('https://dummyjson.com/users/add',{
    method:'POST',
    headers:{'Content-Type':'application/json'},//this header is optional as per response type need
    body:JSON.stringify(
        {
            firstName: 'Ashwin',
            lastName: 'nagelwar',
            age: 33
        }
    )
}).then(response=>response.json())
.then(console.log)
.catch((error)=>{ //to handle the error
    console.log(error)
})

