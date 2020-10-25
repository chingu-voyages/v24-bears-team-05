module.exports = {
  all: async () => [{ slug: "/brew-guides/" }],
  permalink: ({ request }) => request.slug,
};
