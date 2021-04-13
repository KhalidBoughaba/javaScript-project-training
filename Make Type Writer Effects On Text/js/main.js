var myText = "Hello Solicode This is type Writer Effects on Text",

    i = 0 ;
function Effects(){

    var typeWriter = setInterval(function(){

        document.getElementById("text").textContent += myText[i];

        i++;

        if(i > myText.length - 1){
            clearInterval(typeWriter);
        }


    },100);
}