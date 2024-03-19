import imageOne from "../images/Profile/profile-2.webp";
import imageTwo from "../images/Profile/profile-7.webp";
import imageThree from "../images/Profile/profile-8.webp";
import { FcLike } from "react-icons/fc";
import { useEffect, useRef } from "react";

import Image from "react-bootstrap/Image";
import styles from "./TabContent.module.css";

function ThisIsMeTab() {
  const refOne = useRef(null);
  const refTwo = useRef(null);
  const refThree = useRef(null);
  const refFour = useRef(null);
  const refFive = useRef(null);
  const refSix = useRef(null);
  const refSeven = useRef(null);
  const refEight = useRef(null);
  const refNine = useRef(null);

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
      refNine,
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
      <h1 className="align-items-center text-center p-1 mt-3">
        Love to win, hate to lose, but a good sport.
      </h1>
      <div className="row mt-4">
        <div className="col-md-3  ">
          <Image
            ref={refOne}
            src={imageOne}
            fluid
            className={`${styles.fadeIn} ${styles.tabImage}`}
          />
          <Image
            ref={refTwo}
            src={imageTwo}
            fluid
            className={`${styles.fadeIn} ${styles.tabImage}`}
          />
        </div>
        <div className="col-md-9 ">
          <p ref={refFour} className={styles.fadeIn}>
            My name is Mikael and I am (and I can not really grasp it) now 34
            years old. I live in Nesodden, were I also grew up, which a small
            island outside of Oslo, or its actually a peninsula if we want to be
            technical. Some citizens of Oslo, refer to us as the ferry people.
            <FcLike className="mb-2" />
          </p>
          <p ref={refFive} className={`${styles.fadeIn} mt-4`}>
            I am quite the social guy and is known as the guy that is always
            smiling, even on the occasional bad day. I`ve been a people person
            for as long as I can remember, and I love to meet and interact we
            new people. I have a bunch of close friends that I love to hang out
            with, and also quite the vast network of people that I have met
            through my life. I am a very open person, and I I want everyone I
            interact with to feel comfortable and welcome, and that they always
            feel like a part of the group.
          </p>
          <p ref={refSix} className={`${styles.fadeIn} mt-4`}>
            I am a active person, and i try to workout 4-5 times a week. I love
            lifting heavy weights, but I hate running unless there is a ball
            involved. I have played handball from i was 10, but had to hang up
            the jersey as i wanted my knees to support me a bit longer in life.
            After I quit handball I started coaching, and I coach two youth
            teams. I love it, and I love to see them grow as players and as
            people. I also love to play golf, and I try to play as much as I
            can. I am not very good, but I love the game, to compete and being
            social.
          </p>
        </div>
      </div>
      <div className="row mb-3 mt-3">
        <div className="col-md-9 mt-1">
          <p ref={refSeven} className={styles.fadeIn}>
            Other then that I like to cook, and love to eat, good food is the
            main reason I work out. I mostly cook from scratch and like to use
            authentic ingredients. I also enjoy a good glass of wine, and I am
            as comfortable in a bar as i am on the dance floor.
          </p>
          <p ref={refEight} className={`${styles.fadeIn} `}>
            I am a curious person, and I enjoy learning new things. Sometimes I
            google completely random things to figure out how things work, which
            also makes me a menance at quiz nights. I am also a bit of a nerd
            and play videogames, collect trading cards and watch anime.
          </p>
          <p ref={refNine} className={`${styles.fadeIn} mt-5 fs-2`}>
            {" "}
            This Is Me!
          </p>
        </div>
        <div className="col-md-3">
          <Image
            ref={refThree}
            src={imageThree}
            fluid
            className={`${styles.fadeIn} ${styles.tabImage}`}
          />
        </div>
      </div>
    </div>
  );
}

export default ThisIsMeTab;
