const check = document.querySelector("#check");
const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");

check.addEventListener("click", function (e) {
  this.classList.toggle("active");
  this.children[0].classList.toggle("d-none");
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
  const checkIcon = document.createElement("img");
  checkIcon.className = hasActive ? "" : "d-none";
  checkIcon.src = "./assets/icons/icon-check.svg";
  checkIcon.setAttribute("alt", "icon-check");

  checkBox.append(checkIcon);

  checkBox.addEventListener("click", function (e) {
    this.classList.toggle("active");
    this.children[0].classList.toggle("d-none");
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
      this.children[0].children[0].classList.toggle("d-none");
    }
  });

  todoList.append(li);
  check.classList.remove("active");
  check.children[0].classList.add("d-none");

  this.reset();
});

// todoList.addEventListener("click", function (e) {
//   console.log(e.target);
// });

function checked() {}

const checkBoxes = document.querySelectorAll(".todo-list .check-box");
