"use strict";

// --------------- Operators

// Unery ve Binary Operantlar

let x = 1;
console.log(`let x = 1;`);
x = -x; // -1, unary operant
console.log(`x = -x; => ${x}, unary operant`);
console.log(" ");

let y = 1,
  z = 3;
console.log(`let y = 1, z = 3;`);
console.log(`z - y; => ${z - y}, binary operant, cixma emeliyyati`);
console.log(" ");
// ------- Maths (Riyazi operatorlar)

// Udstunluk ardicilligi ile:

// - Unary (+) -> 14
// - Unary (-) -> 14
// - Exponentiation (**) -> 13
// - Multiplication (*) -> 12
// - Division (/) -> 12
// - Remainder (%) -> 12
// - Addition (+) -> 11
// - Subtraction (-) -> 11

console.log(` "my" + "string"; => ${"my" + "string"}`);
console.log(` "1" + 2; => ${"1" + 2} -> srting`);
console.log(` 2 + 2 + "1"; => ${2 + 2 + "1"} -> srting`);
console.log(` "1" + 2 + 2; => ${"1" + 2 + 2} -> srting`);
console.log(` 6 - "2"; => ${6 - "2"} -> number`);
console.log(` "6" / "2"; => ${"6" / "2"} -> number`);
console.log(` +"2"; => ${+"2"} -> number`);
console.log(" ");
// ---------- Assignment Operators -> 2
// - Assignment (=),(+=, -=, *=, /=, %=, **=)

let a, b, c;

a = b = c = 2 + 2;

// -------- Increment & Decrement

// prefix ++num, postfix num++;

// return mentiqi olaanda, variableleri return edir sonra emeliyyati icra edir.

let num = 5;
console.log(`let num = 5;`);
console.log(`++num; -> ${++num}`);
console.log(`num : ${num}`);
console.log(`num++; -> ${num++}`);
console.log(`num : ${num}`);
console.log(" ");

// ---------- Comparisons (Muqayise operatorlari)

// == ancaq deyer yoxlayir,
console.log(`"5"==5; => ${"5" == 5}`);

// === ise hem deyeri, hem de type-i yoxlayir.
console.log(`"5"===5; => ${"5" === 5}`);

console.log(`"2">1; => ${"2" > 1}`);
console.log(`"01"==1; => ${"01" == 1}`);
console.log(`true==1; => ${true == 1}`);
console.log(`false==0; => ${false == 0}`);
console.log(" ");

// ------------ Conditions (Shert)

// Bezi deyerler falsy: 0, '', false, null, undefined, NaN
// Digerleri ise truthy-dir.

// tek setirde ternary condition:

let age = 23;
console.log(`let age = 23;`);
console.log(`age < 18
? console.log("18-den kicik")
: age > 40
? console.log("40-dan boyuk")
: console.log("Hec biri"); => `);

age < 18
  ? console.log("18-den kicik")
  : age > 40
  ? console.log("40-dan boyuk")
  : console.log("Hec biri");

console.log(" ");

// ---------- Logical Operators (Menteqi operatorlar): &&, ||, !

// || (or) menimsetmede ilk tapdigi truthy-ni goturecek, tapmasa sonuncu falsy-ni.

let cavab1 = 0;
console.log(`let cavab1 = "";`);
let cavab2 = "Salam";
console.log(`let cavab2 = "Salam";`);
let cavab3;
console.log(`let cavab3;`);

let cavabOr = cavab1 || cavab2 || cavab3;

console.log(`let cavabOr = cavab1 || cavab2 || cavab3; => ${cavabOr}`);

// && (and) -de eksinesi.

let cavabAnd = cavab1 && cavab2 && cavab3;

console.log(`let cavabAnd = cavab1 && cavab2 && cavab3; => ${cavabAnd}`);

// && operatoru || -dan daha quvvetlidi(yuksekdir). Birinci && terefler yoxlanir, sonra || terefler.
// !! double not operatoru bezen boolean type cevirmek ucun istifade edilir.

console.log(`!!"non-empty string"; => ${!!"non-empty string"}`);
console.log(`!!null; => ${!!null}`);
console.log(" ");

// ---------- Nullish coalescing operator (??)

// Eger null, ve ya undefined deyilse hemin melumati qaytarir:

let height = 0;
console.log(`height || 100; => ${height || 100}`);
console.log(`height ?? 100; => ${height ?? 100}`);

// JS ?? ile && ve ya || operatorlarini biyerde isletmeye qadagan edir.
//  && ve ya || istifade edende moterize icinde yazilmalidir.
let q = (1 && 2) ?? 3;
console.log(`let q = (1 && 2) ?? 3; => ${q}`);
console.log(" ");

// --------- Loops

//  for , while, do-while

// break - dongunu dayandirir, continue - stepi skip edir.

// Dongu icinde dongu olanda, icerideki dongude col dongunu dayandirmaq ucun, coldeki donguye label vermek lazim.

outloop: for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if (i === 5) {
      console.log("Loop dayandi");
      break outloop;
    }
    console.log(`${i + 1} + ${j + 1} = ${i + 1 + j + 1}`);
  }
}

console.log(" ");

