



// let display = document.getElementById("display");
// function appendToDisplay(int)
// {
//     display.value += int;

// }
// function clearDisplay()
// {
//     display.value="";

// }
// function calculate()
// {
//     try{
//         display.value = eval(display.value);
//     }
//     catch{
//         display.value="ERROR";
        
//     }

// }
let display = document.getElementById("display");

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
