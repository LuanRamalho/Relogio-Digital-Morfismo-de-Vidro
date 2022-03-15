var time = document.getElementById("time");
var day = document.getElementById("day");
var midday = document.getElementById("midday");

var clock = setInterval(
    function calcTime(){
        var date_now = new Date();
        var hr = date_now.getHours();
        var min = date_now.getMinutes();
        var sec = date_now.getSeconds();

        var days = ["Domingo","Segunda-Feira","Terca-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sabado"];
        
        day.textContent = days[date_now.getDay()];

        hr = (hr < 10) ? "0" + hr : hr;
        min = (min < 10) ? "0" + min : min;
        sec = (sec < 10) ? "0" + sec : sec;

        time.textContent = hr + ":" + min + ":" + sec;
        midday.textContent = middayValue;
    },
    1000
);