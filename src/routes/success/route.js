module.exports = {
  all: async () => [{ slug: "/success" }],
  permalink: ({ request }) => request.slug,
};
