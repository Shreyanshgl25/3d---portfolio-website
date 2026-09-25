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
    thoughtsol,
    careertronic,
    iitkgp,
    Fam,
    alma,
    crud,
    ecom
  } from "../assets";

export const profile = {
  name: "Shreyansh Goyal",
  phone: "+91-9993324998",
  email: "shreyanshgl2003@gmail.com",
  roles: [
    "AI Engineer",
    "GenAI & Agentic AI Developer",
    "RAG / LLM Systems Builder",
    "Full-Stack (MERN) Developer",
  ],
  resume:
    "https://drive.google.com/file/d/1qpMlP0cjqZ1795q9Hc7HNr-jLcX8eT6I/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/shreyansh-goyal-11b131229/",
  github: "https://github.com/Shreyanshgl25",
};

export const navLinks = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "tech", title: "Skills" },
  { id: "work", title: "Projects" },
  { id: "education", title: "Education" },
  { id: "contact", title: "Contact" },
];

// Animated counters / badges shown in the About section
export const stats = [
  { label: "GenAI / RAG Projects Shipped", value: 4, suffix: "+" },
  { label: "DSA Problems Solved", value: 250, suffix: "+" },
  { label: "Smart India Hackathon 2024", text: "Finalist" },
];

const services = [
  { title: "GenAI / Agentic AI", icon: backend },
  { title: "RAG & LLM Systems", icon: mobile },
  { title: "Computer Vision & Voice AI", icon: web },
  { title: "Full-Stack Development", icon: creator },
];

const technologies = [
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
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

// Grouped skills shown as chips under the 3D tech balls — this is where the
// resume's AI/ML stack lives, since there aren't 3D icon assets for these yet.
const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "C++", "JavaScript", "TypeScript"],
  },
  {
    title: "GenAI & Agentic AI",
    items: [
      "LangChain",
      "LLM Tool-Calling",
      "RAG Pipelines",
      "OpenAI API",
      "Gemini API",
      "Vector DBs (FAISS)",
    ],
  },
  {
    title: "Speech & Voice AI",
    items: ["Speech-to-Text (STT)", "Text-to-Speech (TTS)", "Conversational Voice Agents"],
  },
  {
    title: "Computer Vision",
    items: ["OpenCV", "YOLO", "Custom Dataset Annotation", "Model Training"],
  },
  {
    title: "ML / DL Frameworks",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost"],
  },
  {
    title: "Web & Backend",
    items: ["React.js", "Node.js", "Express.js", "Flask"],
  },
  {
    title: "Cloud & Databases",
    items: [
      "Microsoft Azure",
      "Google Cloud Platform",
      "MongoDB",
      "MySQL",
      "Firebase",
    ],
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "Postman", "Jupyter Notebook", "VS Code", "Streamlit", "Azure DevOps"],
  },
];

const experiences = [
  {
    title: "AI Engineer",
    employment_type: "Full-time",
    company_name: "Thoughtsol Infotech",
    icon: thoughtsol,
    iconBg: "#ffffff",
    date: "Apr 2026 - Present",
    location: "Noida",
    stack: ["LLMs", "RAG", "Speech-to-Text", "Text-to-Speech", "Azure", "GCP"],
    points: [
      "Built an HR & Grievance Redressal chatbot using LLM-based conversational AI and RAG, enabling employees to raise, track, and resolve grievances and policy queries without manual HR intervention.",
      "Contributed to an Air India POC, developing conversational AI components to evaluate automation opportunities for customer-facing workflows.",
      "Evaluated and integrated multiple Speech-to-Text models, benchmarking transcription accuracy and latency across real-world use cases.",
      "Built a Sales Calling Agent POC combining STT, LLM-based dialogue logic, and TTS to automate outbound sales calls end-to-end.",
      "Deployed and managed AI workloads across Microsoft Azure and Google Cloud Platform (GCP), gaining hands-on, cross-cloud experience in model hosting and service integration.",
    ],
  },
  {
    title: "AI Engineer",
    employment_type: "Full-time",
    company_name: "Careertronic Global Services Pvt. Ltd.",
    icon: careertronic,
    iconBg: "#ffffff",
    date: "May 2025 - Oct 2025",
    location: "Raipur",
    stack: ["LangChain", "FAISS", "OpenCV", "YOLO", "Azure DevOps"],
    points: [
      "Built a company Q&A bot using RAG (LangChain + FAISS/Sentence-BERT) to answer queries on the company's career and abroad-study counselling services for students.",
      "Built an agentic AI automation system for job application workflows — JD-driven resume tailoring and auto-apply orchestration — using LLM tool-calling and multi-step agent chains.",
      "Developed a CCTV-based live queue management system using OpenCV and YOLO, including custom dataset annotation and model training for real-time detection.",
      "Deployed AI services on Microsoft Azure (App Service, Blob Storage, Azure Functions), managing CI/CD pipelines through Azure DevOps.",
    ],
  },
  {
    title: "AI/ML and Web Development Intern",
    employment_type: "Internship",
    company_name: "IIT Kharagpur — Senflex Team",
    icon: iitkgp,
    iconBg: "#ffffff",
    date: "Mar 2024 - Apr 2024",
    location: "Kharagpur",
    stack: ["Python", "Scikit-learn", "Flask", "JavaScript"],
    points: [
      "Collaborated with the Senflex team on a real-time sensor intelligence platform focused on smart IoT integration and anomaly analysis.",
      "Implemented machine learning models for sensor data classification and anomaly detection using Python and Scikit-learn, improving detection reliability on live data streams.",
      "Designed and deployed a responsive web dashboard using Flask, JavaScript, and HTML/CSS to visualize live sensor data, enabling real-time monitoring for the research team.",
    ],
  },
  {
    title: "Software Developer Intern",
    employment_type: "Internship",
    company_name: "Famark",
    icon: Fam,
    iconBg: "#383E56",
    date: "June 2023 - July 2023",
    location: "",
    stack: ["HTML", "CSS", "JavaScript", "Express.js", "JWT"],
    points: [
      "Spearheaded the development of 30% of the e-commerce website's UI using HTML, CSS, and JavaScript, enhancing user experience.",
      "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Engineered 60% of the website's authentication and authorization mechanisms with Express.js and JWT, strengthening security protocols.",
      "Led the development of a robust cloud-based data transaction system, improving API response time by 25%.",
    ],
  },
];

