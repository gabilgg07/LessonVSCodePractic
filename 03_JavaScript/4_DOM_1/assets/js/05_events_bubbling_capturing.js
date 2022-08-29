"use strict";
setTimeout(() => {
  // EVENTS
  logHeaderBig("Events");
  const liItems = document.querySelectorAll(".for_event li");
  logNewItem(
    `const liItems = document.querySelectorAll(".for_event li");`,
    "liItems",
    liItems
  );
  liItems.forEach((li, i) => {
    if (i == 0) {
      li.style.marginTop = "0";
    }
    li.style.color = "white";
    li.addEventListener("mouseover", () => {
      li.style.backgroundColor = "lightyellow";
      li.style.color = "darkgreen";
      li.style.boxShadow = "0 0 5px 2px gray";
      li.style.borderRadius = "6px";
      //   this.style.borderRadius = "6px"; => error verir cunki arrow functiondu.
    });
    li.addEventListener("click", function () {
      if (this.style.border && this.style.border != "none") {
        this.style.border = "none"; // click olunani qaytarir, cunki normal function-du
        this.style.backgroundColor = "lightyellow";
        this.style.color = "darkgreen";
      } else {
        this.style.border = "2px solid black";
        this.style.backgroundColor = "gray";
        this.style.color = "white";
      }
    });
  });

  log(`liItems.forEach((li, i) => {
    if (i == 0) {
      li.style.marginTop = "0";
    }
    li.style.color = "white";
    li.addEventListener("mouseover", () => {
      li.style.backgroundColor = "lightyellow";
      li.style.color = "darkgreen";
      li.style.boxShadow = "0 0 5px 2px gray";
      li.style.borderRadius = "6px";
      //   this.style.borderRadius = "6px"; => error verir cunki arrow functiondu.
    });

    li.addEventListener("click", function () {
      if (this.style.border && this.style.border != "none") {
        this.style.border = "none"; // click olunani qaytarir, cunki normal function-du
        this.style.backgroundColor = "lightyellow";
        this.style.color = "darkgreen";
      } else {
        this.style.border = "2px solid black";
        this.style.backgroundColor = "gray";
        this.style.color = "white";
      }
    });`);

  let linkGoogle = document.querySelector(".link");
  logNewItem(
    `let linkGoogle = document.querySelector(".link");`,
    "linkGoogle",
    linkGoogle
  );

  linkGoogle.addEventListener("click", function (e) {
    // bezi elementlerin default funksiyalarinin qarsisini almaq ucun gonderilmis event object-indeki
    //.preventDefault() methodunu cagiririq:
    e.preventDefault();
    console.log(e);
    if (e.altKey && e.shiftKey) {
      log(`click with alt key and shift key`);
    } else if (e.altKey && (e.ctrlKey || e.metaKey)) {
      console.log("click with alt key and control/command key");
    } else if (e.altKey) {
      console.log("click with alt key");
    } else {
      log(`click with out any key`);
    }
  });

  log(`linkGoogle.addEventListener("click", function (e) {
    // bezi elementlerin default funksiyalarinin qarsisini almaq ucun gonderilmis event object-indeki
    //.preventDefault() methodunu cagiririq:
    e.preventDefault();
    console.log(e);
    if (e.altKey && e.shiftKey) {
      log(\`click with alt key and shift key\`);
    } else if (e.altKey && (e.ctrlKey || e.metaKey)) {
      console.log("click with alt key and control/command key");
    } else if (e.altKey) {
      console.log("click with alt key");
    } else {
      log(\`click with out any key\`);
    }
  });`);

  let nameInput = document.querySelector("#nameInput");
  logNewItem(
    `let nameInput = document.querySelector("#nameInput");`,
    "nameInput",
    nameInput
  );

  nameInput.addEventListener("focus", function (e) {
    console.log(e);
  });

  // Bubbling mentiqi -> ic-ice elementlerden hamisina click eventi versek ve en icde olana click etsek, in icden cole dogru clicklenmeye deyilir.
  logHeaderSml("Bubbling");
  const bubbling = document.querySelector(".bubbling");
  logCode("bubbling", bubbling);
  const ul_ul = document.querySelector("ul.ul");
  logCode("ul_ul", ul_ul);
  const li_li = document.querySelector("li.li");
  logCode("li_li", li_li);

  bubbling.addEventListener("click", function (e) {
    log("I am Bubbling Div");
  });
  ul_ul.addEventListener("click", function (e) {
    log("I am Bubbling Ul");
  });
  li_li.addEventListener("click", function (e) {
    log("I am Bubbling Li");
  });

  log(`
  bubbling.addEventListener("click", function (e) {
    console.log("I am Div");
  });
  ul_ul.addEventListener("click", function (e) {
    console.log("I am Ul");
  });
  li_li.addEventListener("click", function (e) {
    console.log("I am Li");
  });`);

  // biz bubbling mentigini dayandira bilirik:
  logHeaderSml("Stop Bubbling");
  const stopBubbling = document.querySelector(".stopBubbling");
  logCode("stopBubbling", stopBubbling);
  const ul_stopBubbling = document.querySelector(".stopBubbling ul.ul");
  logCode("ul_stopBubbling", ul_stopBubbling);
  const li_stopBubbling = document.querySelector(".stopBubbling li.li");
  logCode("li_stopBubbling", li_stopBubbling);

  stopBubbling.addEventListener("click", function (e) {
    log("I am Stop Bubbling Div");
  });
  ul_stopBubbling.addEventListener("click", function (e) {
    log("I am Stop Bubbling Ul");
  });
  li_stopBubbling.addEventListener("click", function (e) {
    log("I am Stop Bubbling Li");

    // en icdeki elemente gonderilmis eventde
    // .stopPropagation() methodu cagirmaqla
    e.stopPropagation();

    // Amma bunu dayandirmiriq, cunki js-de event delegation deyilen mexanizma var ki, bu mexanizmadan istifade etmek ucun bu bubbling mentiqi lazimdir.
  });

  log(`
  bubbling.addEventListener("click", function (e) {
    console.log("I am Div");
  });
  ul_ul.addEventListener("click", function (e) {
    console.log("I am Ul");
  });
  li_li.addEventListener("click", function (e) {
    console.log("I am Li");
  });`);

  // event delegate -> misal bize database-dan table datalari ne qeder gelir bilmirik, ve biz her td ye click eventi yaza bilmerik, buna gore table ye delegate usulu ile yaziriq:

  logHeaderSml("Event Delegate");

  const delTable = document.querySelector(".delTable");
  logNewItem(
    `const delTable = document.querySelector(".delTable");`,
    "delTable",
    delTable
  );

  delTable.addEventListener("click", function (e) {
    //console.log(e.currentTarget, "this"); // elementi yeni this-i qaytarir
    //console.log(e.target, "cliklediyimiz"); // bu ise elementin icinde neye clicklemisikse  onu(en uste olani) qaytarir.

    if (e.target.tagName === "TD") {
      if (e.target.style.backgroundColor != "rgb(204, 204, 204)") {
        e.target.style.backgroundColor = "#ccc";
      } else {
        e.target.style.backgroundColor = "#fff";
      }
    }
  });

  // Capturing -> bubbling-in eksi olaraq, yuxardan asagiya, parent-den child-e dogru isleyir.
  // islemesi ucun ise, .addEventListener-e 3-cu parametr kimi {capture:true} yazib oturmeliyik:

  logHeaderSml("Capturing");
  const capturing = document.querySelector(".capturing");
  logCode("capturing", capturing);
  const ul_capturing = document.querySelector(".capturing ul.ul");
  logCode("ul_capturing", ul_capturing);
  const li_capturing = document.querySelector(".capturing li.li");
  logCode("li_capturing", li_capturing);

  capturing.addEventListener(
    "click",
    function (e) {
      log("I am capturing Div");
    },
    { capture: true }
  );
  ul_capturing.addEventListener(
    "click",
    function (e) {
      log("I am capturing Ul");
    },
    { capture: true }
  );
  li_capturing.addEventListener(
    "click",
    function (e) {
      log("I am capturing Li");
    },
    { capture: true }
  );

  log(`capturing.addEventListener(
    "click",
    function (e) {
      log("I am capturing Div");
    },
    { capture: true }
  );
  ul_capturing.addEventListener(
    "click",
    function (e) {
      log("I am capturing Ul");
    },
    { capture: true }
  );
  li_capturing.addEventListener(
    "click",
    function (e) {
      log("I am capturing Li");
    },
    { capture: true }
  );`);

  // form-un submit-i

  logHeaderSml("Form Submit");

  const for_submit = document.querySelector("#for_submit");
  logNewItem(
    `const for_submit = document.querySelector("#for_submit");`,
    "for_submit",
    for_submit
  );

  const firsname = document.querySelector("#firstname");
  logNewItem(
    `const firsname = document.querySelector("#firsname");`,
    "firsname",
    firsname
  );

  // form-da sifreni yoxlama varsa o zman submin eventini preventDefault etmek lazim:
  for_submit.addEventListener("submit", function (e) {
    e.preventDefault();
  });

  // MOUSE EVENTS

  logHeaderBig("Mouse Events");

  const parent = createNewElement("parent", ".");

  logHeaderSml("click, down, up");
  const mouse_click = createNewElement("mouse_click", ".");

  mouse_click.addEventListener("click", function (e) {
    console.log("mouse_click");
  });
  mouse_click.addEventListener("mousedown", function (e) {
    console.log("mouse_down");
  });
  mouse_click.addEventListener("mouseup", function (e) {
    console.log("mouse_up");
  });

  logHeaderSml("move");
  const mouse_move = createNewElement("mouse_move", ".");

  mouse_move.addEventListener("mousemove", function (e) {
    console.log("mouse_move");
  });

  logHeaderSml("over, out");
  const mouse_over_out = createNewElement("mouse_over_out", ".");

  // over out -> her child-larin uzerine geldikde de, out olub over olur, yeniden event verilmis parente cixdiqda yene out over isleyir.
  mouse_over_out.addEventListener("mouseover", function (e) {
    console.log("mouse_over");
  });
  mouse_over_out.addEventListener("mouseout", function (e) {
    console.log("mouse_out");
  });

  logHeaderSml("enter, leave");
  const mouse_enter_leave = createNewElement("mouse_enter_leave", ".");

  // enter leave -> bunda ise, css-deki hover mentiqindedir. Ancaq elementin ozune aiddir. Elementin uzerine geldi, uzerinden cixdi.
  mouse_enter_leave.addEventListener("mouseenter", function (e) {
    console.log("mouse_enter");
  });
  mouse_enter_leave.addEventListener("mouseleave", function (e) {
    console.log("mouse_leave");
  });

  logHeaderSml("dblclick");
  const mouse_dblclick = createNewElement("mouse_dblclick", ".");

  mouse_dblclick.addEventListener("dblclick", function (e) {
    console.log("mouse_dblclick");
  });

  logHeaderSml("contextmenu");
  const mouse_contextmenu = createNewElement("mouse_contextmenu", ".");

  mouse_contextmenu.addEventListener("contextmenu", function (e) {
    console.log("mouse_contextmenu");
    e.preventDefault();
  });

  logHeaderBig("Event Codes");

  const for_code = createNewElement("for_code", "#");
  for_code.addEventListener("keydown", function (e) {
    console.log(e.code);
    console.log(e.key);
  });

  logHeaderBig(".removeEventListener");

  // elemente elave edilmis eventListeneri silmek ucundur. Silinmesi ucun ise hem event adi, hem de function eyni olmalidir. Anonim function-lar ise ferqli olurlar. ona gore adlandirilmis functiondan istifade edilmelidir.

  const removeEvLis = createNewElement("removeEvLis", ".");

  function logClicked() {
    console.log("clicked");
  }

  removeEvLis.addEventListener("click", logClicked);

  setTimeout(() => {
    console.log("Click EventListener removed!");
    removeEvLis.removeEventListener("click", logClicked);
  }, 5000);

  log(`function logClicked() {
    console.log("clicked");
  }

  removeEvLis.addEventListener("click", logClicked);

  setTimeout(() => {
    console.log("Click EventListener removed!");
    removeEvLis.removeEventListener("click", logClicked);
  }, 5000);`);
}, 100);
