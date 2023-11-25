/* eslint-disable no-unused-vars */
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  threejs,
  d3,
  git,
  figma,
  eye,
  washu,
  techmed,
  firebase,
  java,
  swift,
  cplusplus,
  python,
  github,
  linkedln,
  email,
  fairytale,
  link,
  chalk,
  screen1,
  screen2,
  screen3,
  screen4,
  screen5,
  screen6,
  screen7,
  screen8,
  screen9,
  screen10,
  screen11,
  screen12,
  screen13,
  screen14,
  vrajcreates,
  portfolio,
  movie,
  screen1db,
  screen2db,
  screen3db,
  screen4db,
  screen5db,
  screen6db,
  screen7db,
  screen8db,
  screen9db,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "linkedin",
    icon: linkedln,
  },
  {
    id: "github",
    icon: github,
  },
  {
    id: "email",
    icon: email,
  }
];

const services = [
  {
    title: "Fullstack Developer",
    icon: backend,
  },
  {
    title: "Mobile Application Developer",
    icon: mobile,
  },
  {
    title: "Web Application Developer",
    icon: web,
  },
  {
    title: "Photographer Videographer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Three.js",
    icon: threejs,
  },
  {
    name: "D3.js",
    icon: d3,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C++",
    icon: cplusplus,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Swift",
    icon: swift,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },

];

const experiences = [
  {
    title: "Software Engineering Intern",
    company_name: "EyeLabsAI",
    icon: eye,
    iconBg: "#1e2333",
    date: "Sept 2023 - Present",
    points: [
      "Developing on a app called EyeSpace that serves as a reference tool that assists a 3rd of ophthalmologists in the U.S. daily with 1000s of users",
      "Spearheaded the development of an innovative feature, the Sulcus Adjustment Calculator, integrating essential surgical tools into the application by using Swift and Firebase.",
      "Advanced the user experience by leveraging SwiftUI to create intuitive and accessible interfaces on the landing page, focusing on efficiency for medical professionals and enhancing user retention with design principles",
      "Revamping the application's backend database architecture, implementing scalable solutions that facilitate seamless updates and management of diverse data sets related to the ICL",
    ],
  },
  {
    title: "Teacher Assistant",
    company_name: "Washington University in St. Louis",
    icon: washu,
    iconBg: "#f7f7f7",
    date: "Jan 2022 - Present",
    points: [
      "Teacher Assistant (TA) for Introduction to Computer Science and Logic and Discrete Mathematics",
      "Taught core computer science concepts to over 432 students in office hours and executed the grading of weekly assessments, providing relevant feedback for growth",
      "Orchestrated focused study groups for 3-4 students within a large-class framework, advancing their academic proficiency and mastery of assignments in a personalized setting",
      "Cultivated problem-solving and critical thinking in a high-volume classroom, steering students towards solutions in a creative way to facilitate understanding",
      "Held weekly tutoring sessions and office hours for logic and discrete mathematics, breaking down intricate mathematical proofs and logic problems",
    ],
  },
  {
    title: "Co-Founder & Experience Chair",
    company_name: "TechxMed",
    icon: techmed,
    iconBg: "#f7f7f7",
    date: "July 2023 - Present",
    points: [
      "Co-founded TechxMed, a pioneering club at WashU dedicated to exploring the intersection of technology and medicine, fostering a community for like-minded enthusiasts with over 110+ members",
      "Administered the organization and outreach of a interdisciplinary panel by engaging professors and professionals from the TechxMed sector in computational biology, medical imaging, and other notable fields",
      "Curated and presented research highlights at club meetings to showcase emerging breakthroughs in the TechxMed industry near the local community for members to get involved with",
      "Led a comprehensive resume-building workshop aimed at enhancing career readiness for students interested in acquiring internships and research in these fields, engaging 85% of the club members in active discussions"
    ],
  },
  {
    title: "Founder & Owner",
    company_name: "vrajcreates",
    icon: vrajcreates,
    iconBg: "#ffffff",
    date: "May 2022 - Present",
    points: [
      "Founded a self-driven photography, videography, and multimedia business with over 65+ clients served over various projects and shoots",
      "Creatively produce for clients in Memphis and St. Louis areas, specialized in capturing genuine, candid moments to deliver high-quality storytelling media",
      "Experience of work includes wedding videography, real estate agent photography, college and high school portraits for senior and graduation photos, and styled creative photoshoots, ",
      "Self taught in DaVinci Resolve, Adobe Premiere Pro, Adobe Lightroom, Adobe Photoshop, Adobe After Effects, and Adobe Illustrator to edit and produce high quality media for clients",
    ],
  },
];

