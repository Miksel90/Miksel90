import { Link } from "react-router-dom";
import styles from "./HeaderNavigation.module.css";

const HeaderNavigation = () => {
  return (
    <header>
      <nav className={styles.headerNav}>
        <ul className={styles.headerList}>
          <li className={styles.headerItem}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.headerItem}>
            <Link to="/about">About</Link>
          </li>
          <li className={styles.headerItem}>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderNavigation;
