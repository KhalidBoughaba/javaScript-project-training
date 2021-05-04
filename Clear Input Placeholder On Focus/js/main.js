var _input = document.createElement("input"),
    _body = document.querySelector("body");
    _body.appendChild(_input);
    att = document.createAttribute("placeholder");
    att.value = "write your name";
    _input.setAttributeNode(att);

    _input.onfocus = function(){

        if(_input.placeholder === "write your name"){

            this.placeholder = " ";
        }
    }

    _input.onblur = function(){

        if(_input.placeholder ===" "){

            this.placeholder = "write your name";
        }
    }