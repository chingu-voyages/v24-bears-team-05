const stripe = require("stripe")(process.env.STRIPE_KEY);

exports.handler = async ({ body }) => {
  const { checkoutItems } = JSON.parse(body);
  const { data: prices } = await stripe.prices.list({ limit: 100 });
  const line_items = checkoutItems.map(({ id, size, quantity }) => {
    const priceId = prices.find(
      ({ product, nickname }) => product == id && nickname == size
    ).id;

    return { price: priceId, quantity };
  });

  const baseURL = "https://bearcoffee.netlify.app/";
  const session = await stripe.checkout.sessions.create({
    shipping_address_collection: {
      allowed_countries: ["US", "CA"],
    },
    payment_method_types: ["card"],
    line_items,
    mode: "payment",
    success_url: baseURL + "success",
    cancel_url: baseURL,
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ id: session.id }),
  };
};
