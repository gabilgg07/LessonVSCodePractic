"use strict";

// ------- Type Conversions

// Bezen olur ki, 1 type-i basqa bir type cevirmeli oluruq, bu zaman bize conversion-lar lazim olur,
// Misal boolean bir type stringe cevirmek ucun String() methodundan istivade edirik:

let value = true;
console.log(`let value = true; => typeof value: ${typeof value}`);
value = String(value);
console.log(`value = String(value); => typeof value: ${typeof value}`);

// Bezi emeliyyatlarda js stringi numbere cevirir:
console.log(`"6" / "2" => ${"6" / "2"}`);
console.log(`typeof ("6" / "2"); => ${typeof ("6" / "2")}`);

// Belede stringimizi numbere cevirmek ucun Number()-den istifade edirik:
console.log(`typeof "123": ${typeof "123"}`);
console.log(`typeof Number("123"): ${typeof Number("123")}`);
