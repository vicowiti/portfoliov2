import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from '../types';

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
  collab,
  zeraki,
  little,
  workforce,
  carrent,
  jobit,
  tripguide,
  threejs,
} from '../assets';

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'SEO Specialist',
    icon: creator,
  },
];

const technologies: TTechnology[] = [
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
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: 'Software Engineer',
    companyName: 'Zeraki',
    icon: zeraki,
    iconBg: '#383E56',
    date: 'June 2024 - Date',
    points: [
      'Led the development of the frontend for Zeraki Flow, an internal tool used daily by sales and finance teams to streamline operations.',
      'Built a school management module to facilitate school registration, trial activations, and subscription tracking.',
      'Developed an invoicing system that automates school billing, enables relationship managers to record cheque and mobile money collections, and ensures tax compliance by integrating with country-specific tax authorities which minimized revenue leakage by 30%.',
      'Implemented sales performance tracking, allowing salespeople to monitor signups, collections, and churn rates, which contribute to their appraisals, and a Task manager module to allow proper monitoring of sales activities by sales managers.',
    ],
  },
  {
    title: 'Full Stack Developer',
    companyName: 'Little Cabs Africa',
    icon: little,
    iconBg: '#E6DEDD',
    date: 'April 2023 - June 2024',
    points: [
      'Led the development of the Little POS team to deliver Little Limited’s Point of Sale (POS) solution.',
      'Implemented payment integrations with M-Pesa and Little Pay Wallets, ensuring smooth and secure transactions.',
      'Developed two client applications, a React Native App and an Elecronjs client to enable merchants of different scales transact business convebently',
      'Designed a local SQLite database to enable offline data storage, reducing API calls and significantly improving performance',
    ],
  },
  {
    title: 'Backend Developer',
    companyName: 'Workforce Africa',
    icon: workforce,
    iconBg: '#383E56',
    date: 'Dec 2022 - March 2023',
    points: [
      'Developed and maintained web applications using React.js and Next.js with Material UI, focusing on scalability and performance.',
      'Built an in-house CMS with Next.js, enabling job postings and article management on the company website',
      'Integrated an application tracking system that allows filtering of CVs and cover letters directly from the main website',
      'Conducted code reviews, provided constructive feedback, and contributed to best practices in development.',
    ],
  },
  {
    title: 'Frontend Developer - Intern',
    companyName: 'The Collab Lab',
    icon: collab,
    iconBg: '#E6DEDD',
    date: 'June 2022  - Nov 2022',
    points: [
      'Worked in an African-Europen team to build a smart shoppers app using React, tailwind and firebase.',
      'Participated in weekly code reviews ensuring code quality and proper feture implementtion.',
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects: TProject[] = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    sourceCodeLink: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    sourceCodeLink: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    sourceCodeLink: 'https://github.com/',
  },
];

export { services, technologies, experiences, testimonials, projects };
