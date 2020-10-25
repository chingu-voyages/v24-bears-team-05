const productList = require('../../storage/products.js');
module.exports = {
  all: async () => [{ slug: "/beans/" }],
  permalink: ({ request }) => request.slug,
  data: ({ data }) => {
    data.products = productList.products;
    return data;
  }
};
