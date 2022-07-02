let alphabet = document.querySelectorAll("#alphabet li a");

console.log(alphabet);

alphabet.forEach(a => {
    a.addEventListener("click", function(e) {
        e.preventDefault();
        let dataId = this.getAttribute("data-id");
        console.log(dataId);
        let scrollA = document.querySelector(dataId);
        if (scrollA) {
            window.scrollTo({
                top: scrollA.offsetTop,
                behavior: 'smooth',
            })
        } else {
            alert(`Not found font began ${dataId[1]} alphabet.`)
        }
    })
})