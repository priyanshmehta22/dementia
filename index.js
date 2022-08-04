const movebackground = document.querySelector(".container");

movebackground.addEventListener("mousemove", (e) => {
  movebackground.style.setProperty("--x", e.offsetX * 0.2 + "px");
  movebackground.style.setProperty("--y", e.offsetY * 0.1 + "px");
});
