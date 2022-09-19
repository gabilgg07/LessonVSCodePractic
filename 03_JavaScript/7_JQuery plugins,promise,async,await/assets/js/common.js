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

const monthsAZ = [
  "Yanvar",
  "Fevral",
  "Mart",
  "Aprel",
  "May",
  "Iyun",
  "Iyul",
  "Avqust",
  "Sentyabr",
  "Oktyabr",
  "Noyabr",
  "Dekabr",
];
const monthsShortAZ = [
  "Yan",
  "Fev",
  "Mart",
  "Apr",
  "May",
  "Iyun",
  "Iyul",
  "Avq",
  "Sen",
  "Okt",
  "Noy",
  "Dek",
];
const monthsSmlAZ = [
  "yanvar",
  "fevral",
  "mart",
  "aprel",
  "may",
  "iyun",
  "iyul",
  "avqust",
  "sentyabr",
  "oktyabr",
  "noyabr",
  "dekabr",
];
const monthsShortSmlAZ = [
  "yan",
  "fev",
  "mart",
  "apr",
  "may",
  "iyun",
  "iyul",
  "avq",
  "sen",
  "okt",
  "noy",
  "dek",
];

const weekDaysShortAZ = ["B", "B.e", "Ç.a", "Ç", "C.a", "C", "Ş"];
const weekDaysShortSmlAZ = ["b", "b.e", "ç.a", "ç", "c.a", "c", "ş"];
const weekDaysAZ = [
  "Bazar",
  "Bazar ertəsi",
  "Çərşənbə axşamı",
  "Çərşənbə",
  "Cümə axşamı",
  "Cümə",
  "Şənbə",
];
