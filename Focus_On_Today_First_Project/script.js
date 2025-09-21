const checkboxes=document.querySelectorAll('.custom-checkbox');
const progressValue=document.querySelector('.progress-value');
const progressText=progressValue.querySelector('span');

checkboxes.forEach(checkbox=>{
    checkbox.addEventListener('click', function(){
        const input=this.parentElement.querySelector('.goal-input');
        if(input.value !== "")
        {
            this.parentElement.classList.toggle('completed');
            const count=document.querySelectorAll('.goal-container.completed').length;
            progressValue.style.width=`${count*33.33}%`;
            progressText.textContent=`${count}/3 Completed`;
        }else{
            alert("Please enter a goal before marking as completed!");
            
        }
    })
}
)






// const checkboxex=document.querySelectorAll('.custom-checkbox');

// const progressValue=document.querySelector('.progress-value');
// const span=progressValue.querySelector('span')
// checkboxex.forEach(checkbox=>{
//     checkbox.addEventListener('click',function(){
//        const input=this.parentElement.querySelector('.goal-input');
//        if(input.value !== "")
//        {
//         this.parentElement.classList.toggle('completed');
//         const count=document.querySelectorAll('.goal-container.completed').length;
//         span.textContent=`${count}/3 Completed`;
//         progressValue.style.width=`${count*33.33}%`
//        }else{
//         alert("Please enter a goal before marking as completed!");
//        }
//     })
// })