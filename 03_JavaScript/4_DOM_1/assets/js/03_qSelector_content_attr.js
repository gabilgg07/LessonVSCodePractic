"use strict";

// 2. querySelector - css selectors

// 2.1. .querySelector("css selector") -> bu selectora uygun ilk taptigi elementi qaytarir:
console.log("===== querySelector =====");
console.log(" ");
const examplePElement = document.querySelector(".example p");
console.log(
  `const examplePElement = document.querySelector(".example p"); => `
);
console.log(examplePElement);
console.log(" ");

// 2.2. .querySelectorAll("css selector") -> bu selectora uygun taptigi butun elementleri NodeList seklinde(array kimi) qaytarir:

console.log("===== querySelectorAll =====");
console.log(" ");
const examplePElements = document.querySelectorAll(".example p");
console.log(
  `const examplePElements = document.querySelectorAll(".example p"); => `
);
console.log(examplePElements);
console.log(" ");

// css selectora oxsuyur deye, en cox querySelector-dan isifade edilir.

// elem.closest("css selector") -> elem-in parentlerinde verilmis selector olan en yaxinini qaytarir:

console.log("===== closest =====");
console.log(" ");
let span = document.querySelector("span");
console.log(`let span = document.querySelector("span");`);
let elemClosest = span.closest(".example");
console.log(`let elemClosest = span.closest(".example");`);
console.log("elemClosest: ");
console.log(elemClosest);
console.log(" ");

// elem.matches("css selector") -> elem-in icinde verilmis selector da varmi deye yoxlayir ve bize true/false qaytarir:

console.log("===== matches =====");
console.log(" ");
let example = document.querySelector(".example");
console.log(`let example = document.querySelector(".example");`);
console.log("example: ");
console.log(example);
console.log(" ");
let hasSelector = example.matches(".wrapper");
console.log(`let hasSelector = example.matches(".wrapper");`);
console.log("hasSelector:");
console.log(hasSelector);
console.log(" ");

// CONTENT

console.log("===== CONTENT =====");
console.log(" ");
console.log("----- innerText/innerHTML -----");
console.log(" ");
let for_innerText_read = document.querySelector(".for_innerText_read");
console.log(
  `let for_innerText_read = document.querySelector(".for_innerText_read");`
);
console.log(" ");

let for_innerHTML_read = document.querySelector(".for_innerHTML_read");
console.log(
  `let for_innerHTML_read = document.querySelector(".for_innerHTML_read");`
);
console.log(" ");

// Eger biz element-in content-ini read(get) etmek istiyirikse:
console.log("for_innerText_read.innerText: ");
console.log(for_innerText_read.innerText, "innerText");
console.log(" ");
// ve ya:
console.log("for_innerHTML_read.innerHTML: ");
console.log(for_innerHTML_read.innerHTML, "innerHTML");
console.log(" ");

// -----------------------
console.log("------------------------");
console.log(" ");

let for_innerText_modified = document.querySelector(".for_innerText_modified");
console.log(
  `let for_innerText_modified = document.querySelector(".for_innerText_modified");`
);
console.log(" ");

let for_innerHTML_modified = document.querySelector(".for_innerHTML_modified");
console.log(
  `let for_innerHTML_modified = document.querySelector(".for_innerHTML_modified");`
);
console.log(" ");

// Eger biz contenti deyismek(set etmek) isteyirikse, = (beraberlik) operatoru ile menimsedirik:
for_innerText_modified.innerText = "Modified content with innerText";
console.log(
  `for_innerText_modified.innerText = "Modified content with innerText";`
);
console.log("for_innerText_modified.innerText: ");
console.log(for_innerText_modified.innerText);
console.log(" ");
// ve ya:
for_innerHTML_modified.innerHTML = "Modified content with innerHTML";
console.log(
  `for_innerHTML_modified.innerHTML = "Modified content with innerHTML";`
);
console.log("for_innerHTML_modified.innerHTML: ");
console.log(for_innerHTML_modified.innerHTML);
console.log(" ");
// -----------------------
console.log("------------------------");
console.log(" ");

