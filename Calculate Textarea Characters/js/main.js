var _count = document.getElementById("count"),
    _textarea = document.getElementById("text"),
    _maxlength = _textarea.getAttribute("maxlength");

    _textarea.oninput = function(){
        _count.innerHTML = _maxlength - this.value.length;
        if(_count.innerHTML == 0){
            _count.classList.add("zero");
        }
        else{
            _count.classList.remove("zero")
        }
    };

    _textarea.onfocus = function() {

        // store Placeholder Attr In Backup Attr
        this.setAttribute("data-text",this.getAttribute("placeholder"));

        //Empty Placeholder Attribute
        this.setAttribute("placeholder"," ");
    }
    
    _textarea.onblur = function() {

        //Get Placeholder Attr From Backup Attribute
        this.setAttribute("placeholder", this.getAttribute("data-text"));

        //Empty Backup Attribute
        this.setAttribute("data-text", " ");
    }
