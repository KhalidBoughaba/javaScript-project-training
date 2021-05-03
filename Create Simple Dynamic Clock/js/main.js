function showTime(){

    "use strict";

var clock = document.querySelector("div"),

    now = new Date(),
    hour = now.getHours(),
    minute = now.getMinutes(),
    second = now.getSeconds();

    if (hour < 10) {
        hour = "0" + hour;
    }

    if(minute < 10){
        minute = '0' + minute;
    }

    if(second < 10){
        second = '0' + second;
    }

    clock.textContent = hour + ":" + minute + ":" + second;

};

window.onload = function(){

    setInterval(showTime,500);
};