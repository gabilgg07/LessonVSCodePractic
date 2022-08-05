$(document).ready(function () {
  $(".menu-bar-icon").click(function (e) {
    e.preventDefault();
    $(".nav-list").slideToggle();
  });
});
