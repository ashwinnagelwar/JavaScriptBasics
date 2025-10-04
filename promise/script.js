// const resolvebtn=document.querySelector('#resolve');
// const rejectbtn=document.querySelector('#reject');

// const p=new Promise((resolve,reject)=>{

//     resolvebtn.addEventListener('click',()=>{
//         console.log('Resolved')
//     })


//     rejectbtn.addEventListener('click',()=>{
//         console.log('Rejected')
//     })
// }
   
// )

// p.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err)
// })

/// Promise Resolved problem of call back hell below

function makeHttpRequest(method, url){
  const xhr = new XMLHttpRequest()
xhr.responseType = 'json'
const promise=new Promise((reslove,reject)=>{  //we replace call back function by Promise
xhr.addEventListener('load', () => {
  reslove(xhr.response)
})

xhr.addEventListener('error', () => {
  reject('Request failed')
})
})

xhr.open(method, url)
xhr.send()

return promise
}

//following code is known as call back hell, ca multiple call back has happended using cal back function
//to avoid this promise is used
//makeHttpRequest('GET', 'https://dummyjson.com/users',(data)=>{
//   console.log(data)
//   makeHttpRequest('GET',`https://dummyjson.com/users/${data.users[0].id}`,(data)=>{
//     console.log(data)
//     makeHttpRequest('GET',`https://dummyjson.com/users/${data.id}/posts`,(data)=>{
//       console.log(data)
//       makeHttpRequest('GET',`https://dummyjson.com/comments/post/${data.posts[0].id}`,(data)=>{
//         console.log(data)
//       })
//     })
//   })
// })


//following promise code make call back hell code replace with simpler form
makeHttpRequest('GET','https://dummyjson.com/users')
.then((usersList)=>makeHttpRequest('GET',`https://dummyjson.com/users/${usersList.users[0].id}`))
.then((singleUser)=>makeHttpRequest('GET',`https://dummyjson.com/users/${singleUser.id}/posts`))
.then((allPost)=>makeHttpRequest('GET',`https://dummyjson.com/comments/post/${allPost.posts[0].id}`))
.then((singlePost)=>console.log(singlePost))
.catch((error)=>console.log(error))
