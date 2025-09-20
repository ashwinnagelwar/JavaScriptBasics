const card=document.querySelector('.card');
const container=document.querySelector('.container');

let count=0;
//mousedown event
// card.addEventListener('mousedown',(e)=>{
//     console.log(e)
//     const newcard=document.createElement('div');
//     newcard.classList.add=('card');
//     newcard.innerText=count++;
//     container.append(newcard)
// })

//mouseup event
// card.addEventListener('mouseup',(e)=>{
//     console.log(e)
//     const newcard=document.createElement('div');
//     newcard.classList.add=('card');
//     newcard.innerText=count++;
//     container.append(newcard)
// })

//mouseenter event
card.addEventListener('mouseenter',(e)=>{
    console.log(e)
    const newcard=document.createElement('div');
    newcard.classList.add=('card');
    newcard.innerText=count++;
    container.append(newcard)
})