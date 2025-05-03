import {
  algorithms,
  devnotes,
  oscs,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Merjaninox",
    date: "June 2022 - July 2023",
    details: [
      "Developed a high-fidelity website prototype using Figma and implemented it with HTML, CSS, JavaScript, and PHP.",
      "Created a low-fidelity prototype using Balsamiq for the design phase of the project.",
      "Built a dynamic and interactive website to enhance user experience and optimize functionality.",
    ],
  },
  {
    title: "Underwriting & Management Intern",
    company_name: "Wafa Assurance",
    date: "July 2021 - September 2021",
    details: [
      "Handled accounting tasks for customer and supplier accounts, payroll, and invoicing.",
      "Prepared monthly and annual financial statements and analyzed data for reporting purposes.",
      "Assisted in translating documents and processing correspondence.",
    ],
  },
  {
    title: "Software Engineering Student",
    company_name: "Centria University of Applied Sciences",
    date: "August 2023 - Present",
    details: [
      "Currently pursuing a Bachelor’s in Engineering, specializing in Information Technology.",
      "Building practical knowledge in software engineering, data analysis, and cloud computing.",
      "Collaborating on university projects to enhance skills in full-stack development and UX/UI design.",
    ],
  },
];

const portfolio = [
  {
    name: "Merjaninox E-com Website",
    description:
      "A fully responsive and dynamic website built using HTML, CSS, JavaScript, and PHP, integrating a backend system for product and cart management.",
    image: oscs,
  },
  {
    name: "Gamified Portfolio",
    description:
      "An interactive 3D portfolio developed using Three.js and React, showcasing my projects with engaging, dynamic elements.",
    image: devnotes,
  },
  {
    name: "UX/UI Design Samples",
    description:
      "A collection of UX/UI designs created using Figma and Adobe XD, reflecting my expertise in crafting visually appealing and user-centric interfaces.",
    image: algorithms,
  },
];

export { experiences, portfolio };


