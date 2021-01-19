const btnOne = document.querySelector("#btnOne")
const btnTwo = document.querySelector("#btnTwo")
const btnThree = document.querySelector("#btnThree")
const btnFour = document.querySelector("#btnFour")
const btnFive = document.querySelector("#btnFive")
const btnSix = document.querySelector("#btnSix")
const btnSeven = document.querySelector("#btnSeven")
const btnEight = document.querySelector("#btnEight")
const btnNine = document.querySelector("#btnNine")
const btnZero = document.querySelector("#btnZero")
const btnAdd = document.querySelector("#btnAdd")
const btnSubtract = document.querySelector("#btnSubtract")
const btnMultiply = document.querySelector("#btnMultiply")
const btnDivide = document.querySelector("#btnDivide")
const btnEqual = document.querySelector("#btnEqual")
const btnClear = document.querySelector("#btnClear")
const calcDisplay = document.querySelector("#calcDisplay")
const numBtn = document.querySelectorAll(".numBtn")
const calcTable = document.querySelector("#calcTable")
const opBtn = document.querySelectorAll(".opBtn")


let clickedNum1 = "";
let clickedNum2 = "";
let currOp = "";
let result = "";
let opResult = ""; 




function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if (operator == "+") {
        return add(a, b);
    } else if (operator == "-") {
        return subtract(a, b);
    } else if (operator == "*") {
        return multiply(a, b);
    } else if (operator == "/") {
        return divide(a, b);
    } else {
        return "Please enter a valid operator";
    }
}






