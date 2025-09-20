const green=document.querySelector('.green');
const pink=document.querySelector('.pink');
const blue=document.querySelector('.blue');

// window.addEventListener('click',(e)=>{

//     console.log("window event listener")
// })

// document.addEventListener('click',(e)=>{

//     console.log("document event listener")
// })

// document.body.addEventListener('click',(e)=>{

//     console.log("body event listener")
// })

// green.addEventListener('click',(e)=>{

//     console.log("green event listener")
// })

// pink.addEventListener('click',(e)=>{

//     console.log("pink event listener")
// })

// blue.addEventListener('click',(e)=>{

//     console.log("blue event listener")
// })


//stop event bubbling
//by using event.stopPropgation() we can stop event bubbling
// window.addEventListener('click',(e)=>{

//     console.log("window event listener")
// })

// document.addEventListener('click',(e)=>{

//     console.log("document event listener")
// })

// document.body.addEventListener('click',(e)=>{

//     console.log("body event listener")
// })

// green.addEventListener('click',(e)=>{

//     console.log("green event listener")
// })

// pink.addEventListener('click',(e)=>{
//     e.stopPropagation();
//     //after pink the event propagation will stop
//     console.log("pink event listener")
// })

// blue.addEventListener('click',(e)=>{
//     console.log("blue event listener")
// })

//event capture
//the event capture run from last parent(window) to the child from where we start event by ckicck
window.addEventListener('click',(e)=>{

    console.log("window event listener")
},true)

document.addEventListener('click',(e)=>{

    console.log("document event listener")
},true)

document.body.addEventListener('click',(e)=>{

    console.log("body event listener")
},true)

green.addEventListener('click',(e)=>{

    console.log("green event listener")
},true)

pink.addEventListener('click',(e)=>{
    
   
    console.log("pink event listener")
},true)

// blue.addEventListener('click',(e)=>{
//     console.log("blue event listener")
// },true);

//aslo there is another way to define this capture

//second way
// blue.addEventListener('click',(e)=>{
//     console.log("blue event listener")
// },{capture:true});


//Event bubbling only at once using {once:true}
//it needs to define in all parent element
blue.addEventListener('click',(e)=>{
    console.log("blue event listener")
},{once:true});




















blue.addEventListener('click',(e)=>{

    console.log("blue event listener")
})
