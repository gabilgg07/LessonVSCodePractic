"use strict";

const form = document.querySelector("#todo");
const list = document.querySelector(".my-list");

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

form.addEventListener("submit", addTask);

writeList();

function addTask(e) {
  e.preventDefault();

  const inp = document.querySelector('input[name="item"]');

  const task = {
    taskText: inp.value,
    done: false,
  };

  tasks.push(task);

  saveToLocal();
  writeList();

  this.reset();
}

function saveToLocal() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function writeList() {
  const html = tasks.map((item, index) => {
    const className = item.done
      ? "list-group-item finished"
      : "list-group-item";

    return `
        <li data-index=${index} class="${className}">
            <div class="text-box">${item.taskText} </div><div class="delete-box"><i class="fa-solid fa-trash"></i></div>
        </li>
        `;
  });

  list.innerHTML = html.join("");
}

list.addEventListener("click", function (e) {
  if (e.target.classList.contains("fa-trash")) {
    const index = e.target.parentNode.parentNode.dataset.index;
    tasks.splice(index, 1);
    e.target.parentNode.parentNode.remove();
  } else {
    e.target.parentNode.classList.add("finished");
    const index = e.target.parentNode.dataset.index;
    tasks[index].done = !tasks[index].done;
  }

  saveToLocal();
  writeList();
});
