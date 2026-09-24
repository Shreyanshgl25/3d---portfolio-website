import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
    ATG,
    Fam,
    alma,
    crud,
    ecom
  } from "../assets";

export const profile = {
  name: "Shreyansh Goyal",
  email: "shreyanshgl2003@gmail.com",
  roles: [
    "Data Science & ML Enthusiast",
    "Full-Stack Web Developer",
    "Python Developer",
    "Competitive Programmer",
  ],
  resume:
    "https://drive.google.com/file/d/1qpMlP0cjqZ1795q9Hc7HNr-jLcX8eT6I/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/shreyansh-goyal-11b131229/",
  // TODO: confirm this is your GitHub profile (taken from your project repo links)
  github: "https://github.com/McoderTanmay",
};

export const navLinks = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "tech", title: "Skills" },
  { id: "work", title: "Projects" },
  { id: "contact", title: "Contact" },
];

// Animated counters / badges shown in the About section
export const stats = [
  { label: "Internships", value: 2, suffix: "" },
  { label: "Projects Built", value: 3, suffix: "+" },
  { label: "Smart India Hackathon 2024", text: "Finalist" },
];

const services = [
  { title: "Data Science Enthusiast", icon: backend },
  { title: "Python Developer", icon: mobile },
  { title: "Web Developer", icon: web },
  { title: "Competitive Programmer", icon: creator },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
  { name: "docker", icon: docker },
];

// Grouped skills shown under the 3D tech balls. Edit freely.
const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    items: ["React", "Redux Toolkit", "Tailwind CSS", "Framer Motion", "Three.js", "Figma"],
  },
  {
    title: "Backend & Databases",
    items: ["Node.js", "Express.js", "MongoDB", "REST APIs", "JWT Auth"],
  },
  {
    title: "Data Science & ML",
    items: ["Machine Learning", "Data Science", "Predictive Modeling", "Automation"],
  },
  {
    title: "Tools & Practices",
    items: ["Git", "Docker", "Competitive Programming", "Problem Solving"],
  },
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Famark",
    icon: Fam,
    iconBg: "#383E56",
    date: "June 2023 - July 2023",
    stack: ["HTML", "CSS", "JavaScript", "Express.js", "JWT"],
    points: [
      "Spearheaded the development of 30% of the e-commerce website's UI using HTML, CSS, and JavaScript, enhancing user experience",
      "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Engineered 60% of the website's authentication and authorization mechanisms with Express.js and JWT, strengthening security protocols",
      "Led the development of a robust cloud-based data transaction system, improving API response time by 25%",
    ],
  },
  {
    title: "MERN Developer Intern",
    company_name: "Across The Globe (ATG)",
    icon: ATG,
    iconBg: "#E6DEDD",
    date: "June 2024 - Aug 2024",
    stack: ["React.js", "Node.js", "Express", "MongoDB"],
    points: [
      "Architected scalable React frontend, reducing load time by 20%",
      "Developed critical backend features, improving chat support efficiency by 40%",
      "Presented 40% of project architecture to client, clarifying technical decisions",
      "Created 90% of frontend and 80% of backend for AI-driven project using React.js, Node.js, and Express",
    ],
  },
];

const projects = [
  {
    name: "Aiumni Student Interaction Platform",
    description:
      "Created a web platform connecting students and alumni for mentorship and networking. Features include profiles, messaging, and event management.",
    highlight: "Finalist - Smart India Hackathon 2024",
    category: "Full-Stack",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: alma,
    source_code_link: "https://github.com/McoderTanmay/Alma",
    live_link: "", // add a deployed URL to show a "Live" button
  },
  {
    name: "E-commerce Platform",
    description:
      "Developed a scalable e-commerce platform using ReactJS, Redux, and Tailwind CSS, featuring a seamless user experience and efficient state management.",
    highlight: "",
    category: "Frontend",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "restapi", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: ecom,
    source_code_link: "https://github.com/McoderTanmay/EcomTanmay",
    live_link: "",
  },
  {
    name: "CRUD Operations",
    description:
      "Built a full-stack web application that performs CRUD operations on a MongoDB database. Features include user authentication, data validation, and error handling.",
    highlight: "",
    category: "Full-Stack",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: crud,
    source_code_link: "https://github.com/McoderTanmay/CRUD",
    live_link: "",
  },
];

export { services, technologies, skillGroups, experiences, projects };
