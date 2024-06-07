import { FaGithub } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { useTranslator } from "../Translator/index.jsx";

function ContactContainer() {
  const { translate } = useTranslator();

  return (
    <main className="container text-white d-flex flex-column  ">
      <div className="f-flex flex-row justify-content-evenly shadowText">
        <h2 className="text-start shadowText">{translate("Let's Talk")}</h2>
        <p className="mb-4  fs-4 text-start">Mikael.selstad@gmail.com</p>
      </div>
      <div className="d-flex gap-4">
        <a href="https://github.com/Miksel90" title="GitHub Profile">
          <FaGithub
            aria-label="Github Profile"
            style={{
              fontSize: "4rem",
              backgroundColor: "white",
              color: "black",
              borderRadius: "50%",
              padding: "0.5rem",
            }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/mikael-selstad-921251279"
          title="LinkedIn Profile"
        >
          <TiSocialLinkedinCircular
            aria-label="LinkedIn Profile"
            style={{
              fontSize: "4rem",
              backgroundColor: "white",
              color: "black",
              borderRadius: "50%",
              padding: "0.5rem",
            }}
          />
        </a>
      </div>
    </main>
  );
}

export default ContactContainer;
