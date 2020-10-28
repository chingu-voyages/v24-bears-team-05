module.exports = {
  template: "CoffeeProfile",
  all: async ({ data: { products } }) => {
    return products;
  },
  permalink: ({ request }) => request.slug,
  data: async ({ request, data: { products } }) => {
    const product = products.find(({ slug }) => slug === request.slug);
    return { product };
  },
};