let for_innerText_modified_with_elem = document.querySelector(
  ".for_innerText_modified_with_elem"
);
console.log(
  `let for_innerText_modified_with_elem = document.querySelector(".for_innerText_modified_with_elem");`
);
console.log(" ");

let for_innerHTML_modified_with_elem = document.querySelector(
  ".for_innerHTML_modified_with_elem"
);
console.log(
  `let for_innerHTML_modified_with_elem = document.querySelector(".for_innerHTML_modified_with_elem");`
);
console.log(" ");

// innerText-le innerHTML arasindaki ferq, eger deyismek ucun vereceyimiz content deyerinde html kodu vaarsa,
// innerHTML onu html kodu kimi qebul edir ve cevirir, innerText ise ancaq text kimi qebul edir:
for_innerText_modified_with_elem.innerText = `Modified <span class="text-red">content</span> with innerText`;
console.log(
  `for_innerText_modified_with_elem.innerText = "Modified <span class="text-red">content</span> with innerText";`
);
console.log("for_innerText_modified_with_elem.innerText: ");
console.log(for_innerText_modified_with_elem.innerText);
console.log(" ");
// ve ya:
for_innerHTML_modified_with_elem.innerHTML = `Modified <span class="text-red">content</span> with innerHTML`;
console.log(
  `for_innerHTML_modified_with_elem.innerHTML = "Modified <span class="text-red">content</span> with innerHTML";`
);
console.log("for_innerHTML_modified_with_elem.innerHTML: ");
console.log(for_innerHTML_modified_with_elem.innerHTML);
console.log(" ");

console.log("----- value -----");
console.log(" ");

// Bezi elementlerin content-ini innerHTML/innerText-le goturmek olmur,
// Cunki onlarin content-i onlarin value-sidir:
// misal: input, textarea, select, form-un elementleri ve s.

// Bu zaman inner evezine value-dan istifade edeceyik:

// value-in deyerini get etmek ucun:

console.log("----- get value -----");
console.log(" ");

let for_get_value = document.querySelector("#for_get_value");
console.log(`let for_get_value = document.querySelector("#for_get_value");`);
console.log(" ");
console.log("for_get_value: ");
console.log(for_get_value);
console.log(" ");
console.log("for_get_value.value: ");
console.log(for_get_value.value);
console.log(" ");

// value-in deyerini set etmek ucun:

console.log("----- set value -----");
console.log(" ");

let for_set_value = document.querySelector("#for_set_value");
console.log(`let for_set_value = document.querySelector("#for_set_value");`);
console.log(" ");
console.log("for_set_value: ");
console.log(for_set_value);
console.log(" ");

for_set_value.value = "Hesen";
console.log(`for_set_value.value = "Hesen"; `);
console.log(" ");
console.log("for_set_value.value: ");
console.log(for_set_value.value);
console.log(" ");

console.log("===== ATTRIBUTE =====");
console.log(" ");

// attributun deyerini get etmek ucun:

console.log("----- getAttribute -----");
console.log(" ");

let for_get_attr = document.querySelector(".for_get_attr");
console.log(`let for_get_attr = document.querySelector(".for_get_attr");`);
console.log(" ");
console.log(`for_get_attr.getAttribute("title") => `);
console.log(for_get_attr.getAttribute("title"));
console.log(" ");

// attributun hem deyerini set etmeye(update):

console.log("----- setAttribute -----");
console.log(" ");

let for_set_attr = document.querySelector(".for_set_attr");
console.log(`let for_set_attr = document.querySelector(".for_set_attr");`);
console.log(" ");
console.log(`for_set_attr.getAttribute("title") => `);
console.log(for_set_attr.getAttribute("title"));
console.log(" ");
for_set_attr.setAttribute("title", "Title attribute set for new title");
console.log(
  `for_set_attr.setAttribute("title","Title attribute set for new title");`
);
console.log(" ");
console.log(`for_set_attr.getAttribute("title") => `);
console.log(for_set_attr.getAttribute("title"));

