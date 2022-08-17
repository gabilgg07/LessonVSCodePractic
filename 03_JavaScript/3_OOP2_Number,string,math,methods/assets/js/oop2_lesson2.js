"use strict";

// ========= Arrays

// [] isaresi ile yazilir:

let arr = [];

// Array-in esas vezifesi metiq olaraq eyni meqsedi ifade eden melumatlar siyahisini saxlamaq:

let names = ["Qabil", "Vusal", "Selim", "Sevda", "Mursel"];

console.log(`let names = ["Qabil", "Vusal", "Selim", "Sevda", "Mursel"];`);
console.log(" ");

// Array-in melumatlarinin sayini(siyahinin uzunlugunu) .length property-si qaytarir:

console.log(`names.length => ${names.length}`);
console.log(" ");

// Array-de melumatlar index-lenmis sekilde saxlanilir.
// index-lenme 0(sifir)-dan baslayir:
console.log(`names[0] => ${names[0]}`);
console.log(`names[2] => ${names[2]}`);
console.log(" ");
// sonuncu index-dekini elde etmek ucun:
console.log(`names[names.length-1] => ${names[names.length - 1]}`);
console.log(" ");
// eger olmayan index yazilarsa undefined qaytarir:
console.log(`names[9] => ${names[9]}`);
console.log(" ");

// array ucun sade for dongusu:
console.log("Sade for loop:");
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
console.log(" ");

console.log("for of loop:");
for (const name of names) {
  console.log(name);
}
console.log(" ");

console.log("for in loop:");
for (const index in names) {
  console.log(`index: ${index}`);
  console.log(`item (names[${index}]): ${names[index]}`);
}
console.log(" ");

// CRUD - mentiqinin tedbiqi:

// C-reate:

names[5] = "Elman";
console.log(`names[5] = "Elman";`);
console.log(names);
console.log(" ");

// R-ead:

console.log(`names[3] => ${names[3]}`);
console.log(" ");

// U-pdate:

names[2] = "Feride";
console.log(`names[2] = "Feride";`);
console.log(names);
console.log(" ");

// D-elete:

delete names[5];
console.log(`delete names[5];`);
console.log(names);
console.log(" ");

// ----- array methods

// sondan silme ve elave etme:

// .push(item) => item-i(melumati) sona elave etme:
let newLength = names.push("Hesen");
console.log(`names.push("Hesen");`);
console.log(`newLength:${newLength}`);
console.log(names);
console.log(" ");

// .pop() => item-i(melumati) sondan silme(cixartma):
let anyName = names.pop();
console.log(`let anyName = names.pop();`);
console.log(`anyName: ${anyName}`);
console.log(names);
console.log(" ");

anyName = names.pop();
console.log(`let anyName = names.pop();`);
console.log(`anyName: ${anyName}`);
console.log(names);
console.log(" ");

// evvelden silme ve elave etme:

// .unshift(item) => item-i(melumati) evvele elave etme:
newLength = names.unshift("Hesen");
console.log(`names.unshift("Hesen");`);
console.log(`newLength:${newLength}`);
console.log(names);
console.log(" ");

// .shift() => item-i(melumati) evvelden silme(cixartma):
anyName = names.shift();
console.log(`let anyName = names.shift();`);
console.log(`anyName: ${anyName}`);
console.log(names);
console.log(" ");

// .push(item) ve .unshift(item) array-in yeni uzunlugunu qaytarir.
// .pop() ve .shift() array-den cixartdigi item-i(melumati) qaytarir.

// ----- Multidimensional arra => array icinde array:

let multiArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(`let multiArr = [[1,2,3],[4,5,6],[7,8,9]];`);
console.log(`multiArr[1][2] => ${multiArr[1][2]}`);
console.log(" ");

// ======== Splice method
// shvisarski noj deyilir, yeni, cox funksionalli methoddur,
// array-lerimize hem yeni item daxil ede bilir, hem sile, hem de deyise bilirik:

console.log(names);
let deletedItems = names.splice(0, 2, "Samire", "Faiq", "Gulnar");
console.log(
  `let deletedItems = names.splice(0, 2, "Samire", "Faiq", "Gulnar");`
);
console.log(names);
// sildiyi hisseni bize qaytarir:
console.log(`deletedItems: `);
console.log(deletedItems);
console.log(" ");

// index yere menfi yazsaq .slice() methodundaki kimi,
// array-in sonun sifir(0) goturur ve sondan saymaga baslayir:

console.log(names);
deletedItems = names.splice(-2, 1, "Dilan", "Zaur", "Tebriz");
console.log(
  `let deletedItems = names.splice(-2, 1, "Dilan", "Zaur", "Tebriz");`
);
console.log(names);
console.log(`deletedItems: `);
console.log(deletedItems);
console.log(" ");

// .slice(startIndex,[endIndex]) => stringdeki mentiqle eyni isleyir (not including endIndex):

console.log(names);
deletedItems = names.slice(2, 4);
console.log(`let deletedItems = names.slice(2,4);`);
// array-e tesir etmir, sadece kopyalayir:
console.log(names);
console.log(`deletedItems: `);
console.log(deletedItems);
console.log(" ");

// .concat(...arrays) => bir nece array-i bir-birine birlesdirir:

let numArr1 = [54, 65, 76];
let numArr2 = [1, 21, 32, 43];
let numArr3 = [87, 98, 109];

