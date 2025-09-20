
//input Event
const input=document.querySelector("#username");
// input.addEventListener('click',()=>{
//     console.log('clicked')
const paragraph=document.querySelector('p');

const form=document.querySelector("#form");
// let inputValue;
// input.addEventListener('input',(e)=>{
// inputValue=e.target.value;
// paragraph.innerText=inputValue;
// })

// //change event

// input.addEventListener('change',(e)=>{
//     console.log(e)
//     console.log(e.target.value);
//     inputValue=e.target.value;
//  paragraph.innerText=inputValue;
// })

// //focus event

// input.addEventListener('focus',(e)=>{
//     console.log(e);
    
// })
// //blur event
// input.addEventListener('blur',(e)=>{
//     console.log(e);
    
// })

//submit event

form.addEventListener('submit',(e)=>{
     e.preventDefault();
    const myformData=new FormData(form);
    for(const f of myformData.entries())
    {
        console.log(f)
    }
})