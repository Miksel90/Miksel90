import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import homeImage from "../images/Backgrounds/background-2.jpg";
import aboutImage from "../images/Backgrounds/background-1.jpg";
import projectsImage from "../images/Backgrounds/background-3.jpg";
import styles from "./Backdrop.module.css";

function Backdrop() {
  const [imageUrl, setImageUrl] = useState("");
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setImageUrl(homeImage);
        break;
      case "/about":
        setImageUrl(aboutImage);
        break;
      case "/projects":
        setImageUrl(projectsImage);
        break;

      default:
        setImageUrl("default-image-url");
    }
  }, [location]);

  return (
    <div className={styles.backdrop}>
      <div className={styles.overlay}></div>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
      ></div>
    </div>
  );
}

export default Backdrop;
