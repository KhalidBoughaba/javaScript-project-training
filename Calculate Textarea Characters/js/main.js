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