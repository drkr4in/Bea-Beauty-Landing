var test = document.querySelector(".nav");
window.addEventListener("scroll", function (e) {
  var scroll =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;
  test.style.opacity = 0.5 + Math.max(0, Math.min(1, -scroll / 150 + 2));
});
