
const daysEvent =document.getElementById("days");
const hoursEvent = document.getElementById("hours");
const minutesEvent = document.getElementById("minutes");
const secondsEvent = document.getElementById("seconds");

const newYears = "1 Jan 2021";

function countDown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const totalSeconds = ( newYearsDate - currentDate) / 1000 //to change it into sec;
    const days = Math.floor((totalSeconds / 3600 / 24 )); //3600 is used to convert seconds to 60min
    const hours = Math.floor((totalSeconds / 3600) % 24) ;
    const minutes = Math.floor(totalSeconds /60) %60;
    const seconds = Math.floor(totalSeconds % 60)
    console.log(days, hours, minutes, seconds);

    daysEvent.innerHTML = days;
    hoursEvent.innerHTML = formatTime(hours);
    minutesEvent.innerHTML = formatTime(minutes);
    secondsEvent.innerHTML= formatTime(seconds);
};

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
};


countDown();

setInterval(countDown, 1000);

