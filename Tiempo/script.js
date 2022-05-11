var secondsArrow = document.querySelector("#seconds");
var minutesArrow = document.querySelector("#minutes");
var hourArrow = document.querySelector("#hour");

function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
    new Date().getMinutes() * 60 + 
    new Date().getHours() * 3600;
}

setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    console.log(time);
    var seconds = (time-30) % 60;
    var minutes = (time-1800) % 3600;
    var hour = (time-21600) % 43200;
    secondsArrow.style.transform = "rotate(" + (seconds/60)*360 + "deg)";
    minutesArrow.style.transform = "rotate(" + (minutes/3600)*360 + "deg)";
    hourArrow.style.transform = "rotate(" + (hour/43200)*360 + "deg)";

}, 1000);