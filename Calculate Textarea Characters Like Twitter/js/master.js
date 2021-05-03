var myTextarea = document.querySelector("textarea"),
    mySpan = document.getElementById("kk");

    myTextarea.onkeyup = function() {
        'use strict'
        mySpan.textContent = 50 - this.value.length;

        if(mySpan.textContent<0){
            mySpan.style.color="red";
        }else{
            mySpan.style.color="black";
        }
    }

