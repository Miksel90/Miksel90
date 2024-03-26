import profileImage from "../../images/Profile/profileImage.jpg";
import Image from "react-bootstrap/Image";
import PopoverContact from "../../Popover/index.jsx";
import styles from "./Home.module.css";
import { Helmet } from "react-helmet";

function HomePage() {
  return (
    <main>
      <Helmet>
        <title>Home | Mikael Selstad</title>
      </Helmet>
      <div className="container p-5 ">
        <h1 className="p-1">
          <span className={`${styles.heroText}`}>Hello, I am </span>
          <span className={`${styles.heroName} p-1`}>Mikael Selstad</span>
          <span className={`${styles.heroText} d-block p-2`}>
            a Frontend developer
          </span>
        </h1>
        <div className="row ">
          <div className="col-md-12 mb-1 d-flex align-items-center justify-content-center flex-wrap">
            <div className="d-flex align-items-center justify-content-center ">
              <Image
                src={profileImage}
                fluid
                roundedCircle
                className=" m-0 p-0 border border-dark shadow-lg "
                style={{
                  backgroundSize: "cover",
                  maxHeight: "200px",
                }}
              />
            </div>
            <p className="p-1 fw-bold fs-3 text-white shadowText">
              I like solving problems, and to turn challenges into solutions.
              <span className="d-block m-1">
                I am playful, calm and
                <span className="text-black bg-white rounded p-1 m-1">
                  Eager To Learn.
                </span>
              </span>
            </p>
          </div>
          <div
            className="container d-flex justify-content-center justify-content-lg-start p-1 mb-1 "
            style={{ height: "420px" }}
          >
            <div className={styles.popoverBox}>
              <PopoverContact />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
