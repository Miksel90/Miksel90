import { FadeInImage, FadeInText } from "./index.jsx";
import imageOne from "../images/Profile/profile-3.webp";
import imageThree from "../images/Profile/profile-1.webp";
import styles from "./TabContent.module.css";

function PassionsTab() {
  return (
    <div className="container text-white shadowText text-start fs-4 bg-dark bg-opacity-25 p-3">
      <h1 className="align-items-center text-center p-1 mt-3">The Real Me!</h1>
      <div className="row mt-4">
        <div className="col-md-9">
          <FadeInText>
            I am a total geek, and I have picked up different hobbies through my
            years. One of my biggest passions is football, and mainly Arsenal
            FC. I have supported them in thick and thin since 2001. I try to
            watch every game, and try to go to London once a year. I’m not proud
            of how their results affect my mood, but it is what it is.
          </FadeInText>
          <FadeInText className="mt-4">
            I am also a huge fan of being outside, and I am above average fond
            of competitions. I enjoy playing golf, skiing, swimming in the
            ocean, and playing handball. I also enjoy lifting weights and try to
            do it at least 4-5 times a week. My current goal is to deadlift
            250kg. Cooking is a huge part of my life, and I make almost
            everything from scratch. I try to buy local, and authentic
            ingredients while also considering animal welfare and the
            environment.
          </FadeInText>
          <FadeInText className="mt-4">
            I play video games and have been doing that since I was young. I
            have played games such as World of Warcraft, Call of Duty and FIFA.
            I also enjoy playing board games, card games and social games over
            the internet.
          </FadeInText>
        </div>
        <div className="col-md-3">
          <FadeInImage src={imageOne} alt="Profile image of Mikael Selstad" />
        </div>
      </div>
      <div className="row mb-3 mt-3">
        <div className="col-md-3">
          <FadeInImage src={imageThree} alt="Profile image of Mikael Selstad" />
        </div>
        <div className="col-md-9 mt-1">
          <FadeInText>
            I collect trading cards, mostly Pokémon cards. I used to play the
            game when I was young and picked it up again during COVID. I hope I
            am able to travel to Japan so I can visit the Pokémon center and buy
            some exclusive cards. I also watch anime, and my favorite is One
            Piece. Movies and TV-series are something I enjoy, and I try to go
            to the theater as often as possible.
          </FadeInText>
          <FadeInText className="mt-5">
            I love hearing the phrase, “I did not take you for a person who was
            into that.”
          </FadeInText>
        </div>
      </div>
    </div>
  );
}

export default PassionsTab;
