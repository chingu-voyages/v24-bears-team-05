var faunadb = require("faunadb"),
  q = faunadb.query;

exports.getUser = async function getUser(userSecret) {
  /**
   * Gets a user's data from their secret.
   */

  var client = new faunadb.Client({ secret: process.env.FAUNA_KEY });
  const data = await client.query(
    q.Select(
      ["data"],
      q.Get(q.Select(["instance"], q.KeyFromSecret(userSecret)))
    )
  );

  return data.email ? data.email : null;
};

exports.addCustomerId = async function addCustomerId(userEmail, customerId) {
  /**
   * Add a customer's ID if the email exists in DB.
   */
  var client = new faunadb.Client({ secret: process.env.FAUNA_KEY });
  const { isValidEmail } = await client.query(
    q.Exists(q.Match(q.Index("Users_by_email"), userEmail))
  );
  if (isValidEmail) {
    await client.query(
      q.Update(
        q.Select(
          ["data", 0],
          q.Paginate(q.Match(q.Index("Users_by_email"), userEmail))
        ),
        {
          data: {
            customerId,
          },
        }
      )
    );
  }
};
