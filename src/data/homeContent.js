import {
  ShoesIcon,
  InkIcon,
  AutomotiveIcon,
  WrenchIcon,
  GearIcon,
  DropletIcon,
  MedalIcon,
  CheckBadgeIcon,
  BeautyPinIcon,
} from '../components/icons/HomeIcons';

export const coreIndustries = [
  {
    title: 'Shoes & Footwear',
    description:
      'High-performance polyurethanes and specialized adhesives for durable, comfortable footwear manufacturing.',
    accent: false,
    Icon: ShoesIcon,
  },
  {
    title: 'Colors & Ink',
    description:
      'Precision color concentrates, pigments, and advanced ink formulations for industrial printing and coating.',
    accent: false,
    Icon: InkIcon,
  },
  {
    title: 'Automotive',
    description:
      'Specialty putties, structural adhesives, and protective coatings engineered for the rigorous demands of vehicle manufacturing.',
    accent: false,
    Icon: AutomotiveIcon,
  },
  {
    title: 'Construction & Adhesives',
    description:
      'Structural bonds, marble glues, and premium solid surfaces designed to enhance architectural integrity and aesthetic appeal.',
    accent: true,
    Icon: WrenchIcon,
  },
  {
    title: 'Thermoplastics',
    description:
      'Custom-engineered thermoplastic compounds providing superior thermal stability, chemical resistance, and mechanical strength.',
    accent: false,
    Icon: GearIcon,
  },
  {
    title: 'Release Agents',
    description:
      'High-efficiency mold release formulations ensuring clean separation and extending mold life across various molding processes.',
    accent: false,
    Icon: DropletIcon,
  },
];

export const featuredGroups = [
  {
    title: 'Industrial Coatings',
    description: 'Advanced protective layers for extreme environments.',
    image: '/images/group-industrial-coatings.jpg',
  },
  {
    title: 'PU Systems',
    description: 'High-performance polyurethane solutions for footwear and industry.',
    image: '/images/group-pu-systems.jpg',
  },
  {
    title: 'Masterbatches',
    description: 'Precision color concentrates for plastic manufacturing.',
    image: '/images/group-masterbatches.jpg',
  },
  {
    title: 'Construction Chemicals',
    description: 'Structural adhesives and marble glues for architectural integrity.',
    image: '/images/group-construction-chemicals.jpg',
  },
];

export const metrics = [
  { value: '99.8%', title: 'Batch Consistency', description: 'Precision engineered formulations' },
  { value: '20+', title: 'Years Excellence', description: 'Established industrial heritage since\n2004' },
  { value: '150+', title: 'Industrial\nFormulations', description: 'Diverse chemical solutions for\nglobal markets' },
  { value: null, title: 'Global Standards\nCompliance', description: 'ISO certified quality management' },
];

export const valueProps = [
  { title: 'Premium Quality', description: 'Materials engineered for excellence.', Icon: MedalIcon },
  { title: 'Trusted Performance', description: 'Reliable results every time.', Icon: CheckBadgeIcon },
  { title: 'Built for Beauty', description: 'Aesthetics that last decades.', Icon: BeautyPinIcon },
];
