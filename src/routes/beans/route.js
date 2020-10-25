const stripe = require("stripe")(process.env.STRIPE_KEY);
let products;
// async function getProducts() {
//   let { data } = await stripe.products.list();
//   products = data.map(({ name, metadata: { type }, images }) => {
//     return {
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
    image: 'https://files.stripe.com/links/fl_test_V6ki3407yCpFYQfOU6LVRh4o',
    name: 'Kenya',
    type: 'Bungoma'
  }
]
*/

module.exports = {
  all: async () => [{ slug: "/beans/" }],
  permalink: ({ request }) => request.slug,
  data: async () => {
    return { products };
  },
};
