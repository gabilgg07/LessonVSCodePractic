let passHidden = document.getElementById("passHidden");
let passShow = document.getElementById("passShow");
let password = document.getElementById("password");

passHidden.addEventListener("click", function(e) {
    e.preventDefault();
    password.setAttribute("type", "text");
    passShow.classList.remove("display_n");
    passHidden.classList.add("display_n");
});

passShow.addEventListener("click", function(e) {
    e.preventDefault();
    password.setAttribute("type", "password");
    passHidden.classList.remove("display_n");
    passShow.classList.add("display_n");
});


let colorInput = document.getElementById("colorInput");

document.getElementById("colorDiv").style.backgroundColor = colorInput.value;

colorInput.addEventListener("change", function(e) {
    document.getElementById("colorDiv").style.backgroundColor = this.value;
});