/*let dataForCalculation = {};

dataForCalculation.sum = document.querySelector(".calculator__form-sum").value;
dataForCalculation.age = document.querySelector(".calculator__form-age").value;
dataForCalculation.salary = document.querySelector(".calculator__form-salary").value;
dataForCalculation.term = document.querySelector(".calculator__term").value;

console.log(dataForCalculation);

const formCalculator = document.forms.calculator__form;
console.log(formCalculator);

formCalculator.sum.onchange = calculate;
formCalculator.age.onchange = calculate;
formCalculator.salary.onchange = calculate;
formCalculator.term.onchange = calculate;

function calculate() {
    let sum = +formCalculator.sum.value;
    if(!sum) {
        return};

    let age = +formCalculator.age.value;
    if(age < 18 || age > 99) {
        alert ("Ввести какой-то текст");
    } 
}*/

const formCalculator = document.forms.calculator__form;
console.log(formCalculator.sum.value,"sum");
let sum = +formCalculator.sum.value;
let age = +formCalculator.age.value;

let salary = +formCalculator.salary.value;
let term = +formCalculator.term.value;


const rate = 18;

const btnCalc = formCalculator.calculator__btn;
btnCalc.onclick = calculate;

function validateSum (creditInput) {
    console.log("creditInput",creditInput);
    if(typeof creditInput === "string") {
        alert("Введите число");
    }else if(creditInput < 0) {
        alert("Введите корректное значение")
    }else{
        return;
    }
}

function calculate (ev) {
    ev.preventDefault();
    sum = +formCalculator.sum.value;
validateSum(sum);


}

/*console.log(formCalculator);*/

