var html_start = document.getElementById("start")
var html_stop = document.getElementById("stop")
var html_resume = document.getElementById("resume")
var html_reset = document.getElementById("reset")
var html_minutes = document.getElementById("minutes")
var html_seconds = document.getElementById("seconds")
var html_milliseconds = document.getElementById("milliseconds")

var milliseconds = 0;
var seconds = 0;
var minutes = 0;

var watchInterval;


function start() {
    watchInterval = setInterval(() => {
        milliseconds++;
        if (milliseconds >= 99) {
            seconds++;
            milliseconds = 0;
        }
        if (seconds >= 59) {
            minutes++;
            seconds = 0;
        }
        html_milliseconds.innerHTML = milliseconds;
        html_seconds.innerHTML = seconds;
        html_minutes.innerHTML = minutes;
        if (seconds <= 9) {
            html_seconds.innerHTML = "0" + seconds;
        }
        if (minutes <= 9) {
            html_minutes.innerHTML = "0" + minutes;
        }
        html_stop.style.display = "inline"
        html_start.style.display = "none"
    },10);
}
function stop() {
    clearInterval(watchInterval);
    html_stop.style.display = "none"
    html_reset.style.display = "inline"
    html_resume.style.display = "inline"
}
function resume() {
    start()
    html_stop.style.display = "inline"
    html_reset.style.display = "none"
    html_resume.style.display = "none"
}
function reset() {
    clearInterval(watchInterval);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    html_milliseconds.innerHTML = "0" + milliseconds;
    html_seconds.innerHTML = "0" + seconds;
    html_minutes.innerHTML = "0" + minutes;
    html_stop.style.display = "none"
    html_reset.style.display = "none"
    html_resume.style.display = "none"
    html_start.style.display = "inline"
}


// let now = new Date();

// let time = now.getMilliseconds();
// console.log(time);