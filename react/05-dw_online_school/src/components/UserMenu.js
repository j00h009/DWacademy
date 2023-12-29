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
    const handleCilckOutside = () => setIsOpen(false);

    window.addEventListener("click", handleCilckOutside);
  }, []);

  return (
    <div className={styles.UserMenu}>
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
