const controler = document.querySelector("#controler");
const boxes = document.querySelector("#boxes");
const BEGINNING_BOXES = 15;
const numberButton = document.querySelector("#number-button");
const clearButton = document.querySelector("#clear-button");
const colorButton = document.querySelector("#color-button");
const blackButton = document.querySelector("#black-button");
let COLORMODE = false;
loadScreen(BEGINNING_BOXES);


function loadScreen(numberBoxes) {
    if (numberBoxes >50){return;}
    let iteration = numberBoxes*numberBoxes;
    for(;iteration>0; iteration--)
    {
        const box = document.createElement('div');
        box.setAttribute("class", "box-style");    
        boxes.setAttribute('draggable', 'false');
        boxes.appendChild(box);
        boxes.addEventListener("mouseover", () => {
            target = event.target
            changeColor(target, COLORMODE);
            addListener(boxes);
            numberButton.addEventListener("mousedown", changeNumber);
            clearButton.addEventListener("mousedown", clearScreen);
            colorButton.addEventListener("mousedown", colorMode);
            blackButton.addEventListener("mousedown", blackMode);
        });
    }
}
function changeNumber() {
    let number =prompt ("How many boxes do you want? Has to be a number less that 50, will return the square of your number.");
    clearScreenBoxes();
    loadScreen(number);
}

function clearScreenBoxes(){
    const boxRevert = document.querySelectorAll(".box-style");
    for (let i=0;i<boxRevert.length; i++) {
    boxes.removeChild(boxRevert[i]);
}}
function clearScreen () {
    const boxRevert = document.querySelectorAll(".box-style");
    console.log(boxRevert);
    for (let i=0;i<boxRevert.length; i++) {
        boxRevert[i].style.cssText= "background-color: none";
    }
}
function colorMode () {
    if (COLORMODE) {
        COLORMODE;
    }
    else {
        return (COLORMODE = true);
    }
}
function blackMode () {
    if (COLORMODE) {
        return (COLORMODE=false);
    }
    else {
        return COLORMODE;
    }
}
function addListener (boxes) {
        boxes.addEventListener("mouseover", () => {
        target = event.target;
        event.stopImmediatePropagation();
        changeColor(target, COLORMODE);

})}
function changeColor (value, COLORMODE) {
    if(COLORMODE) {
        //border-color: rgb(200, 200, 200);
        a=random();
        b=random();
        c=random()
        value.style.cssText= `background-color: rgb(${a} , ${b} , ${c})`;
        boxes.style.cssText= "background-color: none";
    } else {
        value.style.cssText= "background-color: black";
        boxes.style.cssText= "background-color: none";
}
}

function random(){
    return (Math.random()*255);
}