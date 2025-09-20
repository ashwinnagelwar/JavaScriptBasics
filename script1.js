const counter=document.querySelector('#counter');
    let count = 0;
    const incrementButton = document.querySelector('#increment');
    const decrementButton = document.querySelector('#decrement');
    const resetButton = document.querySelector('#reset');
    const colorChange=document.querySelector('#colorChange');
    const colorChangeBoard=document.querySelector('#colorChangeBoard');
    const heading=document.querySelector('h1');
    const toggleHeading=document.querySelector('#toggleHeading');
    

    incrementButton.addEventListener('click', () => {
        count++;
        counter.value = count;
    });
    decrementButton.addEventListener('click', () => {
        if(count > 0) { 
        count--;
        counter.value = count;
    }   });
    resetButton.addEventListener('click', () => {
        count = 0;
        counter.value = count;
    }   );  

colorChange.addEventListener('click',()=>{
    colorChangeBoard.style.backgroundColor = getRandomColor();
});
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  } 
   
toggleHeading.addEventListener('click',()=>{
    if(heading.style.color==='black')
    {
        heading.style.color='green';
    }else {
        heading.style.color='black';
    }
})

heading.classList.add

//Node Example

 document.body.childNodes[6].nodeValue='Namste Ji!!'

 



