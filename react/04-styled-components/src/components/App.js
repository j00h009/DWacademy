import { Link, Outlet } from "react-router-dom";
{
  /* react 에서는 a태그 대신 Link태그를 사용한다. */
}

function App() {
  return (
    <>
      <h1>Hello, Styled Components!!</h1>
      <ul>
        <Link to="01">
          <li>1. Styled Components Basic</li>
        </Link>
        <Link to="02">
          <li>2. Nesting 문법</li>
        </Link>
        <Link to="03">
          <li>3. 연습 1</li>
        </Link>
        <Link to="04">
          <li>4. 연습 2</li>
        </Link>
        <Link to="05">
          <li>5. 다이나믹 스타일링</li>
        </Link>
        <Link to="06">
          <li>6. 연습 3</li>
        </Link>
        <Link to="07">
          <li>7. 스타일 재사용: 상속</li>
        </Link>
        <Link to="08">
          <li>8. 스타일 재사용: CSS 함수</li>
        </Link>
        <Link to="09">
          <li>9. 스타일 재사용: CSS 함수</li>
        </Link>
      </ul>
      <Outlet />
    </>
  );
}

export default App;
