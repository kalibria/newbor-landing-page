const formCalculator = document.forms.calculator__form;

let sum = +formCalculator.sum.value;
let age = +formCalculator.age.value;
let salary = +formCalculator.salary.value;
let term = +formCalculator.term.value;
const children = formCalculator.children;
const rate = 18;

let rateTag = document.querySelector(".calculator__heading-description > b");
rateTag.innerText = rate + "%";

let percentageOfSalary;

const btnCalc = formCalculator.calculator__btn;
btnCalc.onclick = calculate;

function validateSum (creditInput) {
    const sumHtml = document.querySelector(".calculator__form-sum");
    if(typeof creditInput === "string") {
            sumHtml.insertAdjacentHTML(
            "afterend", 
            "<p class='validation-error'>Введите число</p>"
            )
        return false;
    }else if(creditInput < 0) {
        console.log()
        sumHtml.insertAdjacentHTML(
            "afterend", 
            "<p class='validation-error'>Введите корректное значение</p>"
            )
        return false;
    }else{
        return true;
    }
}

 function validateAge (ageInput) {
    if (ageInput < 18 || ageInput > 55) {
        const ageHtml = document.querySelector(".calculator__form-age");
        ageHtml.insertAdjacentHTML(
            "afterend", 
            "<p class='validation-error calculator__validation-error' >Ваш возраст не позволяет взять кредит</p>"
        );
        return false;
    }else {
        return true;
    } 
}

const salaryHtml = document.querySelector(".calculator__form-salary");

let validateSalaryInput = function (salaryInput) {
    if(typeof salaryInput !== "number"){
            salaryHtml.insertAdjacentHTML(
            "afterend",
            "<p class='validation-error'>Введено неправильное значение</p>"
        )
        return false;
    }
    return true;
}


let canPersonHaveCredit = function (salaryInput,monthlyPayment) {
    if(children.checked){
        percentageOfSalary = salaryInput * 0.4;
    }else{
    percentageOfSalary = salaryInput * 0.6;
    }
    if (monthlyPayment > percentageOfSalary) {
        if(children.checked){
            salaryHtml.insertAdjacentHTML(
                "afterend",
                "<p class='validation-error'>К сожалению, Вы не сможете взять кредит. Ежемесячные платежи составят более 40% от суммы заработной платы</p>"
            )
            return false;
        }else{
            salaryHtml.insertAdjacentHTML(
                "afterend",
                "<p class='validation-error'>К сожалению, Вы не сможете взять кредит. Ежемесячные платежи составят более 60% от суммы заработной платы</p>"
            )
            return false;
        }
    }else {
        return true;
    }
}

let calculateMonthlyPayment = function  (interestRate, sum, term) {
    let monthlyPercent = interestRate / 12;
    let sumMonthlyPercent = sum * monthlyPercent / 100;
    let sumPercent = sumMonthlyPercent * term;
    let wholeSum = sum + sumPercent;
    return Math.round(wholeSum / term);
}

function calculate (ev) {
    ev.preventDefault();

    sum = +formCalculator.sum.value;
    age = +formCalculator.age.value;
    salary = +formCalculator.salary.value;
    term = +formCalculator.term.value;

    const isValidSum = validateSum(sum);
    const isValidAge = validateAge(age);
    const isValidSalaryInput = validateSalaryInput(salary);
    const monthlyPayment = calculateMonthlyPayment(rate, sum, term);
    const canHaveCredit = canPersonHaveCredit(salary,monthlyPayment);

    console.log(isValidSalaryInput,"validSal");
    if (isValidSum === false ){
        return;
    }else if (isValidAge === false) {
        return;
    }else if (isValidSalaryInput === false) {
        return;
    }else if (canHaveCredit === false){
        return;
    }else {
        alert("Ваш ежемесячный платеж составит " + monthlyPayment + " руб.");
    }
}
 

   
