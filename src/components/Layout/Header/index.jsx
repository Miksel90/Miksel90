import HeaderNavigation from "/src/components/Navigation/Header/index.jsx";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contentWrap}>
        <Link to="/" className={styles.logoLink}>
          <span className={styles.logoText}>Mikael Selstad</span>
        </Link>
        <HeaderNavigation />
      </div>
    </header>
  );
};

export default Header;
