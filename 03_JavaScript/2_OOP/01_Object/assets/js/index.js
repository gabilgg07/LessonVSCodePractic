"use strict";

// ============= OOP

// ---------- Object

let user = {};

// {} bu eyri moterizeden artiq js bilir ki user object-dir.

// let user = new Object(); ikinci usulu da budur, object yaratmagin.

// Object icinde melumatlar key-value seklinde saxlanilir:

let student = {
  name: "Huseyn",
  age: 18,
  grades: [90, 80],
  isMarried: false,
};

// ferqli nov data type-lardan istifade ede bilirik.

// Programlasdirmada CRUD mentiqi var:
// C - create, R - read, U - update, D - delete

// objectlerde key-value-de Create ucun:
student.surname = "Abbasov";
// yazaraaq elde ede bilerik.

console.log(student);

// Read ucun, objectin adi ve noqte qoyub keyin adini yazaraq olur:

console.log(student.age);

// Update ucun, read kimi cagirib, create kimi menimsedirik:

student.age = 21;

console.log(student);

// Delete ucun artiq delete acar sozunden istifade edilir:

delete student.isMarried;

console.log(student);

// Yuxarida yazilan keyler objectin property-leri syilir.
// Eger object icinde function yazsaq o olur, methodu:

let student2 = {
  name: "Sabir",
  surname: "Eliyev",
  fullname: function () {
    console.log(`${this.name} ${this.surname}`);
  },
};

student2.fullname();

// Crud emeliyyatlarini biz dot notation-la etdik
// dot notation -> objectName.key
console.log(student2.name);
// bir de var Square Brackets:
// objectName["key"]:
console.log(student2["surname"]); // key mutleq dirnaq icinde olmalidir

// Biz 2 sozden ibaretet key yazarsaq, bunu sting icinde ancaq yaza bilerik:

let student3 = {
  name: "Eli",
  "is married": true,
};

// ve bu zaman bunu dot notationla cagirmaq olmur, ancaq Square Brackets-le cagira bilerik:

console.log(student3["is married"]);

// arxa terefde butun keyler stringdir
// Object icindeki key-ler yalniz string ve simple type ola bilerler.

// let dynamicKey = prompt("Key-i daxil edin: ");
// student3[dynamicKey] = 53;

// console.log(student3);

// Key-in objectde var olub olmamasini in keywordu ile bilmek olar:

console.log("surname" in student3); // => false

console.log(student3.surname); // yoxlayarsaq bize undefined qaytaracaq.
// bize ise bezen key-leri undefined-e beraber etnek lazim gelir. ona gore key-in olub olmamasini bize bildirmis olmur.

let student4 = {
  name: "Selim",
  age: undefined,
};

console.log("age" in student4);
console.log(" ");
// in den istifade ederek bir for in dongusu yaradilib:

for (let key in student) {
  console.log(key);
}
console.log(" ");
// Array-in for of loop-unu objecte tedbiq etmek olmur.

// Keylere ededler yazarsaq onlri say ardicilligi ile cixardir for in loop-unda:

let newObj = {
  45: "Qirx bes",
  44: "qirx dord",
  51: "elli bir",
  4: "dord",
};
//  arxa terefde conversesion edir
for (const key in newObj) {
  console.log(key);
}

// bunun qarsisini almaq ucun evveline + isaresi qoyuruq:

let newObj2 = {
  "+45": "Qirx bes",
  "+44": "qirx dord",
  "+51": "elli bir",
  "+4": "dord",
};

for (const key in newObj2) {
  console.log(+key);
}
console.log(" ");
// icinde objrct olan variable-ni basqa yeni variable-ye beraber etdikde eyni yere reference edir.

let studentA = {
  name: "Sara",
  age: 22,
};

let studentB = studentA;

console.log(studentA, "student A");
console.log(studentB, "student B");

studentB.name = "Leyla";

console.log("After changed");
console.log(studentA, "student A");
console.log(studentB, "student B");
console.log(" ");
// iki ferqli reference-li obyekt yaratmaq ucun ise:

// 1 usul for in loopu ile:

let userA = {
  name: "Sevda",
  surname: "Hesenova",
  age: 24,
};

let userB = {};

for (const key in userA) {
  userB[key] = userA[key];
}

console.log(userA, "user A");
console.log(userB, "user B");

userB.name = "Leyla";

console.log("After changed");
console.log(userA, "user A");
console.log(userB, "user B");
console.log(" ");

// 2ci usul Object.assign(target,source, [object]) methodu

let userC = {
  name: "Samire",
  surname: "Selimova",
  age: 26,
};

let userD = {};

