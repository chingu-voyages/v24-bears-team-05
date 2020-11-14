const { addCustomerId } = require("./utils/fauna");
const stripe = require("stripe")(process.env.STRIPE_KEY);

exports.handler = async ({ body, headers }) => {
  // webhook endpoint attaches customer ID to DB
  // only if email exists in FDB
  try {
    // check the webhook to make sure it’s valid
    const stripeEvent = stripe.webhooks.constructEvent(
      body,
      headers["stripe-signature"],
      process.env.STRIPE_WEBHOOK_ADD_CUSTOMER
    );

    // only do stuff on a customer created Stripe event
    if (stripeEvent.type === "customer.created") {
      const { id: customerId, email } = stripeEvent.data.object;
      await addCustomerId(email, customerId);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ received: true }),
    };
  } catch (err) {
    console.log(`Stripe webhook failed with ${err}`);

    return {
      statusCode: 400,
      body: `Webhook Error: ${err.message}`,
    };
  }
};
