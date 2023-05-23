const formOpenBtn = document.querySelector("#form-open"),
home = document.querySelector(".home"),
formContainer = document.querySelector(".form-container"),
formCloseBtn = document.querySelector(".form-close"),
signupBtn = document.querySelector("#signup"),
loginBtn = document.querySelector("#login"),
pwShowHide = document.querySelectorAll(".pw_hide"),
blure = document.querySelector("#form-open"),
body = document.querySelector("body");

formOpenBtn.addEventListener("click", () => formContainer.classList.add("show"));
formCloseBtn.addEventListener("click", () => formContainer.classList.remove("show"));

blure.addEventListener("click", () => body.add("blure"));


pwShowHide.forEach((icon) => {
    icon.addEventListener("click", () => {
        let getPwInput = icon.parentElement.querySelector("input");
        if(getPwInput.type === "password")
        {
            getPwInput.type = "text";
            icon.classList.replace("fa-eye-slash", "fa-eye");
        }else
        {
            getPwInput = "password";
            icon.classList.replace("fa-eye", "fa-eye-slash");
        }
    });
    
});

signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
});
