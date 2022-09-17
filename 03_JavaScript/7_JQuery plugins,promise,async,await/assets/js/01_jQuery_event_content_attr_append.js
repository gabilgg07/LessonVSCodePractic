"use strict";

$(document).ready(function () {
  // EVENTS

  $(".p").click(function (e) {
    console.log("Clicked");
  });

  $(".p").hover(
    function () {
      $(this).css("color", "red");
    },
    function () {
      // evvelki misal css faylindaki style-ina qayidir:
      $(this).css("color", "");
    }
  );

  $(".for-on").on("dblclick", function (e) {
    console.log("double clicked for-on");
  });

  //   bir nece eventi eyni vaxtda key-value mentiqi ile object seklinde gondere bilirik:
  $(".for-on").on({
    mouseenter: function (e) {
      console.log("mouse entered to for-on");
    },
    mouseleave: function (e) {
      console.log("from for-on mouse leaved");
    },
    click: function (e) {
      console.log("for-on clicked");
    },
  });

  $(".only-once").one("click", function (e) {
    console.log("Only-once clicked only once))");
  });

  //   CONTENT & ATTRIBUTE

  const getHtml = $(".getHtml").html();
  logCode("getHtml", getHtml);

  $(".setHtml").html(`<b>Changed</b> Set Html`);

  const getText = $(".getText").text();
  logCode("getText", getText);

  $(".setText").text(`<b>Changed</b> Set Text`);

  const getValue = $(".getValue #forGetVal").val();
  logCode("getValue", getValue);

  $(".setValue #forSetVal").val(`<b>Changed</b> Set Value`);

  const getAttr = $(".getAttr").attr("title");
  logCode("getAttr", getAttr);

  $(".setAttr").attr(`title`, "Chanced title attribute");

  //   .text() ve .html() -de parametr kimi callback function oturmek olur, ve bununla deyismeden evvelki innet contenti de istifade etmek olur:

  $(".htmlCallback").html(function (i, origText) {
    return `<p class="m-0">Old text: ${origText},</p>
    <p class="m-0">New text: Hello World! (index: ${i})</p>`;
  });

  $(".textCallback").text(function (i, origText) {
    return `Old text: ${origText},
    New text: Hello World! (index: ${i})`;
  });

  // ADD NEW HTML CONTENT

  $(".append").append(
    `<span class="text-success ml-2">Appending text in span elem</span>`
  );
  $(".prepend").prepend(
    `<span class="text-warning mr-2">Prepending text in span elem</span>`
  );
  $(".before").before(
    `<li class="text-danger mr-2">Before text in li elem</li>`
  );
  $(".after").after(`<li class="text-info mr-2">After text in li elem</li>`);

  // REMOVE / EMPTY

  console.log($(".remove").text());
  $(".remove").remove();
  console.log($(".empty").text());
  $(".empty").empty();
});
