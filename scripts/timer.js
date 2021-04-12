let timerSec = 5;
let timerBlock = document.querySelector(".timer__demo");
let timeOut = document.querySelector(".timer__description");

timerBlock.innerHTML = `00:00:0${timerSec}`;

const timerInterval = setInterval(timerCountdoun, 1000);

function timerCountdoun() {
    if(timerSec === 0){
        window.clearInterval(timerInterval);
        setTime(timerSec);
        
        timeOut.innerHTML = "Акция завершена!";
        timeOut.style.color = "red";
        
        return;
    }
    timerSec--;
    
    setTime(timerSec);   

    
    return timerSec;
}

function setTime (seconds) {
    if(seconds<10){
        seconds = `0${seconds}`
    }
    timerBlock.innerHTML = `00:00:${seconds}`;

}









