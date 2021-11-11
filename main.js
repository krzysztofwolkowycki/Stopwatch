const btnMain = document.querySelector('button.main');
const btnReset = document.querySelector('button.reset');

let active = false;

const start = () => {
    if (!active) {
        active = !active;
        btnMain.textContent = 'Stop';
        setInterval(timer, 1000);
    } else {
        active = !active;
        btnMain.textContent = 'Start';
    }
}





btnMain.addEventListener('click', start);