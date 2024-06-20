import { FadeInImage, FadeInText } from "./index.jsx";
import imageOne from "../images/Profile/profile-4.webp";
import imageTwo from "../images/Profile/profile-5.webp";
import imageThree from "../images/Profile/profile-6.webp";
import { useTranslator } from "../Translator/index.jsx";

function CareerTab() {
  const { translate } = useTranslator();
  return (
    <div className="container text-white shadowText text-start fs-4 bg-dark bg-opacity-50 p-3">
      <h1 className="align-items-center text-center p-1 mt-3">
        {translate("Teacher Gone Developer")}
      </h1>
      <div className="row mt-4">
        <div className="col-md-9">
          <FadeInText>
            {translate(
              "I started my teacher`s degree at the University of Stavanger in 2011 and graduated in 2016. I studied mathematics, history, religion, and cooking. After completing my degree, I took an extra year to study English. While studying, I worked at the student bar, a supermarket and played and administered the university handball team. I also helped plan and host Fadderuka two times, which is a festival to welcome students to the university."
            )}
          </FadeInText>
          <FadeInText className="mt-4">
            {translate(
              "After studying, I started working as a teacher at Høyland Ungdomsskole, a secondary school in Sandnes. Here I taught English, religion, and cooking for two years. After living in Stavanger for seven years, it was time to move back home. I started working at Nesoddtangen skole, a primary school. Here I taught English, math, science, and social studies. I was the team leader for the grade I worked in, and also had students in practice every year. Since the school wanted to implement coding, I was chosen to be the school`s coding expert. I started learning coding in 2019. I mainly started with block-coding with my pupils. We built robots, and programmed them to do different tasks. We also started with Minecraft coding. This got me thinking, and I looked into going back to school."
            )}
          </FadeInText>
          <FadeInText className="mt-4">
            {translate(
              "During spring 2022, I decided to quit teaching and applied to frontend development at Noroff. As of 2024, I have finished my two year degree with straight A`s and am currently looking for a new job!"
            )}
          </FadeInText>
        </div>
        <div className="col-md-3">
          <FadeInImage src={imageOne} alt={translate("Mikael Selstad")} />
          <FadeInImage src={imageTwo} alt={translate("Mikael Selstad")} />
        </div>
      </div>
      <div className="row mb-3 mt-3">
        <div className="col-md-3">
          <FadeInImage src={imageThree} alt={translate("Mikael Selstad")} />
        </div>
        <div className="col-md-9 mt-1">
          <FadeInText>
            {translate(
              "While studying at Noroff, I was coaching a youth handball team, and the club was looking for a new manager of sports. I applied and got the job in January 2023 and have been working with handball while studying. I coach two youth teams while also being in charge of the club. I hire coaches, help and guide new coaches and players, while being the club`s representative in the handball federation. I also help plan and execute club events and tournaments."
            )}
          </FadeInText>
        </div>
      </div>
    </div>
  );
}

export default CareerTab;
