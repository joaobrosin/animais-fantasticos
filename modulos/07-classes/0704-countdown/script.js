import Countdown from "./countdown.js";

const tempoParaONatal = new Countdown('24 December 2021 23:59:59 GMT-0300');
const tempoParaOAnoNovo = new Countdown('3 Septermber 2021 00:00:00 GMT-0300');

// console.log(tempoParaONatal.days);
// console.log(tempoParaONatal.hours);
// console.log(tempoParaONatal.minutes);
// console.log(tempoParaONatal.seconds);

const countdownDays = document.querySelector(".countdownDays");
const countdownHours = document.querySelector(".countdownHours");
const countdownMinutes = document.querySelector(".countdownMinutes");
const countdownSeconds = document.querySelector(".countdownSeconds");

setInterval(() => {
  countdownDays.innerText = tempoParaOAnoNovo.total.days;
  countdownHours.innerText = tempoParaOAnoNovo.total.hours;
  countdownMinutes.innerText = tempoParaOAnoNovo.total.minutes;
  countdownSeconds.innerText = tempoParaOAnoNovo.total.seconds;
}, 1000)
