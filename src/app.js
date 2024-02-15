const humb= document.querySelector("#humburger")
const menu= document.querySelector("#menu")
const moon= document.querySelector("#moon")
const moon1= document.querySelector("#moon1")
humb.addEventListener("click",()=>{
    menu.classList.toggle("hidden")
    humb.classList.toggle("bg-white")
})


