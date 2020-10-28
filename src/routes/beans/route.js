const stripe = require("stripe")(process.env.STRIPE_KEY);
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

module.exports = {
  all: async () => [{ slug: "/beans/" }],
  permalink: ({ request }) => request.slug,
  data: async ({ data: { products } }) => {
    return { products };
  },
};
