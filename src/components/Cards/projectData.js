import vintageBrokersImage from "../images/Projects/VintageBrokers.webp";
import poketownImage from "../images/Projects/poketown.webp";
import gadgetVaultImage from "../images/Projects/gadgetvault.webp";
import futurumImage from "../images/Projects/Futurum.webp";
import bogeysImage from "../images/Projects/Bogeys.webp";
import HolidazeImage from "../images/Projects/Holidaze.webp";
import VilajoyhosaImage from "../images/Projects/vilajoyhosa.webp";

const projectsData = [
  {
    title: "Holidaze",
    image: HolidazeImage,
    alt: "Holidaze project screenshot",
    description: [
      "This was my final Exam at Noroff were we were to use all the skills we acquired over the past two years. Holidaze is a web application that allows users to browse, list and book venues. All users can browse the website and registered users can book, edit, create and delete venues and edit their profile. A registered user can sign up as a venue manager and can then list their own venues. The api limits the the user to use URL-images. The application is responsive and is built with React and Tailwind CSS. It is using the Noroff school API to fetch the data for venues and profiles.",
    ],
    skills: ["React", "Tailwind CSS", "Noroff API", "Responsive", "WCAG"],
    github: "https://github.com/Miksel90/Holidaze.git",
    website: "https://holidaze2.netlify.app/",
  },
  {
    title: "GadgetVault",
    image: gadgetVaultImage,
    alt: "GadgetVault project screenshot",
    description: [
      "This was my first react project at Noroff. The task was to build an E-com shop using the noroff E-commerce API.The site has a lookahead search function. The user can add & remove items in the cart, view their total amount, and see product details and reviews.",
    ],
    skills: ["HTML", "CSS modules", "React", "Noroff API", "WCAG"],
    github: "https://github.com/Miksel90/Js-Frameworks-CA.git",
    website: "https://vaultgadgets.netlify.app/",
  },
  {
    title: "Vintage Brokers",
    image: vintageBrokersImage,
    alt: "Vintage Brokers project screenshot",
    description: [
      "This was our exam for the third semester. We had to use a CSS framework, and everything is built with HTML/CSS/JS. The task was to build an auction site where the content was dynamically built after using different API calls.",
      "Only registered users can add new items, bid on items, and see the latest bids. All users can browse the site and see the latest items. The site is built with a mobile first approach. All images are created with AI.",
    ],
    skills: [
      "HTML",
      "CSS/SASS",
      "JavaScript",
      "Bootstrap",
      "API fetch",
      "WCAG",
    ],
    github: "https://github.com/Miksel90/SemesterProject2.git",
    website: "https://vintagebrokers.netlify.app/",
  },
  {
    title: "Costareta 19",
    image: VilajoyhosaImage,
    alt: "Project screenshot",
    description: [
      "Built a website to showcase an apartment for rent in Vilajoyhosa, Spain as the owner did want to list it on the larger sites and only rent out to friends and family. A small side project I did for a friend, and where I could practice Bootstrap.",
    ],
    skills: ["HTML", "CSS/Sass", "JavaScript", "Bootstrap"],
    github: "https://github.com/Miksel90/Villajoyhosa.git",
    website: "https://costareta19.netlify.app/",
  },
  {
    title: "Pokètown",
    image: poketownImage,
    alt: "Pokètown project screenshot",
    description: [
      "This was a project for the first two courses at my second year at Noroff. The task was to build a social platform of some sort. In our first course we had two weeks to design the site using Bootstrap. We were not allowed to add custom styling.",
      "The task was to use the previous project and implement features with Javascript. All information was to be gathered from the Noroff Social API using different methods. GET, PUT, POST and DELETE. We also had to save the access token in local storage. The user could communicate with others users.",
    ],
    skills: [
      "HTML",
      "CSS/Sass",
      "JavaScript",
      "Bootstrap",
      "API fetch",
      "WCAG",
    ],
    github: "https://github.com/Miksel90/css-frameworks-ca.git",
    website: "https://poketown.netlify.app/",
  },
  {
    title: "Futurum",
    image: futurumImage,
    alt: "Futurum project screenshot",
    description: [
      "Futurum was our first semester project. We were to use our skills with Figma and then HTML/CSS to build a website for a the new hypothetical museum that was opening in our hometown.",
      "The target audience were children aged 7-15 and young families, hence the playful colors. We also had to work with more text on this task so that was a bit of a challenge. We were not allowed to use any frameworks or libraries.",
    ],
    skills: ["HTML", "CSS", "Responsive", "WCAG"],
    github: "https://github.com/Miksel90/Semester-project-1.git",
    website: "https://futurum-semester1.netlify.app/",
  },
  {
    title: "Bogeys & Bunkers",
    image: bogeysImage,
    alt: "Bogeys & Bunkers project screenshot",
    description: [
      "This was our end of year one exam. We had a ton of freedom but we were not allowed to use any frameworks or libraries. Everything is built with HTML/CSS/JS. The task was to build a blogsite where the content was dynamically built after fetching data from Wordpress.",
      "The index page had to include a working image carousel which showcased the latest posts. All specific blog pages had to be dynamically built and all images on the pages had to modal functionality.",
    ],
    skills: ["HTML", "CSS", "JavaScript", "API fetch", "WCAG", "Wordpress"],
    github:
      "https://github.com/Noroff-FEU-Assignments/project-exam-1-Miksel90.git",
    website: "https://bogeys-bunkers.netlify.app/",
  },
];

export default projectsData;
