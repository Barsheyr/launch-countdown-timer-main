function Time() {

    var d = new Date();
    var days = d.getDay();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();



    document.getElementById("days").innerHTML = days,
        document.getElementById("hours").innerHTML = hours,
        document.getElementById("minutes").innerHTML = minutes,
        document.getElementById("seconds").innerHTML = seconds;
}
setInterval(Time, 1000);