function getErrorInfo() {
    const firstName = document.getElementById("fname");
    const lastName = document.getElementById("lname");
    const emailAddress = document.getElementById("email");
    const password = document.getElementById("password");

    if (!firstName.checkValidity())
        document.getElementById("fname_error").innerHTML = "First name cannot be empty";
    else
        document.getElementById("fname_error").innerHTML = "";

    if (!lastName.checkValidity())
        document.getElementById("lname_error").innerHTML = "Last name cannot be empty";
    else
        document.getElementById("lname_error").innerHTML = "";

    if (!emailAddress.checkValidity())
        document.getElementById("email_error").innerHTML = "Looks like this is not an email";
    else
        document.getElementById("email_error").innerHTML = "";

    if (!password.checkValidity())
        document.getElementById("password_error").innerHTML = "Password cannot be empty";
    else
        document.getElementById("password_error").innerHTML = "";
}

function validateForm() {
    document.addEventListener('invalid', (function () {
        return function (e) {
            e.preventDefault();
        };
    })(), true);

    document.querySelectorAll("#signup-form input").forEach(function (element) {
        element.addEventListener('blur', function () {
            getErrorInfo();
        });
    });

    document.querySelectorAll("#signup-form input").forEach(function (element) {
        element.addEventListener('blur', function () {
            // if input field passes validation remove the error class, else add it
            if (this.checkValidity()) {
                this.classList.remove('error-input');
            }
            else {
                this.classList.add('error-input');
            }
        });
    });

    /* submit event on form */
    document.querySelector("#signup-form").addEventListener('submit', function (e) {
        // if form has not passed validation 
        if (!this.checkValidity()) {
            // check validation for each input field inside the form
            // if input field is valid then remove the error class, else add it
            this.querySelectorAll("input").forEach(function (element) {
                if (element.checkValidity())
                    element.classList.remove('error-input');
                else
                    element.classList.add('error-input');
            });
            getErrorInfo();
            e.preventDefault();
        }
    });
}