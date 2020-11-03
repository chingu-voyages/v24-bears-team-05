var faunadb = require("faunadb"),
  q = faunadb.query;

exports.handler = async (event) => {
  var { email, password } = JSON.parse(event.body);

  var client = new faunadb.Client({ secret: process.env.FAUNA_KEY });
  var registration = await client.query(
    q.Create(q.Collection("Users"), {
      data: {
        email,
      },
      credentials: {
        password,
      },
    })
  );

  return registration?.ref
    ? {
        statusCode: 200,
        body: "Great success!",
      }
    : {
        statusCode: 400,
        body: "The email already exists!",
      };
};
