module.exports = {
  all: async () => [{ slug: "/brew-guides/aeropress-guide/" }],
  permalink: ({ request }) => request.slug,
};
