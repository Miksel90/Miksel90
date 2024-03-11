import styles from "./Home.module.css";
import Hero from "../../Hero/index.jsx";
import { Helmet } from "react-helmet";

function HomePage() {
  return (
    <main>
      <Helmet>
        <title>Home | MIkael Selstad</title>
      </Helmet>
      <div className={styles.overlay}>
        <div className={styles.heroText}>
          <h1>Welcome to my Portfolio</h1>
        </div>
        <Hero></Hero>
      </div>
    </main>
  );
}

export default HomePage;
