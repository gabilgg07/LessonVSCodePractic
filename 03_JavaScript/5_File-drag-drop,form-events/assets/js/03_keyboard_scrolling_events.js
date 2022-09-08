"use strict";

setTimeout(() => {
  // KEYBOARD EVENTS
  document.addEventListener(
    "keydown",
    function (e) {
      console.log(e, "event");
      // bu eventin .key ve . code propertileri bizim klaviaturada basdigimiz duymenin hansi oldugunu qaytarir:
      console.log(e.key, "key");
      console.log(e.code, "code");
      console.log(" ");
    },
    { once: true }
  );
  document.addEventListener("keydown", function (e) {
    // eger herfin boyukluyu ve ya kicikliyi onemlidirse .key den istifade etmeliyik:
    if (e.key === "Q") {
      console.log("Uppercase");
      console.log(e.key, "key");
      console.log(e.code, "code");
      console.log(" ");
    } else if (e.key === "q") {
      console.log("Lowercase");
      console.log(e.key, "key");
      console.log(e.code, "code");
      console.log(" ");
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.code === "KeyZ" && (e.ctrlKey || e.metaKey)) {
      console.log("undo");
    }
  });

  // SCROLLING
  const navbar = document.querySelector(".scrolling .navbar");
  window.addEventListener("scroll", function (e) {
    console.log(this.window.scrollY, "scrollY");
    if (this.window.scrollY >= 262) {
      navbar.classList.add("fixed-top");
    } else {
      navbar.classList.remove("fixed-top");
    }
  });
}, 100);
