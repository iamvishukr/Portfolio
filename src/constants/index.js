import { Link } from "react-router-dom";
import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";


export const HERO_CONTENT = `Hi! I'm a front-end developer who loves bringing web applications to life with React.js. I have a knack for creating responsive, high-performance sites that offer a seamless user experience. With strong skills in HTML, CSS, and JavaScript, I take pride in writing clean, maintainable code that makes designs shine. Take a look at my portfolio to see some of the projects I've worked on and how I blend creativity with technical know-how to build great web solutions.`;

//export const linkedIn ="https://www.linkedin.com/in/vishu23/"

export const ABOUT_TEXT = `Hello! I'm a passionate Front-End Developer who loves creating dynamic and visually appealing web applications. I have extensive experience with modern web technologies like React, JavaScript, Redux, Tailwind CSS, Next.js, TypeScript, and Firebase. My focus is on building user-friendly and efficient interfaces that provide seamless experiences.

I'm also well-versed in using GitHub for version control and collaboration, and I rely on Visual Studio Code to enhance productivity and code quality. I'm always eager to learn new technologies and stay up-to-date with industry trends. My goal is to contribute to impactful projects and work with like-minded professionals to create innovative solutions.

Feel free to explore my portfolio to see some of the exciting projects I've worked on.`;

export const EXPERIENCES = [
  {
    year: "Nov 2023 - Jan 2024",
    role: "Frontend Developer Intern",
    company: "The Website Makers",
    description: `Collaborated with a dynamic team at Website Makers during an internship, contributing to the successful fulfillment of client
                  demands for website development.`,
    technologies: ["HTML", "Javascript", "React", "WordPress"],
  },
  {
    year: "July 2022 - Aug 2023",
    role: "Web Developer",
    company: "Wipro",
    description: `I worked as a web developer, where I focused on building and enhancing components for various projects using React and JavaScript. My role involved creating responsive and user-friendly interfaces, ensuring that everything was seamless and efficient. `,
    technologies: ["React", "Javascript", "HTML", "Tailwind", "Redux"],
  },
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project4,
    description:
      " Designed and developed a modern portfolio website using React, Tailwind CSS, and Framer Motion. The site showcases my projects and skills through a visually appealing and highly interactive user interface. Utilizing Tailwind for streamlined styling and Framer Motion for smooth animations, this portfolio highlights my expertise in front-end development and attention to detail in creating engaging user experiences.",
    technologies: ["HTML", "Tailwind", "React", "Framer Motion"],
    path: "",
  },
  {
    title: "Musix",
    image: project6,
    description:
      "Musix is a music school website designed to showcase a variety of courses for aspiring musicians. Built using Next.js and Accertinity UI, the site features an engaging and user-friendly interface. It's important to note that Musix is currently for demonstration purposes only, and its features are not functional.",
    technologies: ["NextJs", "Tailwind", "Accertinity UI"],
    path: "https://musix-steel.vercel.app/",
  },
  {
    title: "Quiz-Application",
    image:project5,
    description: "A simple and interactive quiz application using JavaScript, HTML, and CSS. The app features multiple-choice questions and keeps track of the user's score as they progress through the quiz.",
    technologies: ["HTML", "CSS", "javascript"],
    path:"https://quiz-js.netlify.app/"
  },
  {
    title: "MeTUBE",
    image: project2,
    description:
    "Developed a YouTube clone featuring real-time search suggestions, live chat for interactive user engagement, and infinite scroll for seamless video browsing. Utilized Higher Order Components (HOCs) to highlight sponsored content and integrated YouTube Live APIs for live streaming capabilities, ensuring a dynamic and immersive user experience.",
    technologies: ["HTML", "Tailwind", "React", "Redux"],
    path: "https://github.com/iamvishukr/Youtube-spin-off",
  },
  {
    title: "CRYPt Core",
    image: project3,
    description:
      "Developed a comprehensive cryptocurrency tracking application using React. This app provides real-time data on various cryptocurrencies, including their current prices, market capitalizations, and other key details. The intuitive and user-friendly interface allows users to easily monitor and compare different coins, making it an essential tool for anyone interested in the crypto market.",
    technologies: ["HTML", "CSS", "React"],
    path: "https://github.com/iamvishukr/CRYPtcore",
  },
    {
      title: "flixGPT",
      image: project1,
      description:
        "Developed a Movie Streaming Web App featuring ChatGPT integration for personalized movie recommendations. Utilized the TMDB API for extensive movie data and implemented Firebase for a secure backend and user authentication. Enhanced user engagement with a robust login/signup system.",
      technologies: ["HTML", "tailwind", "React", "Redux", "Firebase"],
      path: "https://github.com/iamvishukr/flixGPT-main",
    },
];

export const CONTACT = {
  address: "Ranchi , Jharkhand - India 835217",
  email: "iamvishukr.dev@gmail.com",
};
