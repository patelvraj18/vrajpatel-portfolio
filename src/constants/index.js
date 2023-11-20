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
  carrent,
  jobit,
  tripguide,
  github,
  linkedln,
  email
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
    icon: web,
  },
  {
    title: "Mobile Application Developer",
    icon: mobile,
  },
  {
    title: "Web Application Developer",
    icon: backend,
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
    date: "July 2023 - Present",
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
    icon: washu,
    iconBg: "#383E56",
    date: "May 2022 - Present",
    points: [
      "",
    ],
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };