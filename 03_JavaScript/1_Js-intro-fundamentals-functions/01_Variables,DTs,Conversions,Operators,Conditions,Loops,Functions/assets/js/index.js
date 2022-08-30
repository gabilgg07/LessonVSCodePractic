"use strict";

// ============== Js fundamental

console.log("External JS");

// Buna statement deyilir(ifaade), emir vermisik ki, consola Salam sozunu loqla:
console.log("Salam");

// "use strict" mode-u kohne versiya js-deki kodlardan istifadenin qarsisini alir ve modern js versiyasindan istifadesine komek edir.

// yeni misal biz:
// num = 7;
// yazdigimizda evvelki versiyalarda bunu error kimi qebul etmirdi, halbuki num teyin edilmemis variabledir.
// Amma "use strict" istifade etsek (butun kodlardan evvel), bize error verecek ki, number teyin edilmeyib.

// ------------- Variables

// Variable - her hansi bir datani saxlaayacagimiz, ve lazim olanda cagirib icindeki datadan istifade edeceyimiz qutu kimidir.

// Muasir JS-de 2 keyword-le variablelerimizi teyin edirik:
// let, const.
// Kohne Js-de var keywordu ile de teyin (decler) ede bilirdik.

// Mentiq olaraq deyismeyen(sabil) variablelerimizi const keywordu ile teyin edirik ve let-den secilmesi ucun upper caase-le yaziriq:
const MY_BD = "07.07.1991";
const BLACK_COLOR = "#000000";

// Lakin deyise bilecekleri let keywordu ile teyin edirik:
let grade = 50;
grade = 70;

// Eyni adli iki variable teyin etmek olmaz.

// Bir nece variableni 1 decler keyword yazaraq ve , isaresi ile ayiraraq teyin etmek olar:

let student1 = "Samir",
  student2 = "Elchin";

// Variable adlari ele secilmelidir ki, kodumuz oxunaqli olsun.

// Reserved names - variable adi kimi istifade etmek olmur:
// let, var, for, if, cons, function ve s kimi acar sozleri.

// --------------- Data Types

// Js Wake dildir, variablenin evveline data typeni yazmagi mecbur etmir.

// 2 cur olur: Primitive ve Reference.

// Primitive: number, bigInt, string, boolean, null, undefined, symbol.

// Object dt bu primitivlerin bir necesinden mix olaraq saxlayan reference type-dir.

// ------ Number

// Butun musbet, menfi, tam, kesirli ededler, Infinity(musbet sonsuzluq), -Infinity(menfi sonsuzluq), NaN(Not a Number, eded deyil) daxildir.

// Js emeliyyatimiz sehv olsada proqrami dayandirmir:
// misal: reqemi stringe bolsek ->> NaN qaaytarir, yeni deyeri number deyil. 1-i 0-a bolsek Infinity qaytarir.

// ------ BigInt

// ((2^53)-1)-den (-((2^53)-1))-e kimi boyuk reqemlerdir.
// teyin etmek ucun ededin sonun n herfi qoyulmalidir:
let bigIntNum = 765764684654856454n; // kimi.

// ---------- String

// String ya cut dirnaqla:
let text1 = "Cut dirnaqla";
// ya tek dirnaqla:
let text2 = "Tek dirnaqla";
// ya da, backtickden istifade ederek:
let text3 = `Backtick le yazilish`;

// Backtick-in ferqi dirnaqdan icinde parametr, js kod yazmaq olur ${icinde}:
text3 = `Boyuk eded: ${bigIntNum}`;
text3 = `Cem: ${5 + 6}`; // kimi.

// -----------------

// typeof bize variable-in typeni qaytarir.
console.log(typeof text1);
console.log(typeof text1); // her iki cur yazila bilir.

// -----------------

// Alert - ekranda balaca pencere acilaraq alertin icine gonderdiyimiz text-i gosterir. ok duymesine basaraq baglamaq olur:
alert("Men Alertem");

// Confirm - alert kimidir, elave ok ve cancel duymeleri var, ok-e bassaq true, cancel-e ve ya esc-e bassaq false qaytarir.
let result = confirm("Confirm: Tapsirigi etmisenmi?");

if (result) {
  alert("Halal olsun");
} else {
  alert("Xeyirlisi...");
}

// Prompt - confirm kimidir, ferq elave inputu var, 2 parametr qebul edir, 1-si basliq(ve ya telebimiz), 2-si metn, hansi ki, qebul edilecek inputun placeholderi - option kimidir, mecburi deyil, olmasa da olar.
// inputa nese yazib ok duymesine bassaq bize yazdigimizi string type-da qytarir. Cancel-e bassaq ve ya, esc bize null qaytarir:
let yash = prompt("Prompt: Yasinizi qeyd edin:", "18");

console.log(yash);
