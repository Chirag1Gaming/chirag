
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "gsap",
    icon: gsap,
  },
  {
    name: "framer",
    icon: framer,
  },

 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Laravel Intern",
    company_name: "E2M Solutions",
    icon: tekisky,
    iconBg: "#383E56",
    date: "July 2021 - July 2022",
    points: [
      "Developing and maintaining web applications using Laravel and codeigniter technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Php Developer",
    company_name: "Whiz Solutions",
    icon: tekisky,
    iconBg: "#383E56",
    date: "July 2022 - September 2023",
    points: [
      "Developing and maintaining web applications using Laravel and codeigniter technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Senior Web Application Developer",
    company_name: "Techerudite",
    icon: tekisky,
    iconBg: "#383E56",
    date: "September 2023 - Present",
    points: [
      "Developing and maintaining web applications using Laravel and codeigniter technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Huzaif proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Huzaif does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Huzaif optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Faces Consent",
    description:
      "Laravel, React, Node.js A modern digital consent form platform designed for medical and aesthetic practitioners. It allows secure form sharing, digital signatures, client management, and document storage with GDPR compliance and real-time updates.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "white-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "Consent Forms",
        color: "green-text-gradient",
      },
      {
        name: "Medical Tech",
        color: "blue-text-gradient",
      }
    ],
    image: project2,
    source_code_link: "https://facesconsent.com/",
  },
  {
    name: "Kanvas Medical",
    description:
      "A responsive healthcare website that showcases services, manages inquiries, and maintains SEO-friendly architecture for visibility and performance.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Healthcare Website",
        color: "pink-text-gradient",
      },
      {
        name: "Seo",
        color: "white-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "https://kanvasmedicalgroup.com/",
  },
  {
    name: "Anglez",
    description:
      "A modern social media app enabling users to share posts, follow others, and interact via a highly scalable Node and GraphQL backend.",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "GraphQL",
        color: "white-text-gradient",
      },
      {
        name: "Social Media",
        color: "green-text-gradient",
      },
      {
        name: "Real Time",
        color: "green-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "",
  },
  {
    name: "MK Collection",
    description:
      "An e-commerce platform for clothing, featuring cart, wishlist, category filters, and secure payments, built for scale and speed.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "E-Commerce",
        color: "white-text-gradient",
      },
      {
        name: "Clothing Store",
        color: "green-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "",
  },
  {
    name: "PMS – Project Management System",
    description:
      "A lightweight yet powerful platform for managing projects, teams, and deadlines with task assignment and real-time progress updates.",
    tags: [
      {
        name: "CodeIgniter",
        color: "blue-text-gradient",
      },
      {
        name: "Project Management",
        color: "white-text-gradient",
      },
      {
        name: "Team Collaboration",
        color: "green-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "",
  },
  {
    name: "Techerudite Site",
    description:
      "A corporate website that presents company services, portfolios, and contact features in a sleek, user-friendly interface.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Company Profile",
        color: "white-text-gradient",
      },
      {
        name: "Responsive Design",
        color: "green-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "",
  },
  {
    name: "Kanvas Blog",
    description:
      "A WordPress blog delivering medical insights, tips, and updates with easy admin management and SEO optimization.",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "Blogging",
        color: "white-text-gradient",
      },
      {
        name: "Healthcare",
        color: "green-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "",
  },
  {
    name: "Faces Blog",
    description:
      "A WordPress blog delivering medical insights, tips, and updates with easy admin management and SEO optimization.",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "Blogging",
        color: "white-text-gradient",
      },
      {
        name: "Healthcare",
        color: "green-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "",
  },
  {
    name: "Faces Admin",
    description: "An admin dashboard built with Vue.js for managing users, documents, and system settings on the Faces Consent platform.",
    tags: [
      {
        name: "Vue.js",  
        color: "blue-text-gradient",
      },
      {
        name: "Admin Panel",  
        color: "blue-text-gradient",
      },
      {
        name: "Dashboard",
        color: "white-text-gradient",
      }
    ],
    image: gearXpert,
    source_code_link: "",
  },
  {
    name: "GIS – Guardian International System",
    description: "An enterprise system built to manage risk assessment operations, logistics, and team coordination for international services.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient"
      },
      {
        name: "Enterprise Software",
        color: "white-text-gradient",
      },
      {
        name: "Security Management",
        color: "green-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "",
  },
  {
    name: "3ES – Practice Management",
    description: "A professional system tailored for medical practices, offering appointment scheduling, patient records, and billing.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient"
      },
      {
        name: "Practice Management",
        color: "white-text-gradient",
      },
      {
        name: "Accountancy Software",
        color: "green-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "",
  },
  {
    name: "Xpert – Booking System",
    description: "An advanced booking platform supporting service listings, availability calendars, and automatic confirmations.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient"
      },
      {
        name: "Booking System",
        color: "white-text-gradient",
      },
      {
        name: "Scheduling",
        color: "green-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "",
  },
  {
    name: "Glow Dubai",
    description: "A CodeIgniter-based beauty service website with booking capabilities, service details, and an elegant design.",
    tags: [
      {
        name: "CodeIgniter",
        color: "blue-text-gradient"
      },
      {
        name: "Beauty Services",
        color: "white-text-gradient",
      },
      {
        name: "Booking Site",
        color: "green-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "",
  },
  {
    name: "Brodex – Plumbing System",
    description: "A commercial plumbing services website with appointment booking, service overviews, and contact form integration.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient"
      },
      {
        name: "Service Website",
        color: "white-text-gradient",
      },
      {
        name: "Plumbing",
        color: "green-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "",
  },
  {
    name: "Society Management System",
    description: "An internship project to manage society members, maintenance tracking, notices, and complaints digitally.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient"
      },
      {
        name: "Society App",
        color: "white-text-gradient",
      },
      {
        name: "Internship Project",
        color: "green-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
