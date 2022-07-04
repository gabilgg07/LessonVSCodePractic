let maxWidth575 = window.matchMedia("screen and (max-width:575px)");
let maxWidth767 = window.matchMedia("screen and (max-width:767px)");
let maxWidth991 = window.matchMedia("screen and (max-width:991px)");
let maxWidth1199 = window.matchMedia("screen and (max-width:1199px)");
let minWidth1200 = window.matchMedia("screen and (min-width:1200px)");

let flexItems = document.querySelectorAll(".flex-items p");

// maxWidth575.addListener(function(e) {
//     console.log("Width under the 576px.")
// });

// if (maxWidth575.matches) {
//     console.log("Width under the 576px");
// }

colName();

window.addEventListener('resize', function(e) {
    colName();

    navLinks.classList.remove("hide");
    boxIconToggle.classList.add("d-none");
    boxIconShow.classList.remove("d-none");
    this.clearTimeout(myTimeOut);
});

function colName() {
    if (maxWidth575.matches) {
        flexItems.forEach(p => {
            p.innerText = "col-12";
        });
    } else if (maxWidth767.matches) {
        flexItems.forEach(p => {
            p.innerText = "col-sm-6";
        });
    } else if (maxWidth991.matches) {
        flexItems.forEach(p => {
            p.innerText = "col-md-5";
        });
    } else if (maxWidth1199.matches) {
        flexItems.forEach(p => {
            p.innerText = "col-lg-4";
        });
    } else if (minWidth1200.matches) {
        flexItems.forEach(p => {
            p.innerText = "col-xl-3";
        });
    }
}