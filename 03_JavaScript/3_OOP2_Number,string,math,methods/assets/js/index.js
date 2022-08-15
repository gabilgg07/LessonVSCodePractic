"use strict";

// ------------ Prototype inheritance
let user = {
  name: "Ferid",
};

console.log(user);
console.log(" ");

// Her bir object Js-deki Object obyektinden miras goturur, ve onun bir cox gozel xususiyyetlerini ozunde saxlayir.
// Eger oz yaratdiqlarimiz arasinda miras vermek isteyirikse, bu zaman __proto__ propertisinden istifade edeceyik.

let animal = {
  eats: "Animal eats",
};

let rabbit = {
  jumps: true,
};
console.log(animal, "animal");
console.log(rabbit, "rabbit");
rabbit.__proto__ = animal;
console.log(animal, "animal");
console.log(rabbit, "rabbit"); // prototype chaning(prototayp zencirlenmesi)
console.log(" ");

// yeni rabbit gedir animaldan miras alir, animalda umumi Object-den.
// rabbit animalin xususiyyetlerini ozunde saxliyir:

console.log(`rabbit.eats; => ${rabbit.eats}`);
console.log(" ");

// bir property yazib cagiranda, birinci ozunede varmi baxir, varsa qaytarir, yoxdusa ust prototype da axtarir.
// bu sekilde axtara axtara qalxir. Ilk tapdigini qaytarir:

let cat = {
  eats: "Cat eats",
  name: "Luna",
  __proto__: animal, // bu sekildede yazmaq olur
};

console.log(`cat.eats; => ${cat.eats}`);
console.log(" ");

///  __proto__ -> setter ve getter dir
console.log(cat.__proto__);
console.log(cat.__proto__.eats);
console.log(" ");

let wildCat = {
  age: 5,
  __proto__: cat,
};

console.log(wildCat, "wildCat");
console.log(`wildCat.eats; => ${wildCat.eats}`);
console.log(" ");

// fir in loop-unda object-in hem oz hem de miras aldigi obyektlerin butun key-lerini cixardir:

for (const key in wildCat) {
  console.log(key);
}
console.log(" ");

// eger sadece oz propertilerini cixartmasini istiyirikse:
console.log(Object.keys(wildCat));
console.log(" ");

// butun object-ler Object den miras aldigi ucun, Object-in .hasOwnProperty(prop) methodu var,
// ve bu metod oz keyleri arasinda bu properti varmi deye yoxlayir:

console.log(wildCat.hasOwnProperty("age"));
console.log(wildCat.hasOwnProperty("eats"));
console.log(" ");

// ---------- Class

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }

  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }
}

// miras(inheritance):

class Rabbit extends Animal {
  hide() {
    // parentin methodunu istifade etmek ucun super-den istifade etmek lazimdir.
    super.stop();
    console.log(`${this.name} hides!`);
  }
}

// arrow func-in super-i olmur, mutleq normal func-dan istifade edib super-i cagiririq.

let rabbit2 = new Rabbit("Dovshan");

console.log(rabbit2);
console.log(" ");

rabbit2.hide();
console.log(" ");

// parentin constructorunu cagirmaq ucun de super()-den istifade etmeliyik,
// hemise this-den evvel yaazilmalidir:

class Monkey extends Animal {
  constructor(name, handLength) {
    super(name);
    this.handLength = handLength;
  }
}

let monkey = new Monkey("meymun", 60);

console.log(monkey, "monkey");
console.log(" ");

// -------- Protected and private properties

// protected propertilerin adi _ isaresi ile baslanir:

class Tiger extends Animal {
  _color = "orange";
  constructor(name) {
    super(name);
  }

  get color() {
    return this._color;
  }
}

// ancaq get metodu olanda hemin property read only sayilir.

class Snake extends Animal {
  _uzunluq = 34;
  constructor(name) {
    super(name);
  }

  get uzunluq() {
    return this._uzunluq;
  }

  set uzunluq(value) {
    if (value > this._uzunluq) {
      this._uzunluq = value;
    } else {
      console.log("Not correct value");
      console.log(" ");
      return;
    }
  }
}

class Gurze extends Snake {
  length = this._length;
}

let snake = new Snake("snake-4");
console.log(snake);
snake.uzunluq = 65;
console.log(snake.uzunluq);
console.log(snake._uzunluq);
let gurze = new Gurze("Ilan", 45);
console.log(gurze._uzunluq, "gurze");
// private ve protected browserler terefinden ya yari desteklenir, ya hec desteklenmir.
// private propertilerin adi de # iseresi ile baslayir, ancaq class icinde istifade oluna bilir:

class Bird extends Animal {
  #sound = "cik-cik";
  constructor(name) {
    super(name);
  }

