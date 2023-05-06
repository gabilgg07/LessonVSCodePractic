const dropdown_elems = document.querySelectorAll(".lesson_list .dropdown");

dropdown_elems.forEach((el) => {
  el.addEventListener("click", function (e) {
    e.preventDefault();

    this.nextElementSibling.classList.toggle("d-none");
  });
});
