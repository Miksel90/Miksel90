import { FcLike } from "react-icons/fc";
import { FadeInImage, FadeInText } from "./index.jsx";
import imageOne from "../images/Profile/profile-2.webp";
import imageTwo from "../images/Profile/profile-7.webp";
import imageThree from "../images/Profile/profile-8.webp";
import { useTranslator } from "../Translator/index.jsx";

function ThisIsMeTab() {
  const { translate } = useTranslator();
  return (
    <div className="container text-white shadowText text-start fs-4 bg-dark bg-opacity-25 p-3">
      <h1 className="align-items-center text-center p-1 mt-3">
        {translate("Love to win, hate to lose, but a good sport")}
      </h1>
      <div className="row mt-4">
        <div className="col-md-3">
          <FadeInImage
            src={imageOne}
            alt={translate("Profile image of Mikael Selstad")}
          />
          <FadeInImage
            src={imageTwo}
            alt={translate("Profile image of Mikael Selstad")}
          />
        </div>
        <div className="col-md-9">
          <FadeInText>
            {translate(
              "My name is Mikael and I am 34 years old. I live in Nesodden, where I grew up, which is a small island outside of Oslo, or it`s actually a peninsula if we want to get technical. Some citizens of Oslo, refer to us as the ferry people."
            )}
            {translate(
              "I am a people person and known as the guy that always smiles, even on the occasional bad day. I`ve been a people person for as long as I can remember, and I love to meet and interact with new people."
            )}
            <FcLike className="mb-2" />
          </FadeInText>
          <FadeInText className="mt-4">
            {translate(
              "I am an active person and I try to workout 4-5 times a week. I love lifting heavy weights, but I hate running unless there is a ball involved. I have played handball since I was 10, but had to hang up the jersey as I wanted my knees to support me a bit longer in life. After I quit handball I started coaching, and I coach two youth teams. I love it, and I love to see them grow as players and as people. I also love to play golf, and I try to play as much as I can. I am not very good, but love the game, to compete and being social."
            )}
          </FadeInText>
          <FadeInText className="mt-4">
            {translate(
              "Other than that I like to cook, and love to eat, good food is the main reason I work out. I mostly cook from scratch and like to use authentic ingredients. I also enjoy a good glass of wine, and I am as comfortable in a bar as I am on the dance floor."
            )}
          </FadeInText>
          <FadeInText>
            {translate(
              "I am a curious person, and I enjoy learning new things. Sometimes I google completely random things to figure out how things work, which also makes me a menace at quiz nights. I am also a bit of a nerd and play video games, collect trading cards and watch anime."
            )}
          </FadeInText>
        </div>
      </div>
    </div>
  );
}

export default ThisIsMeTab;
