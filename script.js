const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

const clock = setInterval(function time() {
    let dateToday = new Date()
    let hr = dateToday.getHours()
    let mm = dateToday.getMinutes()
    let ss = dateToday.getSeconds()

    if (hr < 10) hr = ('0') + hr

    if (mm < 10) mm = ('0') + mm

    if (ss < 10) ss = ('0') + ss

    hours.textContent = hr
    minutes.textContent = mm
    seconds.textContent = ss
})