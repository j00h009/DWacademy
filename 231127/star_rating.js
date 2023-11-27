const stars = document.querySelectorAll(".stars i");
// star를 stars 배열로 모두 가져오기

// html 에서 onclick="{checkStars()}"을 쓰지 않았을 경우
// stars.forEach((star, i) => {
//   star.addEventListener("click", (e) => {
//     // e 익명함수
//     checkStars(i);
//   });
// });

function checkStars(clickIndex) {
  console.log("click", clickIndex);
  // 어느 별이 클릭 되었는지 event객체를 통해 알아온다.
  stars.forEach((star, i) => {
    // 조건식, 클릭된 별의 인덱스보다 작거나 같으면 active 클래스를 추가하고
    // 크면, active클래스를 삭제(remove)한다.
    if (i <= clickIndex) {
      star.classList.add("active");
    } else {
      star.classList.remove("active");
    }
  });
}