const projects = [
  {
    name: "Chalk ~ Daily Prompts for College Students",
    description:
      "A mobile app developed using React Native with JS, Expo, Node.js, and Firebase tailored to college students features random, anonymous engaging daily prompts that goes off at random time during the day. Users respond to a question that is tailored to them and their overall location. Users can also see a feed of their friend network and be able to interact with likes and comments in a thread like fashion. ",
    tags: [
      {
        name: "React Native",
        color: "react-native-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-darker-yellow-text-gradient",
      },
      {
        name: "Firebase",
        color: "orange-darker-text-firebase-gradient",
      },
      {
        name: "Expo",
        color: "expo-gradient",
      },
      {
        name: "Node.js",
        color: "green-nodejs-gradient",
      },
      {
        name: "Native UI Components",
        color: "ui-component-text-gradient",
      },
      {
        name: "IOS",
        color: "ios-gradient",
      },
      {
        name: "Git",
        color: "git-gradient",
      }

    ],
    image: chalk,
    source_code_link: "https://github.com/patelvraj18/chalk---social-media-app",
    id: "chalk",
    title: "Chalk ~ Daily Prompts for College Students",
    subtitle: "View various screenshots of the app above. \n \n Notable implementations include: a launch page, signup/login pages with authentication of college email, scrollable feed page, a profile page with a detailed functional setting page, a comment page within a particular post, a discover feature to see local to your area, search by username feature, ability to see other people's profile and develop friends in a network, chat with friends feature, internal clock system with a ability to post every 24 hours at a random time, and lastly public/private friend network ability.",
    images: [screen1, screen2, screen3, screen4, screen5, screen6, screen7, screen8, screen9, screen10, screen11, screen12, screen13, screen14],
  },
  {
    name: "Fairytale Sentiment Analysis",
    description:
      "\n Natural Language Processing (NLP) project that analyzes the sentiment - either positive, neutral, or negative emotions - of various fairytales to make visualization by using D3.js and use machine learning models as well (RoBERTa). Reveals important data about how it impacts children's perceptions through various graphs \n",
    tags: [
      {
        name: "HTML",
        color: "red-darker-red-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-darker-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-darker-yellow-text-gradient",
      },
      {
        name: "D3.js",
        color: "orange-darker-text-gradient",
      },
      {
        name: "Python",
        color: "blue-yellow-text-gradient",
      },
      {
        name: "NLP",
        color: "blue-different-text-gradient",
      },
      {
        name: "PyTorch",
        color: "red-different-text-gradient",
      },
      {
        name: "RoBERTa",
        color: "green-roberta-gradient",
      },
      {
        name: "Git",
        color: "git-gradient",
      }
    ],
    line_break: "\n",
    image: fairytale,
    source_code_link: "https://github.com/patelvraj18/ml-sentiment-analysis-englishfairytales",
    live_link: "https://fairytales-analysis.vercel.app/",
    id: "fairy",
  },
  {
    name: "Vraj Patel's Portfolio Website",
    description:
      "My personal 3D Interactive Portfolio showcases my professional work through a responsive 3D space using 3d models and careful consideration of front-end design. It features interactive animations and dynamic content, offering a unique exploration of my skills and projects. Designed with modern web development practices, the portfolio presents each element as an engaging window, ensuring accessibility and a captivating user experience on any device.",
    tags: [
      {
        name: "HTML",
        color: "red-darker-red-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-darker-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-darker-yellow-text-gradient",
      },
      {
        name: "React.js",
        color: "react-native-gradient",
      },
      {
        name: "Three.js",
        color: "threejs-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "tailwind-css-gradient",
      },
      {
        name: "Git",
        color: "git-gradient",
      }
    ],
    image: portfolio,
    source_code_link: "https://github.com/patelvraj18/vrajpatel-portfolio",
    id: "portfolio",
  },
  {
    name: "Movie Database Library App",
    description:
      "A mobile app created through Swift and Xcode that allows users to search for Movies and TV shows and add them to their favorites. Users can see a dynamic view of their favorite movies and TV shows including descriptions, where to watch, and other notable information retried through MovieData API. Users can get wallpapers from the Movie or TV Show cover to add to them photo gallery",
    tags: [
      {
        name: "Swift",
        color: "swift-gradient",
      },
      {
        name: "Xcode",
        color: "xcode-gradient",
      },
      {
        name: "IOS",
        color: "ios-gradient",
      },
      {
        name: "MovieData API",
        color: "movie-database",
      },
      {
        name: "UIKit",
        color: "ui-component-text-gradient",
      },
    ],
    image: movie,
    id: "movie",
    title: "Movie Database Library App",
    subtitle: "View various screenshots of the app above. \n \n Notable implementations include: a search feature to see various movies or tv-show; detailed view presenting score of production, description, and release data; interactive features to add to favorites, see where to watch, and add to photo gallery; a favorites page to see all your favorite movies and tv-shows; and within photo gallery you can see all the wallpapers you have saved from your favorite movies and tv-shows.",
    images: [screen1db, screen2db, screen3db, screen4db, screen5db, screen6db, screen7db, screen8db, screen9db]
  },
  {
    name: "Movie Database Library App",
    description:
      "A mobile app created through Swift and Xcode that allows users to search for Movies and TV shows and add them to their favorites. Users can see a dynamic view of their favorite movies and TV shows including descriptions, where to watch, and other notable information retried through MovieData API. Users can get wallpapers from the Movie or TV Show cover to add to them photo gallery",
    tags: [
      {
        name: "Swift",
        color: "swift-gradient",
      },
      {
        name: "Xcode",
        color: "xcode-gradient",
      },
      {
        name: "IOS",
        color: "ios-gradient",
      },
      {
        name: "MovieData API",
        color: "movie-database",
      },
      {
        name: "UIKit",
        color: "ui-component-text-gradient",
      },
    ],
    image: movie,
    id: "movie",
    title: "Movie Database Library App",
    subtitle: "View various screenshots of the app above. \n \n Notable implementations include: a search feature to see various movies or tv-show; detailed view presenting score of production, description, and release data; interactive features to add to favorites, see where to watch, and add to photo gallery; a favorites page to see all your favorite movies and tv-shows; and within photo gallery you can see all the wallpapers you have saved from your favorite movies and tv-shows.",
    images: [screen1db, screen2db, screen3db, screen4db, screen5db, screen6db, screen7db, screen8db, screen9db]
  },
  {
    name: "Movie Database Library App",
    description:
      "A mobile app created through Swift and Xcode that allows users to search for Movies and TV shows and add them to their favorites. Users can see a dynamic view of their favorite movies and TV shows including descriptions, where to watch, and other notable information retried through MovieData API. Users can get wallpapers from the Movie or TV Show cover to add to them photo gallery",
    tags: [
      {
        name: "Swift",
        color: "swift-gradient",
      },
      {
        name: "Xcode",
        color: "xcode-gradient",
      },
      {
        name: "IOS",
        color: "ios-gradient",
      },
      {
        name: "MovieData API",
        color: "movie-database",
      },
      {
        name: "UIKit",
        color: "ui-component-text-gradient",
      },
    ],
    image: movie,
    id: "movie",
    title: "Movie Database Library App",
    subtitle: "View various screenshots of the app above. \n \n Notable implementations include: a search feature to see various movies or tv-show; detailed view presenting score of production, description, and release data; interactive features to add to favorites, see where to watch, and add to photo gallery; a favorites page to see all your favorite movies and tv-shows; and within photo gallery you can see all the wallpapers you have saved from your favorite movies and tv-shows.",
    images: [screen1db, screen2db, screen3db, screen4db, screen5db, screen6db, screen7db, screen8db, screen9db]
  },
];


export { services, technologies, experiences, projects };