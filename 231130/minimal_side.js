const slider = document.querySelector(".gallery");
let startX = 0;
let scrollLeft = 0;
// ALL 대문자는 상수
const SCROLL_SPEED = 3;

// 제거할 시 특정함수의 이름
function doScroll(e) {
  e.preventDefault();
  const x = e.pageX;
  const move = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - move;
}

slider.addEventListener("mousedown", (e) => {
  slider.addEventListener("mousemove", doScroll);
  slider.classList.add("onDrag");
  startX = e.pageX;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseup", () => {
  slider.removeEventListener("mousemove", doScroll);
  slider.classList.remove("onDrag");
});

slider.addEventListener("mouseleave", () => {
  slider.removeEventListener("mousemove", doScroll);
  slider.classList.remove("onDrag");
});
