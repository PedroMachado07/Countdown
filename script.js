const secondContainer = document.querySelector('#seconds');
const minutesContainer = document.querySelector('#minutes');
const hoursContainer = document.querySelector('#hours');
const daysContainer = document.querySelector('#days');


const countDownDate = new Date('July 31 2023 00:00:00');

const UpdateCountDown = () =>{
 const currentTime = new Date();
 const difference = countDownDate - currentTime;
 const days = Math.floor(difference / 1000 / 60 / 60 / 24);
 const hours = Math.floor(difference / 1000 / 60 / 60) %24;
 const minutes = Math.floor(difference / 1000 / 60) % 60;
 const seconds = Math.floor(difference / 1000) % 60;

secondContainer.textContent = seconds;
minutesContainer.textContent = minutes;
hoursContainer.textContent = hours;
daysContainer.textContent = days;
}

setInterval(UpdateCountDown, 1000 )