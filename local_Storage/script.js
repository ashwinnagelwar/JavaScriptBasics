const nameInput=document.querySelector('.name')
const nameElement=document.querySelector('.name-tag')
const ageInput=document.querySelector('.age')
const ageElement=document.querySelector('.age-tag')

//for normal string storage
// nameElement.innerText=localStorage.getItem('name')
// nameInput.addEventListener('input',(e)=>{
//     localStorage.setItem('name',e.target.value)
//     nameElement.innerText=localStorage.getItem('name')
    
// })

//for bject storing in localStorage

//setting myDataObject in Object form, so it will fetch this object and if this object is not
//there then in OR condition it will fetch null object
const myDataObject=JSON.parse(localStorage.getItem('myDataObject')) || {}


//following 2 lines helps to retrive name and age data from myDataObject after reseting/refreshing page
if(myDataObject.name)
{
    nameElement.innerText=myDataObject.name
}
if(myDataObject.age){
    ageElement.innerText=myDataObject.age
}




//
nameInput.addEventListener('input',(e)=>{
    nameElement.innerText=e.target.value
    myDataObject.name=e.target.value
    localStorage.setItem('myDataObject',JSON.stringify(myDataObject));
    
})


ageInput.addEventListener('input',(e)=>{
    myDataObject.age=e.target.value
    localStorage.setItem('myDataObject',JSON.stringify(myDataObject))
    ageElement.innerText=e.target.value
})
