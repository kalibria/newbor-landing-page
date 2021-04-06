let timerSec = 12;

let timerBlock = document.querySelector(".timer__demo");
timerBlock.innerHTML = `00:00:${timerSec}`;

const timerInterval = setInterval(timerCountdoun, 1000);

function timerCountdoun() {
    if(timerSec === 0){
        window.clearInterval(timerInterval);
        setTime(timerSec);
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





