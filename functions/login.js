var faunadb = require("faunadb"),
  q = faunadb.query;

exports.handler = async (event) => {
  var client = new faunadb.Client({ secret: process.env.FAUNA_KEY });
  let email;
  let password;
  let login = await client.query(
    q.Login(q.Match(q.Index("Users_by_email"), email), {
      password,
      ttl: q.TimeAdd(q.Now(), 30, "days"),
    })
  );

  return login?.ref
    ? {
        statusCode: 200,
        body: login.ref,
      }
    : {
        statusCode: 400,
        body: "Invalid password!",
      };
};
