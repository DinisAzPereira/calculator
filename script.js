//Your calculator is going to contain functions for all of the basic math operators you typically find on calculators, so start by creating functions for the following items and testing them in your browser’s console:
//add
//subtract
//multiply
//divide

function WipeVariables () {
    operator = ""
    number = ""
    number2 = ""
}

let number = "";
let operator = "";
let number2 = "";
let displayContent = "";

const display = document.querySelector('.display'); // Display da calculadora
const clearButton = document.getElementById('Clear'); // Botão "Clear"
const deleteButton = document.getElementById('Delete'); // Botão "Delete"
const equalButton = document.getElementById('Equal');

equalButton.addEventListener('click', () => {
    operate();
})

clearButton.addEventListener('click', () => {
    display.textContent = null
    WipeVariables()
})

const buttons = {
    '7': document.getElementById('7'),
    '8': document.getElementById('8'),
    '9': document.getElementById('9'),
    '4': document.getElementById('4'),
    '5': document.getElementById('5'),
    '6': document.getElementById('6'),
    '1': document.getElementById('1'),
    '2': document.getElementById('2'),
    '3': document.getElementById('3'),
    '0': document.getElementById('0'),
    '.': document.getElementById('Decimal'), // Botão "."
};

const operators = {
    'x': document.getElementById('Multiply'), // Botão "×"
    '-': document.getElementById('Subtract'), // Botão "-"
    '+': document.getElementById('Add'), // Botão "+"
    ':': document.getElementById('Divide'), // Botão "÷"
};


    for (const [key] of Object.entries(buttons)) {
    
        buttons[key].addEventListener('click', ()=> {
            display.textContent = [key]
            displayContent = [key]
            number = [key]
    
    
        })
      }
    
  for (const [key] of Object.entries(operators)) {
    
    operators[key].addEventListener('click', ()=> {
        operator = [key]



    })
  }

  



function add(a,b) {
 
    let total = a + b;

    display.textContent = total

    WipeVariables()


}

function subtract(a,b) {
 
    let total = a - b;

    display.textContent = total

    WipeVariables()

}

function multiply(a,b) {
 
    let total = a * b;

    display.textContent = total

    WipeVariables()

}

function divide(a,b) {
 
    let total = a / b;

    display.textContent = total

    WipeVariables()

}



function operate() {



    if (operator == "+") {
        return add(number, number2);
    } else if (operator == "-"){

        return subtract(number, number2);

    } else if (operator == "x"){
        return   multiply(number, number2);

    } else if (operator == ":") {

        return   divide(number, number2)
    } 


}




