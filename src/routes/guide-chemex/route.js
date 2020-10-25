module.exports = {
  template: "BrewGuideChemex",
  all: async () => [{ slug: "/brew-guides/chemex-guide/" }],
  permalink: ({ request }) => request.slug,
};
