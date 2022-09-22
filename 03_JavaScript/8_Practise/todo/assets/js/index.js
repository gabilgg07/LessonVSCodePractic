const check = document.querySelector("#check");
const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");
const infoTodo = document.querySelector(".info-todo");
const infoTodoMobile = document.querySelector(".info-todo-mobile");

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

    if (todoList.children.length === 0) {
      infoTodo.style.borderTopLeftRadius = "5px";
      infoTodo.style.borderTopRightRadius = "5px";
    }
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

  infoTodo.style.borderTopLeftRadius = "0px";
  infoTodo.style.borderTopRightRadius = "0px";

  this.reset();
});

const mode = document.querySelector(".mode");

mode.addEventListener("click", function (e) {
  const bgImage = document.querySelector(".bg-image");
  if (this.getAttribute("alt") === "icon-sun") {
    bgImage.style.backgroundImage = "./assets/images/bg-desktop-light.jpg";
    this.src = "./assets/icons/icon-moon.svg";
    this.setAttribute("alt", "icon-moon");
    document.body.style.backgroundColor = "#FAFAFA";
    todoForm.classList.add("light-mode");
    todoList.classList.add("light-mode");
    infoTodo.classList.add("light-mode");
    infoTodoMobile.classList.add("light-mode");
  } else {
    bgImage.style.backgroundImage = "./assets/images/bg-desktop-dark.jpg";
    this.src = "./assets/icons/icon-sun.svg";
    this.setAttribute("alt", "icon-sun");
    document.body.style.backgroundColor = "#181824";
    todoForm.classList.remove("light-mode");
    todoList.classList.remove("light-mode");
    infoTodo.classList.remove("light-mode");
    infoTodoMobile.classList.remove("light-mode");
  }
});
