const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");

// 로딩시점에 첫번째 input요소 focus
window.addEventListener("load", () => inputs[0].focus());

inputs.forEach((input, index1) => {
  input.addEventListener("keyup", (e) => {
    const currentInput = input;
    // dom 에서의 위치, 이 전 요소 형제
    const prevInput = input.previousElementSibling;
    const nextInput = input.nextElementSibling;

    // disabled 속성을 확인하기 위한 hasAttribute
    if (
      nextInput &&
      nextInput.hasAttribute("disabled") &&
      currentInput.value !== ""
    ) {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }

    // 숫자가 2개가 들어갈 경우 값을 지워버리고 더이상 실행하지 않겠다
    if (currentInput.value.length > 1) {
      currentInput.value = "";
      return;
    }

    // 백스페이스로 지우는 로직 구현
    if (e.key === "Backspace") {
      inputs.forEach((input, index2) => {
        // 백스페이스키가 입력된 input값과 같거나 오른쪽에 있으면
        // 값을 지우고 + disabled 상태로 전환 + 왼쪽으로 이동
        if (index1 <= index2) {
          input.setAttribute("disabled", true); // disabled 속성추가
          input.value = "";
          if (prevInput) {
            prevInput.focus();
          }
        }
        // 제일 왼쪽에 있는 input은 disabled 되면 안됨.
        if (index1 === 0) {
          inputs[0].removeAttribute("disabled");
          inputs[0].focus();
        }
      });
    }

    if (
      !inputs[inputs.length - 1].hasAttribute("disabled") &&
      inputs[inputs.length - 1].value !== ""
    ) {
      // inputs.length = 3
      // inputs[inputs.length - 1] : 제일 오른쪽에 있는 녀석
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
});

//  마지막 inputs[3] 0~9까지만 숫자리 한자리가 나올수 있게 할 것
// 마지막는 focus OTP Button으로 넘어갈
