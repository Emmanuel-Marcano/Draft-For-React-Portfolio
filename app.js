let stack = document.querySelector(".animated-stack")
let stackContent = document.querySelector(".stack-content")
let nav = document.querySelectorAll(".nav-item")
let bar = document.querySelector(".nav-bar")
let startBtn = document.querySelector(".start-btn")
let home = document.querySelector(".display")

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
    





let previousItem
nav.forEach(function(item){

    item.addEventListener("click", function(){
        console.log("5")
       
        if(previousItem){
             previousItem.style.color = "#555555"
             if(previousItem.classList.contains("fa-house-chimney")) {
          
                previousItem.classList.remove("fa-house-chimney")
              }
             else if(previousItem.classList.contains("fa-pen-to-square")) {
          
                previousItem.classList.remove("fa-pen-to-square")
              }
             else if(previousItem.classList.contains("fa-folder-open")) {
          
                previousItem.classList.remove("fa-folder-open")
              }
             else if(previousItem.classList.contains("fa-envelope-circle-check")) {
          
                previousItem.classList.remove("fa-envelope-circle-check")
              }
             else if(previousItem.classList.contains("fa-user-tie")) {
          
                previousItem.classList.remove("fa-user-tie")
              }

            

        }


        if(item.firstElementChild.classList.contains("fa-house")) {
          
            item.firstElementChild.classList.add("fa-house-chimney")
        }

        else if(item.firstElementChild.classList.contains("fa-pen")){
            item.firstElementChild.classList.add("fa-pen-to-square")
        }

        else if(item.firstElementChild.classList.contains("fa-folder")){
        
            item.firstElementChild.classList.add("fa-folder-open")


        }
        else if(item.firstElementChild.classList.contains("fa-envelope")){
        
            item.firstElementChild.classList.add("fa-envelope-circle-check")


        }
        else if(item.firstElementChild.classList.contains("fa-user")){
        
            item.firstElementChild.classList.add("fa-user-tie")


        }

        
       console.log(`${item.clientWidth}px`)
        
        bar.style.width = `${item.clientWidth}px`
        previousItem = item.firstElementChild
        item.firstElementChild.style.color = "black";
        previousItem = item.firstElementChild
        bar.style.transform = `translateX(${item.getBoundingClientRect().left}px)`
    })
})






