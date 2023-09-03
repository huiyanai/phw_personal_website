document.addEventListener("DOMContentLoaded", function () {
  var footer = document.getElementById("myfooter");
  var scrollThreshold = 10; // 调整此值以适应你的需求

  window.addEventListener("scroll", function () {
    if (window.scrollY >= scrollThreshold) {
      footer.style.display = "block";
    } else {
      footer.style.display = "none";
    }
  });
});
