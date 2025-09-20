const card=document.querySelector('.card');
const container=document.querySelector('.container');
const h1=document.querySelector('h1')

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
// card.addEventListener('mouseenter',(e)=>{
//     console.log(e)
//     const newcard=document.createElement('div');
//     newcard.classList.add=('card');
//     newcard.innerText=count++;
//     container.append(newcard)
// })

//mouseleave event
// card.addEventListener('mouseleave',(e)=>{
//     console.log(e)
//     const newcard=document.createElement('div');
//     newcard.classList.add=('card');
//     newcard.innerText=count++;
//     container.append(newcard)
// })

//mousermove event
// card.addEventListener('mousemove',(e)=>{
//     console.log(e)
//     const newcard=document.createElement('div');
//     newcard.classList.add=('card');
//     newcard.innerText=count++;
//     container.append(newcard)
// })

//mouseover event
//we added span element for this mouseover event example for child to main element event
// card.addEventListener('mouseover',(e)=>{
//     console.log(e)
//     const newcard=document.createElement('div');
//     newcard.classList.add=('card');
//     newcard.innerText=count++;
//     container.append(newcard)
// })

//wheel event
// card.addEventListener('wheel',(e)=>{
//     console.log(e)
//     const newcard=document.createElement('div');
//     newcard.classList.add=('card');
//     newcard.innerText=count++;
//     container.append(newcard)
// });

//scroll event
// document.addEventListener('scroll',(e)=>{
//     console.log(e)
//     const newcard=document.createElement('div');
//     newcard.classList.add=('card');
//     newcard.innerText=count++;
//     container.append(newcard)
// });

//touchstart event
//first make screen as mobile then try to click on button to work this event
// document.addEventListener('touchstart',(e)=>{
//     console.log(e)
//     const newcard=document.createElement('div');
//     newcard.classList.add=('card');
//     newcard.innerText=count++;
//     container.append(newcard)
// });

//touchend event
// document.addEventListener('touchend',(e)=>{
//     console.log(e)
//     const newcard=document.createElement('div');
//     newcard.classList.add=('card');
//     newcard.innerText=count++;
//     container.append(newcard)
// });

//touchmove event
// document.addEventListener('touchmove',(e)=>{
//     console.log(e)
//     const newcard=document.createElement('div');
//     newcard.classList.add=('card');
//     newcard.innerText=count++;
//     container.append(newcard)
// });

//drag event
//for this event we need to add draggable-"true" in that perticular event, we add it in h1
// h1.addEventListener('drag',(e)=>{
//     console.log(e)
//     const newcard=document.createElement('div');
//     newcard.classList.add=('card');
//     newcard.innerText=count++;
//     container.append(newcard)
// });

//pointermove event
// card.addEventListener('pointermove',(e)=>{
//     console.log(e)
//     const newcard=document.createElement('div');
//     newcard.classList.add=('card');
//     newcard.innerText=count++;
//     container.append(newcard)
// });

//pointerenter event
// card.addEventListener('pointerenter',(e)=>{
//     console.log(e)
//     const newcard=document.createElement('div');
//     newcard.classList.add=('card');
//     newcard.innerText=count++;
//     container.append(newcard)
// });

//pointerleave event
card.addEventListener('pointerleave',(e)=>{
    console.log(e)
    const newcard=document.createElement('div');
    newcard.classList.add=('card');
    newcard.innerText=count++;
    container.append(newcard)
});