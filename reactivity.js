const lscl = document.getElementById("left-pan");
const rscl = document.getElementById("right-pan");

lscl.addEventListener("click", function () {
  document.querySelector(".songList").scrollBy({
    left: -100,
    behavior: "smooth",
  });
});

rscl.addEventListener("click", function () {
  document.querySelector(".songList").scrollBy({
    left: 100,
    behavior: "smooth",
  });
});
