const endTime = new Date('2020/09/30 00:00:00').getTime();

const daysNumber = document.querySelector('.days p span.time-number');
const hoursNumber = document.querySelector('.hours p span.time-number');
const minutesNumber = document.querySelector('.minutes p span.time-number');
const secondsNumber = document.querySelector('.seconds p span.time-number');

setInterval(() => {
    const nowTime = new Date().getTime();
    const time = endTime - nowTime;
    let days = Math.floor((endTime / (1000 * 60 * 60 * 24)) - (nowTime / (1000 * 60 * 60 * 24)));
    days = days < 10 ? `0${days}` : days;
    let hours = Math.floor((endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24);
    hours = hours < 10 ? `0${hours}` : hours;
    let minutes = Math.floor((endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60);
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    let seconds = Math.floor((endTime / 1000 - nowTime / 1000) % 60);
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    daysNumber.textContent = days;
    hoursNumber.textContent = hours;
    minutesNumber.textContent = minutes;
    secondsNumber.textContent = seconds;
}, 1000)