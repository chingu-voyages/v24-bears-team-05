module.exports = {
	template: "AboutUs",
	all: async () => [{ slug: "/about/" }],
	permalink: ({ request }) => request.slug,
};
