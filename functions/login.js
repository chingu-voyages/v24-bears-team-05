var faunadb = require("faunadb"),
  q = faunadb.query;

exports.handler = async (event) => {
  var { email, password } = JSON.parse(event.body);

  var client = new faunadb.Client({ secret: process.env.FAUNA_KEY });
  var login = await client.query(
    q.Login(q.Match(q.Index("Users_by_email"), email), {
      password,
      ttl: q.TimeAdd(q.Now(), 30, "days"),
    })
  );

  return login?.secret
    ? {
        statusCode: 200,
        body: login.secret,
      }
    : {
        statusCode: 400,
        body: "Invalid password!",
      };
};
