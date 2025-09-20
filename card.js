const container=document.querySelector('.container');
const card=document.querySelector('.card');

const add=document.querySelector('#addCard');
const remove=document.querySelector('#removeCard');
const value=card.textContent;


var i=1;
add.addEventListener('click',()=>{
    const card2=card.cloneNode();
    card2.textContent=i+1;
    container.appendChild(card2)
    i++;
    }
)

remove.addEventListener('click',()=>{
    if(container.children.length>1)
    container.removeChild(container.lastChild)

})

