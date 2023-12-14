import { getDatas } from "../firebase";
import mockItems from "../mock.json";
import ReviewList from "./ReviewList";
import { useState } from "react";

// 페이지에서 중추 역할을 하는 데이터들을 넣어둔다.
function App() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt");

  // sort 함수에 아무런 야규먼트(arguments)도 전달하지 않을 때는 기본적으로 유니코드에 정의된 문자열 순서에 따라 정렬된다.
  // sort 함수는 파라미터(compareFunction)가 입력되지 않으면, 유니코드 순서에 따라서 값을 정렬합니다.
  // => compareFunction(비교하는 함수)가 생략될 경우, 배열의 모든 요소들은 문자열 취급되며, 유니코드 값 순서대로  정렬된다는 의미이다.
  // 그렇기 때문에 숫자를 정렬할 때 우리가 상식적으로 이해하는 오름차순이나 내림차순 정렬이 되지 않는다.
  // 반환값 < 0 : a가 b보다 앞에 있어야 한다.
  // 반환값 === 0 : a와 b의 순서를 바꾸지 않는다.
  // 반환값 > 0 : b가 a보다 앞에 있어야 한다.
  // a-b : 오름차순, b-a : 내림차순

  // (1,2/2,3/3,4/4,5/5,6/6,7/7,8)을 a,b에 담는다.
  // [1, 2, 3, 4, 5, 6, 7, 8];
  // items.sort((a, b) => {
  //   return a - b;
  // });
  // ↓ 위 내용을 줄인 것
  // const sortedItems = items.sort((a, b) => b.createdAt - a.createdAt);

  // order = createdAt
  // a.createdAt == a[order];
  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  // 내림차순
  // 최신개봉일
  const handleNewestClick = () => setOrder("createdAt");

  // 평점
  const handleBestClick = () => setOrder("rating");

  const handleDelete = (id) => {
    // items 에서 id 파라미터와 같은 id를 가지는 요소(객체)를 제거

    // filter() 함수
    // 배열의 모든 요소에 대하여 반복적으로 명시된 콜백 함수를 실행한 후,
    // 그 결과값이 true인 요소들만을 새로운 배열로 반환한다.
    // item = value
    // return 조건:item.id === id(조건에 부합하지 않은 조건을 쓴다.)

    // items.filter((item) => {
    //   return item.id !== id;
    // });
    // ↓ 위 내용을 줄인 것
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  const handleLoadClick = async () => {
    // {
    //   reviews:[]
    // }
    const { reviews } = await getDatas("movie");
  };

  return (
    <div>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>베스트순</button>
      </div>
      <ReviewList items={sortedItems} onDelete={handleDelete} />
      <button onClick={handleLoadClick}>불러오기</button>
    </div>
  );
}

export default App;
