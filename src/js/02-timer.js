import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const input = document.querySelector('input');
const start = document.querySelector('button[data-start]');
const textDays = document.querySelector('span[data-days');
const textHours = document.querySelector('span[data-hours');
const textMinutes = document.querySelector('span[data-minutes]');
const textSeconds = document.querySelector('span[data-seconds]');
const timer = document.querySelectorAll('.value');
const date = new Date();
const miliseconds = date.getTime();

start.disabled = true;

flatpickr(input, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < miliseconds) {
      window.alert('Please choose a date in the future');
    } else {
      start.disabled = false;
      start.addEventListener('click', () => {
        let timerId = setInterval(() => {
          let ms = selectedDates[0] - new Date();
          function convertMs(ms) {
            const second = 1000;
            const minute = second * 60;
            const hour = minute * 60;
            const day = hour * 24;

            const days = Math.floor(ms / day);
            const hours = Math.floor((ms % day) / hour);
            const minutes = Math.floor(((ms % day) % hour) / minute);
            const seconds = Math.floor((((ms % day) % hour) % minute) / second);

            return { days, hours, minutes, seconds };
          }
          textDays.textContent = convertMs(ms).days;
          textHours.textContent = convertMs(ms).hours;
          textMinutes.textContent = convertMs(ms).minutes;
          textSeconds.textContent = convertMs(ms).seconds;

          timer.forEach(function (e, i) {
            if (e.textContent.length < 2) {
              e.textContent = e.textContent.padStart(2, '0');
            }
          });

          if (ms < 1000) {
            clearInterval(timerId);
          }
        }, 1000);
      });
    }
  },
});
