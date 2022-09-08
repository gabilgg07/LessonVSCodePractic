"use strict";

setTimeout(() => {
  // Form Validation
  logHeaderBig("Form Validation");

  const agreement = document.querySelector("#agreement");
  logCode("agreement", agreement);
  const btnSubmit = document.querySelector(".btn-submit");
  logCode("btnSubmit", btnSubmit);
  const for_validation = document.querySelector("#for_validation");
  logCode("for_validation", for_validation);

  const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const regexPassword =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8 ,16}$/;

  agreement.addEventListener("change", function (e) {
    if (this.checked) {
      btnSubmit.removeAttribute("disabled");
    } else {
      btnSubmit.setAttribute("disabled", "true");
    }
  });

  for_validation.addEventListener("submit", function (e) {
    e.preventDefault();
    checkInputs();
  });

  function checkInputs() {
    const email = document.querySelector("#email");
    const rep_email = document.querySelector("#rep_email");
    const password = document.querySelector("#password");
    const rep_password = document.querySelector("#rep_password");

    if (email.value == "") {
      setError(email);
    } else if (!regexEmail.test(email.value)) {
      setError(email, "Invalid email address!");
    } else {
      setSuccess(email);
    }
    if (rep_email.value == "") {
      setError(rep_email);
    } else if (email.value != rep_email.value) {
      setError(rep_email, "Emails don't match!");
    } else {
      setSuccess(rep_email);
    }
    if (password.value == "") {
      setError(password);
    } else if (!regexPassword.test(password.value)) {
      setError(password, "Invalid password!");
    } else {
      setSuccess(password);
    }
    if (rep_password.value == "") {
      setError(rep_password);
    } else if (password.value != rep_password.value) {
      setError(rep_password, "Passwords don't match!");
    } else {
      setSuccess(rep_password);
    }
  }

  function setError(inp, msg = "Can not be empty!") {
    inp.style.borderColor = "red";
    inp.nextElementSibling.classList.remove("d-none");
    inp.nextElementSibling.innerHTML = msg;
  }

  function setSuccess(inp) {
    inp.style.borderColor = "";
    inp.nextElementSibling.classList.add("d-none");
    inp.nextElementSibling.innerHtml = "";
  }

  //   Present Images

  logHeaderBig("Present Images");

  const itemBtns = document.querySelectorAll(".item-btn");
  logCode("itemBtns", itemBtns);

  let count = 0;

  itemBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      count++;
      if (count <= 2) {
        this.parentNode.previousElementSibling.children[0].classList.add(
          "active"
        );
        this.remove();
        if (count == 2) {
          itemBtns.forEach((btn) => btn.remove());
        }
      }
    });
  });
}, 100);
