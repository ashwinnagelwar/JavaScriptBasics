const addCardBtn = document.querySelector('.card')
const container = document.querySelector('.container')

let count = 1

//Event Delegation

//following code will remove each card on which we click, but it will create eventlistener for each card,
//which is not a good practice
// addCardBtn.addEventListener('click', () => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++

//     newCard.addEventListener('click',()=>{
//         newCard.remove();
//     })
//     container.append(newCard)
// })

//to avoid creating mutliple event for card, we can directly create event on its parent i.e. container
//and then from that contaioner event we can remove targeted card as below
//using parent element rather than using each child card element, to remove the child selected element
//as we didi below using container parent element, is call event delegation
//which allow to delegate event on parent rather than each child element of parent container element

addCardBtn.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++

    container.addEventListener('click',(e)=>{
        if(e.target !== container )
        e.target.remove()
    })
    container.append(newCard)
})