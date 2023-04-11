const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { delay2, step, amount },
  } = event.currentTarget;
  const clickDate = new Date();

  const promises = [];
  for (let i = amount.value; i > 0; i--) {
    promises.push(i);
  }
  setTimeout(() => {
    setTimeout(() => {
      promises.forEach(function (e) {
        function createPromise(position, delay) {
          return new Promise((resolve, reject) => {
            function countDown(count) {
              position = e;
              const positionDate = new Date();
              delay = positionDate.getTime() - clickDate.getTime();
              const shouldResolve = Math.random() > 0.3;

              if (shouldResolve) {
                resolve({ position, delay });
              } else {
                reject({ position, delay });
              }

              if (count > 0) {
                countDown(count - 1);
              }
            }
            countDown(amount.value);
          });
        }
        createPromise(this.position, this.delay)
          .then(({ position, delay }) => {
            console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
          })
          .catch(({ position, delay }) => {
            console.log(`❌ Rejected promise ${position} in ${delay}ms`);
          });
      });
    }, step.value);
  }, delay2.value);
}
// const elements = {
//   delay: delay.value,
//   step: step.value,
//   amount: amount.value,
// };

// localStorage.setItem('elements', JSON.stringify(elements));

// const savedElements = localStorage.getItem('elements');
// const parsedElements = JSON.parse(savedElements);
// console.log(parsedElements);

// delay = parsedElements.delay;
// step = parsedElements.step;
// position = parsedElements.amount;
