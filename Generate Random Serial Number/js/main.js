function generatePassword(){

    var password = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefgh(/&%$!*^Ç¨ñ_ijklmnopqrdtuvwxyz1234567890¿?=)-><',

        randomSerial = '',
        randomNumber,
        i = 0,
        passLength = document.querySelector("input");

    for(i; i < passLength.value; i++){

        randomNumber = Math.floor(Math.random() * password.length),
        randomSerial += password.substring(randomNumber, randomNumber + 1);
    }

    document.querySelector("div").textContent = randomSerial;

}