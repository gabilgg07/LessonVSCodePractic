"use strict";

setTimeout(() => {
  // DRAG & DROP

  logHeaderBig("Drag & Drop");

  const img_box = createNewElement("img_box", ".");

  logHeaderSml("draggable");
  img_box.addEventListener("dragstart", onDragStart);
  img_box.addEventListener("drag", onDrag);
  img_box.addEventListener("dragend", onDragEnd);

  function onDragStart() {
    log("dragstart");
  }
  function onDrag() {
    console.log("drag");
  }
  function onDragEnd() {
    console.log(" ");
    log("dragend");
  }

  log(`logHeaderSml("draggable");
  img_box.addEventListener("dragstart", onDragStart);
  img_box.addEventListener("drag", onDrag);
  img_box.addEventListener("dragend", onDragEnd);

  function onDragStart() {
    log("dragstart");
  }
  function onDrag() {
    console.log("drag");
  }
  function onDragEnd() {
    console.log(" ");
    log("dragend");
  }
`);

  logHeaderSml("drop targets");

  const drop_items = createNewElements("drop_items", ".");

  drop_items.forEach((dI) => {
    dI.addEventListener("dragenter", onDragEnter);
    dI.addEventListener("dragover", onDragOver);
    dI.addEventListener("dragleave", onDragLeave);
    dI.addEventListener("drop", onDrop);
  });

  function onDragEnter() {
    log("dragenter");
  }
  function onDragOver() {
    console.log("dragover");
  }
  function onDragLeave() {
    log("dragleave");
  }
  function onDrop() {
    log("drop");
  }

  log(`drop_items.forEach((dI) => {
    dI.addEventListener("dragenter", onDragEnter);
    dI.addEventListener("dragover", onDragOver);
    dI.addEventListener("dragleave", onDragLeave);
    dI.addEventListener("drop", onDrop);
  });

  function onDragEnter() {
    log("dragenter");
  }
  function onDragOver() {
    console.log("dragover");
  }
  function onDragLeave() {
    log("dragleave");
  }
  function onDrop() {
    log("drop");
  }`);

  logHeaderSml("drag-drop");

  const imgBox = createNewElement("imgBox", ".");

  imgBox.addEventListener("dragstart", onDragStartImgBox);
  imgBox.addEventListener("dragend", onDragEndImgBox);

  function onDragStartImgBox() {
    setTimeout(() => {
      this.classList.add("d-none");
    }, 0);
  }
  function onDragEndImgBox() {
    this.classList.remove("d-none");
  }

  const drop_boxs = createNewElements("drop_boxs", ".");

  drop_boxs.forEach((dBox) => {
    dBox.addEventListener("dragenter", onDragEnterDBox);
    dBox.addEventListener("dragover", onDragOverDBox);
    dBox.addEventListener("dragleave", onDragLeaveDBox);
    dBox.addEventListener("drop", onDropDBox);
  });

  function onDragEnterDBox() {
    this.classList.add("active");
  }
  function onDragOverDBox(e) {
    e.preventDefault();
  }
  function onDragLeaveDBox() {
    this.classList.remove("active");
  }
  function onDropDBox() {
    this.append(imgBox);
  }
}, 100);
