function provjeriForm() {

    let username = document.getElementById("username");
    let password = document.getElementById("password");

    let checkcircle_username = document.getElementById("checkcircle1");
    let highlightoff_username = document.getElementById("highlightoff1");

    let checkcircle_password2 = document.getElementById("checkcircle2");
    let highlightoff_password2 = document.getElementById("highlightoff2");

    let formmsg = document.getElementById("form-info-username");
    let formmsg2 = document.getElementById("form-info-password");

    let trueUsername = "new_user";
    let truePassword = "123456789";

    if (username.value == "") {
        formmsg.style.display = "block";
        formmsg.innerHTML = "Please, enter username!"
        username.style.border = "1px solid red";
        highlightoff_username.style.display = "block";
    } else if (username.value != trueUsername) {
        formmsg.style.display = "block";
        formmsg.innerHTML = "Please, enter valid username!";
        username.style.border = "1px solid red";
        highlightoff_username.style.display = "block";
    } else {
        formmsg.style.display = "none";
        formmsg.innerHTML = "";
        username.style.border = "1px solid green";
        highlightoff_username.style.display = "none";
        checkcircle_username.style.display = "block";
    }

    if (password.value == "") {
        formmsg2.style.display = "block";
        formmsg2.innerHTML = "Please, enter password!"
        password.style.border = "1px solid red";
        highlightoff_password2.style.display = "block";

    } else if (password.value != truePassword) {
        formmsg2.style.display = "block";
        formmsg2.innerHTML = "Please, enter valid password!";
        password.style.border = "1px solid red";
        highlightoff_password2.style.display = "block";
    } else {
        formmsg2.style.display = "none";
        formmsg2.innerHTML = "";
        password.style.border = "1px solid green";
        highlightoff_password2.style.display = "none";
        checkcircle_password2.style.display = "block";
    }

    if (password.value == truePassword && username.value == trueUsername) {
        document.getElementById("form-info-success").style.display = "block";
        document.getElementById("form-info-success").style.color = "green";
        document.getElementById("form-info-success").innerHTML = "Successful login!";
        setTimeout(function() {
            location.reload();
        }, 1000);
    }

    function myFunction(x) {
        if (x.matches) { // If media query matches
            highlightoff_username.style.display = "none";
            checkcircle_username.style.display = "none";
            highlightoff_password2.style.display = "none";
            checkcircle_password2.style.display = "none";

        } else {

        }
    }

    var x = window.matchMedia("(max-width: 230px)")
    myFunction(x)
}
document.getElementById("submit").addEventListener("click", provjeriForm);