var first_name = document.getElementById("first-name"),
    last_name = document.getElementById("last-name"),
    _email = document.getElementById("email"),
    _phone = document.getElementById("phone"),

    first_name_live = document.getElementById("firstN"),
    last_name_live = document.getElementById("lastN"),
    email_live = document.getElementById("mail"),
    phone_live = document.getElementById("phon");

    first_name.onkeyup = function() {

        first_name_live.textContent = this.value;
    };

    last_name.onkeyup = function() {
        last_name_live.textContent = this.value;
    };

    _email.onkeyup = function() {

        email_live.textContent = this.value;
    };

    _phone.onkeyup = function() {

        phone_live.textContent = this.value;
    };
