import imageOne from "../images/Profile/profile-2.webp";
import imageTwo from "../images/Profile/profile-7.webp";
import imageThree from "../images/Profile/profile-1.webp";
import { FcPortraitMode, FcLike } from "react-icons/fc";
import { useEffect, useRef } from "react";

import Image from "react-bootstrap/Image";
import styles from "./TabContent.module.css";

function ThisIsMeTab() {
  const refOne = useRef(null);
  const refTwo = useRef(null);
  const refThree = useRef(null);
  const refFour = useRef(null);
  const refFive = useRef(null);

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

    const refs = [refOne, refTwo, refThree, refFour, refFive];
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
      <h1 className="align-items-center">
        Hello, This Is Me! <FcPortraitMode className="mb-3" />
      </h1>
      <div className="row">
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
          <Image
            ref={refTwo}
            src={imageTwo}
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
        <div className="col-md-8 text-start fs-4 shadowText">
          <p ref={refFour} className={styles.fadeIn}>
            My name is Mikael and I am (and I can not really grasp it) now 34
            years old. I live in Nesodden, were I also grew up, which a small
            island outside of Oslo, or its actually a peninsula if we want to be
            technical. Some citizens of Oslo, refer to us as the ferry people.
            The scenic commute to Oslo is amazing, and I love it.
            <FcLike className="mb-2" />
          </p>
          <p ref={refFive} className={styles.fadeIn}>
            I am quite the social guy and is known as the guy that is always
            smiling, even on the occasional bad day. I`ve been a people person
            for as long as I can remember, and I love to meet and interact we
            new people. I have a bunch of close friends that I love to hang out
            with, and also quite the vast network of people that I have met
            through my life. I am a very open person, and I I want everyone I
            interact with to feel comfortable and welcome, and that they always
            feel like a part of the group.
          </p>
        </div>
      </div>
      <div className="row mb-3 mt-1">
        <div className="col-md-10"></div>
        <div className="col-md-2">
          <Image
            ref={refThree}
            src={imageThree}
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

export default ThisIsMeTab;
