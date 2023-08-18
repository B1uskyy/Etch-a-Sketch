 
 // make 16 x 16 grid of square divs 
 // Class of .square gives div square properties

let body = document.body; 
let container = document.querySelector("#container")

 for (let i = 0; i < 16; i++) {
    for(let j = 0; j < 16; j++) {
        let div = document.createElement("div"); 
        div.innerHTML = "X"; 
        div.classList.add("row"); 
        div.classList.add("square"); 
        document.body.appendChild(div) 
    }
    let br = document.createElement("br"); 
    document.body.appendChild(br); 

    

 }

 let divs = document.querySelectorAll("div"); 

 divs.forEach((div) => div.addEventListener("mouseover", function() {
    div.style.backgroundColor = "blue"
 }))