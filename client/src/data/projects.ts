import boardbrewImage from '../assets/boardbrew.png';
import gentryImage from '../assets/gentry.png';
import flashyImage from '../assets/flashy.png';
import ironforgeImage from '../assets/iron-forge.png';
import dwenasImage from '../assets/dwenas.png';
import curatorImage from '../assets/curator.png';

export type Project = {
  id: string;
  index: string;
  title: string;
  category: string;
  href: string;
  image: string;
  techStack: string[];
};

export const projects: Project[] = [
  {
    id: 'boardbrew',
    index: '01',
    title: 'BoardBrew',
    category: 'Café & board game reservation platform',
    href: 'https://boardbrew.vercel.app/',
    image: boardbrewImage,
    techStack: ['JavaScript', 'PHP', 'MySQL'],
  },
  {
    id: 'gentry',
    index: '02',
    title: 'Gentry Timepieces',
    category: 'Luxury watch retailer website',
    href: 'https://gentry-timepieces.vercel.app/',
    image: gentryImage,
    techStack: ['React', 'TypeScript', 'GSAP', 'Tailwind'],
  },
  {
    id: 'flashy',
    index: '03',
    title: 'Flashy',
    category: 'AI powered flashcard generator web application',
    href: 'https://flashy-virid.vercel.app/',
    image: flashyImage,
    techStack: ['Node.js', 'Express', 'PostgreSQL', 'Neon', 'Tailwind'],
  },
  {
    id: 'ironforge',
    index: '04',
    title: 'Ironforge',
    category: 'Gym booking and management web application',
    href: 'https://iron-forge-nine.vercel.app/',
    image: ironforgeImage,
    techStack: ['Node.js', 'Express', 'PostgreSQL', 'Neon', 'Tailwind'],
  },
  {
    id: 'dwenas',
    index: '05',
    title: 'Dwenas',
    category: 'Café website with reservation',
    href: 'https://dwenas.vercel.app/',
    image: dwenasImage,
    techStack: ['React', 'TypeScript', 'Tailwind'],
  },
  {
    id: 'curator',
    index: '06',
    title: 'Curator',
    category: 'Boutique design agency landing page',
    href: 'https://curator-alpha.vercel.app/',
    image: curatorImage,
    techStack: ['React', 'TypeScript', 'Tailwind'],
  },
];
