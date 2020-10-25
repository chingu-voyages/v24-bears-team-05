module.exports = {
  all: async () => [{ slug: "/beans/" }],
  permalink: ({ request }) => request.slug,
};
