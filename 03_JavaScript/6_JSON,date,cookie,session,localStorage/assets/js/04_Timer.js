"use strict";

const timers = document.querySelectorAll(".timer-info");
let beginCountdown = setInterval(() => {
  console.log("beginCountdown started");
}, 1000);

function setCountdown(deadline = new Date(2021, 12, 15, 18)) {
  const currentDate = new Date();

  const diff = deadline - currentDate;

  if (diff < 1000) {
    // h4Day.innerText = 0;
    // h4Hour.innerText = 0;
    // h4Min.innerText = 0;
    // h4Sec.innerText = 0;

    // return; => bu da isleyir

    timers.forEach((h4) => {
      h4.innerHTML = "00";
    });
    clearInterval(beginCountdown);
    return;
  }

  const msOnDay = 1000 * 60 * 60 * 24;
  const msOnHour = 1000 * 60 * 60;
  const msOnMinute = 1000 * 60;
  const msOnSec = 1000;

  const days = Math.floor(diff / msOnDay);
  const hours = Math.floor((diff % msOnDay) / msOnHour);
  const minutes = Math.floor((diff % msOnHour) / msOnMinute);
  const seconds = Math.floor((diff % msOnMinute) / msOnSec);

  const values = [days, hours, minutes, seconds];

  timers.forEach((h4, index) => {
    h4.innerHTML = values[index];
  });
}
setCountdown();
beginCountdown = setInterval(() => {
  setCountdown();
}, 1000);

const counttime = document.querySelector("#counttime");

counttime.addEventListener("change", function (e) {
  const newSetDate = Date.parse(this.value);
  const now = new Date();
  const diffTime = newSetDate - now;

  if (diffTime < 0) {
    alert("Please, take future time.");
  } else {
    clearInterval(beginCountdown);

    let randomClr = randomColor() + "80";
    timers.forEach((h4) => (h4.style.backgroundColor = randomClr));

    setCountdown(newSetDate);

    beginCountdown = setInterval(() => {
      setCountdown(newSetDate);
    }, 1000);
  }
});
