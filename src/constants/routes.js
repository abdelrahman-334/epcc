export const ROUTES = {
  home: '/',
  productGroups: '/product-groups',
  productGroupDetail: (groupSlug) => `/product-groups/${groupSlug}`,
  productDetail: (groupSlug, productSlug) => `/product-groups/${groupSlug}/${productSlug}`,
  about: '/about',
  contact: '/contact',
};
