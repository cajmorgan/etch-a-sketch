//Global consts
const container = document.querySelector('.container');
const resetBtn = document.querySelector('.reset');
const settingsBtn = document.querySelector('.settings');
const saveBtn = document.querySelector('.saveBtn')
var color = "black";
var divNum = 256;
var height = 100 / Math.sqrt(divNum);
var width = 100 / Math.sqrt(divNum);
let inputNum = document.querySelector('#inputNum');
let expNum = document.querySelector('#expNum');

//Color variables
var i = 0;
var j = 0;
let p = 0 //ref num

function createDivs() {
    for(i = 1; i <= divNum; i++) {
        let createDiv = document.createElement('div');
        createDiv.classList.add('square');
        container.appendChild(createDiv);
    }
    
    if(p == 1) {
    for(i = 0; i < divNum; i++) {
        let squareChange = document.querySelectorAll('.square');
        squareChange[i].style.height = `${height}%`;
        squareChange[i].style.flex = `1 0 ${width}%`;
    } } else if(p == 0) {
        p += 1;
        console.log(p);
        return;
    }
    allSquares = document.querySelectorAll('.square');
}
createDivs();

var allSquares = document.querySelectorAll('.square');
function letsReset() {
    for(n = 0; n < divNum; n++){
    allSquares[n].style.backgroundColor = "";
    }
}
resetBtn.addEventListener('click', letsReset);


const draw = container.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = color;
} )
    
//Behöver loopa igenom varje div? 

const eraseThis = container.addEventListener("click", (e) => {
    if(j % 2 == 0 || j == 0) {
        e.target.style.backgroundColor = "";
    } else {
        e.target.style.backgroundColor = "black";
    }
   
    j += 1;
} )

    function selectColor(e) {
        i += 1;
        if(i % 2 == 0) {
            color = "black";
        } else {
            color = "";
        }
    }
selectColor();

container.addEventListener('click', selectColor);

function popUp(e) {
    document.querySelector('.settingsPop').style.display = "flex";
    let newDivNum = parseInt(inputNum.value);
    if(isNaN(newDivNum)) {
        let textM = expNum.textContent = 0;
    } else {
        let textM = expNum.textContent = newDivNum;
    }
    
} 

settingsBtn.addEventListener('click', popUp);

inputNum.placeholder = Math.sqrt(divNum);
inputNum.addEventListener('keydown', popUp)
inputNum.addEventListener('keyup', popUp)

//Settings
    function changeGrid() {
        newNum = document.querySelector('#inputNum').value;
        if(isNaN(newNum)) {
            return popUp();
        }
        else if(parseInt(newNum) < 5 || parseInt(newNum) > 100 || newNum == "") {
           return popUp();
        }
        document.querySelector('.settingsPop').style.display = "none";
        newDivNum = parseInt(newNum) **2;
        height = 100 / Math.sqrt(newDivNum);
        width = 100 / Math.sqrt(newDivNum);
        for(d = 0; d < divNum; d++) {
        container.removeChild(allSquares[d]);
        }
        divNum = newDivNum;
        inputNum.placeholder = Math.sqrt(divNum);
        console.log(divNum);
        createDivs();
    }
saveBtn.addEventListener('click', changeGrid);