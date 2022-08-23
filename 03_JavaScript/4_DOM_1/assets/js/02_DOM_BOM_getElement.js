"use strict";

// DOM - Document Object Model
// BOM - Browser Object Model

// DOM - dedikde, js-miz document-i ve icindeki butun elementleri ayri-ayri
// object kimi goturur ve onun property-lerinden, method-larindan istifade edir.

// BOM -da isedocumente aid olmayan, browser-e aid olan, misal, sehifeni qabaga getmek, geri getmek,
// url-in ozu, domen, past ol biler.
// Navigator-umuzdan ola biler ki, informasiya alariq ki, bu hansi browserdi, ne vaxt request gonderilib.

// Bunlarin hamisi esas 3 hisseden ibaretdir: DOM, BOM, JS.

console.log(document);
console.log(" ");
// butun html kodlarimizi qaytarir.
// buna gore biz document.body yazsaq body-ni bize qaytarir:

console.log(document.body);
console.log(" ");

// nununla da biz DOM-u manipulyasiya ede bilerik, misal, yeni element create ede bilerik:

// DOM manipulation

// - create element -> yeni element create ede bilirik,
// - style -> inline style-a mudaxile ede bilirik(css-e yox!),
// - class -> class-lari idare ede bilirik, elave etmek, silmek kimi,
// - event -> user-in event-lerini handle ede bilirik.
// Event dedikde hem keyword, hem de mouse event-lerinden gedir sohbet,
// - attribute -> elementlerin attributlaarini manipulyasiya(idare) ede bilirik,
// - traversing -> (seyahet etmek) bir elementden basqa elemete getmek,
// - select -> elementi goturmek.
// - content modify -> contenti deyismek.

// Element-leri goturmek ucun 2 yol var:
// SELECTING:

// 1. getElement:

// 1.1. getElementById("IdName") -> elementin id-sine gore secmek(goturmek):

const elementById = document.getElementById("example_id");
console.log(`const elementById = document.getElementById("example_id"); => `);
console.log(elementById, "element by id");

console.log(" ");

// 1.2. getElementsByClassName("ClassName") -> Class adina gore HTMLCollection (elementler array-ine oxsar) qaytarir:
// bezi funksiyalar burda islemir.
const elementsByClassName = document.getElementsByClassName("example_class");
console.log(
  `const elementsByClassName = document.getElementsByClassName("example_class"); => `
);
console.log(elementsByClassName, "elements by classname");

console.log(" ");

// array kimi:
console.log("elementsByClassName[1] => ");
console.log(elementsByClassName[1], "elements by classname [1]");

console.log(" ");

// 1.3. getElementsByTagName("tag name") -> tag name-lere gore HTMLCollection(array like) qaytarir:
const elementsByTagName = document.getElementsByTagName("li");
console.log(
  `const elementsByTagName = document.getElementsByTagName("li"); => `
);
console.log(elementsByTagName);
console.log(" ");
