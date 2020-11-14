module.exports = {
  all: async () => [{ slug: "/orders" }],
  permalink: ({ request }) => request.slug,
};
