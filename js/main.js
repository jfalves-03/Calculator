//////////////////CALCULATOR CLASS/////////////////////
class Calculator{
    constructor(previousOperandScreen, currentOperandScreen){ // CONSTRUCTOR FUNCTION
        this.previousOperandOutput = previousOperandScreen;
        this.currentOperandOutput = currentOperandScreen;
        this.operation;
        this.previousOperandInput = "";
        this.currentOperandInput = ""; 
    }

    //METHODS BASED ON THE PRESSED BUTTONS

    updateDisplay(){
        this.previousOperandOutput.innerText = this.previousOperandInput;
        this.currentOperandOutput.innerText = this.currentOperandInput;
    }

    allClear(){
        this.currentOperandInput = "";
        this.previousOperandInput = "";
    }

    delete(){
        this.currentOperandInput = this.currentOperandOutput.innerText.slice(0, -1);
    }

    addNumber(number){
        if (number == "." && this.currentOperandInput.includes(".")) return
        this.currentOperandInput += number.toString();
    }

    addOperation(operationParameter){
        if (this.currentOperandOutput.innerText == "") return
        this.operation = operationParameter;
        this.previousOperandInput = this.currentOperandOutput.innerText + this.operation;
        this.currentOperandInput = "";
    }

    calculate(){
        if (this.currentOperandOutput.innerText == "" && this.previousOperandOutput.innerText == "") {
            window.alert("Add some value to calculate")
            return;
        }

        const firstValue = parseFloat(this.previousOperandOutput.innerText); 
        const secondValue = parseFloat(this.currentOperandOutput.innerText);

        this.previousOperandInput = "";

        switch (this.operation) {
            case "+":
                this.currentOperandInput = firstValue + secondValue;
                break;
            case "-":
                this.currentOperandInput = firstValue - secondValue;
                break;
            case "*":
                this.currentOperandInput = firstValue * secondValue;
                break;
            case "/":
                this.currentOperandInput = firstValue / secondValue;
                break;
            default:
                return;
        }
    }
}
//////////////////////////////////////////////////////

//////////////////CALCULATOR PROGRAM///////////////////

    //VARIABLES
    const numberButtons = document.querySelectorAll("[number-data]")
    const operationsButtons = document.querySelectorAll("[operation-data]");
    const allClearButton = document.querySelector("[all-clear-data]");
    const deleteButton = document.querySelector("[delete-data]");
    const equalsButton = document.querySelector("[equals-data]");
    const previousOperandScreen = document.querySelector("[previous-operand-data]");
    const currentOperandScreen = document.querySelector("[current-operand-data]");

    const calculator = new Calculator(previousOperandScreen, currentOperandScreen);

    //ACTIONS 
    numberButtons.forEach(button => {
        button.addEventListener("click", () => {
            calculator.addNumber(button.innerText);
            calculator.updateDisplay();
        })
    })

    operationsButtons.forEach(button => {
        button.addEventListener("click", () => {
            calculator.addOperation(button.innerText);
            calculator.updateDisplay();
        })
    })

    allClearButton.addEventListener("click", () => {
        calculator.allClear();
        calculator.updateDisplay();
    })

    deleteButton.addEventListener("click", () => {
        calculator.delete();
        calculator.updateDisplay();
    })

    equalsButton.addEventListener("click", () => {
        calculator.calculate();
        calculator.updateDisplay();
    })
//////////////////////////////////////////////////////