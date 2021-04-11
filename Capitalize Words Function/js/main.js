/*var input = document.getElementById("inpt"),
    //btn = document.querySelector("button"),
    result = document.getElementById("result");

    function wordUpperCase(){
        var text = input.value.split(" "),
            newText = [];

        for(var i = 0; i < text.length; i++){

            newText.push(text[i].charAt(0).toUpperCase() + text[i].slice(1));
            result.innerHTML = newText.join(" ");
        }
        return newText;
    }*/

    function wordsUpperCase(string){
        var oldText = string.split(" "),
            newText = [];
        for(i=0; i<oldText.length; i++){

            newText.push(oldText[i].charAt(0).toUpperCase() + oldText[i].slice(1));
        }    
        return newText.join(" ");
    }
    console.log(wordsUpperCase("khalid boughaba study in solicode"));
