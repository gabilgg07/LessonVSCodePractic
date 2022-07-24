const navLinks = document.querySelector(".nav-links");
const navShowToggle = document.getElementById("nav_show_toggle");
const boxIconToggle = document.querySelector(".box_icon_toggle");
const navShow = document.getElementById("nav_show");
const boxIconShow = document.querySelector(".box_icon_show");

let myTimeOut;

window.addEventListener("load", function (e) {
  myTimeOut = setTimeout(function (e) {
    navLinks.classList.add("hide");
    boxIconShow.classList.add("d-none");
  }, 3000);
});
window.addEventListener("scroll", function (e) {
  HeaderToggle();
});

window.addEventListener("mousemove", function (e) {
  HeaderToggle();
});

window.addEventListener("click", function (e) {
  HeaderToggle();
});

window.addEventListener("keypress", function (e) {
  HeaderToggle();
});

function HeaderToggle() {
  if (!boxIconToggle.classList.contains("d-none")) {
    this.clearTimeout(myTimeOut);
    if (navLinks.classList.contains("hide")) {
      navLinks.classList.remove("hide");
      boxIconShow.classList.remove("d-none");
    }
    myTimeOut = setTimeout(function (e) {
      if (!navLinks.classList.contains("hide")) {
        navLinks.classList.add("hide");
        boxIconShow.classList.add("d-none");
      }
    }, 3000);
  } else {
    this.clearTimeout(myTimeOut);
  }
}

navShowToggle.addEventListener("click", function (e) {
  if (boxIconToggle.classList.contains("d-none")) {
    navLinks.classList.remove("hide");
    boxIconToggle.classList.remove("d-none");
    boxIconShow.classList.remove("d-none");
  } else {
    navLinks.classList.remove("hide");
    boxIconToggle.classList.add("d-none");
    boxIconShow.classList.remove("d-none");
  }
});

navShow.addEventListener("click", function (e) {
  if (boxIconShow.classList.contains("d-none")) {
    navLinks.classList.remove("hide");
    boxIconShow.classList.remove("d-none");
  } else {
    navLinks.classList.add("hide");
    boxIconShow.classList.add("d-none");
  }
});

window.addEventListener("resize", function (e) {
  navLinks.classList.remove("hide");
  boxIconToggle.classList.add("d-none");
  boxIconShow.classList.remove("d-none");
  this.clearTimeout(myTimeOut);
});
