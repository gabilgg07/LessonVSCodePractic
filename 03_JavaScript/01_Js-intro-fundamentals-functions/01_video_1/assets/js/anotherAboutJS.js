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
    if (i === 5) break outloop;
    console.log(`${i + 1} + ${j + 1} = ${i + 1 + j + 1}`);
  }
}
