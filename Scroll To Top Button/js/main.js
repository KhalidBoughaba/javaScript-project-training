var myButton = document.getElementById("go");

window.onscroll = function(){

    if(pageYOffset>=400){

        myButton.style.display="block";
    }
    else{
        myButton.style.display="none";
    }
};

myButton.onclick = function(){

    window.scrollTo(0,0);
};

