let session = new Session();
session = session.getSession();

if (session !== "") {
    window.location.href = "hexa.html"
}

document.querySelector("#registration").addEventListener("click", () => {
    document.querySelector(".custom-modal").style.display = "block";
});

document.querySelector("#closeModal").addEventListener("click", () => {
    document.querySelector(".custom-modal").style.display = "none";
});

let config = {

    "user-name": {
        required: true,
        minLength: 5,
        maxLength: 50
    },

    "email": {
        required: true,
        email: true,
        minLength: 5,
        maxLength: 50
    },

    "password": {
        required: true,
        minLength: 7,
        maxLength: 25,
        matching: "retype-password"
    },

    "retype-password": {
        required: true,
        minLength: 7,
        maxLength: 25,
        matching: "password"
    }
}

let validator = new Validator(config, "#registrationModal");

document.querySelector("#registrationModal").addEventListener("submit", (e) => {
    e.preventDefault();

    if (validator.validationPassed()) {
       
        let user = new User();
        user.username = document.querySelector("#user-name").value;        
        user.email = document.querySelector("#email").value;        
        user.password = document.querySelector("#password").value;        
        user.create()
        
    }else{
        alert("nije ok");
    }
});

document.querySelector("#loginForm").addEventListener("submit", e => {
    e.preventDefault();

    let email = document.querySelector("#login_email").value;
    let password = document.querySelector("#login_password").value;

    let user = new User();
    user.email = email;
    user.password = password;

    user.login();
})