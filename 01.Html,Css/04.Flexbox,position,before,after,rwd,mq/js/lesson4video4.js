const scrollToTop = document.querySelector(".scrollToTop");

scrollToTop.addEventListener("click", function(e) {
    window.scrollTo({
        top: window.screenTop,
        behavior: 'smooth'
    });
});