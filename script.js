//Your calculator is going to contain functions for all of the basic math operators you typically find on calculators, so start by creating functions for the following items and testing them in your browser’s console:
//add
//subtract
//multiply
//divide
function WipeVariables() {
    storedOperator = "";
    storedNumber = ""
  storedNumber2 = "";
}

let storedNumber = "";
let storedOperator = "";
let storedNumber2 = "";
let displayContent = "";
let total = ""

const display = document.querySelector(".display"); // Display da calculadora
const clearButton = document.getElementById("Clear"); // Botão "Clear"
const deleteButton = document.getElementById("Delete"); // Botão "Delete"
const equalButton = document.getElementById("Equal");

equalButton.addEventListener("click", () => {
  operate();
  console.log("Numero1", storedNumber)
                console.log("Numero2", storedNumber2)
                console.log("total: ", total)

});

clearButton.addEventListener("click", () => {
  display.textContent = null;
  WipeVariables();
  
});



const buttons = {
  7: document.getElementById("7"),
  8: document.getElementById("8"),
  9: document.getElementById("9"),
  4: document.getElementById("4"),
  5: document.getElementById("5"),
  6: document.getElementById("6"),
  1: document.getElementById("1"),
  2: document.getElementById("2"),
  3: document.getElementById("3"),
  0: document.getElementById("0"),
  ".": document.getElementById("Decimal"), // Botão "."
};

const operators = {
  "x": document.getElementById("Multiply"), // Botão "×"
  "-": document.getElementById("Subtract"), // Botão "-"
  "+": document.getElementById("Add"), // Botão "+"
  ":": document.getElementById("Divide"), // Botão "÷"
};




function StoreNumber(number) {
    if (storedOperator === "") {
      storedNumber += number;
      display.textContent = storedNumber;
    } else {
      storedNumber2 += number;
      display.textContent = storedNumber2;
    }
  }
        function StoreOperator(operator) {
        storedOperator = operator
        return storedOperator;


        }

    function readFirstNumberInput () {
    for (const [key] of Object.entries(buttons)) {
        buttons[key].addEventListener('click', () => {
           

                StoreNumber(key)
                
                console.log("Numero1", storedNumber)
                console.log("Numero2", storedNumber2)

        })
    }
    }
    function readOperatorInput() {
    for (const [key] of Object.entries(operators)) {
        operators[key].addEventListener('click', () => {
            StoreOperator(key)
            console.log(storedOperator)


        })
    }
    }

    
    readFirstNumberInput()
    readOperatorInput()



function add(a, b) {
        

        total = (a + b).toFixed(2);

    console.log("Total : ", total)

  display.textContent = total;

  WipeVariables();
  storedNumber = total;

}

function subtract(a, b) {

    total = (a - b).toFixed(2);

  display.textContent = total;

  WipeVariables();
  storedNumber = total;

}

function multiply(a, b) {
    total = (a * b).toFixed(2);

  display.textContent = total;

  WipeVariables();
  storedNumber = total;

}

function divide(a, b) {

    if (storedNumber2 == "0") {
        display.textContent = "Nice try" // function to not divide if the number2 is 0
    } else {
        total = (a / b).toFixed(2);
    
        display.textContent = total;
      
        WipeVariables();
        storedNumber = total;
    }

}


function operate() {
  if (storedOperator == "+") {
    return  add(parseFloat(storedNumber), parseFloat(storedNumber2));
  } 

  
  else if (storedOperator == "-") {
    return subtract(storedNumber, storedNumber2);
  } else if (storedOperator == "x") {
    return multiply(storedNumber, storedNumber2);
  } else if (storedOperator == ":") {
    return divide(storedNumber, storedNumber2);
  }
}
