// OOP

// Object

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
