module.exports = {
  all: async () => [{ slug: "/beans/" }],
  permalink: ({ request }) => request.slug,
  data: async ({ data: { products } }) => {
    return { products };
  },
};
