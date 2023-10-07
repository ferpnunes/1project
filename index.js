const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = "1 Jan 2023";

function countdow() {
  const newYearsDate = new Date(newYears);
  const currentDate = new date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = (Math.floor(totalSeconds / 60) % 24) % 60;
  const seconds = totalSeconds % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minsEl.innerHTML = mins;
  secondsEl.innerHTML = seconds;
}

function formatTime(time) {
    return time < 10 ? (`0${time}` : time);
}

//initial cal
countdow();

setInterval(countdown, 1000);
