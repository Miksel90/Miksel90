import styles from "./Home.module.css";
import Hero from "../../Hero/index.jsx";
import profileImage from "../../images/profilbilde.jpg";
import Image from "react-bootstrap/Image";
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
      <div className="container p-4">
        <div className="row p-1">
          <div className="col-lg-6 col-md-6 mb-4 d-flex align-items-center justify-content-center">
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ width: "200px", height: "200px" }}
            >
              <Image
                src={profileImage}
                fluid
                roundedCircle
                className="m-0 p-0"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 mb-4 d-flex align-items-center justify-content-center fs-4">
            <p className="m-0">
              Hello, my name is Mikael Selstad, and I am a web developer. Have a
              look around on my page and learn about me and projects.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
