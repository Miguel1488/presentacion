import {
  mobile,
  backend,
  creator,
  Bootstrap,
  web,
  reactjs,
  javascript,
  firebase,
  html,
  redux,
  tailwind,
  nodejs,
  git,
  global,
  nocountry,
  veris,
  carrent,
  jobit,
  tripguide,
  bypass,
  css,

} from "../assets";

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Read",
    icon: reactjs,
  },
  {
    name: "JAVASCRIPT",
    icon: javascript,
  },
  {
    name: "CSS",
    icon: css,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Bootstrap",
    icon: Bootstrap,
  },
  {
    name: "firebase",
    icon: firebase,
  },
];

const experiences = [
  {
    title: "WEB DEVELOPMENT",
    company_name: "NO-COUNTRY",
    icon: nocountry,
    iconBg: "#383E56",
    points: [
      "For four weeks, I was part of a multidisciplinary team that developed the Bypass events platform in the No Country emulation. My responsibility in the project was to design the user interface and create functions to improve the user experience. I worked on both the front-end and back-end of the project using cutting-edge technologies like React and Firebase.",
      "As a member of the team, I took on different roles, from developer to technical advisor, and actively participated in daily decision-making. It was an exciting and challenging experience collaborating with experts in different areas towards a common goal. I learned valuable skills about teamwork and how different skills can come together to create something amazing.",
      "I am confident that this experience in developing the Bypass platform is a great addition to my professional profile, and I can significantly contribute to similar future projects.",
    ],
  },

  {
    title: "Digital marketing",
    company_name: "Global Asesorias",
    icon: global,
    iconBg: "#383E56",
    points: [
      "Effective communication planning through digital channels to attract potential customers.",
      "Utilization of social media and advertising based on the company's professional services.",
      "I developed social media ads on platforms such as Facebook, Instagram, and LinkedIn, which I created with a team of 5 people under my supervision.",
    ],
  },
  {
    title: "Call Center",
    company_name: "Veris",
    icon: veris,
    iconBg: "#E6DEDD",
    points: [
      "Commercial activity in the preventive healthcare area offering family care plans.",

    ],
  },


];

const testimonials = [
  {
    testimonial:
      "Miguel is a great person who is very dedicated to his work, and has a great ability to solve problems, always being a fundamental help to his teammates. He has a good foundation in programming and leadership.",
    name: "Oswaldo Tipan",
    company: "Academlo",
    image: "oswaldo.jpeg",
  },
  {
    testimonial:
      "An exceptional teammate and an excellent human being, great at working in a team, displaying many soft skills that go hand in hand with his excellent technical abilities.",
    name: "Yandry Almaguer",
    company: "Academlo",
    image: "yandry.jpeg",
  },
  {
    testimonial:
      "Miguel has leadership skills, and I am confident that he is an excellent fit for team collaborations. His skills make him stand out significantly.",
    name: "Juan Bohorquez",
    company: "Academlo",
    image: "juan.jpeg",
  },
];

const projects = [
  {
    name: "useState Components",
    description:
      "An application that displays random quotes from authors, changes color on application load and on button click. Designed and developed for web and mobile versions using author quotes API. The application was built using React, and CSS.",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "javaScript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://celadon-choux-01c167.netlify.app/",
  },
  {
    name: "Pokedex",
    description:
      "A application that displays different pokemons along with their respective descriptions. The Pokemon API was used to dynamically display and showcase the unique features of each Pokemon.",
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
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://kaleidoscopic-belekoy-dd3342.netlify.app/",
  },
  {
    name: "E-commerce",
    description:
      " A simulation of a technology product e-commerce infrastructure.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "Booststrap",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://merry-kataifi-99898a.netlify.app/",
  },


  {
    name: "Bypass",
    description:
      "Bypass is an event platform developed for online sales. It allows organizers to sell, modify and review their events, scan QR codes, and offers a user-friendly experience for purchasing tickets for social events.",
     
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "redux toolkit",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "red-text-gradient",
      },
    ],
    image: bypass,
    source_code_link: "https://bypass-dusky.vercel.app/",
  },






];

export { services, technologies, experiences, testimonials, projects };
