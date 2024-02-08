import mockItems from "../mock.json";

const mock = mockItems;
const LIMITS = 10;

// lastItemNum :
export function getMockItems(lastItemNum) {
  if (lastItemNum === mock.length) return;

  lastItemNum = lastItemNum ? lastItemNum : 0;
  const nextItemNum = lastItemNum + LIMITS;
  // 20 = (lastItemNum + LIMITS)

  // 갯수 : 10 10 10 10
  // 인덱스 : 0~9 10~19 20~29 30~39

  // slice : 두번째 자리의 가지고 올 값 까지
  // arr = [1,2,3,4]
  // arr.slice(1, 3); => [2,3]

  return { data: mock.slice(lastItemNum, nextItemNum), nextItemNum };
}

// filter 함수는 map함수와 구조가 비슷하다. ((value, index, array)=>)
export function getMockItemsByFilter(filter) {
  return { data: mock.filter(({ mbti }) => mbti == filter) };
}
