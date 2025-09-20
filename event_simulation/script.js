const addCardBtn = document.querySelector('.card')
const container = document.querySelector('.container')

const input = document.querySelector('input')
const form = document.querySelector('form')

// let count = 1

// addCardBtn.addEventListener('click', () => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })


//event simulation, it allowes to click without using click event as above we used
// for(let i=0;i<1000;i++)
// {
//     addCardBtn.click()
// }

//we define click event in loop with setInterval
// let counter=0;
// const  timer=setInterval(()=>{
//         if(counter>100)
//         {
//             clearInterval(timer) ;
//         }else{
//             addCardBtn.click()
//          counter++;
//         }
        
//     },30)

//focus event using java script
//input.focus()
//using setTimeout
//it will focus after 3 second
// setTimeout(()=>{
//     input.focus()
// },3000)


// blue event using java script

// setTimeout(()=>{
//     input.blur();
// },5000);

//form submit event

// setTimeout(()=>{
// form.submit();
// console.log('form submitted using submit event')
// },3000)


//reset event
//it will reset all form element values to its original value
setTimeout(()=>{
    form.reset();
    console.log('form reseted to its original value');

},5000)