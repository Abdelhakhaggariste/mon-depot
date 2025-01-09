/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Hissein Abdel-hakh",
  title: "Hi all, I'm Hissein",
  subTitle: emoji(
    "Un développeur de logiciels Full Stack passionné 🚀ayant une expérience de la création d'applications Web et mobiles avec JavaScript / Reactjs / Nodejs /java et d'autres bibliothèques et frameworks intéressants"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Abdelhakhaggariste",
  linkedin: "https://www.linkedin.com/in/abdel-hakh-hissein-hissein-62b441306/",
  gmail: "hisseinabdelhahk@gmail.com",
  facebook: "https://www.facebook.com/abdelhak.haggar",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Ce que je fais",
  subTitle: "DÉVELOPPEUR FULL STACK FOU QUI VEUT EXPLORER CHAQUE STACK TECH",
  skills: [
    emoji(
      "⚡ Développez des interfaces front-end/utilisateur hautement interactives pour vos applications Web et mobiles"
    ),
    emoji("⚡ Applications Web progressives (PWA) dans les piles normales et SPA"),
    emoji(
      "⚡Intégration de services tiers tels que Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
       skillName: "vscode",
       fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "eclipse",
      fontAwesomeClassname: "fas fa-tools"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Ecole Supperieur Polytechnique de Dakar",
      logo: require("./assets/images/ucad.png"),
      subHeader: "Master en Genie informatique Option Génie Logiciel et Systeme d'Information",
      duration: "Novembre 2023 - juin 2024(Master 1) et Master 2 en cours",
      desc: "",
      descBullets: [
        "L'école supérieure polytechnique de Dakar, plus connue par sous l'acronyme ESP est une école de formation professionnelle placée sous la tutelle du ministère de l’enseignement supérieur du Sénégal. Elle a été fondée en mai 19641. Elle est rattachée à l’université Cheikh-Anta-Diop (UCAD) de Dakar mais est dotée de la personnalité juridique et d'une autonomie financière. L'ESP de Dakar est l’une des écoles d'ingénieurs les plus importantes du Sénégal et de l’Afrique de l'Ouest. Elle forme des techniciens supérieurs et des ingénieurs dans le domaine de la science, de la technique et de la gestion.",
        
      ]
    },
    {
      schoolName: "Ecole ENASTIC N'Djamena",
      logo: require("./assets/images/ENASTIC.png"),
      subHeader: "Licence en Developpement des Application Web et Mobiles",
      duration: "Octobre 2020 - Septembre 2023",
      desc: "",
      descBullets: ["L’École nationale supérieure des technologies de l’Information et de la communication (ENASTIC) est un établissement public d'enseignement, de recherche, d’innovation et de formations supérieures dans les domaines des communications électroniques. Elle est créée par ordonnance numéro 005/PR/2015 du 2 mars 2015 et est dotée de la personnalité juridique et de l'autonomie financière. L'ENASTIC, administrée par un conseil d’administration, dirigée par un directeur général et placée sous la tutelle du ministère des Postes et des Nouvelles Technologies de l’Information. Le ministère de l’Enseignement supérieur, de la Recherche et de l’Innovation assure l’organisation académique et pédagogique"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Superviseur",
      company: "Eco-citoyen",
      companylogo: require("./assets/images/ecco.png"),
      date: "Juillet 2023 – Decembre 2022",
      desc: "",
      descBullets: [
        "Gestion d’une équipe de huit(8) graphistes.",
        "Filmage et enregistrement de toc-king pour le vulnérable"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "Novembre 2022- Present",
      desc: "Tout au long de ma formation en ingénierie logicielle, j'ai acquis des compétences solides dans la conception, le développement et le déploiement d'applications logicielles répondant aux besoins des utilisateurs."
    },
    {
      role: "Stagiaire ingénieur logiciel",
      company: "ADETIC",
      companylogo: require("./assets/images/Adetic.png"),
      date: "Mai 2022 – Sep 2021",
      desc: "Durant mon stage, j'ai participé au développement d'un site web de gestion immobilière en utilisant PHP, ce qui m'a permis de renforcer mes compétences en programmation et en gestion de bases de données MySQL."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on


// Achievement Section
// Include certificates, talks etc


// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "AvecAmour pour développer des trucs sympas, j'aime écrire et enseigner aux autres ce que j'ai appris.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "Gagnez un t-shirt Google Assistant et 200 $ en crédits Google Cloud",
      description:
        "Voulez-vous gagner 200 $ et un t-shirt Google Assistant en créant une action Google Assistant en moins de 30 minutes ?"
    },
    {
      url: "https://react.dev/",
      title: "Pourquoi REACT est le meilleur ?",
      description:
        "React est une bibliothèque JavaScript permettant de créer une interface utilisateur. Il est maintenu par Facebook et une communauté de développeurs individuels et d'entreprises."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "POURPARLERS",
  subtitle: emoji(
    "J'ADORE PARTAGER MES CONNAISSANCES LIMITÉES ET OBTENIR UN BADGE DE CONFÉRENCIER 😅"
  ),

  talks: [
    {
      title: "Créer des actions pour l'Assistant Google",
      subtitle: "",
      slides_url: "",
      event_url: "https://www.facebook.com/events?source=46&action_history=null&locale=fr_FR"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "J'AIME PARLER DE MOI ET DE TECHNOLOGIE",

  // Please Provide with Your Podcast embeded Link
  // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "N'hésitez pas à télécharger mon CV",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contactez-moi ☎️"),
  subtitle:
    "Vous souhaitez discuter d'un projet ou simplement me dire bonjour ? Ma boîte de réception est ouverte à tous..",
  number: "+221-787374190",
  email_address: "hisseinabdel@esp.sn"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
