var myElement = document.querySelector("img"),

    myImgs = [		'https://yt3.ggpht.com/-65ielaorr-U/AAAAAAAAAAI/AAAAAAAAAAA/luztBNVF4AM/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
    'https://yt3.ggpht.com/-27nlf_9BbiQ/AAAAAAAAAAI/AAAAAAAAAAA/xwNsIjmsJkQ/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
    'https://yt3.ggpht.com/-_QzYVgzCr3s/AAAAAAAAAAI/AAAAAAAAAAA/opp1JSiYLo0/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
    'https://yt3.ggpht.com/-029oa_bPhN4/AAAAAAAAAAI/AAAAAAAAAAA/n1s-r8-Kz60/s48-c-k-no-mo-rj-c0xffffff/photo.jpg'];

function changeImgs(myElement, myImgs){

    'use strict';

    setInterval(function(){

        var randomImgs = Math.floor(Math.random() * myImgs.length);

        myElement.src = myImgs[randomImgs];
    },1000)
}
changeImgs(myElement, myImgs);