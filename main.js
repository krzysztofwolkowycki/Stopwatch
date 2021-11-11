const btnMain = document.querySelector('button.main');
const btnReset = document.querySelector('button.reset');
const panel = document.querySelector('div.time div');
let active = false;
let time = 0;
let idI;

const start = () => {
    if (!active) {
        active = !active;
        btnMain.textContent = 'Stop';
        idI = setInterval(timer, 10);
    } else {
        active = !active;
        btnMain.textContent = 'Start';
        clearInterval(idI);
    }
}
const timer = () => {
    if (active = true) {
        time++;
    }
    panel.textContent = (time / 100).toFixed(2);
}

const reset = () => {
    time = 0;
    panel.textContent = '---';
    active = false;
    btnMain.textContent = 'Start';
    clearInterval(idI);
}




btnMain.addEventListener('click', start);
btnReset.addEventListener('click', reset)