"use strict";

setTimeout(() => {
  logHeaderBig("Home Tasks");

  //   is string

  logHeaderSml("is String?");

  function isString(value) {
    if (typeof value === "string" || value instanceof String) {
      console.log("value is a string");
    } else {
      console.log("value is not a string");
    }
  }

  log(`isString("Qabil");`);
  isString("Qabil");
  console.log(" ");

  //   repeat

  logHeaderSml("repeat");

  function repeat(str, count = 1) {
    let result = "";

    for (let i = 0; i < count; i++) {
      result += str;
    }

    return result;
  }

  log(`repeat("Ha ", 3)`);
  console.log(repeat("Ha ", 3));
  console.log(" ");

  //   sum arrays
  logHeaderSml("sum arrays");

  function sumArrays(arr1, arr2) {
    const maxArr = arr1.length > arr2.length ? arr1 : arr2;
    let result = [];

    for (let i = 0; i < maxArr.length; i++) {
      let valueOfArr1 = arr1[i] !== undefined ? arr1[i] : 0;
      let valueOfArr2 = arr2[i] !== undefined ? arr2[i] : 0;
      result.push(valueOfArr1 + valueOfArr2);
    }

    return result;
  }

  const array1 = [3, 6, 1, 8, 5];
  const array2 = [13, 26, 15];

  log(
    `const array1 = [3, 6, 1, 8, 5];\nconst array2 = [13, 26, 15];\nconsole.log(`
  );

  console.log(sumArrays(array1, array2));
  console.log(" ");

  //   merge arrays
  logHeaderSml("merge arrays");

  function merge_arrays(arr1, arr2) {
    let result = arr1;

    for (let i = 0; i < arr2.length; i++) {
      if (result.indexOf(arr2[i]) === -1) {
        result.push(arr2[i]);
      }
    }

    return result;
  }

  const arrForMerge1 = [5, 3, 8, 32, 9];
  const arrForMerge2 = [15, 4, 32, 9, 3, 5];

  log(
    `const arrForMerge1 = [5, 3, 8, 32, 9];\nconst arrForMerge2 = [15, 4, 32, 9, 3, 5];\nmerge_arrays(arrForMerge1, arrForMerge2)`
  );

  console.log(merge_arrays(arrForMerge1, arrForMerge2));
}, 100);
