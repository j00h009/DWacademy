import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import New from "./New";
import { useEffect } from "react";

// /new/temp1/temp2 => 안으로 중첩에서 써주기

function App() {
  useEffect(() => {
    // 로딩을 해도 스크롤 처음으로 넘어갈 수 있게 만들어주는 구간
    // onbeforeunload 는 사용자가 브라우저를 끌 때, 벗어날 때(페이지를 새로고침 할 때)
    window.onbeforeunload = () => window.scrollTo(0, 0);
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="new" element={<New />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
