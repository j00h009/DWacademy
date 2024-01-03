import Container from "./Container";
import UserMenu from "./UserMenu";
import styles from "./Nav.module.css";
import { Link, NavLink } from "react-router-dom";

// isActive는 NavLink가 가지고 있는 녀석.
function getLinkStyle({ isActive }) {
  // NavLink에 인라인 요소로 들어가는 곳.
  return {
    textDecoration: isActive ? "underline" : undefined,
  };
}

function Nav() {
  return (
    <div className={styles.nav}>
      <Container className={styles.container}>
        <Link to="/">
          <div className={styles.logo}>
            <span>DW</span>OS
          </div>
        </Link>
        <ul className={styles.menu}>
          <li>
            <NavLink to="/courses" style={getLinkStyle}>
              카탈로그
            </NavLink>
          </li>
          <li>
            <NavLink to="/questions" style={getLinkStyle}>
              커뮤니티
            </NavLink>
          </li>
          <li>
            <UserMenu />
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Nav;
