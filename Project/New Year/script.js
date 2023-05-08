let dayEl = document.querySelector(".day")
let hourEl = document.querySelector(".hour")
let minuteEl = document.querySelector(".minute")
let secondEl = document.querySelector(".seconds")

let newYearTime = new Date("Jan 1, 2024 00:00:00");

updateCountdown();


function updateCountdown() {
    let newDate = new Date()
    let totalSecond = newYearTime - newDate
  
    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;
  
    let d = Math.floor(totalSecond / day);
    let h = Math.floor((totalSecond % day) / hour);
    let m = Math.floor((totalSecond % hour) / minute);
    let s = Math.floor((totalSecond % minute) / second);
    dayEl.innerText = d;
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    setTimeout(updateCountdown, 1000)
}
