  get sound() {
    return this.#sound;
  }
}

let hen = new Bird("Sara");

// console.log(hen.#sound); -> error verir.
console.log(hen.sound);
console.log(" ");

// instanceof keyword-u object-in bu classdan ve ya bu klasin childelerinden instans alib almadigini yoxlayir:

console.log(gurze instanceof Snake);

console.log(" ");

// Obyektler primitivlere nezeren yaddasda cox yer tuturlar. Buna gore js de bir primitiv type-a (.) qoyub method yazanda , arxada object wrapper acir netice elde edildikden sonra object wrapper silinir.

let soz = "nese soz";
console.log(`soz.toUpperCase() => ${soz.toUpperCase()}`);
console.log(" ");

// bununla yaddasda yer de az tutulur, metodlarda isledilir.

// ---------- Numbers

// syntactic suger olaraq biz numberlerde 1000_000_000 seklinde yaza bilirik:

let bilian = 1000_000_000;
console.log(`let bilian = 1000_000_000; => ${bilian}`);
console.log(" ");

// syntactic suger kodu oxunaqli edir.

// bezen sifirlari e ile evez edib de yazirlar:

let million = 1e6;
console.log(`let million = 1e6; => ${million}`);
console.log(" ");

// 1e-6 ise 0.000001 demekdir:

let numE = 1e-6;
console.log(`let numE = 1e-6; => ${numE}`);
console.log(" ");

// -------- Math class
// Bezi riyazi emeliyyatlar ucun bizde Math adinda classimiz var ve onun metodlari.

// -------- Rounding

// normal round - yuvarlaqlasdirma:
console.log(`Math.round(3.4) => ${Math.round(3.4)}`); //-> 3
console.log(`Math.round(3.5) => ${Math.round(3.5)}`); //-> 4
console.log(" ");

// asagi yuvarlaqlasdirma:
console.log(`Math.floor(3.4) => ${Math.floor(3.4)}`); //-> 3
console.log(`Math.floor(3.6) => ${Math.floor(3.6)}`); //-> 3
console.log(" ");

// yuxari yuvarlaqlasdirma:
console.log(`Math.ceil(3.4) => ${Math.ceil(3.4)}`); //-> 4
console.log(`Math.ceil(3.6) => ${Math.ceil(3.6)}`); //-> 4
console.log(" ");

// kesir hisseni tullayir:
console.log(`Math.trunc(3.4) => ${Math.trunc(3.4)}`); //-> 3
console.log(`Math.trunc(3.6) => ${Math.trunc(3.6)}`); //-> 3

console.log(" ");

// 0-1 arasi random reqem verir:
console.log(`Math.random() => ${Math.random()}`);
console.log(`Math.random() => ${Math.random()}`);
console.log(
  `Math.round((Math.random()*10)) => ${Math.round(Math.random() * 10)}`
);

console.log(" ");

// quvvet ustu:
console.log(`Math.pow(2,4) => ${Math.pow(2, 4)}`);
console.log(" ");

// minimumu qaytarir:
console.log(
  `Math.min(902,4,65,32,90,31) => ${Math.min(902, 4, 65, 32, 90, 31)}`
);
// maksimumu qaytaarir:
console.log(`Math.max(52,4,65,32,90,31) => ${Math.max(52, 4, 65, 32, 90, 31)}`);
console.log(" ");

let price = 43.736;

console.log(`let price = 43.736; 
price.toFixed(1) => ${price.toFixed(1)}
price.toFixed(2) => ${price.toFixed(2)}
price.toFixed(4) => ${price.toFixed(4)}`);
console.log(" ");

// isFinite -> sonlu bir sey(NaN olmayan) gonderilse true qaytarir:
console.log(`isFinite("65") => ${isFinite("65")}`);
console.log(`isFinite(false) => ${isFinite(false)}`);
console.log(" ");
// isFinite -> sonsuz(infinity, NaN) bir sey gonderilse false qaytarir:
console.log(`isFinite(Infinity) => ${isFinite(Infinity)}`);
console.log(`isFinite("yazi") => ${isFinite("yazi")}`);

console.log(" ");

// isNaN -> eded olmayan, ve ya edede cevrile bilmeyen bir sey gonderilse true qaytarir:
console.log(`isNaN(undefined) => ${isNaN(undefined)}`);
console.log(`isNaN("yazi") => ${isNaN("yazi")}`);
console.log(" ");
// isNaN -> sonsuzluq(infinity), eded ola bilen bir sey gonderilse false qaytarir:
console.log(`isNaN("65") => ${isNaN("65")}`);
console.log(`isNaN(false) => ${isNaN(false)}`);
console.log(`isNaN(-Infinity) => ${isNaN(-Infinity)}`);
console.log(" ");

