var myInput = document.getElementById("inpt"),
    mybutton = document.getElementById("btn");

    mybutton.onclick = function(){

        if(this.textContent==="Show"){
            myInput.setAttribute("type","text");
            this.textContent="Hide";
        }
        else{
            myInput.setAttribute("type","password");
            this.textContent = "Show";
        }
    }