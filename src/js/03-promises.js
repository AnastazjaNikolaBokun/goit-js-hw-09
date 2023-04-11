const form = document.querySelector('.form');

const createPromises = event => {
  event.preventDefault();
  let {
    elements: { delay, step, amount },
  } = event.currentTarget;
  let tempDelay = Number(delay.value);
  for (let i = 1; i <= amount.value; i += 1) {
if (i > 1) {
  tempDelay += Number(step.value);
}
    createPromise(i, tempDelay).then(onSuccess).catch(onFail);
  }
};

const createPromise = (position, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      shouldResolve ? resolve({position, delay}) : reject({position, delay});
    }, delay);
  });
};

function onSuccess({position, delay}) {
  console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
};

function onFail({position, delay}) {
  console.log(`❌ Rejected promise ${position} in ${delay}ms`);
};
form.addEventListener('submit', createPromises);
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
