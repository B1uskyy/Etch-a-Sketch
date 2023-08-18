 
 // make 16 x 16 grid of square divs 
 // Class of .square gives div square properties

let body = document.body; 

 for (let i = 0; i < 16; i++) {

    let row = document.createElement("div"); 
    row.className = "square";
    row.classList.add("row"); 
    row.innerHTML = "Z"


    for (let l = 0; l < 15; l++) {
        let cell = document.createElement("div");
        // cell.classList.add("row")
        cell.classList.add("square");
        row.appendChild(cell)
        cell.innerHTML = "X"; 

    }

    body.appendChild(row); 

 }