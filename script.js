
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const date = new Date()

const currentDay = document.getElementById("currentDayOfTheWeek");
const hour = document.getElementById("hours");
const minute = document.getElementById("minutes");
const second = document.getElementById("seconds")
const millisecond = document.getElementById("milliseconds")

function myDate(){
    
    
    hour.innerText = new Date().getHours()
    minute.innerText = new Date().getMinutes()
    second.innerText = new Date().getSeconds()
    millisecond.innerText = new Date().getMilliseconds()
    
    setInterval(()=>{
        myDate()
    }, 100)
    return date
}

currentDay.innerText = days[date.getDay()];
myDate();