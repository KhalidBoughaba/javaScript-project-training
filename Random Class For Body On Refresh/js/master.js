var classlist = ["background-one", "background-two", "background-three", "background-four", "background-five"],

    randomKey = Math.floor(Math.random() * classlist.length);
    
    document.body.setAttribute('class', classlist[randomKey]);
