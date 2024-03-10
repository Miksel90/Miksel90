import { Link } from "react-router-dom";
import styles from "./FooterNavigation.module.css";

const FooterNavigation = () => {
  return (
    <nav className={styles.footerNav}>
      <ul className={styles.footerList}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNavigation;
