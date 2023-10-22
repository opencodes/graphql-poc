import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./app/data/schema";
import { resolvers } from "./app/data/resolvers";

const app = express();

app.get("/", (req, res) => {
  res.send("GraphQL is amazing!");
});
const root = resolvers;

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Running a GraphQL API server at localhost:4000");
});
