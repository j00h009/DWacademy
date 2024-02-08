import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
import HomePage from "./pages/HomePage";
import CourseListPage from "./pages/CourseListPage";
import QuestionListPage from "./pages/QuestionListPage";
import CoursePage from "./pages/CoursePage";
import Login from "./components/Login";
import Logout from "./components/Logout";
import WishlistPage from "./pages/WishlistPage";

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
          <Route index element={<HomePage />} />
          <Route path="courses">
            <Route index element={<CourseListPage />} />
            <Route path=":courseSlug" element={<CoursePage />} />
          </Route>
          <Route path="questions">
            <Route index element={<QuestionListPage />} />
            {/* <Route path="" element={<CourseListPage />} /> */}
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
          <Route path="wishlist" element={<WishlistPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
