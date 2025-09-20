
const button=document.querySelector('#newPockemon');
const deleteButton=document.querySelector('#removePockemon');
const container=document.querySelector('.container');


var i=1;
button.addEventListener('click',()=>{
const image=document.createElement('img');
const p=document.createElement('p');
const imageContainer=document.createElement('div');
imageContainer.classList.add('img-container');
image.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    p.textContent=i;
    imageContainer.append(image,p);
    container.append(imageContainer)
    i++;
})

//remove element

deleteButton.addEventListener('click',()=>{
    container.removeChild(container.lastChild)
})
