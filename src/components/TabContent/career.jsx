import imageOne from "../images/Profile/profile-4.webp";
import { Image } from "react-bootstrap";
import styles from "./TabContent.module.css";
import { useRef, useEffect } from "react";

function CareerTab() {
  const refOne = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.fadeInVisible);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const refs = [refOne];
    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);
  return (
    <div className="Container mt-3 text-white shadowText p-1 ">
      <h1 className="align-items-center">Hello, This Is Me!</h1>
      <div className="row">
        <div className="col-md-8"></div>
        <div className="col-md-4  ">
          <Image
            ref={refOne}
            src={imageOne}
            fluid
            className={styles.fadeIn}
            style={{
              backgroundSize: "cover",
              maxHeight: "400px",
              maxWidth: "100%",
              border: "1px solid #000",
              boxShadow: " 0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CareerTab;
