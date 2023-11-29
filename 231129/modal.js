const box = document.querySelector(".box");
const text = document.querySelector(".text");
const overlay = document.querySelector(".overlay");
// 모달창이 열려있는지 여부를 저장하는 전역변수
let isModalOpen = false;

function onClick() {
  if (isModalOpen) {
    isModalOpen = false;
    box.classList.remove("modal");
    text.classList.remove("visible");
  } else {
    isModalOpen = true;
    box.classList.add("modal");

    // 박스가 커질때 글자가 흘러넘치는 오류를 해결하기 위한 동작
    setTimeout(() => {
      text.classList.add("visible");
    }, 500);
  }
}
