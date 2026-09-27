export type Project = {
  id: string;
  index: string;
  title: string;
  category: string;
  href: string;
  color: string;
};

export const projects: Project[] = [
  {
    id: 'boardbrew',
    index: '01',
    title: 'BoardBrew',
    category: 'Café & board game reservation platform',
    href: 'https://boardbrew.vercel.app/',
    color: '#C1FFA5',
  },
  {
    id: 'gentry',
    index: '02',
    title: 'Gentry Timepieces',
    category: 'Luxury watch retailer website',
    href: 'https://gentry-timepieces.vercel.app/',
    color: '#E7C77A',
  },
  {
    id: 'flashy',
    index: '03',
    title: 'Flashy',
    category: 'Web application',
    href: 'https://flashy-virid.vercel.app/',
    color: '#7AC1E7',
  },
  {
    id: 'ironforge',
    index: '04',
    title: 'Ironforge',
    category: 'Web application',
    href: 'https://iron-forge-nine.vercel.app/',
    color: '#E77A7A',
  },
  {
    id: 'dwenas',
    index: '05',
    title: 'Dwenas',
    category: 'Web application',
    href: 'https://dwenas.vercel.app/',
    color: '#B57AE7',
  },
  {
    id: 'curator',
    index: '06',
    title: 'Curator',
    category: 'Web application',
    href: 'https://curator-alpha.vercel.app/',
    color: '#7AE7BB',
  },
];