console.log(" ");

// Hem de yeni attribute create etmeye:

console.log("-----  create attr with setAttribute -----");
console.log(" ");

let for_create_attr = document.querySelector(".for_create_attr");
console.log(`for_create_attr.getAttribute("title") => `);
console.log(for_create_attr.getAttribute("title"));

console.log(" ");

for_create_attr.setAttribute("title", "Created title attr");
console.log(`for_create_attr.setAttribute('title',"Created title attr");`);
console.log(" ");

console.log(`for_create_attr.getAttribute("title") => `);
console.log(for_create_attr.getAttribute("title"));

console.log(" ");

// delete attribute:

console.log("-----  delete Attribute -----");
console.log(" ");

let for_delete_attr = document.querySelector(".for_delete_attr");
console.log(
  `let for_delete_attr = document.querySelector(".for_delete_attr");`
);

console.log(" ");

console.log(`for_delete_attr.getAttribute("title") => `);
console.log(for_delete_attr.getAttribute("title"));

console.log(" ");

for_delete_attr.removeAttribute("title");
console.log(`for_delete_attr.removeAttribute("title");`);
console.log(" ");

console.log(`for_delete_attr.getAttribute("title") => `);
console.log(for_delete_attr.getAttribute("title"));

console.log(" ");
// has attribute -> attributun olub, olmamasini yoxlayir:

console.log("-----  has Attribute -----");
console.log(" ");

let for_has_attr = document.querySelector(".for_has_attr");
console.log(`let for_has_attr = querySelector(".for_has_attr");`);

console.log(" ");
console.log("for_has_attr: ");
console.log(for_has_attr);
console.log(" ");
console.log(`for_has_attr.hasAttribute("title") => `);
console.log(for_has_attr.hasAttribute("title"));
console.log(" ");

// data- attributu developerler ucun yazilmis attributlardir:
console.log("-----  data- Attribute -----");
console.log(" ");

// dataset -> propertisi bize data- attributu ile olanlarin hamisini
// DOMStringMap seklinde array kimi key-value mentiqinde qaytarir:

let blog = document.querySelector("button[data-target='blog']");
console.log(`let blog = document.querySelector("button[data-target='blog']");`);
console.log("blog: ");
console.log(blog);
console.log(" ");
console.log("blog.dataset: ");
console.log(blog.dataset);
console.log(" ");

// elem.dataset.target -> ve biz bu qaytarilanlardan, dot notation usulu ile key-i yazaraq, value-ni goture bilirik:
console.log("blog.dataset.target: ");
console.log(blog.dataset.target);
console.log(" ");

let shop = document.querySelector("button[data-target='shop']");
console.log(`let shop = document.querySelector("button[data-target='shop']");`);
console.log("shop: ");
console.log(shop);
console.log(" ");
console.log("shop.dataset.target: ");
console.log(shop.dataset.target);
console.log(" ");

document.getElementById(blog.dataset.target).style.visibility = "hidden";
document.getElementById(shop.dataset.target).style.visibility = "hidden";

blog.addEventListener("click", function () {
  if (
    document.getElementById(blog.dataset.target).style.visibility == "hidden"
  ) {
    document.getElementById(blog.dataset.target).style.visibility = "visible";
  } else {
    document.getElementById(blog.dataset.target).style.visibility = "hidden";
  }
});
shop.addEventListener("click", function () {
  if (
    document.getElementById(shop.dataset.target).style.visibility == "hidden"
  ) {
    document.getElementById(shop.dataset.target).style.visibility = "visible";
  } else {
    document.getElementById(shop.dataset.target).style.visibility = "hidden";
  }
});
