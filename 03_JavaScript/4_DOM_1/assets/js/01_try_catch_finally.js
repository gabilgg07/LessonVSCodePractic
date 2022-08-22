"use strict";

// ============ try-catch-finaly

console.log("Try-catch:");
console.log("Kodun error olma ehtimali olacaq hisselerde istifade olunur.");
console.log("Error olarsa catch-e dusur ve catch-deki kodlari icra edir.");
console.log(
  "catch(err)-in de parametri olur, gelen error-u (err) bize parametr kimi qaytarir."
);
console.log(" ");
try {
  console.log(febPayment);
} catch (err) {
  console.log("err: ");
  console.log(err);
  console.log(" ");
  console.log("err.name:");
  console.log(err.name);
  console.log(" ");
  console.log("err.message:");
  console.log(err.message);
  console.log(" ");
  console.log("err.stack:");
  console.log(err.stack);
  console.log(" ");
} finally {
  console.log("Finaly her zaman ise dusur(error olasa da, olmasa da)");
  console.log(" ");
}
console.log("Ola biler ki, biz ozumuz error duzeldib, onu qaytarmaq isteyek.");
console.log("Bu zaman throw keyword-unden istifade edib,");
console.log("new keyword-u ile yaradilmis yeni error-u qaldiririq");
console.log(" ");
try {
  throw new Error("Here error message");
} catch (error) {
  console.log("error: ");
  console.log(error);
}
console.log(" ");

// misal, loading-imiz var spinner adinda. Kod oxumaga baslayan kimi try icinde isShow propertisi true olur.
// birden proqramda error bas verse ve ya vermese bile kod load olub bitdikden sonra false olmasi ucun finally-de yaziriq.
let spinner = {
  isShow: false,
};

try {
  spinner.isShow = true;
  console.log(`try icinde => spinner.isShow = true;`);
  console.log(`throw new Error("Bu bir errordur...");`);
  throw new Error("Bu bir errordur...");
  console.log(" ");
} catch (error) {
  console.log("catch icinde =>");
  console.log(error);
  console.log(" ");
} finally {
  console.log("finally-de => ");
  spinner.isShow = false;
  console.log(`spinner.isShow = false;`);
  console.log(" ");
}
