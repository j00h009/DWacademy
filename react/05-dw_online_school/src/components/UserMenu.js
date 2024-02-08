import { Link } from "react-router-dom";
import personIcon from "../assets/person.png";
import styles from "./UserMenu.module.css";
import { useEffect, useState } from "react";
import { useMember } from "../contexts/MemberContext";

function UserMenu() {
  // const member = useMember();
  // console.log(member);
  const [isOpen, setIsOpen] = useState(false);
  const isLogined = JSON.parse(localStorage.getItem("member"));

  const handleButtonClick = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  // 리액트 버블링(위로올라가는 현사) 현상 막기
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = () => setIsOpen(false);
    // const handleClickOutside = () => {
    //   alert("click event handler");
    // };

    // 제거 해주는 부분(alert 두번 반복하는 것을)
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.userMenu}>
      <button className={styles.iconButton} onClick={handleButtonClick}>
        <img src={personIcon} alt="유저 메뉴" />
      </button>
      {isOpen && (
        <ul className={styles.popup}>
          <Link to="/wishlist">
            <li>위시리스트</li>
          </Link>
          <li className={styles.disabled}>회원가입</li>
          {!isLogined ? (
            <Link to="/login">
              <li>로그인</li>
            </Link>
          ) : (
            <Link to="/logout">
              <li>로그아웃</li>
            </Link>
          )}
        </ul>
      )}
    </div>
  );
}

export default UserMenu;
