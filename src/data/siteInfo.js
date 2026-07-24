import { ROUTES } from '../constants/routes';

export const company = {
  name: 'EPCC',
  fullName: 'Egyptian for Putties and Color Concentrates (EPCC)',
  tagline: 'Innovation in Chemical Solutions.',
  phones: ['01011511601', '01001745403'],
  emails: ['Dr.moe.18667@gmail.com', 'Hamoud007@yahoo.com'],
  address: 'Building 378, Third industrial zone, 6 October, Giza',
};

export const navLinks = [
  { label: 'Home', to: ROUTES.home },
  { label: 'Product Groups', to: ROUTES.productGroups },
  { label: 'About Us', to: ROUTES.about },
  { label: 'Contact', to: ROUTES.contact },
];

export const footerVariants = {
  default: {
    title: company.name,
    tagline: company.tagline,
    links: ['Product Catalog', 'Safety Data Sheets', 'Corporate Profile', 'Quality Policy', 'Contact Sales'],
    copyright: `© 2024 ${company.fullName}. All rights reserved. ${company.tagline}`,
  },
  industrial: {
    title: 'EPCC Industrial',
    tagline: '© 2024 EPCC Industrial Chemicals. All Rights Reserved. Precision in Chemistry.',
    links: ['Terms of Service', 'Privacy Policy', 'TDS Library', 'SDS Database', 'Sustainability'],
    copyright: '',
  },
};
