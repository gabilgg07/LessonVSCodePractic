"use strict";

function log(str) {
  console.log(`${str}`);
  console.log(" ");
}
function logHeaderBig(header) {
  console.log(" ");
  console.log(`====== ${header} ======`);
  console.log(" ");
}
function logHeaderSml(header) {
  console.log(" ");
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
function createNewElement(elemName, selector = "") {
  let elem = document.querySelector(`${selector}${elemName}`);
  logNewItem(
    `let ${elemName} = document.querySelector("${selector}${elemName}");`,
    `${elemName}`,
    elem
  );

  return elem;
}
function createNewElements(elemName, selector = "") {
  let elems = document.querySelectorAll(`${selector}${elemName}`);
  logNewItem(
    `let ${elemName} = document.querySelectorAll("${selector}${elemName}");`,
    `${elemName}`,
    elems
  );

  return elems;
}

function randomColor() {
  const hex = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];

  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }

  return color;
}
