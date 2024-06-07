import profileImage from "../../images/Profile/profileImage.jpg";
import Image from "react-bootstrap/Image";
import ContactContainer from "../../ContactContainer";
import styles from "./Home.module.css";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import Scroller from "../../Scroller/index.jsx";
import LanguageList from "../../Lists/languages.jsx";
import SkillList from "../../Lists/skills.jsx";
import { useTranslator } from "../../Translator/index.jsx";

function HomePage() {
  const words = ["World", "You", "Everyone", "Friend"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const { translate } = useTranslator();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <main>
      <Helmet>
        <title>Home | Mikael Selstad</title>
      </Helmet>
      <div className="container p-5 bg-black bg-opacity-10 h-100">
        <div className="row ">
          <div className="col-md-12 mb-1 d-flex flex-column flex-md-row align-items-center justify-content-evenly gap-4">
            <div className=" mb-3">
              <Image
                src={profileImage}
                alt={translate("Profile image of Mikael Selstad")}
                fluid
                roundedCircle
                className="m-0 p-0 border border-dark shadow-lg mt-2"
                style={{
                  backgroundSize: "cover",
                  maxHeight: "200px",
                }}
              />
            </div>
            <div className="d-flex flex-column text-md-start p-2 ">
              <h1 className={`${styles.heroText} `}>
                <span>
                  {translate(`Hello ${words[currentWordIndex]}!`)}
                  <br />
                  {translate("I am Mikael Selstad")}
                  <br />
                  {translate("Frontend Developer")}
                </span>
              </h1>
              <p className={`${styles.heroParagraph} fs-5`}>
                {translate(
                  "I`m passionate about experiences, design and I like solving problems and turning challenges into solutions."
                )}
              </p>
            </div>
          </div>
        </div>
        <div>
          <ContactContainer />
        </div>
        <div>
          <div className=" container-fluid d-flex justify-content-start flex-wrap m-auto">
            <div className="row">
              <p className="shadowText text-white fs-2 text-start mt-5 m-0">
                {translate("Languages")}
              </p>
              <div className=" d-flex justify-content-around">
                <Scroller>
                  <LanguageList />
                </Scroller>
              </div>
            </div>
            <div className="row">
              <p className="shadowText text-white fs-2 text-start m-0">
                {translate("Skills")}
              </p>
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
