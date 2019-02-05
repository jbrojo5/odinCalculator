let currentDisplay = "";
let firstOperand = "";
let firstOperator;
let runningTotal = "";
let midSum = "";



function add (a, b) {
    answer = a + b;
    return answer.toFixed(2)
}

function subtract (a, b) {
    answer = a - b;
    return answer.toFixed(2)
}

function multiply (a, b) {
    answer = a * b;
    return answer.toFixed(2)
}

function divide (a, b) {
    answer = a / b
    return answer.toFixed(2)
}

function operate (a, b, c) {
    a = a*1
    c = c*1
    let answer
    let operator = b

    if (runningTotal !== "") {
        a = runningTotal
        a = a*1
    }

    if ((a === undefined) || (b === undefined) || (c === undefined)) {
        alert("enter the full sum!")
        answer = ""
    } else if ((b ==="/") && (c === 0)) {
        alert("TO INFINITY....AND BEYOND!")
        answer = ""
    } else if (operator === "*") {
        answer = multiply(a,c);
    } else if (operator === "/") {
        answer = divide(a,c);
    } else if (operator === "+") {
        answer = add(a,c);
    } else if (operator === "-") {
        answer = subtract(a,c);
    }
    currentDisplay = "";
    writeToDisplay(answer); 
    runningTotal = answer;
}

function writeToDisplay (a) {
    let buttonClicked
    buttonClicked = a

    if (midSum === "yes") {
        currentDisplay = ""
        midSum = ""
    }

        if (currentDisplay === "") {
            currentDisplay = a
            document.getElementById("display").innerHTML = currentDisplay;
        } else if ((currentDisplay === "+") || (currentDisplay === "-") ||
         (currentDisplay === "*") || (currentDisplay ==="/")) {
            firstOperator = currentDisplay
            currentDisplay = a
            document.getElementById("display").innerHTML = currentDisplay;
        } else {
            currentDisplay += a
            document.getElementById("display").innerHTML = currentDisplay;
        }
    }

function displayOperator(a) {
    if (firstOperand === "") {
      firstOperand = currentDisplay;
        currentDisplay = a;
        document.getElementById("display").innerHTML = currentDisplay;  
    } else if (firstOperand !== "") {
        operate(firstOperand, firstOperator, currentDisplay)
        firstOperator = a;
        midSum = "yes"
    }    
}

function clearCalc() {
    currentDisplay = "";
    runningTotal = "";
    midSum = "";
    firstOperand = "";
    document.getElementById("display").innerHTML = currentDisplay;
}

document.getElementById("button0").addEventListener("click", function() {writeToDisplay("0")});
document.getElementById("button1").addEventListener("click", function() {writeToDisplay("1")});
document.getElementById("button2").addEventListener("click", function() {writeToDisplay("2")});
document.getElementById("button3").addEventListener("click", function() {writeToDisplay("3")});
document.getElementById("button4").addEventListener("click", function() {writeToDisplay("4")});
document.getElementById("button5").addEventListener("click", function() {writeToDisplay("5")});
document.getElementById("button6").addEventListener("click", function() {writeToDisplay("6")});
document.getElementById("button7").addEventListener("click", function() {writeToDisplay("7")});
document.getElementById("button8").addEventListener("click", function() {writeToDisplay("8")});
document.getElementById("button9").addEventListener("click", function() {writeToDisplay("9")});

document.getElementById("buttonPlus").addEventListener("click", function() {displayOperator("+")});
document.getElementById("buttonMinus").addEventListener("click", function() {displayOperator("-")});
document.getElementById("buttonMultiply").addEventListener("click", function() {displayOperator("*")});
document.getElementById("buttonDivide").addEventListener("click", function() {displayOperator("/")});

document.getElementById("buttonClear").addEventListener("click", function() {clearCalc()});

document.getElementById("buttonEquals").addEventListener("click", function() 
    {operate(firstOperand, firstOperator, currentDisplay)});



