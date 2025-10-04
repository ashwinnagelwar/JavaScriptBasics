
//we made fuction makeHttpRequest to avoid repetation of following code in fucntion

function makeHttpRequest(method, url,callBack){
  const xhr = new XMLHttpRequest()
xhr.responseType = 'json'
xhr.addEventListener('load', () => {
  callBack(xhr.response)
})

xhr.open(method, url)
xhr.send()
}

//following code is known as call back hell, ca multiple call back has happended using cal back function
//to avoid this promise is used
makeHttpRequest('GET', 'https://dummyjson.com/users',(data)=>{
  console.log(data)
  makeHttpRequest('GET',`https://dummyjson.com/users/${data.users[0].id}`,(data)=>{
    console.log(data)
    makeHttpRequest('GET',`https://dummyjson.com/users/${data.id}/posts`,(data)=>{
      console.log(data)
      makeHttpRequest('GET',`https://dummyjson.com/comments/post/${data.posts[0].id}`,(data)=>{
        console.log(data)
      })
    })
  })
})