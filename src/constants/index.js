import {
  mobile,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  meta,
  epam,
  tesla,
  webler,
  web8,
  web2,
  web3,
  web9,
  web6,
  web12,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Web Designer',
    icon: mobile,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },

  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
];

const experiences = [
  {
    title: 'Education',
    company_name: 'Junior Frontend Mentor Program, Epam',
    icon: epam,
    iconBg: '#383E56',
    date: 'March 2021 - June 2021',
    points: [
      'I learned how to manage and prioritize tasks, while also being receptive to feedback from peers and instructors. ',
      'Allowed me to build a robust portfolio of projects, showcasing my new skills and abilities as a frontend developer.',
    ],
  },
  {
    title: 'Education',
    company_name: 'Junior Frontend Developer, Codecool',
    icon: tesla,
    iconBg: '#E6DEDD',
    date: 'Oct 2020 - Apr 2021',
    points: [
      'I honed my skills in web development, including HTML, CSS, and JavaScript.',
      'I gained experience working collaboratively with a team to develop responsive and dynamic user interfaces',
      'Through projects and assignments, I learned  front-end framework such as React, as well as version control tools like Git. ',
    ],
  },
  {
    title: 'Education',
    company_name: 'Web Designer, Webler',
    icon: webler,
    iconBg: '#383E56',
    date: 'Sep 2020 - Jan 2021',
    points: [
      'I learned essential design principles and gained proficiency in using design tools such as Adobe Photoshop, Illustrator, and Figma.',
      'I developed an eye for aesthetics and gained experience in creating visually appealing layouts for websites and mobile applications.',
    ],
  },
  {
    title: 'Work Experience',
    company_name: 'DYB Group Kft',
    icon: meta,
    iconBg: '#E6DEDD',
    date: 'Oct 2021 - March 2022',
    points: [
      'I was responsible for building and maintaining responsive websites utilizing HTML, CSS, and Vue.js',
      'Collaborating with designers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
    ],
  },
  {
    title: 'Work Experience',
    company_name: 'Freelance web developer and Designer',
    icon: meta,
    iconBg: '#E6DEDD',
    date: 'March 2022 - Now',
    points: [
      'I work on developing my proficiency in web technologies such as React ',
      'I collaborate with clients to understand their needs, and work to deliver solutions that exceeded their expectations. ',
    ],
  },
];

const testimonials = [
  {
    testimonial: 'Working with the latest trending technologies',
    name: 'Newest Technologie',
    image:
      'https://img.freepik.com/free-vector/3d-graphic-design-concept-pastel-colors_52683-30331.jpg',
  },
  {
    testimonial: 'Creating modern, responsive design',
    name: 'Beautiful Designs',
    image:
      'https://img.freepik.com/free-vector/gradient-top-view-laptop-background_52683-6291.jpg?w=360',
  },
  {
    testimonial: `Let's make your dream website a reality!`,
    name: 'Code your dream project',
    image: 'https://old.opencascade.com/sites/default/files/remote.png',
  },
];

const projects = [
  {
    name: 'Rock, Paper, Scrissors',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'javascript',
        color: 'blue-text-gradient',
      },
    ],
    image: web8,
    source_demo_link: 'https://apolloniiaa.github.io/rock.paper.scissors-game/',
    source_code_link: 'https://github.com/apolloniiaa/rock.paper.scissors-game',
  },
  {
    name: 'Dice Game',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'javascript',
        color: 'blue-text-gradient',
      },
    ],
    image: web9,
    source_demo_link: 'https://apolloniiaa.github.io/dice.game/',
    source_code_link: 'https://github.com/apolloniiaa/dice.game',
  },
  {
    name: 'Outdoors Agency',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: web3,
    source_demo_link: 'https://apolloniiaa.github.io/natours-tours/',
    source_code_link: 'https://github.com/apolloniiaa/natours-tours',
  },
  {
    name: 'Phoenix Bank Page',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'javascript',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: web6,
    source_demo_link: 'https://phoenix-bank.netlify.app/',
    source_code_link: 'https://github.com/apolloniiaa/pb-page',
  },
  {
    name: 'Phoenix Bank App',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'javascript',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: web2,
    source_code_link: 'https://github.com/apolloniiaa/pbank-app',
    source_demo_link: 'https://apolloniiaa.github.io/pbank-app/',
  },
  {
    name: 'Plan it Perfect',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: web12,
    source_demo_link: 'https://plan-it-perfect-next-js-mw2g.vercel.app/',
    source_code_link: 'https://github.com/apolloniiaa/planItPerfect-next-js',
  },
];

export { services, technologies, experiences, testimonials, projects };
