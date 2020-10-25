module.exports = {
  all: async () => [{ slug: "/brew-guides/chemex-guide/" }],
  permalink: ({ request }) => request.slug,
};
