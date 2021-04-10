var input = document.getElementById("inpt"),
    btn = document.querySelector("button"),
    result = document.getElementById("result");

    function wordUpperCase(){
        var text = input.value.split(" "),
            newText = [];

        for(var i = 0; i < text.length; i++){

            newText.push(text[i].charAt(0).toUpperCase() + text[i].slice(1));
            //result.innerHTML = newText.join(" ");
            console.log(newText)
        }
        //return newText;
    }

