let body = document.querySelector('body');
const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');

start.addEventListener('click', () => {
  timerId = setInterval(() => {
    let change = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
    console.log(change);
    start.disabled = true;
    body.style.backgroundColor = `${change}`;
  }, 1000);
});

stop.addEventListener('click', () => {
  clearInterval(timerId);
  start.disabled = false;
});