// --------- swich-case
let weekDay = 4;
switch (weekDay) {
  case 1:
    console.log("Bazar ertesi");
    break;

  case 2:
    console.log("Chershenbe axshami");
    break;

  case 3:
    console.log("Chershenbe");
    break;

  case 4:
    console.log("Cume axsami");
    break;

  case 5:
    console.log("Cume");
    break;
  // case-lerin qruplasdirilmasi:
  case 6:
  case 7:
    console.log("Hefte sonu");
    break;

  default:
    console.log("1-7 arasi eded olmali idi.");
    break;
}
console.log(" ");
// --------- Functions
// function funcName(argumens){bodu function}
function sayHi() {
  console.log("Hi, Everybody...");
}

sayHi();
sayHi();

function sayMessage(name, message) {
  console.log(`${name} say: ${message}`);
}

sayMessage("Qabil", "I'm so happy ^_^ ");
// eger parametir isteyen functiona parametr gondermesek undefined qaytarir:
sayMessage("Elvin");
// parametre default deyerde menimsede bilerik:
function tellSomething(name, text = "Salam") {
  console.log(`${name} say: ${text}`);
}
tellSomething("Samir");

// Global variableler ver, local variableler var:
let name1 = "Eli"; // global variable
// globali function daaxilinde istifade ede bilerik.
function tolking(nameSb, text) {
  let name2 = "Elchin"; // local variable
  console.log(`${nameSb} and ${name1} say: ${text}`);
}
tolking("Sabir", "Necesiz?");
// local variableni ancaq oldugu skopka daxilinde istifade edile biler.

// globalla local eyni adda olduqda skopkada istifade etdikde localdaki deyeri goturur:
function tallking(nameSb, text) {
  let name1 = "Elchin"; // local variable
  console.log(`${nameSb} and ${name1} say: ${text}`);
}
tallking("Hesen", "Salam");

// function yuxaridakilar kimi hec ne qaytarmirsa Void function-du.
// return keyword-u ile qaytardigi type-a esasen deyisir.
function numReturn() {
  return 8;
}
console.log(numReturn());
function hi() {
  return "Salam";
}

console.log(hi());
console.log(" ");

// ------- Function Declaration

//  function-u yaratmaq ucun 2 cur metoddan istifade edirik.

//  1. function declaration:

function sum(a, b = 4) {
  if (!a) {
    return;
  }
  console.log(a + b);
}

sum(); // hec ne gondermedikde sadece funksiyani saxlayir.
sum(7);

// js faylimiz ise dusende, birinci butun kodlari oxuyan global() methodu ise dusur. Birinci butun function-lari oxuyub yaddasa atir. Buna gore functionlasri kodun evvelinde de cagirsaq isleyir.

funcDeclaration();

function funcDeclaration() {
  console.log("function declaration");
}

// 2. function expression

let funcExpression = function () {
  console.log("function expression");
};

// ozunu variable kimi aparir. ona gore ozunden evvel cagirmaq olmur.
funcExpression();

// functionlarin adlarini Console.log-a gonderdikde  functionu gosterir:
console.log(funcExpression);
console.log(funcDeclaration);
console.log(" ");

// ------------ Callback functions

// Bir funksia icinde basqa funksiyani cagirmaq:

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

function showOk() {
  console.log("Get ellerini yu, yemek yemeye gel.");
}

function showCancel() {
  console.log("O zaman derslerini oxu.");
}

// showOk, showCancel function-lari ask funksiyasina parametr(argument) kimi oturulur.
// ask("Acmisanmi?", showOk, showCancel);

// --------- Arrow functions

let hesabla = function () {
  return 5 + 6;
};
// arrow function kimi:

hesabla = () => {
  return 5 + 6;
};

// ve ya bele:

hesabla = () => 5 + 6;

// bir nece parametr olanda:

hesabla = function (a, b) {
  return a + b;
};

// arrow kimi:

hesabla = (a, b) => a + b;

// tek parametrde ise:

hesabla = function (a) {
  return a + 7;
};

// arrow:

// prettier-ignore
hesabla = a => a + 7;

console.log(hesabla(6));
console.log(" ");
// var, let ve const ferqi

// kohne js de var keywordu ile variable yaradirdiq. Bu keyword problemlidir.
// var variable-lar function skop-durlar.

if (true) {
  var yas = 31;
}
console.log(yas); // eslinde error qaytarmalidir.
console.log(" ");

// let ve const da diger proqramlasdirma dillerindeki kimi error qaytarir.

// var loop
for (var i = 0; i < 5; i++) {
  console.log(i, "inside loop");
}

console.log(i, "outside loop");
console.log(" ");

// let loop
for (let j = 0; j < 5; j++) {
  console.log(j, "inside loop");
}

// console.log(j, "outside loop"); => error qaytarir.

// Qlobalda var la variable yazsaq, onu window obyektine properti kimi menimsedir, bu da duzgun deyil.

var aMyProperty = "New my property";

console.log(window);

// Eyni adli property olsa, bilmeden deyerini deyise bilersiz.
// bu sebebden js deyir var-la variable yaratmiyin, muasir js-deki let ve constdan istifade edin.

// function icinde yazilarsa amma bu zaman colde oxunmayacaq. Buna gore function skop deyilir:

function forVar() {
  var newVar = "New variable";
}

// console.log(newVar); => error verecek.
