const check = document.querySelector("#check");
const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");
const infoTodo = document.querySelector(".info-todo");
const leftedCounts = document.querySelector(".lefted-count");
const infoTodoMobile = document.querySelector(".info-todo-mobile");

// ========== to Resert Local Storage ==========
// localStorage.dataId = 1;
// localStorage.arrTodoes = JSON.stringify([]);
// =============================================

let dataId = localStorage.dataId;
let leftedCount = 0;

let arrTodoes = JSON.parse(localStorage.arrTodoes);
if (arrTodoes.length > 0) {
  arrTodoes.forEach(todo => {
    addTodo(todo.id, todo.isCompleted, todo.text);
  });
}

arrTodoes.forEach(todo => {
  if (todo.isCompleted === true) {
    leftedCount++;
  }
});

setLefted(leftedCount);

// --------- Check Click---------

check.addEventListener("click", function (e) {
  this.classList.toggle("active");
  this.children[0].children[0].classList.toggle("d-none");
});

// --------- Form Submit ---------

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (todoInput.value === "") {
    alert("Input can not be empty!");
    return;
  }

  const isCompleted = check.classList.contains("active");

  addTodo(dataId, isCompleted, todoInput.value);

  if (isCompleted) {
    leftedCount++;
    setLefted(leftedCount);
  }

  let newTodoObj = {
    id: dataId,
    text: todoInput.value,
    isCompleted: isCompleted,
  };

  dataId++;
  localStorage.dataId = dataId;

  arrTodoes.push(newTodoObj);
  localStorage.arrTodoes = JSON.stringify(arrTodoes);

  this.reset();
});

// -------------------------------

const mode = document.querySelector(".mode");

// --------- Mode Click ---------

mode.addEventListener("click", function (e) {
  const bgImage = document.querySelector(".bg-image");
  if (this.getAttribute("alt") === "icon-sun") {
    bgImage.style.backgroundImage = "url(./assets/images/bg-desktop-light.jpg)";
    this.src = "./assets/icons/icon-moon.svg";
    this.setAttribute("alt", "icon-moon");
    document.body.style.backgroundColor = "#FAFAFA";
    todoForm.classList.add("light-mode");
    todoList.classList.add("light-mode");
    infoTodo.classList.add("light-mode");
    infoTodoMobile.classList.add("light-mode");
  } else {
    bgImage.style.backgroundImage = "url(./assets/images/bg-desktop-dark.jpg)";
    this.src = "./assets/icons/icon-sun.svg";
    this.setAttribute("alt", "icon-sun");
    document.body.style.backgroundColor = "#181824";
    todoForm.classList.remove("light-mode");
    todoList.classList.remove("light-mode");
    infoTodo.classList.remove("light-mode");
    infoTodoMobile.classList.remove("light-mode");
  }
});

// ------------------------------

const infoLists = document.querySelectorAll(".info-list li");

// --------- Info List Click ---------

infoLists.forEach(li => {
  li.addEventListener("click", function (e) {
    infoLists.forEach(li => li.classList.remove("active"));

    const sameLists = document.querySelectorAll("." + this.className);

    sameLists.forEach(li => li.classList.add("active"));

    if (this.classList.contains("all-list")) {
      if (arrTodoes.length > 0) {
        todoList.innerHTML = "";
        arrTodoes.forEach(todo => {
          addTodo(todo.id, todo.isCompleted, todo.text);
        });
      }
    } else if (this.classList.contains("active-list")) {
      if (arrTodoes.length > 0) {
        let actives = arrTodoes.filter(todo => !todo.isCompleted);
        todoList.innerHTML = "";
        if (actives.length > 0) {
          actives.forEach(todo => {
            addTodo(todo.id, todo.isCompleted, todo.text);
          });
        } else {
          infoTodo.style.borderTopLeftRadius = "5px";
          infoTodo.style.borderTopRightRadius = "5px";
        }
      }
    } else if (this.classList.contains("completed-list")) {
      if (arrTodoes.length > 0) {
        let completes = arrTodoes.filter(todo => todo.isCompleted);
        todoList.innerHTML = "";
        if (completes.length > 0) {
          completes.forEach(todo => {
            addTodo(todo.id, todo.isCompleted, todo.text);
          });
        } else {
          infoTodo.style.borderTopLeftRadius = "5px";
          infoTodo.style.borderTopRightRadius = "5px";
        }
      }
    }
  });
});

