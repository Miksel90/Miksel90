import imageOne from "../images/Profile/profile-4.webp";
import imageTwo from "../images/Profile/profile-5.webp";
import imageThree from "../images/Profile/profile-6.webp";
import { Image } from "react-bootstrap";
import styles from "./TabContent.module.css";
import { useRef, useEffect } from "react";

function CareerTab() {
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
      <h1 className="align-items-center text-center p-1 mt-3">
        Teacher Gone Developer
      </h1>
      <div className="row mt-4">
        <div className="col-md-9 ">
          <p ref={refFour} className={styles.fadeIn}>
            I started my teachers degree at the university of Stavanger in 2011
            and graduated in 2016. I studied mathematics, social studies,
            religion and cooking. After completing my teachers degree I took an
            extra year to study English. While studying I worked at the student
            bar, a supermarket and played and administrated the university
            handball team. I also helped plan and hosted Fadderuka two times,
            which is a festival to welcome students to the university.
          </p>
          <p ref={refFive} className={`${styles.fadeIn} mt-4`}>
            After studying I started working as a teacher at Høyland
            Ungdomsskole, a secondary school in Sandnes. Here I taught English,
            religion and cooking for two years. After living in Stavanger for
            seven years it was time to move back home. I started working at
            Nesoddtangen skole, a primary school. Here I taught English, math,
            science and social studies. I was the team leader for the grade I
            worked in, and also had students in practice every year. Since the
            school wanted to implement coding I was chosen to be the schools
            coding expert. I started learning coding in 2019. I mainly started
            with block-coding to having something to start with, with my pupils.
            We built robots, and programmed them to do different tasks. We also
            started with minecraft coding. This got me thinking, and I looked
            into going back to school.
          </p>
          <p ref={refSix} className={`${styles.fadeIn} mt-4`}>
            {" "}
            During spring 2022 I decide to quit teaching and applied to frontend
            developing at Noroff.
          </p>
        </div>
        <div className="col-md-3  ">
          <Image
            ref={refOne}
            src={imageOne}
            fluid
            className={`${styles.fadeIn} ${styles.tabImage}`}
            alt="Mikael Selstad"
          />
          <Image
            ref={refTwo}
            src={imageTwo}
            fluid
            className={`${styles.fadeIn} ${styles.tabImage}`}
            alt="Mikael Selstad"
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
            alt="Mikael Selstad"
          />
        </div>
        <div className="col-md-9 mt-1">
          <p ref={refSeven} className={styles.fadeIn}>
            While studying at Noroff I was coaching a youth handball team, and
            the club was looking for a new manager of sports. I applied and got
            the job in january 2023 and have been working with handball while
            studying. I coach two youth teams while also being in charge of the
            club. I hire coaches, help and guide new coaches and players, while
            being the clubs representative in the handball federation. I also
            help plan and execute the clubs events and tournaments.
          </p>
          <p ref={refEight} className={`${styles.fadeIn} `}>
            Ive been studying frontend development for two years now, and I am
            eager to start my new career!
          </p>
        </div>
      </div>
    </div>
  );
}

export default CareerTab;
