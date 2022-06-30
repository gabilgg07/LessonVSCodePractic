const navLinks = document.querySelector(".nav-links");

let myTimeOut;

window.addEventListener("load", function(e) {
    this.setTimeout(function(e) {
        navLinks.classList.add("hide");
    }, 3000);

});
window.addEventListener("scroll", function(e) {
    this.clearTimeout(myTimeOut);
    if (navLinks.classList.contains("hide")) {
        navLinks.classList.remove("hide");
    }
    myTimeOut = setTimeout(function(e) {
        if (!navLinks.classList.contains("hide")) {
            navLinks.classList.add("hide");
        }
    }, 3000);
});

window.addEventListener("mousemove", function(e) {
    this.clearTimeout(myTimeOut);
    if (navLinks.classList.contains("hide")) {
        navLinks.classList.remove("hide");
    }
    myTimeOut = setTimeout(function(e) {
        if (!navLinks.classList.contains("hide")) {
            navLinks.classList.add("hide");
        }
    }, 3000);
});