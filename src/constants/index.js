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
  dogsinnyc,
  president,
  screenpres1,
  screenpres2,
  screenpres3,
  entrepreneurship,
  flashcardify,
  vrajcreateshome,
  typescript,
  supabase,
  next_js,
  csharp,
  tailwind,
  mongodb,
  nodejs,
  postgresql,
  unity,
  nexus,
  knockout,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "welcome to my page",
  },
  {
    id: "projects",
    title: "projects",
  },
  {
    id: "contact",
    title: "hit me up!",
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
    title: "Web Application Developer",
    icon: web,
  },
  {
    title: "Entrepreneurial Minded",
    icon: entrepreneurship,
  },
  {
    title: "Photographer & Videographer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "java",
    icon: java,
  },
  {
    name: "c++",
    icon: cplusplus,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "javascript",
    icon: javascript,
  },
  {
    name: "typescript",
    icon: typescript,
  },
  {
    name: "next.js",
    icon: next_js,
  },
  {
    name: "node.js",
    icon: nodejs,
  },
  {
    name: "react.js",
    icon: reactjs,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "supabase",
    icon: supabase,
  },
  {
    name: "mongodb",
    icon: mongodb,
  },
  {
    name: "unity",
    icon: unity,
  },
  {
    name: "swift",
    icon: swift,
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
    name: "flashcardify",
    description:
      "an ai study tool that uses active learning strategies to help students learn more effectively. \n \n this app includes everything from science backed ways of studying including spaced repetition and practice questions all the way to a version of the feynman technique where you explain a concept in simpler words. \n \n it also includes ai features where you can make flashcards in sub 10 seconds, 24/7 personalized tutor, and gives you smart recommendations to take a break or further concepts to explore while studying as well. check it out! :)",
    tags: [
      {
        name: "next.js",
        color: "next-gradient",
      },
      {
        name: "typescript",
        color: "blue-darker-text-gradient",
      },
      {
        name: "tailwind css",
        color: "tailwind-css-gradient",
      },
      {
        name: "supabase",
        color: "green-roberta-gradient",
      },
      {
        name: "clerk",
        color: "red-different-text-gradient",
      },
      {
        name: "posthog",
        color: "ios-gradient",
      },
      {
        name: "stripe",
        color: "threejs-gradient",
      },
      {
        name: "openai",
        color: "orange-darker-text-firebase-gradient",
      },
      {
        name: "ui/ux focused",
        color: "ui-gradient",
      },
      {
        name: "vercel",
        color: "expo-gradient",
      },
      {
        name: "git",
        color: "git-gradient",
      },
    ],
    image: flashcardify,
    live_link: "https://www.flashcardify.ai/",
    id: "flashcardify",
  },
  {
    name: "vrajcreates",
    description:
      "a personal portfolio dedicated to my multi-media business of photography and videography. \n \n this website not only serves as use case for clients to see my previous work and what services i offer, but it is also a testament to my creativity, stellar web design skills, and programming abilities to make this 100% from scratch.   \n \n it includes a home page, about me page, services page, portfolio page, and a contact page. i am able to showcase that i offer services in weddings, real estate, and personal portraits as well! click the link to see more! \n",
    tags: [
      {
        name: "react.js",
        color: "react-native-gradient",
      },
      {
        name: "javascript",
        color: "yellow-darker-yellow-text-gradient",
      },
      {
        name: "email.js",
        color: "red-different-text-gradient",
      },
      {
        name: "tailwind css",
        color: "tailwind-css-gradient",
      },
      {
        name: "ui/ux focused",
        color: "ui-gradient",
      },
      {
        name: "vercel",
        color: "expo-gradient",
      },
      {
        name: "git",
        color: "git-gradient",
      }
    ],
    image: vrajcreateshome,
    live_link: "https://vrajcreates.com/",
    id: "vrajcreates",
  },
  {
    name: "chalk",
    description:
      "every 24 hours, at a random time of day, college students will anonymously engage in a daily question tailored to their location. so, basically think if bereal and yikyak had a baby. \n \n this was a mobile app developed alongside three others in a group project where i was able to work in a larger code base with a whole team. another notable feature is that users can also see a feed of their friend network and be able to interact with likes and comments like a social media app. ",
    tags: [
      {
        name: "react native",
        color: "react-native-gradient",
      },
      {
        name: "javascript",
        color: "yellow-darker-yellow-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-darker-text-firebase-gradient",
      },
      {
        name: "node.js",
        color: "green-nodejs-gradient",
      },
      {
        name: "native ui components",
        color: "ui-component-text-gradient",
      },
      {
        name: "ui/ux focused",
        color: "ui-gradient",
      },
      {
        name: "ios",
        color: "ios-gradient",
      },
      {
        name: "expo",
        color: "expo-gradient",
      },
      {
        name: "git",
        color: "git-gradient",
      }

    ],
    image: chalk,
    source_code_link: "https://github.com/patelvraj18/chalk---social-media-app",
    id: "chalk",
    title: "chalk",
    subtitle: "view various screenshots of the app above. \n \n notable features include: a landing page, signup/login pages with authentication of college email, scrollable feed page, a profile page with a detailed functional setting page, a comment page within a particular post, a discover feature to see local to your area, search by username feature, ability to see other people's profile and develop friends in a network, chat with friends feature, internal clock system with a ability to post every 24 hours at a random time, and lastly public/private friend network ability.",
    images: [screen1, screen2, screen3, screen4, screen5, screen6, screen7, screen8, screen9, screen10, screen11, screen12, screen13, screen14],
  },
  {
    name: "knockout",
    description:
      "a 2d fighting game where the last one standing wins. your goal - knock out the other opponent! \n \n play on different maps that take you to urban tokyo all the way to space alongside various characters with their unique abilities and cool animations. some of the apps even have dynamic elements that make it harder to win! \n \n  i collaborated with three other team members to develop this game, where i focused on ui/ux design, refining the game mechanics and overall experience, and ensuring the product was polished from start to finish \n",
    tags: [
      {
        name: "csharp",
        color: "ios-gradient",
      },
      {
        name: "unity",
        color: "next-gradient",
      },
      {
        name: "ui/ux focused",
        color: "ui-gradient",
      },
      {
        name: "webgl",
        color: "red-darker-red-text-gradient",
      },
      {
        name: "git",
        color: "git-gradient",
      }
    ],
    image: knockout,
    live_link: "https://zichu-pan.itch.io/knock-out",
    id: "knockout",
  },
  {
    name: "nexus",
    description:
      "an agency dedicated to providing web design, software, and marketing solutions to local businesses. \n \n from electricians to solar panel companies, we offer company redesigns and rebranding services to enhance a business's social presence and attract more clients. \n \n this agency overall focuses on tailoring our solutions to understand the audience of the business and focus on any data available to guide our choices. this was designed using figma and is fully responsive for all devices. \n",
    tags: [
      {
        name: "react.js",
        color: "react-native-gradient",
      },
      {
        name: "javascript",
        color: "yellow-darker-yellow-text-gradient",
      },
      {
        name: "email.js",
        color: "red-different-text-gradient",
      },
      {
        name: "tailwind css",
        color: "tailwind-css-gradient",
      },
      {
        name: "ui/ux focused",
        color: "ui-gradient",
      },
      {
        name: "vercel",
        color: "expo-gradient",
      },
      {
        name: "git",
        color: "git-gradient",
      }
    ],
    image: nexus,
    live_link: "https://nexusagency.me/",
    id: "nexus",
  },
  {
    name: "ml fairytale sentiment analysis",
    description:
      "ever wondered what overall tone the most famous fairytales were written in? well, i was curious, so i explored this question! \n \n this project uses natural language processing (nlp) to analyzes the sentiment - either positive, neutral, or negative emotions - of various fairytales by training machine learning models with roBERTa. \n \n i also made some visualizations by using d3.js to reveal important data about how the tone of these stories impacts children's perceptions through various graphs.",
    tags: [
      {
        name: "html",
        color: "red-darker-red-text-gradient",
      },
      {
        name: "css",
        color: "blue-darker-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-darker-yellow-text-gradient",
      },
      {
        name: "d3.js",
        color: "orange-darker-text-gradient",
      },
      {
        name: "python",
        color: "blue-yellow-text-gradient",
      },
      {
        name: "nlp",
        color: "blue-different-text-gradient",
      },
      {
        name: "pytorch",
        color: "red-different-text-gradient",
      },
      {
        name: "roBERTa",
        color: "green-roberta-gradient",
      },
      {
        name: "git",
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
    name: "ml fairytale sentiment analysis",
    description:
      "ever wondered what overall tone the most famous fairytales were written in? well, i was curious, so i explored this question! \n \n this project uses natural language processing (nlp) to analyzes the sentiment - either positive, neutral, or negative emotions - of various fairytales by training machine learning models with roBERTa. \n \n i also made some visualizations by using d3.js to reveal important data about how the tone of these stories impacts children's perceptions through various graphs.",
    tags: [
      {
        name: "html",
        color: "red-darker-red-text-gradient",
      },
      {
        name: "css",
        color: "blue-darker-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-darker-yellow-text-gradient",
      },
      {
        name: "d3.js",
        color: "orange-darker-text-gradient",
      },
      {
        name: "python",
        color: "blue-yellow-text-gradient",
      },
      {
        name: "nlp",
        color: "blue-different-text-gradient",
      },
      {
        name: "pytorch",
        color: "red-different-text-gradient",
      },
      {
        name: "roBERTa",
        color: "green-roberta-gradient",
      },
      {
        name: "git",
        color: "git-gradient",
      }
    ],
    line_break: "\n",
    image: fairytale,
    source_code_link: "https://github.com/patelvraj18/ml-sentiment-analysis-englishfairytales",
    id: "fairy",
  },


];


export { services, technologies, experiences, projects };