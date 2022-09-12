"use strict";

setTimeout(() => {
  // JSON

  logHeaderBig("JSON");

  const user = {
    name: "Qabil",
    age: 31,
  };

  logHeaderSml("JSON.stringify");
  const userJSON = JSON.stringify(user);

  logCode("user", user);
  logCode("userJSON", userJSON);

  const bookJSON = '{"price": 35,"category": "Fantezy","page": 435,"rate": 5}';

  logHeaderSml("JSON.parse");
  const book = JSON.parse(bookJSON);

  logCode("bookJSON", bookJSON);
  logCode("book", book);
  logCode("book.price", book.price);

  // Date

  logHeaderBig("Date");

  logHeaderSml("Date()");

  const dateNow = new Date();
  logNewItem(`const dateNow = new Date();`, "dateNow", dateNow);

  logHeaderSml("Date(year,month,d,h,min,s,ms)");
  // en az 2 parametr gonderende: il, ay, gun, saat, deqiqe, saniye, millisaniye ardicilligi ile gondermek olur.
  // evvelki 2 parametr olmalidi, digerleri optionaldi(olmasa da olar).
  // ay-lari array seklinde ozunde saxladigindan ilk ay(yanvar) 0-ci hesab olunur:
  const myBirthday = new Date(1991, 6, 7);
  logNewItem(
    `const myBirthday = new Date(1991, 6, 7);`,
    "myBirthday",
    myBirthday
  );

  // eger ilk parametri tek ve ya cut reqem yazsaq evveline 19 qoyacaq:

  const withOneDigit = new Date(9, 2, 14);
  logNewItem(
    `const withOneDigit = new Date(9,2,14);`,
    "withOneDigit",
    withOneDigit
  );

  logHeaderSml("Date(millisecond)");
  // 1 parametr gonderende millisecond kimi goturur ve ilk tarixe elave edir(1970-e):
  const firstDate = new Date(0);
  logNewItem(`const firstDate = new Date(0);`, "firstDate", firstDate);

  const milliSecOfYear = 1000 * 60 * 60 * 24 * 365;
  logNewItem(
    `const milliSecOfYear = 1000 * 60 * 60 * 24 * 365;`,
    "milliSecOfYear",
    milliSecOfYear
  );
  // misal 1 il qeder millisaniyeni hesablayib, parametr kimi otursek, 1971 olur:
  const dateMilli = new Date(milliSecOfYear);
  logNewItem(
    `const dateMilli = new Date(milliSecOfYear);`,
    "dateMilli",
    dateMilli
  );

  // Parametr seklinde (-) menfi millisaniye otursek 1970/Jan/01 tarixinden geriye dogru cixacaq.

  const negativeMilliSan = new Date(-milliSecOfYear);
  logNewItem(
    `const negativeMilliSan = new Date(-milliSecOfYear);`,
    "negativeMilliSan",
    negativeMilliSan
  );

  // date string

  //
  logHeaderSml("Date(date sting)");

  const dateString = new Date("2014/2/14");
  logNewItem(
    `const dateString = new Date("2014/2/14");`,
    "dateString",
    dateString
  );

  const dateString2 = new Date("2015-3-15");
  logNewItem(
    `const dateString2 = new Date("2015-3-15");`,
    "dateString2",
    dateString2
  );
  const dateString3 = new Date("October 10,2010 10:10:10");
  logNewItem(
    `const dateString3 = new Date("October 10,2010 10:10:10");`,
    "dateString3",
    dateString3
  );

  const utcString = new Date().toUTCString();
  logNewItem(
    `const utcString = new Date().toUTCString();`,
    "utcString",
    utcString
  );

  const toDateStr = new Date().toDateString();
  logNewItem(
    `const toDateStr = new Date().toDateString();`,
    "toDateStr",
    toDateStr
  );

  const toISOStr = new Date().toISOString();
  logNewItem(
    `const toISOStr = new Date().toISOString();`,
    "toISOStr",
    toISOStr
  );

  const autoCorrection = new Date(20, 3, 61);
  logNewItem(
    `const autoCorrection = new Date(20,3,31);`,
    "autoCorrection",
    autoCorrection
  );

  logHeaderSml("Date Get Methods");

  const exampleDate = new Date(2017, 6, 8, 11, 43, 23, 111);
  logNewItem(
    `const exampleDate = new Date(2017, 6, 8, 11, 43, 23, 111);`,
    "exampleDate",
    exampleDate
  );

  logCode("exampleDate.getFullYear()", exampleDate.getFullYear());

  logCode("exampleDate.getMonth()", exampleDate.getMonth());

  logCode("exampleDate.getDate()", exampleDate.getDate());

  logCode("exampleDate.getHours()", exampleDate.getHours());

  logCode("exampleDate.getMinutes()", exampleDate.getMinutes());

  logCode("exampleDate.getSeconds()", exampleDate.getSeconds());

  logCode("exampleDate.getMilliseconds()", exampleDate.getMilliseconds());

  logCode("exampleDate.getTime()", exampleDate.getTime());

  logCode("exampleDate.getDay()", exampleDate.getDay());

  const monthAZ = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "İyun",
    "İyul",
    "Avqust",
    "Sentyabr",
    "Oktyabr",
    "Noyabr",
    "Dekabr",
  ];

  log(
    `const monthAZ = ["Yanvar","Fevral","Mart","Aprel","May","İyun","İyul","Avqust","Sentyabr","Oktyabr","Noyabr","Dekabr"];`
  );

  const weekDays = [
    "Bazar",
    "Bazar ertəsi",
    "Çərşənbə axşamı",
    "Çərşənbə",
    "Cümə axşamı",
    "Cümə",
    "Şənbə",
  ];

  log(`
  const weekDays = [
    "Bazar",
    "Bazar ertəsi",
    "Çərşənbə axşamı",
    "Çərşənbə",
    "Cümə axşamı",
    "Cümə",
    "Şənbə",
  ];`);

  log(
    `${weekDays[new Date().getDay()]} - ${new Date().getDate()} ${
      monthAZ[new Date().getMonth()]
    }, ${new Date().getFullYear()}`
  );

  logHeaderSml("Date Set Methods");
}, 100);
