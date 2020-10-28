module.exports = {
    template: 'BrewGuidesTemplate',
    all: async () => {
      // The all function returns an array of all possible "request" objects for a route.
      // Here we are explicitly defining every possible variation of this route.
      return [{ slug: 'chemex' }, {slug: 'aeropress'}, {slug: 'pourover'}]
    },
    permalink: ({ request }) => `/brew-guides/${request.slug}/`, // this is the same as /blog/:slug/ in 'parameter based' routing.
    data: async ({ request }) => {
        const guides = {
            chemex: {
                name: "chemex"
            },
            aeropress: {
                name: "aeropress"
            },
            pourover: {
                name: "pourover"
            }
        }
    return {
      guide: guides[request.slug]
    };
  }
}
