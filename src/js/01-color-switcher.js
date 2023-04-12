let body = document.querySelector('body');
const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');

startButton.addEventListener('click', () => {
  let timerId = setInterval(() => {
    let change = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
    console.log(change);
    startButton.disabled = true;
    body.style.backgroundColor = `${change}`;
  }, 1000);
  stopButton.addEventListener('click', () => {
    clearInterval(timerId);
    startButton.disabled = false;
  });
});

