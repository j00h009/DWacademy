import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import Homepage from "./pages/HomePage";
import CourseListPage from "./pages/CourseListPage";
import QuestionListPage from "./pages/QuestionListPage";
import CoursePage from "./pages/CoursePage";

// swich case 문
//  / : 절대경로
//    : 상대경로(마지막꺼에 "/" 붙여서 오는)
// : 이름어쩌구
// => http://localhost:3000/courses/intro-to-python-programming 동적으로 변하는 객체들

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Homepage />} />
          <Route path="courses">
            <Route index element={<CourseListPage />} />
            <Route path=":courseSulg" element={<CoursePage />} />
          </Route>
          <Route path="questions">
            <Route index element={<QuestionListPage />} />
            {/* <Route path="" element={<CourseListPage />} /> */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
