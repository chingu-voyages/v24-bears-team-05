module.exports = {
  all: async () => [{ slug: "/brew-guides/pour-over-guide/" }],
  permalink: ({ request }) => request.slug,
};
