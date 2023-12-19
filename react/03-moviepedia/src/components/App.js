import { getDatas } from "../firebase";
import mockItems from "../mock.json";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";
import { useEffect, useState } from "react";
import "./ReviewForm.css";

// 상수(변하지 않는 수)
const LIMIT = 5;

// 페이지에서 중추 역할을 하는 데이터들을 넣어둔다.
function App() {
  // 화면에 변화가 필요할 때 쓰는 state
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt");
  const [lq, setLq] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  // 더보기 버튼을 화면 실행 중 비활성화를 시키기 위해 선언.
  const [loadingError, setLoadingError] = useState(null);
  // null = loadingError
  const [hasNext, setHasNext] = useState(false);

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
  // const sortedItems = items.sort((a, b) => b[order] - a[order]);
  // sort는 파이어베이스에서 하기 때문에 사용안해도 됨

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

  const handleLoad = async (options) => {
    let result;
    try {
      setIsLoading(true);
      setLoadingError(null);
      result = await getDatas("movie", options);
    } catch (error) {
      console.error(error);
      setLoadingError(error);
      return;
    } finally {
      setIsLoading(false);
      // 앞에 try, catch가 실행되지 않아도 마지막에 무조건 실행되는 부분
    }

    const { reviews, lastQuery } = result;
    if (options.lq === undefined) {
      setItems(reviews);
    } else {
      setItems((prevItems) => [...prevItems, ...reviews]);
    }
    setLq(lastQuery);
    setHasNext(lastQuery);
    // reviews라고 이름을 쓰기싫고 result로 변경하고 싶을 경우 { reviews : result } 라고 변경해준다.
    // 디폴트값을 주고 싶을 경우 { reviews : result = 0 }

    // {
    //   reviews:[]
    // }
    // reviews = 객체
    // const result = await getDatas("movie");
    // const reviews = result.reviews;
    // ↓ 구조분해할당
    // const { reviews } = result;
  };

  const handleLoadMore = () => {
    handleLoad({ order, lq, limit: LIMIT });
  };
  // useEffect 는 arguments 로 콜백함수와 배열을 넘겨준다.
  // []은 dependency list 라고 하는데 위에서 handleLoad 함수가 무한루프 작동을 하기 때문에 처리를 해줘야 하는데
  // 리액트는 [] 안에 있는 값들을 앞에서 기억한 값이랑 비교한다.
  // 비교해서 다른경우에만 콜백함수를 실행한다.(그 전에는 콜백함수를 등록만 해놓음)
  useEffect(() => {
    handleLoad({ order, lq: undefined, limit: LIMIT });
  }, [order]);

  return (
    <div>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>베스트순</button>
      </div>
      <ReviewForm />
      <ReviewList items={items} onDelete={handleDelete} />
      {
        // 에러가 있을 시 나타낼 요소, 텍스트들을 출력
        // && : 조건부 연산자
        // 조건부 연산자(react에서 주로 많이 사용.)
        // AND : 앞에 나오는 값이 true 이면 렌더링
        // OR : 앞에 나오는 값이 false 이면 렌더링
        // truthy(참 같은 값) falsy(거짓 같은 값)
        // falsy ==> null, NaN, 0, 빈 문자열, undefined

        loadingError !== null ? <span>{loadingError.message}</span> : ""
        // ↓ 위(삼항연산자 사용)의 내용가 같은 내용
        // loadingError?.message && <span>{loadingError.message}</span>
        // 옵셔널 체이닝
        // loadingError?.message = null
        // (loadingError)null 에서 message를 꺼낼 수 없다. null이 아닌경우만 참조를 하겠다.
      }
      {hasNext && (
        <button disabled={isLoading} onClick={handleLoadMore}>
          더보기
        </button>
      )}
    </div>
  );
}

export default App;
