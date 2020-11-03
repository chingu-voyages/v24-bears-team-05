module.exports = {
  template: "CoffeeProfile",
  all: async ({ data: { products } }) => {
    return products.map((product) => ({ slug: product.name }));
  },
  permalink: ({ request }) => `/beans/${request.slug}`,
  data: async ({ request, data: { products } }) => {
    const product = products.find(({ name }) => name == request.slug);
    return { product };
  },
};
