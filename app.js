let stack = document.querySelector(".animated-stack")
let stackContent = document.querySelector(".stack-content")
let nav = document.querySelectorAll(".nav-item")
let bar = document.querySelector(".nav-bar")

let techStack = ["HTML", "CSS", "JavaScript", "React"]
let stackCounter = 0
stackContent.innerHTML = techStack[stackCounter]



setInterval(function() {
    stackCounter++

        if(stackCounter === techStack.length) {
          stackCounter = 0
       }
   
    // stack.classList.remove("fade-in")

    stackContent.innerHTML = techStack[stackCounter]
    
    

    // stack.offsetWidth
    // stack.classList.add("fade-in")
    
   

    
},2000)


nav.forEach(function(item){

    item.addEventListener("click", function(){
        console.log("5")

        bar.style.transform = `translateX(${item.getBoundingClientRect().left}px)`




    })
})

