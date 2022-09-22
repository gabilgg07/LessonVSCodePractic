const check = document.querySelector("#check");
const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");

check.addEventListener("click", function (e) {
  this.classList.toggle("active");
  this.children[0].children[0].classList.toggle("d-none");
});

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (todoInput.value === "") {
    alert("Input can not be empty!");
    return;
  }

  let hasActive = check.classList.contains("active");

  const li = document.createElement("li");
  li.className = `list-item${hasActive ? " active" : ""}`;
  const checkBox = document.createElement("div");
  checkBox.className = `check-box${hasActive ? " active" : ""}`;
  const innerBox = document.createElement("div");
  innerBox.className = "inner-box";
  const checkIcon = document.createElement("img");
  checkIcon.className = hasActive ? "" : "d-none";
  checkIcon.src = "./assets/icons/icon-check.svg";
  checkIcon.setAttribute("alt", "icon-check");

  innerBox.append(checkIcon);
  checkBox.append(innerBox);

  checkBox.addEventListener("click", function (e) {
    this.classList.toggle("active");
    this.children[0].children[0].classList.toggle("d-none");
    this.parentElement.classList.toggle("active");
  });
  li.append(checkBox);

  li.append(todoInput.value);

  const delBox = document.createElement("div");
  delBox.className = "icon-delete";
  const delIcon = document.createElement("img");
  delIcon.src = "./assets/icons/icon-cross.svg";
  delIcon.setAttribute("alt", "icon-cross");

  delBox.append(delIcon);

  delBox.addEventListener("click", function (e) {
    this.parentElement.remove();
  });

  li.append(delBox);

  li.addEventListener("click", function (e) {
    if (e.target == this) {
      this.classList.toggle("active");
      this.children[0].classList.toggle("active");
      this.children[0].children[0].children[0].classList.toggle("d-none");
    }
  });

  todoList.append(li);
  check.classList.remove("active");
  check.children[0].children[0].classList.add("d-none");

  this.reset();
});

// todoList.addEventListener("click", function (e) {
//   console.log(e.target);
// });

const mode = document.querySelector(".mode");

mode.addEventListener("click", function (e) {
  const bgImage = document.querySelector(".bg-image");
  const checkBoxes = document.querySelectorAll(".check-box");
  if (this.getAttribute("alt") === "icon-sun") {
    bgImage.children[0].src = "./assets/images/bg-desktop-light.jpg";
    bgImage.children[0].setAttribute("alt", "bg-desktop-light");
    this.src = "./assets/icons/icon-moon.svg";
    this.setAttribute("alt", "icon-moon");
    document.body.style.backgroundColor = "#FAFAFA";
    todoForm.classList.add("light-mode");
    todoList.classList.add("light-mode");
  } else {
    bgImage.children[0].src = "./assets/images/bg-desktop-dark.jpg";
    bgImage.children[0].setAttribute("alt", "bg-desktop-dark");
    this.src = "./assets/icons/icon-sun.svg";
    this.setAttribute("alt", "icon-sun");
    document.body.style.backgroundColor = "#181824";
    todoForm.classList.remove("light-mode");
    todoList.classList.remove("light-mode");
  }
});
