import imageOne from "../images/Profile/profile-3.webp";
import imageThree from "../images/Profile/profile-1.webp";
import { Image } from "react-bootstrap";
import styles from "./TabContent.module.css";
import { useRef, useEffect } from "react";

function PassionsTab() {
  const refOne = useRef(null);
  const refTwo = useRef(null);
  const refThree = useRef(null);
  const refFour = useRef(null);
  const refFive = useRef(null);
  const refSix = useRef(null);
  const refSeven = useRef(null);
  const refEight = useRef(null);

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

    const refs = [
      refOne,
      refTwo,
      refThree,
      refFour,
      refFive,
      refSix,
      refSeven,
      refEight,
    ];
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
    <div className="Container text-white shadowText text-start fs-4 bg-dark bg-opacity-25 p-3">
      <h1 className="align-items-center text-center p-1 mt-3">The Real Me!</h1>
      <div className="row mt-4">
        <div className="col-md-9 ">
          <p ref={refFour} className={styles.fadeIn}>
            I am a total geek, and I have picked up different hobbies through
            the ages. One of my biggest passions is football, and mainly Arsenal
            FC. I have supported them in thick and thin since 2001. I try to
            watch every game, and try to go to London once a year. Im not proud
            of how the results affect my mood, but it is what it is.
          </p>
          <p ref={refFive} className={`${styles.fadeIn} mt-4`}>
            I am also a huge fan of being outside, and I am above average fond
            of competitions. I enjoy playing golf, skiing, swimming in the
            ocean, and playing handball. I also enjoy lifting weights and try to
            do it at least 4-5 times a week. My current goal is to deadlift
            250kg. Cooking is a huge part of my life, and I make almost
            everything from scratch. I try to buy local, and authentic
            ingredients while also considering animal welfare and the
            environment.
          </p>
          <p ref={refSix} className={`${styles.fadeIn} mt-4`}>
            I play video games, and have been doing that since I was young. I
            have played games such as World of Warcraft, Call of Duty and Fifa.
            I also enjoy playing board games, card games and social games over
            the internet.
          </p>
        </div>
        <div className="col-md-3  ">
          <Image
            ref={refOne}
            src={imageOne}
            fluid
            className={`${styles.fadeIn} ${styles.tabImage}`}
            alt="Profile image of Mikael Selstad"
          />
        </div>
      </div>
      <div className="row mb-3 mt-3">
        <div className="col-md-3">
          <Image
            ref={refThree}
            src={imageThree}
            fluid
            className={`${styles.fadeIn} ${styles.tabImage}`}
            alt="Profile image of Mikael Selstad"
          />
        </div>
        <div className="col-md-9 mt-1">
          <p ref={refSeven} className={styles.fadeIn}>
            I collect trading cards, mostly Pokèmon cards. I used to play the
            game when I was young and picked the hobby up again during covid. I
            hope I am able to travel to Japan so I can visit the Pokèmon center
            and buy some exclusive cards. I also watch anime, and my favorite is
            One Piece. Movies and tv-series is something I enjoy, and I try to
            go to the theater as often as possible.
          </p>
          <p ref={refEight} className={`${styles.fadeIn} mt-5`}>
            I love hearing the phrase, I did not take you for a person who was
            into that.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PassionsTab;
