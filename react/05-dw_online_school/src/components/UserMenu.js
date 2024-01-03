import personIcon from "../assets/person.png";
import styles from "./UserMenu.module.css";
import { useEffect, useState } from "react";

function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = (e) => {
    // setIsOpen(true);
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  // 리액트 버블링(위로올라가는 현사) 현상 막기
  useEffect(() => {
    if (!isOpen) return;
    const handleCilckOutside = () => setIsOpen(false);
    // const handleCilckOutside = () => {
    //   alert("click event handler");
    // };

    // 제거 해주는 부분(alert 두번 반복하는 것을)
    window.addEventListener("click", handleCilckOutside);
    return () => {
      window.removeEventListener("click", handleCilckOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.userMenu}>
      <button className={styles.iconButton} onClick={handleButtonClick}>
        <img src={personIcon} alt="유저 메뉴" />
      </button>
      {isOpen && (
        <ul className={styles.popup}>
          <li>위시리스트</li>
          <li className={styles.disabled}>회원가입</li>
          <li>로그인</li>
        </ul>
      )}
    </div>
  );
}

export default UserMenu;
