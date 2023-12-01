const controler = document.querySelector("#controler");
const boxes = document.querySelector("#boxes");
const BEGINNING_BOXES = 4;
    loadScreen(BEGINNING_BOXES);
//for the initial loading


function loadScreen(numberBoxes) {
    if (numberBoxes >30) {return;}
    let iteration = numberBoxes*numberBoxes;
    for(;iteration>0; iteration--)
    {
        const box = document.createElement('div');
        box.setAttribute("class", "box-style");
        boxes.appendChild(box);
        boxes.addEventListener("mouseover", () => {
            target = event.target
            console.log(target);
            changeColor(target);
            addListener(boxes);
        });
    }
}



function addListener (boxes) {
        boxes.addEventListener("mouseover", () => {
        target = boxes.event.target;
        console.log(target);
        changeColor(target);
})}
function changeColor (boxes) {
    boxes.style.cssText= "background-color: black";
}
console.log(boxes);
console.log(controler);