// infoLists.forEach(infiList => {
//   const lists = Array.from(infiList.children);
//   lists.forEach(li => {
//     li.addEventListener("click", function (e) {
//       lists.forEach(li => li.classList.remove("active"));
//       const sameLists = document.querySelectorAll("." + this.className);
//       sameLists.forEach(li => li.classList.add("active"));
//     });
//   });
// });

// -----------------------------------

const clearCompleted = document.querySelector(".clear-completed");

// --------- Clear Completed Click ---------

clearCompleted.addEventListener("click", function (e) {
  if (arrTodoes.length > 0) {
    let arrIds = [];
    arrTodoes.forEach(todo => {
      if (todo.isCompleted) {
        arrIds.push(todo.id);
      }
    });
    if (arrIds.length > 0) {
      arrIds.forEach(id => {
        removeTodo(id);
        leftedCount--;
      });
    }
    setLefted(leftedCount);
  }
  todoList.innerHTML = "";
  arrTodoes.forEach(todo => {
    addTodo(todo.id, todo.isCompleted, todo.text);
  });
});

// -----------------------------------

// ========= Functions =========

// --------- Add Todo ---------

function addTodo(id, isCompleted, text) {
  const li = document.createElement("li");
  li.className = `list-item${isCompleted ? " active" : ""}`;
  li.setAttribute("data-id", id);

  const checkBox = document.createElement("div");
  checkBox.className = `check-box${isCompleted ? " active" : ""}`;

  const innerBox = document.createElement("div");
  innerBox.className = "inner-box";

  const checkIcon = document.createElement("img");
  checkIcon.className = isCompleted ? "" : "d-none";
  checkIcon.src = "./assets/icons/icon-check.svg";
  checkIcon.setAttribute("alt", "icon-check");

  innerBox.append(checkIcon);

  checkBox.append(innerBox);

  checkBox.addEventListener("click", function (e) {
    this.classList.toggle("active");
    this.children[0].children[0].classList.toggle("d-none");
    this.parentElement.classList.toggle("active");

    let id = +this.parentElement.getAttribute("data-id");

    changeStatus(id, this.classList.contains("active"));

    if (this.classList.contains("active")) {
      leftedCount++;
    } else if (leftedCount > 0) {
      leftedCount--;
    }
    setLefted(leftedCount);
  });

  li.append(checkBox);

  li.append(text);

  const delBox = document.createElement("div");
  delBox.className = "icon-delete";

  const delIcon = document.createElement("img");
  delIcon.src = "./assets/icons/icon-cross.svg";
  delIcon.setAttribute("alt", "icon-cross");

  delBox.append(delIcon);

  delBox.addEventListener("click", function (e) {
    if (this.parentElement.classList.contains("active")) {
      leftedCount--;
      setLefted(leftedCount);
    }

    let id = +this.parentElement.getAttribute("data-id");

    removeTodo(id);

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

      let id = +this.getAttribute("data-id");

      changeStatus(id, this.classList.contains("active"));

      if (this.classList.contains("active")) {
        leftedCount++;
      } else if (leftedCount > 0) {
        leftedCount--;
      }
      setLefted(leftedCount);
    }
  });

  todoList.append(li);

  check.classList.remove("active");
  check.children[0].children[0].classList.add("d-none");

  infoTodo.style.borderTopLeftRadius = "0px";
  infoTodo.style.borderTopRightRadius = "0px";
}

// --------- Change Status ---------

function changeStatus(id, isComp) {
  arrTodoes.forEach((todo, i) => {
    if (todo.id == id) {
      arrTodoes[i].isCompleted = isComp;
    }
  });

  localStorage.arrTodoes = JSON.stringify(arrTodoes);
}

// --------- Remove Todo ---------

function removeTodo(id) {
  let index = -1;
  arrTodoes.forEach((todo, i) => {
    if (todo.id == id) {
      index = i;
    }
  });
  if (index != -1) {
    arrTodoes.splice(index, 1);
  }

  localStorage.arrTodoes = JSON.stringify(arrTodoes);
}

// --------- Set Lefted Count ---------

function setLefted(count) {
  leftedCounts.innerHTML = `${count} items left`;
}
