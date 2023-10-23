// import express from "express";
// import { graphqlHTTP } from "express-graphql";
import schema from "./app/data/schema";
import { resolvers } from "./app/data/resolvers";
import { ApolloServer } from "apollo-server";

// const app = express();

// app.get("/", (req, res) => {
//   res.send("GraphQL is amazing!");
// });
// const root = resolvers;

// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema: schema,
//     rootValue: root,
//     graphiql: true,
//   })
// );

// app.listen(4000, () => {
//   console.log("Running a GraphQL API server at localhost:4000");
// });
const server = new ApolloServer({
  schema,
  mocks: true,
});
server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
