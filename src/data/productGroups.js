export const productGroups = [
  {
    slug: 'industrial-coatings',
    title: 'Industrial Coatings',
    description:
      'High-performance protective coatings engineered for harsh environments, providing exceptional chemical resistance, mechanical strength, and longevity for industrial floors and structures.',
    tags: ['Epoxy', 'Polyurethane', 'Anti-Corrosion'],
    image: '/images/category-industrial-coatings.jpg',
  },
  {
    slug: 'plastics-polymer-colorants',
    title: 'Plastics & Polymer Colorants',
    description:
      'Precision-engineered masterbatches and color concentrates delivering consistent dispersion, intense hue, and critical functional properties for the global plastics industry.',
    tags: ['Masterbatch', 'Pigments', 'Additives'],
    image: '/images/category-plastics-colorants.jpg',
  },
  {
    slug: 'construction-adhesives',
    title: 'Construction & Adhesives',
    description:
      'Advanced bonding solutions and structural resins designed for superior adhesion, thermal stability, and load-bearing capacity in modern architectural applications.',
    tags: ['Epoxy Adhesive', 'Marble Glue', 'Corian Bonding'],
    image: '/images/category-construction-adhesives.jpg',
    products: [
      {
        slug: 'epoxy-coating-hardener',
        number: 1,
        name: 'EPOXY COATING & HARDENER',
        tagline: 'Built Strong. Finished to Perfection.',
        description:
          'High performance Epoxy Coating system with compatible Hardener that delivers exceptional bond strength, chemical resistance and long lasting protection. Ideal for industrial, commercial and decorative applications.',
        features: [
          'Excellent adhesion to concrete, metal & wood',
          'High chemical & abrasion resistance',
          'Glossy, smooth & durable finish',
        ],
      },
      {
        slug: 'corian-sheets',
        number: 2,
        name: 'CORIAN SHEETS',
        tagline: 'Seamless Surfaces. Modern Designs.',
        description:
          'Premium quality solid surface sheets known for their beauty, strength and versatility. Ideal for creating seamless surfaces in modern architectural and interior applications.',
        features: ['Non-porous & hygienic', 'Stain, scratch & impact resistant', 'Thermoformable & repairable'],
      },
      {
        slug: 'marble-glue',
        number: 3,
        name: 'MARBLE GLUE',
        tagline: 'Strong Bond. Premium Adhesive.',
        description:
          'High-strength polyester adhesive designed for filling, patching, and bonding natural stone, marble, and granite surfaces with excellent mechanical strength.',
        features: ['Fast curing time', 'Excellent polishing properties', 'Strong mechanical bond'],
        detail: {
          breadcrumb: ['Product Group', 'Construction', 'Marble Glue'],
          heading: 'MARBLE GLUE',
          summary:
            'High strength adhesive specially formulated for bonding natural stones, marble, granite and engineered surfaces with excellent hold and durability.',
          image: '/images/product-marble-glue-bucket.png',
          keyFeatures: [
            'Strong bonding & fast setting',
            'Excellent grip on marble & stone',
            'Water & weather resistant',
            'Easy to mix and apply',
            'Suitable for interior & exterior use',
          ],
          typicalApplications: [
            'Marble Installation',
            'Granite Cladding',
            'Tiles & Stone Fixing',
            'Staircase & Flooring',
            'Countertop Installation',
          ],
          technicalHighlights: [
            { label: 'Base', value: 'Polymer Modified' },
            { label: 'Appearance', value: 'White Paste' },
            { label: 'Mixing Ratio', value: '100 parts powder : 25 - 30 parts water' },
            { label: 'Open Time', value: '15 - 20 Minutes' },
            { label: 'Adjustability Time', value: '20 - 30 Minutes' },
            { label: 'Full Cure', value: '24 Hours' },
            { label: 'Coverage', value: '3 - 4 sq.ft./kg (Approx.)' },
          ],
          applicationImages: [
            '/images/product-application-1.jpg',
            '/images/product-application-2.jpg',
            '/images/product-application-3.jpg',
          ],
        },
      },
    ],
    featureStrip: [
      'Premium Quality Materials',
      'Excellent Adhesion & Performance',
      'High Durability & Strength',
      'Easy Application & Workability',
      'Reliable Solutions You Can Trust',
    ],
  },
  {
    slug: 'release-agents',
    title: 'Release Agents',
    description:
      'Formulated specialized barriers ensuring flawless demolding processes. Available in various bases to prevent adhesion and protect mold integrity across manufacturing cycles.',
    tags: ['Silicone Based', 'Wax Based', 'Resin Based'],
    image: '/images/category-release-agents.jpg',
  },
  {
    slug: 'pu',
    title: 'PU',
    description:
      'Formulated specialized barriers ensuring flawless demolding processes. Available in various bases to prevent adhesion and protect mold integrity across manufacturing cycles.',
    tags: ['Silicone Based', 'Wax Based', 'Resin Based'],
    image: '/images/category-pu.jpg',
  },
  {
    slug: 'chemical-auxiliaries',
    title: 'Chemical Auxiliaries',
    description:
      'Formulated specialized barriers ensuring flawless demolding processes. Available in various bases to prevent adhesion and protect mold integrity across manufacturing cycles.',
    tags: ['Silicone Based', 'Wax Based', 'Resin Based'],
    image: '/images/category-chemical-auxiliaries.jpg',
  },
  {
    slug: 'thermoplastics',
    title: 'Thermoplastics',
    description:
      'Formulated specialized barriers ensuring flawless demolding processes. Available in various bases to prevent adhesion and protect mold integrity across manufacturing cycles.',
    tags: ['Silicone Based', 'Wax Based', 'Resin Based'],
    image: '/images/category-thermoplastics.jpg',
  },
];

export function getGroupBySlug(slug) {
  return productGroups.find((group) => group.slug === slug);
}

export function getProductBySlug(groupSlug, productSlug) {
  const group = getGroupBySlug(groupSlug);
  return group?.products?.find((product) => product.slug === productSlug);
}
