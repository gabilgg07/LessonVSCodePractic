"use strict";

$(document).ready(function () {
  // CLASS
  logHeaderBig("Class");

  logHeaderSml("addClass");

  logCode(`$(".for-addClass").attr("class")`, $(".for-addClass").attr("class"));
  $(".for-addClass").addClass("active");
  log(`$(".for-addClass").addClass("active");`);
  logCode(`$(".for-addClass").attr("class")`, $(".for-addClass").attr("class"));

  logHeaderSml("removeClass");

  logCode(
    `$(".for-removeClass").attr("class")`,
    $(".for-removeClass").attr("class")
  );
  $(".for-removeClass").removeClass("removeMe");
  log(`$(".for-removeClass").removeClass("removeMe");`);
  logCode(
    `$(".for-removeClass").attr("class")`,
    $(".for-removeClass").attr("class")
  );

  logHeaderSml("toggleClass");

  logCode(
    `$(".for-toggleClass").attr("class")`,
    $(".for-toggleClass").attr("class")
  );
  $(".for-toggleClass").toggleClass("toggleMe");
  log(`$(".for-toggleClass").toggleClass("toggleMe");`);
  logCode(
    `$(".for-toggleClass").attr("class")`,
    $(".for-toggleClass").attr("class")
  );
  $(".for-toggleClass").toggleClass("toggleMe");
  log(`$(".for-toggleClass").toggleClass("toggleMe");`);
  logCode(
    `$(".for-toggleClass").attr("class")`,
    $(".for-toggleClass").attr("class")
  );

  logHeaderSml("Css");

  logCode(`$(".for-css").css("color")`, $(".for-css").css("color"));

  $(".for-css").css("color", "gray");
  log(`$(".for-css").css("color", "gray")`);

  logCode(`$(".for-css").css("color")`, $(".for-css").css("color"));

  log(`
  $(".for-css").css("backgroundColor"): ${$(".for-css").css("backgroundColor")},
  $(".for-css").css("border"): ${$(".for-css").css("border")},
  $(".for-css").css("padding"): ${$(".for-css").css("padding")},
  $(".for-css").css("border-radius"): ${$(".for-css").css("border-radius")},
  
  `);

  $(".for-css").css({
    backgroundColor: "yellow",
    border: "2px solid black",
    padding: "4px 7px",
    "border-radius": "4px",
  });

  log(`$(".for-css").css({
    backgroundColor: "yellow",
    border: "2px solid black",
    padding: "4px 7px",
    "border-radius": "4px",
  });`);

  log(`
  $(".for-css").css("backgroundColor"): ${$(".for-css").css("backgroundColor")},
  $(".for-css").css("border"): ${$(".for-css").css("border")},
  $(".for-css").css("padding"): ${$(".for-css").css("padding")},
  $(".for-css").css("border-radius"): ${$(".for-css").css("border-radius")},
  
  `);

  logHeaderBig("Dimensions");

  log(`
  $(".for-dimensions").width(): ${$(".for-dimensions").width()} 
  -> content width(${$(".for-dimensions").width()}),

  $(".for-dimensions").height(): ${$(".for-dimensions").height()} 
  -> content height(${$(".for-dimensions").height()}),

  $(".for-dimensions").innerWidth(): ${$(".for-dimensions").innerWidth()} 
  -> (content width(${$(".for-dimensions").width()}) + padding(20px)*2),

  $(".for-dimensions").innerHeight(): ${$(".for-dimensions").innerHeight()} 
  -> (content height(${$(".for-dimensions").height()}) + padding(20px)*2),

  $(".for-dimensions").outerWidth(): ${$(".for-dimensions").outerWidth()} 
  -> (content width(${$(
    ".for-dimensions"
  ).width()}) + padding(20px)*2 + border(5px)(5px)*2),

  $(".for-dimensions").outerHeight(): ${$(".for-dimensions").outerHeight()} 
  -> (content height(${$(
    ".for-dimensions"
  ).height()}) + padding(20px)*2 + border(5px)*2),

  $(".for-dimensions").outerWidth(true): ${$(".for-dimensions").outerWidth(
    true
  )} 
  -> (content width(${$(
    ".for-dimensions"
  ).width()}) + padding(20px)*2 + border(5px)*2 + margin(10px)*2),

  $(".for-dimensions").outerHeight(true): ${$(".for-dimensions").outerHeight(
    true
  )} 
  -> (content height(${$(
    ".for-dimensions"
  ).height()}) + padding(20px)*2 + border(5px)*2 + margin(10px)*2)
  `);

  logHeaderBig("Traversing");

  logHeaderSml("Ancestors");

  logCode(`$(".for-parent").parent()`, $(".for-parent").parent());

  logCode(`$(".for-parents").parents()`, $(".for-parents").parents());

  logCode(
    `$(".for-parents-slctr").parents("div")`,
    $(".for-parents-slctr").parents("div")
  );

  logCode(
    `$(".for-parentsUntil").parentsUntil(".row")`,
    $(".for-parentsUntil").parentsUntil(".row")
  );

  logHeaderSml("Descendants");

  console.log("children() return only first level children ->");
  logCode(`$(".for-children").children()`, $(".for-children").children());

  logCode(
    `$(".for-children").children(".child2")`,
    $(".for-children").children(".child2")
  );

  logCode(
    `$(".for-find").find(".sub-child")`,
    $(".for-find").find(".sub-child")
  );

  logHeaderSml("Sibling");

  logCode(`$(".for-siblings").siblings()`, $(".for-siblings").siblings());
  logCode(`$(".for-next").next()`, $(".for-next").next());
  logCode(`$(".for-nextAll").nextAll()`, $(".for-nextAll").nextAll());
  logCode(
    `$(".for-nextUntil").nextUntil("[class*='for']")`,
    $(".for-nextUntil").nextUntil("[class*='for']")
  );
  logCode(`$(".for-prev").prev()`, $(".for-prev").prev());
  logCode(`$(".for-prevAll").prevAll()`, $(".for-prevAll").prevAll());
  logCode(
    `$(".for-prevUntil").prevUntil("[class*='for']")`,
    $(".for-prevUntil").prevUntil("[class*='for']")
  );

  logHeaderSml("Filtering");

  logCode(
    `$(".for-first").first().css("color", "red")`,
    $(".for-first .example").first().css("color", "red")
  );

  logCode(
    `$(".for-last").last().css("color", "darkgreen")`,
    $(".for-last .example").last().css("color", "darkgreen")
  );

  logCode(
    `$(".for-eq").eq(1).css("color", "darkgreen")`,
    $(".for-eq .example").eq(1).css("color", "lightblue")
  );

  logCode(
    `$(".for-filter").filter(".active").css("color", "darkgreen")`,
    $(".for-filter .example").filter(".active").css("color", "violet")
  );

  logCode(
    `$(".for-not").not(".not-me").css("color", "darkgreen")`,
    $(".for-not .example").not(".not-me").css("color", "crimson")
  );

  // EFFECTS

  // Show-Hide

  $("#btnHide").click(function (e) {
    $(".for-show-hide").hide();
  });
  $("#btnShow").click(function (e) {
    $(".for-show-hide").show();
  });
  $("#btnToggle").click(function (e) {
    $(".for-show-hide").toggle();
  });

  $("#btnHideSlow").click(function (e) {
    $(".for-show-hide").hide("slow");
  });
  $("#btnShowFast").click(function (e) {
    $(".for-show-hide").show("fast");
  });
  $("#btnToggle2s").click(function (e) {
    $(".for-show-hide").toggle(2000);
  });
  $("#btnToggleCallback").click(function (e) {
    $(".for-show-hide").toggle(200, function (e) {
      alert("Toogled with callback function");
    });
  });

  // Fade-In-Out

  $("#btnFadeIn").click(function (e) {
    $(".for-fade").fadeIn();
  });
  $("#btnFadeOut").click(function (e) {
    $(".for-fade").fadeOut();
  });
  $("#btnFadeToggle").click(function (e) {
    $(".for-fade").fadeToggle();
  });
  $("#btnFadeTo").click(function (e) {
    $(".for-fade").fadeTo("slow", 0.3);
  });

  // Slide-Down-Up

  $("#btnSlideDown").click(function (e) {
    $(".for-slide").slideDown();
  });
  $("#btnSlideUp").click(function (e) {
    $(".for-slide").slideUp();
  });
  $("#btnSlideToggle").click(function (e) {
    $(".for-slide").slideToggle();
  });

  // Animate-Stop-Chaining

  $("#animate").click(function (e) {
    $(".for-animate-stop")
      // Animate
      .animate(
        {
          left: "330px",
        },
        3000,
        function (e) {
          console.log("animation 1 ended");
        }
      )
      // Chaining
      .animate(
        {
          left: "0px",
        },
        3000,
        function (e) {
          console.log("animation 2 ended");
        }
      );
  });
  $("#btnStop").click(function (e) {
    // Stop
    $(".for-animate-stop").stop();
  });
});
