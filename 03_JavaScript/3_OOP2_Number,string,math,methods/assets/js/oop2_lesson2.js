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
