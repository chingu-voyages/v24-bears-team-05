module.exports = {
  all: async () => [{ slug: "/404.html" }],
  permalink: ({ request }) => request.slug,
};
