let container = document.querySelector(".container");
let numberOfGrids = 64;
let grid = document.querySelector(".grids");
let buttonEightGrids = document.querySelector("#eight");
let buttonSixteenGrids = document.querySelector("#sixteen");
let buttonThirtyTwoGrids = document.querySelector("#thirtytwo");
let buttonSixtyFourGrids = document.querySelector("#sixtyfour");


for (let i = 1; i <= numberOfGrids; i++) {    // for displaying the homepage grid i.e 16 by 16
    createGridsOf16x16();
}


function createGridsOf8x8() {
    container.replaceChildren();
    numberOfGrids = 64;
    for (let i = 0; i < numberOfGrids; i++) {
        let createGrid = document.createElement("div");
        createGrid.style.height = "59px";
        createGrid.style.width = "59px";
        createGrid.style.border = "1px solid black";
        createGrid.classList.add("grids");
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




// hover effect for the grids
grid.addEventListener("mouseover", () => {
    grid.style.backgroundColor = "black";
});