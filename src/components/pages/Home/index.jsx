import profileImage from "../../images/profilbilde.jpg";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import { Helmet } from "react-helmet";

function HomePage() {
  return (
    <main>
      <Helmet>
        <title>Home | Mikael Selstad</title>
      </Helmet>
      <div className="container p-5">
        <h1 className="p-5">
          <span className={`${styles.heroText}`}>Hello, I am </span>
          <span className={`${styles.heroName} p-1`}>Mikael Selstad</span>
          <span className={`${styles.heroText} d-block p-2`}>
            a Frontend developer
          </span>
        </h1>
        <div className="row ">
          <div className="col-md-12 mb-4 d-flex align-items-center flex-wrap">
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
              <span className="d-block">
                I am playful, calm and{" "}
                <span className="text-black bg-white rounded p-1">
                  Eager To Learn
                </span>
              </span>
            </p>
          </div>
          <div className="container d-flex justify-content-end p-5">
            <Link
              to="/contact"
              className="btn btn-light fs-3 z-depth-2"
              role="button"
              style={{
                color: "black",
                fontWeight: "bold",
                backgroundColor: "yellow",
                borderColor: "yellow",
              }}
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
