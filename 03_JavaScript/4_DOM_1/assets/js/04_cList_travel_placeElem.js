"use strict";
function log(str) {
  console.log(`${str}`);
  console.log(" ");
}
function logHeaderBig(header) {
  console.log(`====== ${header} ======`);
  console.log(" ");
}
function logHeaderSml(header) {
  console.log(`------ ${header} ------`);
  console.log(" ");
}
function logNewItem(assigning, itemName, item) {
  console.log(`${assigning}`);
  console.log(`${itemName}: `);
  console.log(item);
  console.log(" ");
}
function logCode(str, code) {
  console.log(`${str}:`);
  console.log(code);
  console.log(" ");
}
// CLASS
setTimeout(() => {
  // DOM-da bize class-lari idare elemek ucun ayrica property var:
  // classList -> bize DOMTokenList adinda array-e oxsayan list qaytarir:
  logHeaderBig("ClassList");
  let header = document.querySelector(".header");
  logNewItem(
    `let header = document.querySelector(".header");`,
    "header",
    header
  );
  logCode(`header.classList:`, header.classList);

  // Elemente class elave etmek ucun .add("class name"):
  logHeaderSml(".add()");

  header.classList.add("active");
  log(`header.classList.add("active");`);
  logCode(`header.classList:`, header.classList);

  // Silmek ucun ise .remove("class name"):
  logHeaderSml(".remove()");

  header.classList.remove("item");
  log(`header.classList.remove("item");`);
  logCode(`header.classList:`, header.classList);

  // Elementde verilmis class-in olub olmamasini yoxlamaq ucun .contains("class name"):
  logHeaderSml(".contains()");

  logCode(
    `header.classList.contains("item")`,
    header.classList.contains("item")
  );
  logCode(
    `header.classList.contains("active")`,
    header.classList.contains("active")
  );

  // Verilmis class elementde varsa silmek, yoxdusa eleve etmek .toggle("class name"):
  logHeaderSml(".toggle()");

  logCode(`header.classList:`, header.classList);
  logCode(
    `header.classList.toggle("active")`,
    header.classList.toggle("active")
  );
  logCode(`header.classList:`, header.classList);

  logCode(
    `header.classList.toggle("active")`,
    header.classList.toggle("active")
  );
  logCode(`header.classList:`, header.classList);

  // Her hansi class-i basqa class-la evez edende .replase("old class", "new class"),
  // class-i tapib evez ederse true qaytarir, bilmezse false:
  logHeaderSml(".replace()");

  logCode(`header.classList:`, header.classList);
  let isReplace = header.classList.replace("active", "showed");
  log(`let isReplace = header.classList.replace("active", "showed");`);
  logCode("isReplace", isReplace);
  logCode(`header.classList:`, header.classList);
  isReplace = header.classList.replace("d-none", "showed");
  log(`isReplace = header.classList.replace("d-none", "showed");`);
  logCode("isReplace", isReplace);
  logCode(`header.classList:`, header.classList);

  // accordion mentiqi, ustune basanda altdaki metni gorsenir:
  let tabs = document.querySelectorAll(".tab");
  tabs.forEach(t => {
    t.addEventListener("click", function () {
      let showed = document.querySelector(".show");
      if (showed && showed != this.nextElementSibling) {
        showed.classList.remove("show");
        showed.classList.add("hide");
      }
      if (
        this.nextElementSibling.classList.contains("show") ||
        this.nextElementSibling.classList.contains("hide")
      ) {
        this.nextElementSibling.classList.toggle("hide");
      }
      this.nextElementSibling.classList.toggle("show");
    });
  });

  // ------ travel mentiqi -------

  // bit elementden yanindaki basqa elemente catmaq.

  logHeaderBig("travel");
  let elem = document.querySelector(".travel-item");
  logNewItem(
    `let elem = document.querySelector(".travel-item");`,
    "elem",
    elem
  );

  // sonraki elementi goturmek ucun .nextElementSibling:
  logHeaderSml("nextElementSibling");

  logCode(`elem.nextElementSibling`, elem.nextElementSibling);

  // evvelki elementi goturmek ucun .previusElementSibiling:
  logHeaderSml("previousElementSibling");

  logCode(`elem.previousElementSibling`, elem.previousElementSibling);

  // parent-ini goturmek ucun .parentElement:
  logHeaderSml("parentElement");

  logCode(`elem.parentElement`, elem.parentElement);

  // child-larini goturmek ucun .children:
  logHeaderSml(".children");

  let travelList = document.querySelector(".travel-list");
  logNewItem(
    `let travelList = document.querySelector(".travel-list");`,
    "travelList",
    travelList
  );

  logCode(`travelList.children`, travelList.children);

  // elem uzerinden de getmek olar:
  logCode(`elem.parentElement.children`, elem.parentElement.children);

  // child-leri icinde 1-ci olani goturmek ucun .firstElement:
  logHeaderSml(".firstElementChild");

  logCode(`travelList.firstElementChild`, travelList.firstElementChild);

  // child-leri icinde sonuncu olani goturmek ucun .lastElementChild:
  logHeaderSml(".lastElementChild");

  logCode(`travelList.lastElementChild`, travelList.lastElementChild);

  // ======== Element yaratmaq =======
  logHeaderBig("Create Element");
  const placeElement = document.querySelector(".placeElement");
  log(`const placeElement = document.querySelector(".placeElement");`);

  // elemeny create etmek document.createElement("tag name"):
  const newElemForAppend = document.createElement("li");
  log(`let newElemForAppend = document.createElement("li");`);
  newElemForAppend.innerText = "Element for Append";
  log(`newElemForAppend.innerText = "Element for Append";`);
  newElemForAppend.classList.add("new-element-for-append");
  log(`newElemForAppend.classList.add("new-element-for-append");`);
  newElemForAppend.setAttribute("title", "New element for Append");
  log(`newElemForAppend.setAttribute("title", "New element for Append");`);

  logCode("newElemForAppend", newElemForAppend);

  // -----
  const newElemForPrepend = document.createElement("li");
  log(`let newElemForPrepend = document.createElement("li");`);
  newElemForPrepend.innerText = "Element for Prepend";
  log(`newElemForPrepend.innerText = "Element for Prepend";`);
  newElemForPrepend.classList.add("new-element-for-prepend");
  log(`newElemForPrepend.classList.add("new-element-for-prepend");`);
  newElemForPrepend.setAttribute("title", "New element for Prepend");
  log(`newElemForPrepend.setAttribute("title", "New element for Prepend");`);

  logCode("newElemForPrepend", newElemForPrepend);

  // -----

  const beforeText = document.createElement("p");
  beforeText.classList.add("before-text");
  beforeText.innerText = "Text Element for Before";
  beforeText.setAttribute("title", "Text Element for Before");

  log(`const beforeText = document.createElement("p");

  beforeText.classList.add("before-text");
  beforeText.innerText = "Text Element for Before";
  beforeText.setAttribute("title", "Text Element for Before");`);

  // -----

  const afterText = document.createElement("p");
  afterText.classList.add("after-text");
  afterText.innerText = "Text Element for After";
  afterText.setAttribute("title", "Text Element for After");

  log(`const afterText = document.createElement("p");

  afterText.classList.add("after-text");
  afterText.innerText = "Text Element for After";
  afterText.setAttribute("title", "Text Element for After");`);

  // yaratdigimiz elementi documente yerlesdirmek ucun method-lar:

  logHeaderBig("Place Element");

  // son child-i olaraq elave etmek ucun .append("creted element"):
  logHeaderSml(".append()");

  placeElement.append(newElemForAppend);
  log(`placeElement.append(newElemForAppend);`);

  // ilk child-i olaraq elave etmek ucun .prepend("creted element"):
  logHeaderSml(".prepend()");

  placeElement.prepend(newElemForPrepend);
  log(`placeElement.prepend(newElemForPrepend);`);

  logCode("placeElement", placeElement);

  // element-den evvele elave etmek ucun .before("creted element"):
  logHeaderSml(".before()");

  placeElement.before(beforeText);
  log(`placeElement.before(beforeText);`);
  // element-den sonraya elave etmek ucun .after("creted element"):
  logHeaderSml(".after()");

  placeElement.after(afterText);
  log(`placeElement.after(afterText);`);

  // bir elementi basqa element, ve ya elementlerle deyismek ucun .replaceWith("ather element(s)"):
  logHeaderSml(".replaceWith()");

  let for_replace = document.querySelector(".for-replace");
  logNewItem(
    `let for_replace = document.querySelector(".for-replace");`,
    "for_replace",
    for_replace
  );

  let replacedElem = document.createElement("li");
  replacedElem.classList.add("replaced-elem");
  replacedElem.innerText = "Replaced Element";
  log(`let replacedElem = document.createElement("li");
  replacedElem.classList.add("replaced-elem");
  replacedElem.innerText = "Replaced Element";`);

  logCode("replacedElem", replacedElem);

  for_replace.replaceWith(replacedElem);
  log(`for_replace.replaceWith(replacedElem);`);

  logCode("placeElement", placeElement);

  // elementi silmek ucun .remove("element"):

  logHeaderSml(".remove()");

  let for_remove = document.querySelector(".for_remove");
  logNewItem(
    `let for_remove = document.querySelector(".for_remove");`,
    "for_remove",
    for_remove
  );

  for_remove.remove();

  log(`for_remove.remove();`);
  logCode("placeElement", placeElement);

  // bir elementi klonlamak ucun .cloneNode("boolean"):
  logHeaderSml(".cloneNode(bool)");
  // bizden boolean deyer isteyir, eger false(ve ya hecne, default false qebul edir) verersek sadece elementin ozunu klonlayir:

  const for_clone = document.querySelector(".for_clone");
  logNewItem(
    `const for_clone = document.querySelector(".for_clone");`,
    "for_clone",
    for_clone
  );
  const cloned_elems = document.querySelector(".cloned_elems");
  logNewItem(
    `const cloned_elems = document.querySelector(".cloned_elems");`,
    "cloned_elems",
    cloned_elems
  );

  const from_for_clone = for_clone.cloneNode();
  from_for_clone.innerText = "From For Clone";
  logNewItem(
    `const from_for_clone = for_clone.cloneNode();
    from_for_clone.innerText = "From For Clone";`,
    "from_for_clone",
    from_for_clone
  );

  cloned_elems.append(from_for_clone);
  log(`cloned_elems.append(from_for_clone);`);

  // true versek ise, child-leri ile birlikde clonnlayir:

  const for_clone_with = document.querySelector(".for_clone_with");
  logNewItem(
    `const for_clone_with = document.querySelector(".for_clone_with");`,
    "for_clone_with",
    for_clone_with
  );

  const from_for_clone_with = for_clone_with.cloneNode(true);
  from_for_clone_with.children[0].classList.add("cloned_span");
  const bFrom = document.createElement("b");
  bFrom.innerText = "From ";
  from_for_clone_with.prepend(bFrom);
  logNewItem(
    `const from_for_clone_with = for_clone_with.cloneNode(true);
    from_for_clone_with.children[0].classList.add("cloned_span");`,
    "from_for_clone_with",
    from_for_clone_with
  );

  cloned_elems.append(from_for_clone_with);
  log(`cloned_elems.append(from_for_clone_with);`);

  logCode("cloned_elems", cloned_elems);
}, 100);
