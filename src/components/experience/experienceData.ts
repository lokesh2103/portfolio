import { ExperienceType } from './types';

export const experienceData: ExperienceType[] = [
  {
    title: 'Frontend Developer',
    company: 'Colorado State University',
    companyLogo: 'https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/CSU-Ram-357.png',
    period: 'Nov 2023 – Present',
    description: "Leading frontend development for DAWN's agricultural decision support interface, focusing on data visualization and user experience.",
    achievements: [
      'Orchestrated front-end development using React.js and Chart.js',
      'Managed CMS integration using Strapi and Docker containerization',
      'Designed user-centric interfaces for climate and GIS data visualization'
    ]
  },
  {
    title: 'Research Assistant',
    company: 'Colorado State University',
    companyLogo: 'https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/CSU-Ram-357.png',
    period: 'Oct 2023 – Present',
    description: 'Developing AI-powered Chrome extension for misinformation detection, integrating multiple APIs and services.',
    achievements: [
      'Engineered Chrome extension using React JS for real-time analysis',
      'Integrated OpenAI GPT API and Bing Search API using Python/Flask',
      'Implemented comprehensive user activity logging system'
    ]
  },
  {
    title: 'Software Engineer',
    company: 'Synchrony',
    companyLogo: 'https://media.licdn.com/dms/image/v2/C4D0BAQEi8GHJrQT9pg/company-logo_100_100/company-logo_100_100/0/1630544020158/synchrony_financial_logo?e=1743033600&v=beta&t=rQIdHH6cvv9QOHtu2ki2tEsRaw5wz0A-FHqFoEi0meU',
    period: 'Dec 2020 – Jul 2023',
    description: 'Led development of micro-frontend architecture and payment integration systems.',
    achievements: [
      'Reduced operational costs by 25% through micro-frontend implementation',
      'Successfully integrated Google Pay and Apple Pay wallet systems',
      'Developed and maintained high-coverage GraphQL/REST APIs'
    ]
  }
];