const checkboxes=document.querySelectorAll('.custom-checkbox');
const progressValue=document.querySelector('.progress-value');
const progressText=progressValue.querySelector('span');
const inputBox=document.querySelectorAll('.goal-input')




checkboxes.forEach(checkbox=>{
    checkbox.addEventListener('click', function(){
        const input=this.parentElement.querySelector('.goal-input');
        if(input.value !== "")
        {
            this.parentElement.classList.toggle('completed');
            const isCompleted=this.parentElement.classList.contains('completed')
            input.disabled=isCompleted
            const count=document.querySelectorAll('.goal-container.completed').length;
            progressValue.style.width=`${count*33.33}%`;
            progressText.textContent=`${count}/3 Completed`;
        }else{
            alert("Please enter a goal before marking as completed!");
            
        }
    })
}
)






