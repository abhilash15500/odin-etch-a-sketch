
//variables 

let container = document.querySelector(".container");
let numberOfGrids = 64;
let mode = "default";
let buttonEightGrids = document.querySelector("#eight");
let buttonSixteenGrids = document.querySelector("#sixteen");
let buttonThirtyTwoGrids = document.querySelector("#thirtytwo");
let buttonSixtyFourGrids = document.querySelector("#sixtyfour");
let buttonReset = document.querySelector("#reset");
let currentNoOfGrids = document.querySelectorAll(".grids").length;


// for displaying the homepage grid i.e 16 by 16
for (let i = 1; i <= numberOfGrids; i++) {    
    createGridsOf16x16();
}


// Functions for normal default blue  and rgb grids
function createGridsOf8x8() {

    container.replaceChildren();   
    numberOfGrids = 64;

    for (let i = 0; i < numberOfGrids; i++) {
        let createGrid = document.createElement("div");
        createGrid.style.height = "59px";
        createGrid.style.width = "59px";
        createGrid.style.border = "1px solid black";
        createGrid.classList.add("grids");
        createGrid.addEventListener("mouseover", () => {
        createGrid.style.backgroundColor = "#023047"; // Default color for non-"rgb" mode
    })     
    container.appendChild(createGrid);
    }
}


function createRgbGridsOf8x8() {
    container.replaceChildren();   //color not applying on rgb mode
    numberOfGrids = 64;
    
    for (let i = 0; i < numberOfGrids; i++) {
        let createGrid = document.createElement("div");
        createGrid.style.height = "59px";
        createGrid.style.width = "59px";
        createGrid.style.border = "1px solid black";
        createGrid.classList.add("grids");
        createGrid.addEventListener("mouseover", () => {
        createGrid.style.backgroundColor = `${randomColor()}`; // Default color for non-"rgb" mode
    })     
    container.appendChild(createGrid);
    }
}




function createGridsOf16x16() {
    container.replaceChildren();
    numberOfGrids = 256;

    for (let i = 0; i < numberOfGrids; i++) {
        let createGrid = document.createElement("div");
        createGrid.style.height = "28px";
        createGrid.style.width = "28px";
        createGrid.style.border = "1px solid black";
        createGrid.classList.add("grids");
        container.appendChild(createGrid);
        createGrid.addEventListener("mouseover", () => {
            createGrid.style.backgroundColor = "#023047";
        })
    }
}


function createRgbGridsOf16x16() {
    container.replaceChildren();
    numberOfGrids = 256;

    for (let i = 0; i < numberOfGrids; i++) {
        let createGrid = document.createElement("div");
        createGrid.style.height = "28px";
        createGrid.style.width = "28px";
        createGrid.style.border = "1px solid black";
        createGrid.classList.add("grids");
        container.appendChild(createGrid);
        createGrid.addEventListener("mouseover", () => {
            createGrid.style.backgroundColor = `${randomColor()}`;
        })
    }
}




function createGridsOf32x32() {
    container.replaceChildren();
    
    numberOfGrids = 1024;
    for (let i = 0; i < numberOfGrids; i++) {
        let createGrid = document.createElement("div");
        createGrid.style.height = "13.5px";
        createGrid.style.width = "13.5px";
        createGrid.style.border = "1px solid black";
        createGrid.classList.add("grids");
        container.appendChild(createGrid);
        createGrid.classList.add("grid32");
        createGrid.addEventListener("mouseover", () => {
            createGrid.style.backgroundColor = "#023047";
        })
    }
}


function createRgbGridsOf32x32() {
    container.replaceChildren();
    
    numberOfGrids = 1024;
    for (let i = 0; i < numberOfGrids; i++) {
        let createGrid = document.createElement("div");
        createGrid.style.height = "13.5px";
        createGrid.style.width = "13.5px";
        createGrid.style.border = "1px solid black";
        createGrid.classList.add("grids");
        container.appendChild(createGrid);
        createGrid.classList.add("grid32");
        createGrid.addEventListener("mouseover", () => {
            createGrid.style.backgroundColor = `${randomColor()}`;
        })

    }
}


function createGridsOf64x64() {
    container.replaceChildren();
   
    numberOfGrids = 4096;
    for (let i = 0; i < numberOfGrids; i++) {
        let createGrid = document.createElement("div");
        createGrid.style.height = "6px";
        createGrid.style.width = "6px";
        createGrid.style.border = "1px solid black";
        createGrid.classList.add("grids");
        container.appendChild(createGrid);
        createGrid.addEventListener("mouseover", () => {
            createGrid.style.backgroundColor = "#023047";
        })
    }
}


function createRgbGridsOf64x64() {
    container.replaceChildren();
   
    numberOfGrids = 4096;
    for (let i = 0; i < numberOfGrids; i++) {
        let createGrid = document.createElement("div");
        createGrid.style.height = "6px";
        createGrid.style.width = "6px";
        createGrid.style.border = "1px solid black";
        createGrid.classList.add("grids");
        container.appendChild(createGrid);
        createGrid.addEventListener("mouseover", () => {
            createGrid.style.backgroundColor = `${randomColor()}`;
        })
    }
}



//button click events to change the grid in the container

buttonEightGrids.addEventListener("click", () => {
    createGridsOf8x8();
})

buttonSixteenGrids.addEventListener("click", () => {
    createGridsOf16x16();
})


buttonThirtyTwoGrids.addEventListener("click", () => {
    createGridsOf32x32();
})

buttonSixtyFourGrids.addEventListener("click", () => {
    createGridsOf64x64();
})




// events listeners for reset button

buttonReset.addEventListener("click", () => {
    let grid = document.querySelectorAll(".grids");
    if (grid.length === 64) {
        createGridsOf16x16();
    }
    else if (grid.length === 256) {
        createGridsOf16x16();
    }
    else if (grid.length === 1024) {
        createGridsOf32x32();
    }
    else if (grid.length === 4096) {
        createGridsOf64x64();
    }
})





function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    return `rgb(${r},${g},${b})`;

}


// query selector  random color button and events listener to generate grids and colour with rgb

let randomColorButton = document.querySelector("#rand-colour");
let randomColorButtonEvent = randomColorButton.addEventListener("click", () => {
    randomColor;

    if(document.querySelectorAll(".grids").length  === 64)
    createRgbGridsOf8x8();

    else if(document.querySelectorAll(".grids").length  === 256)
    createRgbGridsOf16x16();

    else if(document.querySelectorAll(".grids").length  === 1024)
    createRgbGridsOf32x32();

    else if(document.querySelectorAll(".grids").length  === 4096)
    createRgbGridsOf64x64();
})