// ------ parseInt, parseFloat

// Evvel kecilen Number() methodu ededlerden ibaret stringi edede cevire bilirdi, basqa symvol olardisa NaN qaytarirdi.

// parseInt("100px") -> ise numberle baslayan stringlerden tam olan ededi cixarda bilir:
console.log(`parseInt("65px") => ${parseInt("65px")}`);

// parseFloat("12.5rem") -> ise kesr olanlari:
console.log(`parseFloat("12.6rem") => ${parseFloat("12.6rem")}`);
console.log(" ");

// -------- Strings

let str = "Men javascript dersi oyrenirem, java yox";
console.log(`let str = "Men javascript dersi oyrenirem";`);
// .charAt(index) -> verilmis index de olan xarakteri qaytarir, yoxdursa "" (empty):
console.log(`str.charAt(6) => ${str.charAt(6)}`);
console.log(" ");
// .indexOf("string") -> verilmis stringin variablemizin icinde varsa indexsini qaytarir, yoxdursa (-1):
console.log(`str.indexOf("java") => ${str.indexOf("java")}`);
console.log(`str.indexOf("php") => ${str.indexOf("php")}`);
console.log(" ");
// .indexOf("string", index) -> ikinci parametr olaraq necenci indeksden baslayim sorusur:
console.log(`str.indexOf("java",5) => ${str.indexOf("java", 5)}`);
console.log(" ");

//.lastIndexOf("string",[index]) -> bu zaman sondan axtarmaga baslayir:
console.log(`str.lastIndexOf("java") => ${str.lastIndexOf("java")}`);
console.log(`str.lastIndexOf("java",30) => ${str.lastIndexOf("java", 30)}`);
console.log(" ");

// .includes("string",[index]) -> verilmis deyeri variable icinde taparsa true, tapmazsa false qaytarir:
console.log(`str.includes("java") => ${str.includes("java")}`);
console.log(`str.includes("php") => ${str.includes("php")}`);
console.log(`str.includes("java", 33) => ${str.includes("java", 33)}`); // 33-cu indexden sonra tapmir.
console.log(" ");

// .startsWith("string",[index]) -> verilmis deyerle (verilmis indexden) variable icinde baslayirsa true, eks halda false qaytarir:
console.log(`str.startsWith("Men") => ${str.startsWith("Men")}`);
console.log(`str.startsWith("java") => ${str.startsWith("java")}`);
console.log(`str.startsWith("java", 32) => ${str.startsWith("java", 32)}`); // 32-ci indexden baslayanda tapir.
console.log(" ");

// .endsWith("string",[index]) -> verilmis deyerle (verilmis indexden) variable icinde baslayirsa true, eks halda false qaytarir:
console.log(`str.endsWith("yox") => ${str.endsWith("yox")}`);
console.log(`str.endsWith("yox") => ${str.endsWith("yox")}`);
console.log(`str.endsWith("java", 36) => ${str.endsWith("java", 36)}`); // 36-ci indexi son olaraq goturende tapir.
console.log(" ");

//  -------- Substring

// ----- .slice(startIndex, [endIndex]) -> startIndex bu indexden basla,
// eger verilibse endIndex indexe qeder(endIndex-in ozunu goturme), verilmiyibse axira kimi kopyala string qaytar:
console.log(`str.slice(4,14) => ${str.slice(4, 14)}`);
console.log(`str.slice(32) => ${str.slice(32)}`);
console.log(" ");
// menfi deyerde vermek olur, bu zaman geriye dogru sayir axirdan, yeni sonu 0(sifir) nezere alir menfiye dogru:
console.log(`str.slice(-8,-4) => ${str.slice(-8, -4)}`);
console.log(" ");
// slice de her zaman son baslangicdan onde olmalidir, musbetdirse boyuk, menfidirse kicik.

// ----- .substring(startIndex, [endIndex]) -> verilmis indexler arasindaki stringi qaytarir.
// Hansinin boyuk veya kicik olmasinin onemi yoxdu, menfi eded qebul etmir(yazdiqda 0(sifir) qebul edir):

console.log(`str.substring(4,14) => ${str.substring(4, 14)}`);
console.log(`str.substring(14,4) => ${str.substring(14, 4)}`);
console.log(`str.substring(32) => ${str.substring(32)}`);
console.log(" ");

// ----- .substr(startIndex [, length]) -> bu indexden basla, varsa bu uzunluq geder, yoxdusa sona qeder kopyala qaytar:
console.log(`str.substr(4,10) => ${str.substr(4, 10)}`);
console.log(`str.substr(0,3) => ${str.substr(0, 3)}`);
console.log(`str.substr(32) => ${str.substr(32)}`);
console.log(" ");
