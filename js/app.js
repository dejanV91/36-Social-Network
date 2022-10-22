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
        alert("ok")
    }else{
        alert("nije ok");
    }
});