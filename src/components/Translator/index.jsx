import { createContext, useState, useContext } from "react";

const TranslatorContext = createContext();

const Translator = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const translate = (text) => {
    const translations = {
      "Hello World!": {
        en: "Hello World!",
        no: "Hei Verden!",
      },
      "Hello Everyone!": {
        en: "Hello Everyone!",
        no: "Hei Alle!",
      },
      "Hello You!": {
        en: "Hello You!",
        no: "Hei Du!",
      },
      "Hello Friend!": {
        en: "Hello Friend!",
        no: "Hei Venn!",
      },
      "I am Mikael Selstad": {
        en: "I am Mikael Selstad",
        no: "Jeg heter Mikael Selstad",
      },
      "Frontend Developer": {
        en: "Front-end Developer",
        no: "og er utvikler",
      },
      "I`m passionate about experiences, design and I like solving problems and turning challenges into solutions.":
        {
          en: "I`m passionate about User Experiences, Design and I like solving problems and turning challenges into solutions.",
          no: "Jeg brenner for brukeropplevelser og design, liker å løse problemer og å finne smidige løsninger.",
        },
      Languages: {
        en: "Languages",
        no: "Språk",
      },
      Skills: {
        en: "Skills",
        no: "Ferdigheter",
      },

      "Let's Talk": {
        en: "Let's Talk",
        no: "Kontakt",
      },

      "About Me": {
        en: "About",
        no: "Om Meg",
      },
      Career: {
        en: "Career",
        no: "Karriere",
      },
      Hobbies: {
        en: "Hobbies",
        no: "Hobbier",
      },

      "Love to win, hate to lose, but a good sport": {
        en: "Love to win, hate to lose, but a good sport",
        no: "Elsker å vinne, hater å tape, men tar det med et smil",
      },
      "Profile image of Mikael Selstad": {
        en: "Profile image of Mikael Selstad",
        no: "Profilbilde av Mikael Selstad",
      },
      "My name is Mikael and I am 34 years old. I live in Nesodden, where I grew up, which is a small island outside of Oslo, or it`s actually a peninsula if we want to get technical. Some citizens of Oslo, refer to us as the ferry people.":
        {
          en: "My name is Mikael and I am 34 years old. I live in Nesodden, where I grew up, which is a small island outside of Oslo, or it`s actually a peninsula if we want to get technical. Some citizens of Oslo, refer to us as the ferry people.",
          no: "Jeg heter Mikael og er 34 år gammel. Jeg bor på Nesodden, tettstedet jeg vokste opp. Det er en liten halvøy utenfor Oslo.",
        },
      "I am a people person and known as the guy that always smiles, even on the occasional bad day. I`ve been a people person for as long as I can remember, and I love to meet and interact with new people.":
        {
          en: "I am a people person and known as the guy that always smiles, even on the occasional bad day. I`ve been a people person for as long as I can remember, and I love to meet and interact with new people.",
          no: "Jeg er en sosial fyr og kjent som fyren som alltid smiler, selv på en dårlig dag. Jeg har vært et sosialt vesen så lenge jeg kan huske, og jeg liker å bli kjent med nye personer.",
        },
      "I am an active person and I try to workout 4-5 times a week. I love lifting heavy weights, but I hate running unless there is a ball involved. I have played handball since I was 10, but had to hang up the jersey as I wanted my knees to support me a bit longer in life. After I quit handball I started coaching, and I coach two youth teams. I love it, and I love to see them grow as players and as people. I also love to play golf, and I try to play as much as I can. I am not very good, but love the game, to compete and being social.":
        {
          en: "I am an active person and I try to workout 4-5 times a week. I love lifting heavy weights, but I hate running unless there is a ball involved. I have played handball since I was 10, but had to hang up the jersey as I wanted my knees to support me a bit longer in life. After I quit handball I started coaching, and I coach two youth teams. I love it, and I love to see them grow as players and as people. I also love to play golf, and I try to play as much as I can. I am not very good, but love the game, to compete and being social.",
          no: "Jeg er en aktiv person og jeg prøver å trene 4-5 ganger i uken. Jeg elsker å løfte tunge ting, og jeg hater å løpe med mindre det er en ball involvert. Jeg har spilt håndball siden jeg var 10, men måtte legge opp da jeg ville at knærne mine skulle støtte meg litt lenger i livet. Etter at jeg sluttet med håndball begynte jeg som trener, og nå trener jeg to ungdomslag. Jeg elsker det, og jeg liker å se dem vokse som spillere og som mennesker. Jeg spiller også golf, og jeg prøver å spille så mye jeg kan. Jeg er ikke veldig god, men elsker spillet, å konkurrere og være sosial.",
        },
      "Other than that I like to cook, and love to eat, good food is the main reason I work out. I mostly cook from scratch and like to use authentic ingredients. I also enjoy a good glass of wine, and I am as comfortable in a bar as I am on the dance floor.":
        {
          en: "Other than that I like to cook, and love to eat, good food is the main reason I work out. I mostly cook from scratch and like to use authentic ingredients. I also enjoy a good glass of wine, and I am as comfortable in a bar as I am on the dance floor.",
          no: "Utover det liker jeg å lage mat, og elsker å spise, mat er grunnen til at jeg trener. Jeg lager for det meste mat fra bunnen, og  jeg liker å bruke autentiske ingredienser. Jeg nyter også noe godt i glasset, og jeg er like komfortabel på bar som på dansegulvet.",
        },
      "I am a curious person, and I enjoy learning new things. Sometimes I google completely random things to figure out how things work, which also makes me a menace at quiz nights. I am also a bit of a nerd and play video games, collect trading cards and watch anime.":
        {
          en: "I am a curious person, and I enjoy learning new things. Sometimes I google completely random things to figure out how things work, which also makes me a menace at quiz nights. I am also a bit of a nerd and play video games, collect trading cards and watch anime.",
          no: "Jeg er nysgjerrig av natur, og jeg liker å lære nye ting. Noen ganger googler jeg helt tilfeldige ting for å finne ut hvordan ting fungerer, noe som også gjør meg til en trussel på quizkvelder. For mange er jeg  nok en solid nerd og spiller videospill, samler på samleobjkekter og ser på anime.",
        },
      "Teacher Gone Developer": {
        en: "Teacher Gone Developer",
        no: "Sluttet som lærer og utvikler",
      },
      "I started my teacher`s degree at the University of Stavanger in 2011 and graduated in 2016. I studied mathematics, social studies, religion, and cooking. After completing my degree, I took an extra year to study English. While studying, I worked at the student bar, a supermarket and played and administered the university handball team. I also helped plan and host Fadderuka two times, which is a festival to welcome students to the university.":
        {
          en: "I started my teacher`s degree at the University of Stavanger in 2011 and graduated in 2016. I studied mathematics, social studies, religion, and cooking. After completing my degree, I took an extra year to study English. While studying, I worked at the student bar, a supermarket and played and administered the university handball team. I also helped plan and host Fadderuka two times, which is a festival to welcome students to the university.",
          no: "Jeg begynte på lærerutdanningen ved Universitetet i Stavanger i 2011 og ble uteksaminert i 2016. Jeg studerte matematikk, samfunnsfag, religion og Mat og Helse. Etter å ha fullført graden min, tok jeg et ekstra år for å studere engelsk. Mens jeg studerte, jobbet jeg på studentbaren, i et supermarked og spilte og administrerte universitetets håndballag. Jeg hjalp også til med å planlegge og arrangere Fadderuka to ganger, som er en festival for å ønske studentene velkommen til universitetet.",
        },
      "After studying, I started working as a teacher at Høyland Ungdomsskole, a secondary school in Sandnes. Here I taught English, religion, and cooking for two years. After living in Stavanger for seven years, it was time to move back home. I started working at Nesoddtangen skole, a primary school. Here I taught English, math, science, and social studies. I was the team leader for the grade I worked in, and also had students in practice every year. Since the school wanted to implement coding, I was chosen to be the school`s coding expert. I started learning coding in 2019. I mainly started with block-coding with my pupils. We built robots, and programmed them to do different tasks. We also started with Minecraft coding. This got me thinking, and I looked into going back to school.":
        {
          en: "After studying, I started working as a teacher at Høyland Ungdomsskole, a secondary school in Sandnes. Here I taught English, religion, and cooking for two years. After living in Stavanger for seven years, it was time to move back home. I started working at Nesoddtangen skole, a primary school. Here I taught English, math, science, and social studies. I was the team leader for the grade I worked in, and also had students in practice every year. Since the school wanted to implement coding, I was chosen to be the school`s coding expert. I started learning coding in 2019. I mainly started with block-coding with my pupils. We built robots, and programmed them to do different tasks. We also started with Minecraft coding. This got me thinking, and I looked into going back to school.",
          no: "Etter fullførte studier så begynte jeg å jobbe som kontaktlærer ved Høyland Ungdomsskole i Sandnes. Her underviste jeg  engelsk, religion og matlaging i to år. Etter å ha bodd i Stavanger i syv år, var det på tide å flytte hjem igjen. Jeg begynte å jobbe på Nesoddtangen Skole hvor underviste engelsk, matematikk, naturfag og samfunnsfag. Jeg var teamleder på trinnet, og hadde også studenter i praksis hvert år. Siden skolen ønsket å satse mer på koding, ble jeg valgt til å bli kodeekspert. Jeg begynte å kode i 2019. Jeg startet med blokkoding med elevene mine. Vi bygde roboter og programmerte dem til å utføre forskjellige oppgaver. Vi startet også med Minecraft-koding. Dette fikk meg i tenkeboksen, og jeg valgte å studere igjen.",
        },
      "During spring 2022, I decided to quit teaching and applied to frontend development at Noroff. As of 2024, I have finished my two year degree with straight A`s and am currently looking for a new job!":
        {
          en: "During spring 2022, I decided to quit teaching and applied to frontend development at Noroff. As of 2024, I have finished my two year degree with straight A`s and am currently looking for a new job!",
          no: "Våren 2022 bestemte jeg meg for å slutte som lærer og søkte på Frontend utvikling ved Noroff. Jeg fullførte min toårige grad med toppkarakterer og er for tiden på utkikk etter en ny jobb!",
        },
      "While studying at Noroff, I was coaching a youth handball team, and the club was looking for a new manager of sports. I applied and got the job in January 2023 and have been working with handball while studying. I coach two youth teams while also being in charge of the club. I hire coaches, help and guide new coaches and players, while being the club`s representative in the handball federation. I also help plan and execute club events and tournaments.":
        {
          en: "While studying at Noroff, I was coaching a youth handball team, and the club was looking for a new manager of sports. I applied and got the job in January 2023 and have been working with handball while studying. I coach two youth teams while also being in charge of the club. I hire coaches, help and guide new coaches and players, while being the club`s representative in the handball federation. I also help plan and execute club events and tournaments.",
          no: "Samtidig som jeg studerte ved Noroff, trente jeg et håndballag, også plutselig var klubben var på utkikk etter en ny sportslig leder. De spurte meg, og jeg tok jobben i januar 2023. Jeg trener to ungdomslag samtidig som jeg har ansvar for den sportlige satsningen til klubben. Jeg ansetter trenere, hjelper og veileder nye trenere og spillere, samtidig som jeg er klubbens representant i håndballforbundet. Jeg hjelper også til med å planlegge og gjennomføre klubbarrangementer og turneringer.",
        },
      "The Real Me!": {
        en: "The Real Me!",
        no: "Den Virkelige Meg",
      },
      "I am a total geek, and I have picked up different hobbies through my years. One of my biggest passions is football, and mainly Arsenal FC. I have supported them in thick and thin since 2001. I try to watch every game, and try to go to London once a year. I’m not proud of how their results affect my mood, but it is what it is.":
        {
          en: "I am a total geek, and I have picked up different hobbies through my years. One of my biggest passions is football, and mainly Arsenal FC. I have supported them in thick and thin since 2001. I try to watch every game, and try to go to London once a year. I’m not proud of how their results affect my mood, but it is what it is.",
          no: "Jeg er mega nørd, og jeg liker å gjøre masse forskjellige. En av mine største lidenskaper er Arsenal. Jeg har støttet dem i tykt og tynt siden 2001. Jeg prøver å se hver eneste kamp, og prøver å dra til London med noen kompiser en gang i året. Jeg er ikke stolt av hvordan resultatene deres påvirker humøret mitt, men det er som det er.",
        },
      "I am also a huge fan of being outside, and I am above average fond of competitions. I enjoy playing golf, skiing, swimming in the ocean, and playing handball. I also enjoy lifting weights and try to do it at least 4-5 times a week. My current goal is to deadlift 250kg. Cooking is a huge part of my life, and I make almost everything from scratch. I try to buy local, and authentic ingredients while also considering animal welfare and the environment.":
        {
          en: "I am also a huge fan of being outside, and I am above average fond of competitions. I enjoy playing golf, skiing, swimming in the ocean, and playing handball. I also enjoy lifting weights and try to do it at least 4-5 times a week. My current goal is to deadlift 250kg. Cooking is a huge part of my life, and I make almost everything from scratch. I try to buy local, and authentic ingredients while also considering animal welfare and the environment.",
          no: "Jeg digger å være ute, og jeg er over gjennomsnittlig glad i konkurranser. Jeg spiller golf, går på ski, svømmer i havet og spille håndball. Jeg liker også å løfte vekter og prøver å gjøre det minst 4-5 ganger i uken. Mitt nåværende mål er å løfte 250 kg. Matlaging er en stor del av livet mitt, og jeg lager nesten alt fra bunnen av. Jeg prøver å kjøpe lokale og autentiske ingredienser samtidig som jeg tar hensyn til dyrevelferd og miljøet.",
        },
      "I play video games and have been doing that since I was young. I have played games such as World of Warcraft, Call of Duty and FIFA. I also enjoy playing board games, card games and social games over the internet.":
        {
          en: "I play video games and have been doing that since I was young. I have played games such as World of Warcraft, Call of Duty and FIFA. I also enjoy playing board games, card games and social games over the internet.",
          no: "Jeg spiller videospill og har gjort det siden jeg var ung. Jeg har spilt spill som World of Warcraft, Pokemon og CoD. Jeg liker også å spille brettspill, kortspill og sosiale spill over internett.",
        },
      "I collect trading cards, mostly Pokémon cards. I used to play the game when I was young and picked it up again during COVID. I hope I am able to travel to Japan so I can visit the Pokémon center and buy some exclusive cards. I also watch anime, and my favorite is One Piece. Movies and TV-series are something I enjoy, and I try to go to the theater as often as possible.":
        {
          en: "I collect trading cards, mostly Pokémon cards. I used to play the game when I was young and picked it up again during COVID. I hope I am able to travel to Japan so I can visit the Pokémon center and buy some exclusive cards. I also watch anime, and my favorite is One Piece. Movies and TV-series are something I enjoy, and I try to go to the theater as often as possible.",
          no: "Jeg samler på samlekort, mest Pokémon-kort. Jeg pleide å spille spillet da jeg var ung og plukket det opp igjen under COVID. Jeg håper jeg kan reise til Japan så jeg kan besøke Pokémon-senteret og kjøpe noen eksklusive kort. Jeg ser også på anime, og min favoritt er One Piece. Som de fleste andre slapper jeg gjerne av filmer og serier, og prøver å gå på kino så ofte som mulig.",
        },
      "I love hearing the phrase, “I did not take you for a person who was into that.”":
        {
          en: "I love hearing the phrase, “I did not take you for a person who was into that.”",
          no: "Jeg elsker å høre uttrykket, “Jeg tok deg ikke for å være en person som var interessert i det.”",
        },

      Projects: {
        en: "Projects",
        no: "Prosjekter",
      },
      "Featured below is a list of my projects. It has been a journey and I would like to showcase how my skills have improved over the short period I`ve been coding & designing.":
        {
          en: "Featured below is a list of my projects. It has been a journey and I would like to showcase how my skills have improved over the short period I`ve been coding & designing.",
          no: "Nedenfor er en liste over sider jeg har laget. Jeg ønsker å vise hvordan ferdighetene mine har forbedret seg over den korte perioden jeg har kodet og designet.",
        },
    };

    return translations[text] ? translations[text][language] : text;
  };

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "no" : "en"));
  };

  return (
    <TranslatorContext.Provider
      value={{ language, setLanguage, translate, toggleLanguage }}
    >
      {children}
    </TranslatorContext.Provider>
  );
};

export const useTranslator = () => useContext(TranslatorContext);

export default Translator;