Object.assign(userD, userC);

console.log(userC, "user C");
console.log(userD, "user D");

userD.name = "Leyla";

console.log("After changed");
console.log(userC, "user C");
console.log(userD, "user D");
console.log(" ");

// elaave object de oture bilerik methhoda:

let userE = {};
Object.assign(userE, userD, { isMarried: false });

console.log(userE);
console.log(" ");
// Js de garbic collection-a erishhmek olmur. Eger bir varibale null-dursa ve biz ona erise bilmirikse, bu zaman automatik silinir.

let user1 = {
  name: "Taleh",
  age: 32,
};

user = null; // -> silinir

let user2 = {
  name: "Rauf",
  age: 27,
};

let admin = user2;
user2 = null;

// bu zaman silinmir, cunki admin variableden ona olasa bilirik.
//  gerek admin de null olsun ki, silinsin.

// Kod tekrari olmamasi ucun, eyni parametrlere sahib obyektleri yaratmaq ucun usullar var:

// -------- Factory functions

function createStudent(name, age) {
  return {
    name: name,
    age: age,
  };
}

// muasir js de eyni argument eyni key olaraq qayidirsa:

function createUser(name, age) {
  return {
    name,
    age,
  };
}

let stn1 = createStudent("Elsever", 31);
let stn2 = createStudent("Qasim", 23);

console.log(stn1, "stn1");
console.log(stn2, "stn2");

let usr1 = createUser("User1", 34);
let usr2 = createUser("User2", 37);

console.log(usr1, "usr1");
console.log(usr2, "usr2");
console.log(" ");

// Ikinci usul Constructor functions

// Constructor funcs Paskal case-le yazilirlar.

function Student(name, age) {
  this.name = name;
  this.age = age;
}

// bu usulla object yaradanda new keyword-unden istifade edirik

let std1 = new Student("Huseyn", 3);
let std2 = new Student("Hikmet", 3);

console.log(std1);
console.log(std2);

console.log(" ");

// Globalda this yazib cagirsaq Browserin Window obyektini qaytarir:

console.log(this);
console.log(" ");

// this keywordu function skopdur,
// her zaman icinde bulundugu methodun cagrildiginda noqteden (.) sola baxir.

function SayHi() {
  console.log(`${this.name}, salam.`);
}

let std3 = {
  name: "Sofi",
  age: 22,
};

std3.SayFromHi = SayHi;

std3.SayFromHi();

let std4 = {
  name: "Syam",
  age: 31,
  sayHi: function () {
    console.log(`${this.name}, salam`);
  },
};

std4.sayHi();
console.log(" ");

// methodu bele de yazmaq olur:
let std5 = {
  name: "Xeyal",
  age: 31,
  sayHi() {
    console.log(`${this.name}, salam`);
  },
};

// eger biz obyektde func icince func yazsaq ve this.name cagirsaq error qaytaracaq, cunki this func skopdur.

let std6 = {
  name: "Ehdi",
  age: 31,
  sayHi: function () {
    function funcIntoFunc() {
      console.log(`${this.name}, salam`);
    }
    funcIntoFunc();
  },
};

// std6.sayHi(); => error qaytarir.
// bunun qarsisini almaq ucun arrow func-dan istifade edirik,
// cunki arrow func-da this leksikal skop oldugundan esas functionu tniyir:

let std7 = {
  name: "Ehtibar",
  age: 31,
  sayHi: function () {
    let funcIntoFunc = () => {
      console.log(`${this.name}, salam`);
    };
    funcIntoFunc();
  },
};

std7.sayHi();
console.log(" ");
// Eger bir constructor func daxilinde local variable yaratmisiqsa, onu colde cagirib istifade etmek olmur.
// Bunun ucun ancaq setder ve getder methodlari yaradaraq tesir etmek olar:

function User(name, age) {
  this.name = name;
  this.age = age;

  let test = 165;

  // en besit formasi bir funksiya yaradib onu return etmekdir:

  // this.getTest = function () {
  //   return test;
  // };
  // this.setTest = function (value) {
  //   test = value;
  //   return test;
  // };

  // ve ya bu usulla etmek olar ki, funksiya kimi cagirmaga ehtiyac olmasin:

  Object.defineProperty(this, "test", {
    get() {
      return test;
    },
    set(value) {
      test = value;
      return test;
    },
  });
}

let userTest = new User("Qabil", 31);

// console.log(userTest.getTest());
// userTest.setTest(543);
// console.log(userTest.getTest());

console.log(userTest);
console.log(userTest.test);
userTest.test = 122;
console.log(userTest.test);
console.log(userTest);
