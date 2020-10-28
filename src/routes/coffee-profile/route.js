// const stripe = require("stripe")(process.env.STRIPE_KEY);
// let products;

// TODO: This is the fetching code as in /beans. It will be refactored later into hooks.

// async function getProducts() {
//   let { data } = await stripe.products.list();
//   products = data.map(({ id, name, metadata: { type }, images }) => {
//     return {
//       id,
//       image: images[0],
//       name,
//       type,
//     };
//   });
// }
// getProducts();

/*
Products API obj example: https://stripe.com/docs/api/products/list?lang=node 
after processing:
[
  {
    id: "prod_IGmBRVQ5m7HrTY",
    image: 'https://files.stripe.com/links/fl_test_V6ki3407yCpFYQfOU6LVRh4o',
    name: 'Kenya',
    type: 'Bungoma'
  }
]
*/
// TODO: Get prices and match to products. See:
// https://stripe.com/docs/api/prices/list

// Add slug to the data

module.exports = {
  template: "CoffeeProfile",
  all: async ({ data: { products } }) => {
    return products;
  },
  permalink: ({ request }) => request.slug,
  data: async ({ request, data: { products } }) => {
    const product = products.find(({ slug }) => slug === request.slug);
    return { product };
  },
};
