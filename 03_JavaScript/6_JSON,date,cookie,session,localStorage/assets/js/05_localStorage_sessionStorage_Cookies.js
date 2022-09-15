"use strict";

// Local Storage
logHeaderBig("Local Storage");
// localStorage.setItem("name", "Qabil");
// localStorage.setItem("surname", "Qurbanov");

log(`localStorage.setItem("name", "Qabil");
localStorage.setItem("surname", "Qurbanov");`);

const lStorageGet = localStorage.getItem("surname");
logNewItem(
  `const lStorageGet = localStorage.getItem("surname");`,
  "lStorageGet",
  lStorageGet
);

const user = {
  name: "Samir",
  surname: "Semedov",
};

log(`const user = {
    name: "Samir",
    surname: "Semedov",
  };`);

// localStorage.setItem("user", JSON.stringify(user));

log(`localStorage.setItem("user", JSON.stringify(user));`);

const samir = JSON.parse(localStorage.getItem("user"));

logNewItem(
  `const samir = JSON.parse(localStorage.getItem("user"));`,
  "samir",
  samir
);

localStorage.removeItem("name");
log(`localStorage.removeItem("name");`);
log("localStorage.clear(); <- hamisini temizleyir");

const getKeyWithIndex = localStorage.key(0);
logNewItem(
  `const getKeyWithIndex = localStorage.key(0);`,
  "getKeyWithIndex",
  getKeyWithIndex
);
const lStorageLength = localStorage.length;
logNewItem(
  `const lStorageLength = localStorage.length;`,
  "lStorageLength",
  lStorageLength
);

localStorage.test = "example";
log(`localStorage.test = "example";`);
localStorage.test2 = "example2";
log(`localStorage.test2 = "example2";`);

logCode("localStorage.test2", localStorage.test2);

logCode("localStorage", localStorage);
delete localStorage.test;
log(`delete localStorage.test;`);

logCode("localStorage", localStorage);
// ----------------------

// Session Storage

logHeaderBig("Session Storage");

// tab baglanan kimi silinir

sessionStorage.setItem("name", "Ferid");
sessionStorage.setItem("age", "30");
sessionStorage.setItem("gender", "male");

log(`sessionStorage.setItem("name", "Ferid");
sessionStorage.setItem("age", "30");`);

const sStrogeItem = sessionStorage.getItem("age");
logNewItem(
  `const sStrogeItem = sessionStorage.getItem("age");`,
  "sStrogeItem",
  sStrogeItem
);

sessionStorage.removeItem("name");
log(`sessionStorage.removeItem("name");`);

const getKeyWithIndexSS = sessionStorage.key(0);
logNewItem(
  `const getKeyWithIndexSS = sessionStorage.key(0);`,
  "getKeyWithIndexSS",
  getKeyWithIndexSS
);
const sStorageLength = sessionStorage.length;
logNewItem(
  `const sStorageLength = sessionStorage.length;`,
  "sStorageLength",
  sStorageLength
);

// --------------------

// Cookies

logHeaderBig("Cookies");

// her defe http-in header-inde gedib-gelir.

document.cookie = "user=Qabil";

log(`document.cookie = "user=Qabil";`);

logCode("document.cookie", document.cookie);

let name = "my name";
let value = "John Smith";

document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

logCode("document.cookie", document.cookie);

document.cookie = "user=John; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT";

logCode("document.cookie", document.cookie);

function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {
  options = {
    path: "/",
    // add other defaults here if necessary
    ...options,
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie =
    encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}

setCookie("firstname", "Qabil");

console.log(getCookie("firstname"));

function deleteCookie(name) {
  setCookie(name, "", {
    "max-age": -1,
  });
}

deleteCookie("user");
