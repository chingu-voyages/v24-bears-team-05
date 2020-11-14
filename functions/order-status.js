var faunadb = require("faunadb"),
  q = faunadb.query;
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async ({ body }) => {
  var { token: secret = "" } = JSON.parse(body);
  var errObj = { statusCode: 400 };
  if (!secret) {
    return errObj;
  }
  var client = new faunadb.Client({ secret: process.env.FAUNA_KEY });
  var user = await client.query(
    Select(["data"], Get(Select(["instance"], KeyFromSecret(secret))))
  );
  var orderHistory = [];
  if (user.customerId) {
    ({ data: orderHistory } = await stripe.orders.list({
      customer: user.customerId,
      limit: 100,
    }));
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ email: user.email, orderHistory }),
  };
};
