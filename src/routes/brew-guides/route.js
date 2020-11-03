module.exports = {
  template: "BrewGuides",
  all: async () => [{ slug: "/brew-guides/" }],
  permalink: ({ request }) => request.slug,
};