calcTable.addEventListener("click", (e) => {

    switch (e.target) {
        case btnZero:
            if (currOp == "") {
                calcDisplay.textContent = btnZero.textContent;
                clickedNum1 += calcDisplay.textContent;
                calcDisplay.textContent = clickedNum1;
            }
            if (currOp != "") {
                calcDisplay.textContent = btnZero.textContent;
                clickedNum2 += calcDisplay.textContent;
                calcDisplay.textContent = clickedNum2;
            }
            break;

        case btnOne:
            if (currOp == "") {
                calcDisplay.textContent = btnOne.textContent;
                clickedNum1 += calcDisplay.textContent;
                calcDisplay.textContent = clickedNum1;
            }
            if (currOp != "") {
                calcDisplay.textContent = btnOne.textContent;
                clickedNum2 += calcDisplay.textContent;
                calcDisplay.textContent = clickedNum2;
            }
            break;

        case btnTwo:
            if (currOp == "") {
                calcDisplay.textContent = btnTwo.textContent;
                clickedNum1 += calcDisplay.textContent;
                calcDisplay.textContent = clickedNum1;
            }
            if (currOp != "") {
                calcDisplay.textContent = btnTwo.textContent;
                clickedNum2 += calcDisplay.textContent;
                calcDisplay.textContent = clickedNum2;
            }
            break;

        case btnThree:
            if (currOp == "") {
                calcDisplay.textContent = btnThree.textContent;
                clickedNum1 += calcDisplay.textContent;
                calcDisplay.textContent = clickedNum1;
            }
            if (currOp != "") {
                calcDisplay.textContent = btnThree.textContent;
                clickedNum2 += calcDisplay.textContent;
                calcDisplay.textContent = clickedNum2;
            }
            break;

        case btnFour:
            if (currOp == "") {
                calcDisplay.textContent = btnFour.textContent;
                clickedNum1 += calcDisplay.textContent;
                calcDisplay.textContent = clickedNum1;
            }
            if (currOp != "") {
                calcDisplay.textContent = btnFour.textContent;
                clickedNum2 += calcDisplay.textContent;
                calcDisplay.textContent = clickedNum2;
            }
            break;

        case btnFive:
            if (currOp == "") {
                calcDisplay.textContent = btnFive.textContent;
                clickedNum1 += calcDisplay.textContent;
                calcDisplay.textContent = clickedNum1;
            }
            if (currOp != "") {
                calcDisplay.textContent = btnFive.textContent;
                clickedNum2 += calcDisplay.textContent;
                calcDisplay.textContent = clickedNum2;
            }
            break;

        case btnSix:
            if (currOp == "") {
                calcDisplay.textContent = btnSix.textContent;
                clickedNum1 += calcDisplay.textContent;
                calcDisplay.textContent = clickedNum1;
            }
            if (currOp != "") {
                calcDisplay.textContent = btnSix.textContent;
                clickedNum2 += calcDisplay.textContent;
                calcDisplay.textContent = clickedNum2;
            }
            break;

        case btnSeven:
            if (currOp == "") {
                calcDisplay.textContent = btnSeven.textContent;
                clickedNum1 += calcDisplay.textContent;
                calcDisplay.textContent = clickedNum1;
            }
            if (currOp != "") {
                calcDisplay.textContent = btnSeven.textContent;
                clickedNum2 += calcDisplay.textContent;
                calcDisplay.textContent = clickedNum2;
            }
            break;

        case btnEight:
            if (currOp == "") {
                calcDisplay.textContent = btnEight.textContent;
                clickedNum1 += calcDisplay.textContent;
                calcDisplay.textContent = clickedNum1;
            }
            if (currOp != "") {
                calcDisplay.textContent = btnEight.textContent;
                clickedNum2 += calcDisplay.textContent;
                calcDisplay.textContent = clickedNum2;
            }
            break;

        case btnNine:
            if (currOp == "") {
                calcDisplay.textContent = btnNine.textContent;
                clickedNum1 += calcDisplay.textContent;
                calcDisplay.textContent = clickedNum1;
            }
            if (currOp != "") {
                calcDisplay.textContent = btnNine.textContent;
                clickedNum2 += calcDisplay.textContent;
                calcDisplay.textContent = clickedNum2;
            }
            break;

        case btnAdd:
            if (currOp === "") {
                currOp = "+";
            }
            if (clickedNum1 != "" && currOp != "" && clickedNum2 != "") {
                opResult = operate(currOp, Number(clickedNum1), Number(clickedNum2));
                calcDisplay.textContent = opResult; 
                clickedNum1 = opResult; 
                clickedNum2 = ""; 
               
            }
            break;

        case btnSubtract:
            if (currOp === "") {
                currOp = "-";
            }
            if (clickedNum1 != "" && currOp != "" && clickedNum2 != "") {
                opResult = operate(currOp, Number(clickedNum1), Number(clickedNum2));
                calcDisplay.textContent = opResult; 
                clickedNum1 = opResult; 
                clickedNum2 = ""; 
                 
            }
            break;

        case btnMultiply:
            if (currOp === "") {
                currOp = "*";
            }
            if (clickedNum1 != "" && currOp != "" && clickedNum2 != "") {
                opResult = operate(currOp, Number(clickedNum1), Number(clickedNum2));
                calcDisplay.textContent = opResult; 
                clickedNum1 = opResult; 
                clickedNum2 = ""; 
               
            }
            break;

        case btnDivide:
            if (currOp === "") {
                currOp = "/";
            }
            if (clickedNum1 != "" && currOp != "" && clickedNum2 != "") {
                opResult = operate(currOp, Number(clickedNum1), Number(clickedNum2));
                calcDisplay.textContent = opResult; 
                clickedNum1 = opResult; 
                clickedNum2 = ""; 
                 
            }
            break;

        case btnEqual:
            if (clickedNum2 == 0) {
                clickedNum2 = "";
                alert("Why would you try to destroy the world like that");
            }
            if (clickedNum1 != "" && clickedNum2 != "" && currOp != "") {
                result = operate(currOp, Number(clickedNum1), Number(clickedNum2));
                calcDisplay.textContent = result;
                clickedNum1 = result;
                clickedNum2 = "";
                currOp = "";
            }

            break;

        case btnClear:
            calcDisplay.textContent = 0;
            clickedNum1 = "";
            clickedNum2 = "";
            currOp = "";
            break;

    }



})

