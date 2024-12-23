import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export const TYPED_STRINGS = [
  'Frontend Developer 👨‍💻',
  'Full-stack Engineer 🚀',
  'UI Engineer 🎨',
  'Problem Solver 💡',
];

export const HERO_BUTTONS = [
  {
    text: 'View Projects',
    href: '#work',
    className:
      'group relative inline-flex items-center gap-2 px-8 py-4 bg-primary overflow-hidden rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/50 active:scale-100',
  },
  {
    text: 'Contact Me',
    href: '#contact',
    className:
      'group relative inline-flex items-center gap-2 px-8 py-4 bg-background overflow-hidden rounded-xl border border-primary/50 transition-all duration-300 hover:scale-105 hover:border-primary hover:shadow-xl hover:shadow-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/50 active:scale-100',
  },
];

export const CODE_CONTENT = `const developer = {
  name: 'Lokesh Sahukar',
  skills: ['React', 'TypeScript', 'Node.js'],
  experience: '4+ years',
  passion: 'Building amazing web apps',
  
  code: () => {
    while (true) {
      learn();
      build();
      improve();
    }
  }
};`;

export const SOCIAL_LINKS = [
  {
    href: 'https://linkedin.com/in/lokesh-sahukar',
    icon: Linkedin,
    label: 'LinkedIn',
  },
  { href: 'https://github.com/lokesh2103', icon: Github, label: 'GitHub' },
  { href: 'mailto:slokesh2103@gmail.com', icon: Mail, label: 'Email' },
  {
    href: 'https://bit.ly/lokesh_sahukar_resume',
    icon: FileText,
    label: 'Resume',
  },
];
