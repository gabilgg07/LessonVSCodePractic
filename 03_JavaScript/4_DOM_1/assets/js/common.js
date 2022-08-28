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
