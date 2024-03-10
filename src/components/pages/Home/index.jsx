import styles from "./Home.module.css";
import Hero from "../../Hero/index.jsx";
import { Helmet } from "react-helmet";

function HomePage() {
  return (
    <main>
      <Helmet>
        <title>Home | MIkael Selstad</title>
      </Helmet>
      <Hero>
        <div className={styles.heroContent}>
          <h1>Welcome to my Portfolio</h1>
        </div>
      </Hero>
      <section className={styles.productSection}>
        <h2 className={styles.homeHeader}>Products</h2>
      </section>
    </main>
  );
}

export default HomePage;
