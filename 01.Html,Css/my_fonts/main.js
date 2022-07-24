let alphabet = document.querySelectorAll("#alphabet li a");

alphabet.forEach((a) => {
  a.addEventListener("click", function (e) {
    e.preventDefault();
    let dataId = this.getAttribute("data-id");
    console.log(dataId);
    let scrollA = document.querySelector(dataId);
    if (scrollA) {
      window.scrollTo({
        top: scrollA.offsetTop,
        behavior: "smooth",
      });
    } else {
      alert(`Not found font began ${dataId[1]} alphabet.`);
    }
  });
});

let fonts = document.querySelectorAll(".box p");

fonts.forEach((f) => {
  f.addEventListener("click", function (e) {
    let elem = document.querySelector(`.${this.classList}`);
    let style = window.getComputedStyle(elem);
    let copyText = `font-family:${style.fontFamily};
font-weight:${style.fontWeight};
font-style:${style.fontStyle};`;
    let copyTextHtml = `font-family:${style.fontFamily}; <br>
    font-weight:${style.fontWeight}; <br>
    font-style:${style.fontStyle};`;

    navigator.clipboard.writeText(copyText).then(
      (success) => {
        let sectionStyle = document.querySelector("#style p.style_copy");
        sectionStyle.classList.remove("d-none");
        sectionStyle.innerHTML = copyTextHtml;
        sectionStyle.style.fontFamily = style.fontFamily;
        sectionStyle.style.fontWeight = style.fontWeight;
        sectionStyle.style.fontStyle = style.fontStyle;
      },
      (err) => console.log("error copying text")
    );
  });
});
