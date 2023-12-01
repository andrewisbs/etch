const controler = document.querySelector("#controler");
const boxes = document.querySelector("#boxes");
const BEGINNING_BOXES = 15;
const numberButton = document.querySelector("#number-button");
const clearButton = document.querySelector("#clear-button");
const colorButton = document.querySelector("#color-button");
const blackButton = document.querySelector("#black-button");
    loadScreen(BEGINNING_BOXES);
//for the initial loading

function loadScreen(numberBoxes) {
    if (numberBoxes >30) {return;}
    let iteration = numberBoxes*numberBoxes;
    for(;iteration>0; iteration--)
    {
        const box = document.createElement('div');
        box.setAttribute("class", "box-style");    
        boxes.setAttribute('draggable', 'false');
        boxes.appendChild(box);
        boxes.addEventListener("mouseover", () => {
            target = event.target
            changeColor(target);
            addListener(boxes);
            numberButton.addEventListener("mousedown", changeNumber);
            clearButton.addEventListener("mousedown", clearScreen);
            colorButton.addEventListener("mousedown", colorMode);
            blackButton.addEventListener("mousedown", blackMode);
        });
    }
}
function changeNumber() {
    prompt ("how many");
}
function clearScreen () {
    const boxRevert = document.querySelectorAll(".box-style");
    console.log(boxRevert);
    for (let i=0;i<boxRevert.length; i++) {
        boxRevert[i].style.cssText= "background-color: none";
    }
}
function colorMode () {
    //change to color mode
}
function blackMode () {
    //change to black mode
}
function addListener (boxes) {
        boxes.addEventListener("mouseover", () => {
        target = event.target;
        event.stopImmediatePropagation();
        changeColor(target);

})}
function changeColor (value) {
    value.style.cssText= "background-color: black";
    boxes.style.cssText= "background-color: none";
}