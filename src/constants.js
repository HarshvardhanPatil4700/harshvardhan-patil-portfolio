// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import hibernateLogo from "./assets/tech_logo/hibernate.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import mavenLogo from "./assets/tech_logo/maven.jpg";
import restApiLogo from "./assets/tech_logo/restapi.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import vercelLogo from "./assets/tech_logo/vercel.png";

// Experience Section Logo's
import devinetechLogo from "./assets/company_logo/DevineTechLogo.png";

// Education Section Logo's
import saeLogo from "./assets/education_logo/saeLogo.png";
import dnyandeepLogo from "./assets/education_logo/dnyandeepLogo.jpg";
import sanjayGhodawatLogo from "./assets/education_logo/sgisLogo.png";

// // Project Section Logo's
import jobPortalImg from "./assets/projects/jobportal.png";
import expenseTrackerImg from "./assets/projects/expensetracker.png";
import talentMatchImg from "./assets/projects/talentMatch.png";
import employeeApiImg from "./assets/projects/employeeapi.png";
import pigGameImg from "./assets/projects/piggame.png";

export const SkillsInfo = [
  {
    title: "Languages",
    skills: [
      { name: "Java", logo: javaLogo },
      { name: "SQL", logo: mysqlLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "C++", logo: cppLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Springboot", logo: springbootLogo },
      { name: "Spring MVC, Data JPA", logo: springbootLogo },
      { name: "Hibernate", logo: hibernateLogo },
      { name: "REST APIs", logo: restApiLogo },
      { name: "NodeJS", logo: nodejsLogo },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React JS", logo: reactjsLogo },
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Maven", logo: mavenLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: devinetechLogo,
    role: "Web Development Intern",
    company: "DevineTech Solutions",
    date: "January 2026",
    desc: "Designed and developed RESTful APIs using Node.js and Express.js to enable data exchange between frontend and backend systems. Integrated React.js components with the APIs for consistent state management, and debugged performance issues across the stack, reducing API response time by 20%.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Node JS",
      "Express JS",
      "REST APIs",
      "Tailwind CSS",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: saeLogo,
    school: "Sinhgad Academy of Engineering (SAE), Pune",
    date: "2023 - 2027",
    grade: "9.08 CGPA (till 5th Sem)",
    desc: "I am pursuing a Bachelor of Engineering in Computer Engineering at Sinhgad Academy of Engineering, Pune, where I have maintained a strong academic record of 9.08 CGPA. My studies cover Data Structures, Algorithms, Database Management Systems, Web Development, and Software Engineering, and I strengthen this knowledge by building practical projects that solve real-world problems.",
    degree: "Bachelor of Engineering - BE (Computer Engineering)",
  },
  {
    id: 1,
    img: dnyandeepLogo,
    school: "Dnyandeep English Medium School & Jr. College, Maharashtra",
    date: "2021 - 2023",
    desc: "Completed Higher Secondary Education (Class XII) in Science under the Maharashtra State Board (MSBSHSE) at Dnyandeep English Medium School & Jr. College. I studied Physics, Chemistry, and Mathematics, which strengthened my logical reasoning, analytical thinking, and problem-solving skills. Mathematics in particular built the base for the algorithms and data structures I work with today. This stage prepared me for the move into Computer Engineering.",
    degree: "HSC (XII) - Maharashtra State Board",
  },
  {
    id: 2,
    img: sanjayGhodawatLogo,
    school: "Sanjay Ghodawat International School, Maharashtra",
    date: "2020 - 2021",
    grade: "84%",
    desc: "Completed Secondary Education (Class X) under the CBSE board at Sanjay Ghodawat International School, securing 84%. The curriculum built a strong foundation in Mathematics, Science, and English, and developed my analytical thinking and problem-solving abilities. It also instilled the discipline, consistency, and time management that have supported my academic performance since. This stage marked the beginning of my interest in technology and laid the groundwork for my path into Computer Engineering.",
    degree: "CBSE (X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "TalentMatch AI",
    description:
      "An AI-powered platform that matches candidates with relevant job openings by analyzing resumes against job requirements, helping recruiters shortlist suitable profiles faster.",
    image: talentMatchImg,
    tags: ["Java", "Spring Boot", "React", "MySQL", "REST APIs", "AI"],
    github: "https://github.com/TalentMatch-AI",
    webapp: "",
  },
  {
    id: 1,
    title: "Job Portal & Recruitment System",
    description:
      "A full-stack job portal with secure REST APIs, JWT authentication and role-based access. Candidates can search jobs and track their applications, while recruiters manage listings from a dedicated dashboard.",
    image: jobPortalImg,
    tags: ["Java", "Spring Boot", "React", "MySQL", "JWT", "REST APIs"],
    github: "",
    webapp: "", // add live link if deployed
  },
  {
    id: 2,
    title: "Expense Tracker",
    description:
      "A full-stack expense tracker with CRUD operations and secure data persistence using Spring Data JPA and Hibernate, with a React.js frontend consuming the REST APIs.",
    image: expenseTrackerImg,
    tags: ["Java", "Spring Boot", "React", "Hibernate", "MySQL", "Maven"],
    github:
      "https://github.com/HarshvardhanPatil4700/Expense-Tracking-System-project",
    webapp: "",
  },
  {
    id: 3,
    title: "Employee Management REST API",
    description:
      "A Spring Boot REST API for managing employee records, supporting create, read, update and delete operations backed by a relational database.",
    image: employeeApiImg,
    tags: ["Java", "Spring Boot", "REST APIs", "MySQL", "Postman"],
    github:
      "https://github.com/HarshvardhanPatil4700/Spring-Boot/tree/main/04-spring-boot-rest-crud/40-spring-boot-rest-crud-employee-with-spring-data-rest",
    webapp: "",
  },
  {
    id: 4,
    title: "Pig Game",
    description:
      "A two-player dice game built with vanilla JavaScript. Players roll to build a score, hold to bank it, and the first to reach the target wins. Rolling a 1 loses the turn's points.",
    image: pigGameImg,
    tags: ["HTML", "CSS", "JavaScript"],
    github:
      "https://github.com/HarshvardhanPatil4700/Pig-Dice-Game-Javascript-project",
    webapp: "",
  },
];
