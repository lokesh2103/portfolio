import { ProjectType } from './types';
import lyriksImage from '../../assets/Lyriks.png';
import CollabDocs from '../../assets/CollabDocs.png';
import DevPortfolio from '../../assets/DevPortfolio.png';

export const projects: ProjectType[] = [
  {
    title: 'CollabDocs',
    description:
      'A real-time collaborative document editor that allows multiple users to edit documents simultaneously. Features include live cursors, presence awareness, and automatic saving.',
    image: CollabDocs,
    tech: [
      'React.js',
      'TypeScript',
      'Material UI',
      'Socket.IO',
      'Firebase',
      'Docker',
    ],
    demo: 'https://collab-docs-f9243.web.app/',
    github: 'https://github.com/lokesh2103/collab-docs',
    featured: true,
    features: [
      'Real-time collaboration with multiple users',
      'Live cursor and selection tracking',
      'User presence and activity indicators',
      'Automatic saving and version history',
      'Rich text formatting and styling',
      'Document sharing and permissions',
    ],
  },
  {
    title: 'Lyriks',
    description:
      'A Spotify 2.0 clone music application built with React 18, Tailwind CSS, Shazam API, and Redux, providing users with an enhanced music streaming experience.',
    image: lyriksImage,
    tech: ['React.js', 'Tailwind CSS', 'Redux', 'Shazam API', 'Vite'],
    demo: 'https://lyriks-music-player-6f0ad05d0f19.herokuapp.com/',
    github: 'https://github.com/lokesh2103/lyriks',
    featured: true,
    features: [
      'Real-time music streaming',
      'Responsive and modern UI design',
      'Integration with Shazam API for song recognition',
      'Playlist management',
      'Search functionality for songs and artists',
      'User authentication and profile management',
    ],
  },
  {
    title: 'DevPortfolio',
    description:
      'A modern portfolio website with smooth animations, and responsive design. Features include dynamic content loading, contact form integration, and optimized performance.',
    image: DevPortfolio,
    tech: ['React.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'Vite'],
    demo: 'https://portfolio.demo',
    github: 'https://github.com/demo/portfolio',
    featured: true,
    features: [
      'Modern and responsive design',
      'Contact form integration',
      'Dynamic content loading',
      'Smooth animations and transitions',
      'Dark mode support',
      'Optimized performance',
    ],
  },
];
