const formCalculator = document.forms.calculator__form;

let sum = +formCalculator.sum.value;
let age = +formCalculator.age.value;
let salary = +formCalculator.salary.value;
let term = +formCalculator.term.value;
const rate = 18;

let rateTag = document.querySelector(".calculator__heading-description > b");
rateTag.innerText = rate + "%";

let percentageOfSalary;

const btnCalc = formCalculator.calculator__btn;
btnCalc.onclick = calculate;

function validateSum (creditInput) {
    if(typeof creditInput === "string") {
        alert("Введите число");
    }else if(creditInput < 0) {
        alert("Введите корректное значение")
    }else{
        return;
    }
}

function validateAge (ageInput) {
    if (ageInput < 18 || ageInput > 55) {
        alert ("Ваш возраст не позволяет взять кредит");
    }else {
        return
    } 
}


function validateSalaryInput (salaryInput) {
    if(typeof salaryInput !== "number"){
        alert ("Введено неправильное значение");
    }
}


function validateSalary (salaryInput,monthlyPayment) {
    percentageOfSalary = salaryInput * 0.6;
    if (monthlyPayment > percentageOfSalary) {
        alert("К сожалению, Вы не сможете взять кредит. Ежемесячные платежи составят более 60% от суммы заработной платы")        
    }else {
        return;
    }
}

function calculateMonthlyPayment (interestRate, sum, term) {
    let monthlyPercent = interestRate / 12;
    let sumMonthlyPercent = sum * monthlyPercent / 100;
    let sumPercent = sumMonthlyPercent * term;
    let wholeSum = sum + sumPercent;
    return Math.round(wholeSum / term);
}

function calculate (ev) {
    ev.preventDefault();

console.log("hohoh");

    sum = +formCalculator.sum.value;
    age = +formCalculator.age.value;
    salary = +formCalculator.salary.value;
    term = +formCalculator.term.value;

    validateSum(sum);
    validateAge(age);
    validateSalaryInput(salary);
    const monthlyPayment = calculateMonthlyPayment(rate, sum, term);
    validateSalary(salary,monthlyPayment);
 

    if (age >= 18 && age <= 55 && monthlyPayment <= percentageOfSalary) {
        alert("Ваш ежемесячный платеж составит " + monthlyPayment + " руб."); 
    }else{
        return;
    }
}





