import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import styles from "./App.module.css";
import Footer from "./Footer";

// 리액트 라우터 outlet
function App() {
  return (
    <>
      <Nav className={styles.nav} />
      <div className={styles.body}>
        <Outlet />
      </div>
      <Footer className={styles.footer} />
    </>
  );
}

export default App;
