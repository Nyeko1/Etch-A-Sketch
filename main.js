const gridSize = 600;
let squaresPerSide = 15;


const sketchArea = document.querySelector("#sketch-area");
sketchArea.style.width = `${gridSize}px`;
sketchArea.style.height = `${gridSize}px`;
// An alternative way to write the above statement sketchArea.style.width = sketchArea.style.height = `${gridSize}px`
const sliderContainer = document.querySelector("#slider-container");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#slider-value");

sliderValue.textContent = `${slider.value} x ${slider.value} (Resolution)`;


// function to set the background of a gridCell
function setBackgroundColor() {
    this.style.backgroundColor = "black";
}

function createGridCells(squaresPerSide) {
    const numberOfSqaures = (squaresPerSide * squaresPerSide);
    for(let i = 0; i < numberOfSqaures; i++) {
        const gridCell = document.createElement("div");
        gridCell.style.width = `${gridSize/squaresPerSide }px`;
        gridCell.style.height = `${gridSize/squaresPerSide }px`;
        gridCell.classList.add("cell");

        sketchArea.appendChild(gridCell);
        gridCell.addEventListener("mouseover", setBackgroundColor);
    }
    
}

function removeGridCells() {
    while(sketchArea.firstChild){
        sketchArea.removeChild(sketchArea.firstChild);
    }
}

slider.oninput = function() {
    let txt = `${this.value} x ${this.value} (Resolution)`;
    sliderValue.innerHTML = txt;
    removeGridCells();
    createGridCells(this.value);
}




createGridCells(15);