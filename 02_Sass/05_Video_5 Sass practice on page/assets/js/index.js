$(document).ready(function () {
  $(".menu-bar-icon").click(function (e) {
    e.preventDefault();
    $(".nav-list").slideToggle();
  });
  $(window).scroll(function () {
    if ($(window).scrollTop() > 60) {
      $("header").css("position", "fixed");
      $("header").css("background-color", "rgb(255 255 255 / 72%)");
    } else if ($(window).scrollTop() < 150) {
      $("header").css("position", "absolute");
      $("header").css("background-color", "transparent");
    }
  });
});
