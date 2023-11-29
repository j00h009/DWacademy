const navBar = document.querySelector("nav");
// 메뉴바 아이콘이 두 개
const menuBtns = document.querySelectorAll(".menu-icon");
const overlay = document.querySelector(".overlay");

// 햄버거버튼에 클릭이벤트 등록
menuBtns.forEach((menuBtn) => {
  menuBtn.addEventListener("click", () => {
    navBar.classList.toggle("open");
  });
});

// 햄버거버튼을 누르지 않아도 메뉴창이 닫히는 효과
overlay.addEventListener("click", () => {
  navBar.classList.remove("open");
});
