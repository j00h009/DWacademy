function generateRandomHex() {
  const num = Math.floor(Math.random() * 256);
  const hex = num.toString(16).padStart(2, "0").toUpperCase();
  return hex;
}

// padStart와 padEnd 함수는 ES8(ES2017)에 새롭게 추가된 기능이다.
// pad는 좌우에 특정한 문자열로 채우는 기능이다.
// 좀 더 자세히 얘기하면 첫번째 파라미터인 maxLength를 받아 문자열의 길이가 maxLength보다 작을 경우 나머지를 특정한 문자열로 채워주는 기능이다.
// 이때 두번째 문자열을 넘겨주지 않으면 빈 공백으로 문자열을 채운다.

export default function generateColorCode() {
  const colorCode = `#${generateRandomHex()}${generateRandomHex()}${generateRandomHex()}`;
  return colorCode;
}