console.log(`let numArr1 = [54,65,76];
let numArr2 = [1,21,32,43];
let numArr3 = [87,98,109];`);

let concatedArray = numArr2.concat(numArr1, numArr3);
console.log(`let concatedArray = numArr2.concat(numArr1, numArr3);`);
console.log(" ");
console.log(`concatedArray: `);
console.log(concatedArray);
console.log(" ");

// .indexOf(),.lastIndexOf(),.includes() => hamisi stringdeki kimidir.
names.push("Habil", "Gulnar", "Sedat");
console.log(names);
console.log(`names.indexOf("Gulnar") => ${names.indexOf("Gulnar")}`);
console.log(`names.indexOf("Yaver") => ${names.indexOf("Yaver")}`);
console.log(" ");
console.log(`names.lastIndexOf("Gulnar") => ${names.lastIndexOf("Gulnar")}`);
console.log(`names.lastIndexOf("Yaver") => ${names.lastIndexOf("Yaver")}`);
console.log(" ");
console.log(`names.includes("Gulnar") => ${names.includes("Gulnar")}`);
console.log(`names.includes("Yaver") => ${names.includes("Yaver")}`);
console.log(" ");

// ------- Foreach loop
// Diger for dongulerinden ferqli olaraq, icine callback function gonderirik.
// bu function da 3 parametr qebul edir ve siralama onemlidir: 1 item, 2 index, 3 array ozu.

names.forEach(function (item, index, array) {
  console.log(item, "item");
  console.log(index, "index");
  if (index == names.length - 1) {
    console.log(array, "array");
  }
});
console.log(" ");
// bu parametrler optionaldir,hamisini birini, ve ya her hansi gondermeye de bilerik:
names.forEach(function (item, index) {
  console.log(item, "- item");
  console.log(index, "index");
});
console.log(" ");

// forEach-i rahat oxumaq ucun arraw func-dan istifade edirik:

names.forEach(item => console.log(item));
console.log(" ");

// Basqa dongu methodlari da var ki, onlar da callback func isteyir ve icine optional olan 3 parametri gondere bilirik: item, index, array

let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Peter" },
  { id: 3, name: "Mery" },
];
console.log(`let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Peter" },
  { id: 3, name: "Mery" },
];`);
console.log(" ");

// find & findIndex:

// .find(callback func) => ilk tapdigi itemi qaytarir:

let user = users.find(item => item.id === 2);

console.log(`let user = users.find(item => item.id === 2);`);
console.log(" ");

console.log(`user.name:`);
console.log(user.name);
console.log(" ");

// .findIndex(callback func) => ilk tapdigi index-i qaytarir:

let index = users.findIndex(item => item.id === 2);

console.log(`let index = users.findIndex(item => item.id === 2);`);
console.log(" ");

console.log(`index:`);
console.log(index);
console.log(" ");
//  -----------------

let products = [
  { id: 1, name: "samsung galaxy note 10", category: "phone" },
  { id: 3, name: "samsung 10 tv", category: "television" },
  { id: 2, name: "iphone 10", category: "phone" },
  { id: 4, name: "ipad 3", category: "tablet" },
  { id: 5, name: "acer t543", category: "computer" },
  { id: 6, name: "lg C321", category: "television" },
  { id: 7, name: "honor P78", category: "phone" },
];

console.log(`let products = [
  { id: 1, name: "samsung galaxy note 10", category: "phone" },
  { id: 3, name: "samsung 10 tv", category: "television" },
  { id: 2, name: "iphone 10", category: "phone" },
  { id: 4, name: "ipad 3", category: "tablet" },
  { id: 5, name: "acer t543", category: "computer" },
  { id: 6, name: "lg C321", category: "television" },
  { id: 7, name: "honor P78", category: "phone" },
];`);
console.log(" ");

// .filter(callback func) => serti odeyen butun itemleri array seklinde qaytarir:

let filtered_products = products.filter(item => item.category === "phone");
console.log(
  `let filtered_products = products.filter(item => item.category === "phone");`
);
console.log(" ");
console.log(`filtered_products: `);
console.log(filtered_products);
console.log(" ");

// .map(item => her bir item-e deyisiklik etmek olur) => kohne erreyde yeni ferqli array duzeltmek olur:

let new_names = names.map(item => `<li>${item}</li>`);
console.log(`let new_names = names.map(item => \`<li>\${item}</li>\`);`);
console.log(" ");
console.log(`new_names: `);
console.log(new_names);

const ulNames = document.getElementById("names");
ulNames.innerHTML = new_names.join("");
console.log(" ");

// .sort() => stringleri elifba sirasi ile yigir:
let sorted_names = names.sort();
console.log(`let sorted_names = names.sort();`);
console.log(`sorted_names: `);
console.log(sorted_names);
console.log(" ");
// numberlerde artan sira ile yigmasi ucun, xususi callback func gondermek lazim:

let unsorted_nums = [5, 23, 1, 76, 35, 234, 35, 675, 21, 8];
console.log(`let unsorted_nums = [5,23,1,76,35,234,35,675,21,8];`);
let sorted_nums = unsorted_nums.sort((a, b) => {
  return a - b;
});
console.log(`let sorted_nums = unsorted_nums.sort((a, b) => {
  return a - b;
});`);

console.log(`sorted_nums: `);
console.log(sorted_nums);

console.log(" ");
