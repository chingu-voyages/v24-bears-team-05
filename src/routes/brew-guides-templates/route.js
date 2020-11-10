module.exports = {
  template: "BrewGuidesTemplate",
  all: async () => {
    // The all function returns an array of all possible "request" objects for a route.
    // Here we are explicitly defining every possible variation of this route.
    return [{ slug: "chemex" }, { slug: "aeropress" }, { slug: "pourover" }];
  },
  permalink: ({ request }) => `/brew-guides/${request.slug}/`, // this is the same as /blog/:slug/ in 'parameter based' routing.
  data: async ({ request }) => {
    const guides = {
      chemex: {
        name: "Chemex Guide",
        qualities:
          "Clean Body | Perfect For Two People | Great For Bright Notes",
        description: `The Chemex is a design icon (part of MoMA's permanent collection) thanks to a quirky, eclectic mash-up of laboratory-like features and natural materials. What makes the Chemex truly unique, however, is the design of its proprietary bonded coffee filters which are considerably heavier than others and result in an unmatched clean cup. This makes the Chemex a perfect choice for enjoying more acidic or floral light roast coffees that take on an almost tea-like quality (though it’ll brew you a delicious dark roast as well). The learning curve is a little steeper than other methods but most home-brewers have no trouble making really good coffee after a little practice. If you feel like making a bit more or less coffee, our recipe is totally adjustable, just use a gram of coffee for every 16 grams of water.`,
        steps: [
          {
            id: 1,
            img: "/images/brewGuides/chemex1.jpg",
            title: "1. Prep Filter",
            step:
              "Unfold the filter with the three-fold side facing the spout. This is important to prevent the filter from collapsing into the spout when it gets wet.",
          },
          {
            id: 2,
            img: "/images/brewGuides/chemex2.jpg",
            title: "2. Rinse",
            step:
              "Rinse the filter with plenty of hot water to help “seal” it against the glass and remove the papery taste — it also preheats your Chemex. Discard this rinse water (magically, you don’t actually need to take out the filter to pour out your water) and set up your brewer on a kitchen scale.",
          },
          {
            id: 3,
            img: "/images/brewGuides/chemex3.jpg",
            title: "3. Add Grounds",
            step:
              "Pour an initial amount of 90g of water and let bloom for 40 secs. Follow that by pouring the rest of the water",
          },
          {
            id: 4,
            img: "/images/brewGuides/chemex4.jpg",
            title: "4. Bloom Coffee",
            step: "Enjoy the cup of joe",
          },
        ],
      },
      aeropress: {
        name: "Aeropress Guide",
        qualities: "Full Body | To Go Ready | All Roasts",
        description:
          "Aeropress. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Donec elementum ligula eu sapien consequat eleifend. Donec nec dolor erat, condimentum sagittis sem. Praesent porttitor porttitor risus, dapibus rutrum ipsum gravida et. Integer lectus",
        steps: [
          {
            id: 1,
            img: "/images/brewGuides/chemex1.jpg",
            title: "1. Prep Filter",
            step:
              "Unfold the filter with the three-fold side facing the spout. This is important to prevent the filter from collapsing into the spout when it gets wet.",
          },
          {
            id: 2,
            img: "/images/brewGuides/chemex2.jpg",
            title: "2. Rinse",
            step:
              "Rinse the filter with plenty of hot water to help “seal” it against the glass and remove the papery taste — it also preheats your Chemex. Discard this rinse water (magically, you don’t actually need to take out the filter to pour out your water) and set up your brewer on a kitchen scale.",
          },
          {
            id: 3,
            img: "/images/brewGuides/chemex3.jpg",
            title: "3. Add Grounds",
            step:
              "Pour an initial amount of 90g of water and let bloom for 40 secs. Follow that by pouring the rest of the water",
          },
          {
            id: 4,
            img: "/images/brewGuides/chemex4.jpg",
            title: "4. Bloom Coffee",
            step: "Enjoy the cup of joe",
          },
        ],
      },
      pourover: {
        name: "Pourover Guide",
        qualities: "Single Servings | Clear Notes | Lighter Roasts",
        description:
          "Pour over. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
        steps: [
          {
            id: 1,
            img: "/images/brewGuides/chemex1.jpg",
            title: "1. Prep Filter",
            step:
              "Unfold the filter with the three-fold side facing the spout. This is important to prevent the filter from collapsing into the spout when it gets wet.",
          },
          {
            id: 2,
            img: "/images/brewGuides/chemex2.jpg",
            title: "2. Rinse",
            step:
              "Rinse the filter with plenty of hot water to help “seal” it against the glass and remove the papery taste — it also preheats your Chemex. Discard this rinse water (magically, you don’t actually need to take out the filter to pour out your water) and set up your brewer on a kitchen scale.",
          },
          {
            id: 3,
            img: "/images/brewGuides/chemex3.jpg",
            title: "3. Add Grounds",
            step:
              "Pour an initial amount of 90g of water and let bloom for 40 secs. Follow that by pouring the rest of the water",
          },
          {
            id: 4,
            img: "/images/brewGuides/chemex4.jpg",
            title: "4. Bloom Coffee",
            step: "Enjoy the cup of joe",
          },
        ],
      },
    };
    return {
      guides: guides[request.slug],
    };
  },
};
