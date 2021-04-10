// add default local Storage class on body
document.body.classList.add(localStorage.getItem("changecolor") || "black"); // || class black > in default if no localstorage found
var elements = document.querySelectorAll('.color-switcher li');
var classeslist = [];

for(var i=0; i<elements.length; i++){
	classeslist.push(elements[i].getAttribute('data-color'));

	elements[i].addEventListener("click",function(){

    //Remove Old classes
		document.body.classList.remove(...classeslist);   //...classeslist( go to coure ES6 [course name is splet operatore] )
    //Add current class from li data Attribute
		document.body.classList.add(this.getAttribute('data-color'));
    //Add data to local Storage
		localStorage.setItem("changecolor",this.getAttribute('data-color'));
	},false); // false > to deal with click only
}