// NOTE: these three projects come straight from the resume. Aludent reuses the
// old Aiumni screenshot since it's the same project; Fake UPI Detection and
// Intellii don't have a saved screenshot yet, so they borrow a placeholder
// image for now — swap `image` for a real screenshot when you have one.
const projects = [
  {
    name: "Aludent — RAG-Based Alumni Assistant",
    description:
      "Full-stack GenAI-powered student-alumni platform that reached the finals of SIH 2024. Uses RAG for intelligent alumni matching and personalized guidance, with a retrieval pipeline built on LangChain + OpenAI + FAISS to query alumni profiles, interaction histories, and curated resources. Led frontend development in React.js and architected secure backend APIs with Node.js/Express for alumni verification, job postings, and role-based access control.",
    highlight: "Finalist - Smart India Hackathon 2024",
    category: "GenAI",
    tags: [
      { name: "langchain", color: "blue-text-gradient" },
      { name: "rag", color: "green-text-gradient" },
      { name: "react", color: "pink-text-gradient" },
    ],
    image: alma,
    source_code_link: "https://github.com/Shreyanshgl25/Alma",
    live_link: "",
  },
  {
    name: "Fake UPI Transaction Detection System",
    description:
      "AI-based fraud detection model that identifies fraudulent UPI transactions using behavioral patterns and transaction metadata. Achieved 94% accuracy with Random Forest and XGBoost through advanced feature engineering and hyperparameter optimization. Deployed as a lightweight Flask web app for real-time prediction and transaction verification.",
    highlight: "94% accuracy",
    category: "Machine Learning",
    tags: [
      { name: "scikit-learn", color: "blue-text-gradient" },
      { name: "xgboost", color: "green-text-gradient" },
      { name: "flask", color: "pink-text-gradient" },
    ],
    // TODO: swap for a real screenshot of this project
    image: crud,
    source_code_link: "https://github.com/Shreyanshgl25",
    live_link: "",
  },
  {
    name: "Intellii — GenAI-Powered Mock Interview Platform",
    description:
      "Mock interview platform powered by LLMs + LangChain that simulates both technical and behavioral interview rounds with dynamic question generation. Automated feedback analysis and scoring uses the Gemini API to give candidates actionable improvement insights. Deployed with Streamlit for a clean, interactive experience, and actively used by peers for placement prep.",
    highlight: "",
    category: "GenAI",
    tags: [
      { name: "gemini-api", color: "blue-text-gradient" },
      { name: "langchain", color: "green-text-gradient" },
      { name: "streamlit", color: "pink-text-gradient" },
    ],
    // TODO: swap for a real screenshot of this project
    image: ecom,
    source_code_link: "https://github.com/Shreyanshgl25",
    live_link: "",
  },
];

export const education = [
  {
    school: "Institute of Technology, GGV, Bilaspur",
    degree: "Bachelor of Technology in Information Technology",
    date: "Nov 2021 - Apr 2025",
    detail: "CGPA: 7.20",
  },
];

export const achievements = [
  "Finalist in Smart India Hackathon (SIH) 2024, competing among top 5% teams nationwide.",
  "Solved 250+ data structures and algorithms problems across multiple competitive platforms, demonstrating strong analytical and optimization skills.",
  "Competed in 10+ hackathons and coding challenges, consistently placing in top positions across multiple events.",
];

export { services, technologies, skillGroups, experiences, projects };
