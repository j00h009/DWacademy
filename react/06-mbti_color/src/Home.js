import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import { useEffect, useRef, useState } from "react";
import { getMockItems, getMockItemsByFilter } from "./lib/api";
import ColorSurvey from "./components/ColorSurvey";

function Home() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState(null);
  const nextPageNum = useRef(null);

  const handleLoad = (filter) => {
    let result;

    if (filter) {
      // 필터가 있을때
      result = getMockItemsByFilter(filter);
    } else {
      // 필터가 없을때
      result = getMockItems(filter);
    }
    const { data } = result;
    // nextPageNum.current = 10
    nextPageNum.current = data.length;
    // 화면을 재랜더링 해주는 역할
    setItems(data);
  };

  const handleLoadNext = () => {
    // 현재 아이템이 몇번째인지를 알고 있어야 한다. => nextPageNum.current
    // 현재 아이템 이후의 아이템을 가져와서 items State 값을 변경해준다.
    const result = getMockItems(nextPageNum.current);
    // result?.data => result가 있을때만 사용한다.
    if (result?.data) {
      setItems((prevItems) => [...prevItems, ...result.data]);
    }
    nextPageNum.current = result ? result.nextItemNum : null;
  };

  // useEffect 여러번 사용가능
  // [] 비어있으면 최초 렌더링 시 한번만 반복된다.
  // falethy => null, undefined, "", 0;
  useEffect(() => {
    handleLoad(filter);
  }, [filter]);

  useEffect(() => {
    function handleScroll() {
      console.log(nextPageNum);
      if (!nextPageNum.current) return;
      const { scrollHeight, scrollTop, clientHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight) {
        handleLoadNext();
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <header className={styles.header}>
          <h1 className={styles.heading}>
            MBTI별
            <br />
            <span className={styles.accent}>좋아하는 컬러</span>
          </h1>
          <div>
            {filter && (
              <div className={styles.filter} onClick={() => setFilter(null)}>
                {filter}
                <img
                  className={styles.removeIcon}
                  src="/images/x.svg"
                  alt="필터 삭제"
                />
              </div>
            )}
          </div>
        </header>
      </div>
      <main className={styles.content}>
        <Link className={styles.addItem} to="/new">
          + 새 컬러 등록하기
        </Link>
        <ul className={styles.items}>
          {items.map((item) => (
            <li key={item.id}>
              <ColorSurvey value={item} onClick={() => setFilter(item.mbti)} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default Home;
