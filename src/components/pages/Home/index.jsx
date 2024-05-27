import profileImage from "../../images/Profile/profileImage.jpg";
import Image from "react-bootstrap/Image";
import ContactContainer from "../../ContactContainer";
import styles from "./Home.module.css";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import Scroller from "../../Scroller/index.jsx";
import LanguageList from "../../Lists/languages.jsx";
import SkillList from "../../Lists/skills.jsx";

function HomePage() {
  const words = ["World", "You", "Everyone", "There", "Friend"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <main>
      <Helmet>
        <title>Home | Mikael Selstad</title>
      </Helmet>
      <div className="container p-5 bg-black bg-opacity-10 h-100">
        <div className="row ">
          <div className="col-md-12 mb-1 d-flex flex-column flex-md-row align-items-center justify-content-evenly gap-2">
            <div className="d-flex mb-3">
              <Image
                src={profileImage}
                alt="Profile image of Mikael Selstad"
                fluid
                roundedCircle
                className="m-0 p-0 border border-dark shadow-lg"
                style={{
                  backgroundSize: "cover",
                  maxHeight: "200px",
                }}
              />
            </div>
            <div className="d-flex flex-column  text-md-start">
              <h1 className={`${styles.heroText} `}>
                <span>
                  Hello {words[currentWordIndex]}!
                  <br />
                  I am Mikael Selstad
                  <br />
                  Frontend Developer
                </span>
              </h1>
              <p className={`${styles.heroParagraph} fs-5`}>
                I passionate about experiences, design and I
                <br /> like solving problems and turning challenges into
                solutions.
              </p>
            </div>
          </div>
        </div>
        <div>
          <ContactContainer />
        </div>
        <div>
          <div className=" container-fluid d-flex justify-content-center flex-column flex-wrap m-auto">
            <h1 className="text-white shadowText "> Stack And Skills</h1>
            <div className="row">
              <p className="shadowText text-white fs-2 text-start">Languages</p>
              <div className=" d-flex justify-content-around">
                <Scroller>
                  <LanguageList />
                </Scroller>
              </div>
            </div>
            <div className="row">
              <p className="shadowText text-white fs-2 text-start">Skills</p>
              <div className=" d-flex justify-content-around">
                <Scroller>
                  <SkillList />
                </Scroller>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
