//  다른 파일에서 필요한 일반 함수들 (+ export를 앞에 써서 내보낼 수 있다)

const WINS = {
  rock: "scissor",
  scissor: "paper",
  paper: "rock",
};

function random(n) {
  return Math.ceil(Math.random() * n);
}

// a : 나, b : 상대
export function compareHand(a, b) {
  // 승리 : 1
  // 패배 : -1
  // 무승부 : 0
  // 내가 이기는 경우, 내가 지는 경우, 무승부일 경우
  // => 내가 이기는 경우, 상대가 이기는 경우, 무승부일 경우

  // 내가 이길 때
  if (WINS[a] === b) return 1;
  // 상대가 이길 때
  if (WINS[b] === a) return -1;
  // 무승부 일때
  return 0;
}

export function generateRandomHand() {
  const num = random(3);
  if (num === 1) {
    return "rock";
  } else if (num === 2) {
    return "scissor";
  } else {
    return "paper";
  }
}

// return 값 有
