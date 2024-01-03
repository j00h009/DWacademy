import ListPage from "../components/ListPage";
import styles from "./CourseListPage.module.css";
import searchBarStyle from "../components/SearchBar.module.css";
import searchIcon from "../assets/search.svg";
import { getDatas } from "../api/firebase";
import { useEffect, useState } from "react";
import Warn from "../components/Warn";
import CourseItem from "../components/CourseItem";

let listItems;

function CourseListPage() {
  const [items, setItems] = useState([]);
  // 검색기능 키워드
  const [keyword, setKeyword] = useState("");
  // 초기 렌더링일 때
  const [isInit, setIsInit] = useState(true);

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  // 검색으로 코스 찾기 부분
  const handleSubmit = (e) => {
    // 초기화 렌더링 막는 부분
    e.preventDefault();
    const searchItems = listItems.filter(({ title }) =>
      title.includes(keyword)
    );
    setItems(searchItems);
  };

  const handleLoad = async () => {
    const courseItems = await getDatas("courses");
    listItems = courseItems;
    setItems(courseItems);
    // useEffect 가 렌더링 되고 난 이후에 handleLoad가 실행되므로 여기에 선언함.
    setIsInit(false);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <ListPage
      variant="catalog"
      title="모든코스"
      description="자체 제작된 코스들로 기초를 쌓으세요."
    >
      <form className={searchBarStyle.form} onSubmit={handleSubmit}>
        <input
          name="keyword"
          value={keyword}
          onChange={handleKeywordChange}
          placeholder="검색으로 코스 찾기"
        />
        <button type="submit">
          <img src={searchIcon} alt="검색" />
        </button>
      </form>

      <p className={styles.count}>총 {items.length}개 코스</p>

      {/* 삼항연산자 --랑 ++가 같으면 ? 이다. */}
      {items.length === 0 && !isInit ? (
        <Warn
          className={styles.emptyList}
          title="조건에 맞는 코스가 없어요."
          description="올바른 검색어가 맞는지 다시 한 번 확인해 주세요."
        />
      ) : (
        <div className={styles.courseList}>
          {items.map((course) => (
            <CourseItem key={course.docId} course={course} />
          ))}
        </div>
      )}
    </ListPage>
  );
}

export default CourseListPage;
