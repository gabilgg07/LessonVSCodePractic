"use strict";

setTimeout(() => {
  logHeaderBig("File drag-drop");

  const drop_area = createNewElement("drop_area", ".");
  const imgList = document.querySelector(".img_list");

  let forDragEvents = ["dragenter", "dragover", "dragleave", "drop"];

  forDragEvents.forEach((item) => {
    drop_area.addEventListener(item, function (e) {
      e.preventDefault();
      e.stopPropagation();
    });
  });

  ["dragenter", "dragover"].forEach((item) => {
    drop_area.addEventListener(item, function (e) {
      this.classList.add("active");
    });
  });

  ["dragleave", "drop"].forEach((item) => {
    drop_area.addEventListener(item, function (e) {
      this.classList.remove("active");
    });
  });

  drop_area.addEventListener("drop", function (e) {
    console.log(e, "event");
    console.log(" ");
    // Drop etdiyimiz file-leri FileList seklinde qaytarir
    const files = e.dataTransfer.files;
    console.log(files, "files");
    console.log(" ");

    // FileList-i array-e cevirmek ucun:
    // ... operatorundan istifade edirik,
    // bu zaman yeni array yaranir, kohnesi modifikasiya olunmur.
    const arrFiles = [...files];
    console.log(arrFiles, "arrFiles");
    console.log(" ");

    arrFiles.forEach((file) => previewFile(file));
    arrFiles.forEach((file) => uplodFile(file));

    function previewFile(file) {
      // Biz file ile islemek ucun JS built in olaraq bize FileReader yaradib.
      // FileReader -> file-i goturub emal ede bilen bir constructor-dur.
      const fileReader = new FileReader();

      // Bu constructorun icinde methodlar var
      //  bize lazim olani:
      // .readAsDataURL(Blob) -> parametr kimi gonderdiyimiz file( misal, sekil)-i base64 mentiqinde goturub, oxuyub, emal ede bilir.
      fileReader.readAsDataURL(file);

      // Oxuma prosesi bir nece merhheleden(events) ibaretdir:
      // - loadstart -> yuklenme basladiqda,
      // - progres -> yuklenme muddeti,
      // - load -> error-suz yuklendi,
      // - abort -> legv etmek istedikde abort() method-unu cagirir,
      // - error -> error bas vererse,
      // - loadend -> ugurlu ve ya ugursuz yuklemenin bitmesi.

      // fileReader.onloadend = function (e) {
      //   console.log("loadend");
      // };

      fileReader.addEventListener("error", function (e) {
        console.log(e, "error");
      });
      fileReader.addEventListener("load", function (e) {
        console.log(e, "load");
      });
      fileReader.addEventListener("loadstart", function (e) {
        console.log(e, "loadstart");
      });
      fileReader.addEventListener("progress", function (e) {
        console.log(e, "progress");
      });
      fileReader.addEventListener("loadend", function (e) {
        console.log(e, "loadend");
        /*
        <div class="img_box">
                  <img
                    src="./assets/images/angels_tulips_crying_3.png"
                    alt="angels_tulips_crying"
                  />
                  <div class="icon_box">
                    <i class="fa-solid fa-trash"></i>
                  </div>
                </div>
        */

        const imgBox = document.createElement("div");
        imgBox.className = "img_box";
        const img = document.createElement("img");
        // yukleme ugurla neticelenerse fileReader bize result (base64 mentiqinde) qaytarir.
        img.setAttribute("src", fileReader.result);
        imgBox.append(img);
        // bele de yazmaq olur:
        // img.src = fileReader.result;

        const iconBox = document.createElement("div");
        iconBox.className = "icon_box";
        const i = document.createElement("i");
        i.className = "fa-solid fa-trash";
        i.addEventListener("click", function (e) {
          this.parentElement.parentElement.remove();
        });

        iconBox.append(i);
        imgBox.append(iconBox);

        imgList.append(imgBox);
      });
    }
  });

  const formData = new FormData();
  function uplodFile(file) {
    formData.append("file", file);
    // form data yaradib icine doldurub, api uzerinden backend-e gonderirik

    // api post call

    console.log(formData);
  }

  // ... operatoru:
  const nums = [1, 2, 3];
  // yeni array yaradir, kohnesine deymir:
  const newNums = [...nums, 5, 6];

  console.log(nums, "nums");
  console.log(newNums, "newNums");
}, 100);
