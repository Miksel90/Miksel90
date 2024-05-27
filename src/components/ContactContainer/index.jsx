import { FaGithub } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";

function ContactContainer() {
  return (
    <main className="container p-5 text-white justify-content-start">
      <h2 className="text-start shadowText">Let`s Talk </h2>
      <div className="mt-2 d-flex flex-column fs-3">
        <div className="mb-3 d-flex align-items-center ">
          <p className="mb-0 text-white shadowText">Mikael.selstad@gmail.com</p>
        </div>
      </div>
      <div className="d-flex gap-4">
        <a href="https://github.com/Miksel90">
          <FaGithub
            aria-label="Github Profile"
            style={{
              fontSize: "5rem",
              backgroundColor: "white",
              color: "black",
              borderRadius: "50%",
              padding: "0.5rem",
            }}
          />
        </a>
        <a href="https://www.linkedin.com/in/mikael-selstad-921251279">
          <TiSocialLinkedinCircular
            aria-label="LinkedIn Profile"
            style={{
              fontSize: "5rem",
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
