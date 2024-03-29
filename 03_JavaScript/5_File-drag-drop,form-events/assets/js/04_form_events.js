"use strict";

setTimeout(() => {
  // FORM EVENTS

  // Form-lari querySelector-dan elave olaraq,
  // document.forms yazsaq bize dokumentdeki butun formlari collection seklinde qaytarir.
  // bu collectiondan da formun name="my" ve ya id="my" misal olani,
  // document.forms.my seklinde goture bilirik.
  //  ve ya document.forms[0] yazaraq ilk form-u gotururuk.
  logHeaderBig("Form Events");
  logCode("document.forms", document.forms);

  logCode("document.forms.form_events", document.forms.form_events);

  logCode("document.forms[0]", document.forms[0]);

  log(`const form_events = document.forms.form_events;`);
  const form_events = document.forms.form_events;
  logCode("form_events", form_events);

  const firstnameInput = document.querySelector("#firstname");
  log(`const firstnameInput = document.querySelector("#firstname");`);
  logCode("firstnameInput", firstnameInput);

  firstnameInput.addEventListener(
    "change",
    function (e) {
      console.log("Change event happens");
      this.addEventListener("change", function (e) {
        console.log(this.value, "change");
      });
    },
    { once: true }
  );

  firstnameInput.addEventListener(
    "focus",
    function (e) {
      console.log("Focus event happens");
      firstnameInput.addEventListener("focus", function (e) {
        if (!this.nextElementSibling.classList.contains("d-none")) {
          this.nextElementSibling.classList.add("d-none");
        }
      });
      form_events.addEventListener("submit", function (e) {
        if (this.value === "" || firstnameInput.value === "") {
          e.preventDefault();
        }
      });
    },
    { once: true }
  );

  firstnameInput.addEventListener(
    "blur",
    function (e) {
      console.log("Blur event happens");
    },
    { once: true }
  );

  log(`
  firstnameInput.addEventListener("change", function (e) {
    console.log("Change event happens");
    this.addEventListener("change", function (e) {
      console.log(this.value);
    });
  });

  firstnameInput.addEventListener("focus", function (e) {
    console.log("Focus event happens");
  });

  firstnameInput.addEventListener("blur", function (e) {
    console.log("Blur event happens");
  });

  firstnameInput.addEventListener("input", function (e) {
    console.log(this.value, "input");
  });`);

  firstnameInput.addEventListener("input", function (e) {
    console.log(this.value, "input");
  });

  firstnameInput.addEventListener("blur", function (e) {
    if (this.value === "") {
      this.value = "Qabil";
    } else {
      this.nextElementSibling.classList.add("d-none");
    }
  });

  firstnameInput.addEventListener("input", function (e) {
    if (this.value === "") {
      this.nextElementSibling.classList.remove("d-none");
    } else {
      this.nextElementSibling.classList.add("d-none");
    }
  });

  const forFocusBlurMethods = document.querySelector(
    "#for_focus_and_blur_methods"
  );

  logCode("forFocusBlurMethods", forFocusBlurMethods);

  forFocusBlurMethods.addEventListener("focus", function (e) {
    form_events.addEventListener("submit", function (e) {
      if (this.value === "" || firstnameInput.value === "") {
        e.preventDefault();
      }
    });
  });

  forFocusBlurMethods.addEventListener("blur", function (e) {
    if (this.value === "") {
      this.nextElementSibling.classList.remove("d-none");
      this.focus();
    } else {
      this.nextElementSibling.classList.add("d-none");

      if (firstnameInput.value === "") {
        firstnameInput.focus();
      }
    }
  });

  forFocusBlurMethods.addEventListener("input", function (e) {
    if (this.value === "") {
      this.nextElementSibling.classList.remove("d-none");
      this.focus();
    } else {
      this.nextElementSibling.classList.add("d-none");
    }
  });

  forFocusBlurMethods.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
      if (firstnameInput.value === "") {
        firstnameInput.focus();
      }
    }
  });

  // Select element
  logHeaderSml("Select element");

  const selectElem = document.querySelector("#select");
  logCode("selectElem", selectElem);

  // select element-ine option-lardan istediyimizin value-sini bele menimsetmek olur:
  selectElem.value = "pear";
  log(`// select element-ine option-lardan istediyimizin value-sini bele menimsetmek olur:

  selectElem.value = "pear";`);

  // ve ya index uzerinden de etmek olar:
  selectElem.selectedIndex = 2;
  log(`// ve ya index uzerinden de etmek olar:
  
  selectElem.selectedIndex = 2;`);

  // select element-inde options array-i var:
  logCode(
    `// select element-inde options array-i var -> 

    selectElem.options`,
    selectElem.options
  );

  // ve deyeri options array-i uzerinden de goturmek olar:
  selectElem.options[1].selected = true;
  log(`// ve deyeri options array-i uzerinden de goturmek olar:
  
  selectElem.options[1].selected = true;`);

  logCode(`selectElem.value`, selectElem.value);

  // multy select
  logHeaderSml("Multi select");

  const multy_select = document.querySelector("#multy_select");
  logCode("multy_select", multy_select);

  let options = Array.from(multy_select.options);
  logCode("options", options);

  let selected = options.filter((opt) => opt.selected).map((opt) => opt.value);

  logCode("selected", selected);

  // Cut, Copy, Paste events

  logHeaderSml("Cut, Copy, Paste events");

  const for_cut = document.querySelector("#for_cut");
  logCode("for_cut", for_cut);
  const for_copy = document.querySelector("#for_copy");
  logCode("for_copy", for_copy);
  const for_paste = document.querySelector("#for_paste");
  logCode("for_paste", for_paste);

  for_cut.addEventListener("cut", function (e) {
    console.log(e);
    console.log("" + document.getSelection());
    e.preventDefault();
  });
  for_copy.addEventListener("copy", function (e) {
    console.log(e);
    console.log("" + document.getSelection());
    e.preventDefault();
  });
  for_paste.addEventListener("paste", function (e) {
    console.log(e);
    console.log(e.clipboardData.getData("text/plain"));
    e.preventDefault();
  });

  // Submit event
  logHeaderSml("Submit event");

  const for_submit = document.querySelector("#for_submit");
  logCode(`for_submit`, for_submit);
  const submit_event = document.querySelector("#submit_event");
  logCode(`submit_event`, submit_event);

  // submit event
  for_submit.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Submited");
    if (submit_event.value === "submit") {
      console.log("Submit method will call after 3 second");
      setTimeout(() => {
        // submit method
        this.submit();
      }, 3000);
    } else if (submit_event.value === "reset") {
      console.log("Reset method called");
      // reset method
      this.reset();
    }
  });
  for_submit.addEventListener("reset", function (e) {
    console.log("Reseted");
  });
}, 100);
