module.exports = {
  all: async () => [{ slug: "/login" }],
  permalink: ({ request }) => request.slug,
  data: async ({ data }) => {
    return data;
  },
};
