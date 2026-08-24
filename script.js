const timeDisplay = document.querySelector('#time');

setInterval(() => {
    const time = new Date();

    timeDisplay.textContent = time.toLocaleTimeString();
}, 1000);
