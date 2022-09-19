"use strict";

// function loadScript(src) {
//   const script = document.createElement("script");
//   script.src = src;

//   document.head.append(script);
// }

// loadScript("./assets/js/script.js");

// test(); // loadScript olan setirde gecikme bas vererse, bu line-da error bas verecek
// buna gore codun oxunmasinda gozlemeni teskil etmeliyik

// bu problemin helli ucun evveller callback functiondan istifade edirdik:

// function loadScript(src, callback) {
//   const script = document.createElement("script");
//   script.src = src;

//   script.onload = () => callback(null, script);
//   document.head.append(script);
// }

// loadScript("./assets/js/script.js", function () {
//   test();
// });

// function loadScript(src, callback) {
//   const script = document.createElement("script");
//   script.src = src;

//   script.onload = () => callback(null, script);
//   script.onerror = () => callback(new Error(`Script load erro for ${src}`));
//   document.head.append(script);
// }

// loadScript("./assets/js/scrip.js", function (err, script) {
//   if (err) {
//     console.log(err);
//   } else {
//     test();
//   }
// });

let promise = new Promise((resolve, reject) => {
  let sum = 2 + 1;

  if (sum == 4) {
    resolve("success bas verdi");
  } else {
    reject(new Error("Error bas verdi"));
  }
});

// console.log(promise);

promise
  .then(mes => {
    console.log(mes);
  })
  .catch(err => {
    console.log(err);
  });

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1234), 1000);
});

promise2.then(value => {
  console.log(value);
  console.log(" ");
});

let loading = false;

let promise3 = new Promise((resolve, reject) => {
  loading = true;
  setTimeout(() => reject(new Error("Error bas verdi")), 2000);
});

promise3
  .then(value => {
    console.log(value);
  })
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    loading = false;
    console.log("Finaled");
    console.log(" ");
  });

let promise4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 3000);
});

promise4.then(value => {
  console.log(value);
  return value * 2;
});
promise4.then(value => {
  console.log(value);
  return value * 2;
});
promise4.then(value => {
  console.log(value);
  console.log(" ");
  return value * 2;
});

let promise5 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 4000);
});

promise5
  .then(val => {
    console.log(val);
    return val * 2;
  })
  .then(val => {
    console.log(val);
    return val * 2;
  })
  .then(val => {
    console.log(val);
    return val * 2;
  });

const url = "https://jsonplaceholder.typicode.com/users";

const result = fetch(url)
  .then(val => val.json())
  .catch(err => console.log(err));

console.log(result);

async function getUsers() {
  const result = await fetch(url);
  const data = await result.json();

  console.log(data);

  // 1. bu usulla daa etmek olar:

  // const trs = data.map(tr => {
  //   return `<tr>
  //   <th scope="row">${tr.id}</th>
  //   <td>${tr.username}</td>
  //   <td>${tr.company.name}</td>
  //   <td>${tr.address.city}</td>
  // </tr>`;
  // });

  // $("#users").html(trs.join(""));

  // 2. bu usulla da:

  data.forEach((item, index, array) => {
    let tr = `<tr>
    <th scope="row">${item.id}</th>
    <td>${item.username}</td>
    <td>${item.company.name}</td>
    <td>${item.address.city}</td>
  </tr>`;

    $("#users").append(tr);
  });
}

getUsers();

const urlTodos = "https://jsonplaceholder.typicode.com/todos";

const listTodos = fetch(urlTodos)
  .then(res => res.json())
  .then(json => {
    json.forEach(todo => {
      if (todo.userId == 1 && !todo.completed) {
        let btn = `<button
        type="button"
        class="list-group-item list-group-item-action"
        draggable="true"
        >
        ${todo.id} - ${todo.title}
        </button>`;

        $(".todos").append(btn);
      }
    });
  });
