 
 // make 16 x 16 grid of square divs 
 // Class of .square gives div square properties

let body = document.body; 
let container = document.querySelector("#container")


function createDiv(size) {
    let containerSize = 960; // Total size in pixels
    let cellSize = containerSize / size;

    let div = document.createElement("div");
    div.style.height = cellSize + "px";
    div.style.width = cellSize + "px";
    div.style.margin = 0;
    div.style.padding = 0;
    div.classList.add("row");
    div.classList.add("square");
    return div;
}




function createGrid(size) {
    for (let i = 0; i < size; i++) {
        for(let j = 0; j < size; j++) {
            let div = createDiv(size);  
            document.body.appendChild(div) 
        }
        let br = document.createElement("br"); 
        document.body.appendChild(br); 
    
        let divs = document.querySelectorAll("div"); 

        divs.forEach((div) => div.addEventListener("mouseover", function() {
           div.style.backgroundColor = "blue"
        }))
    
     }
    
}

function removeGrid() {
    let divs = document.querySelectorAll(".row");
    
    divs.forEach((div) => {
        div.remove();
    });
    
    let brs = document.querySelectorAll("br");
    
    brs.forEach((br) => {
        br.remove();
    });
}






 let button = document.querySelector("#create"); 


 button.addEventListener("click", function() {
    removeGrid(); 
    let answer = prompt("How big do you want the grid to be? (maximum 100x100)")

    if(answer > 100) {
        alert("This grid is too large!!");
    }

    else {
        createGrid(answer); 
    }
 })


// TODO
// Should take upo 960 px of space total, however big or small the grid is made

 