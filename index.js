// import express from "express";
// import { graphqlHTTP } from "express-graphql";
// import { typeDefs } from "./app/data/schema";
import { resolver } from "./app/data/resolvers";
import { ApolloServer, gql } from "apollo-server";
import WidgetModel from "./app/data/dbconnection";
// Create a Mongoose model for the "Book" schema

// Define your GraphQL schema
const typeDefs = gql`
  type Product {
    id: ID
    name: String
    description: String
    price: Float
    soldout: Soldout
    inventory: Int
    stores: [Store]!
  }
  enum Soldout {
    SOLDOUT
    ONSALE
  }
  type Store {
    store: String
  }
  input StoreInput {
    store: String
  }
  input ProductInput {
    id: ID
    name: String
    description: String
    price: Float
    soldout: Soldout
    inventory: Int
    stores: [StoreInput]!
  }
  type Query {
    getProduct(id: ID): Product
    getProductList: [Product]!
  }
  type Mutation {
    createProduct(input: ProductInput): Product
    updateProduct(input: ProductInput): Product
    deleteProduct(id: ID!): String
  }
`;

// Define resolvers for your schema
const resolvers = {
  Query: {
    getProduct: async (_, { id }) => {
      return WidgetModel.findById(id);
    },
    getProductList: async () => {
      return WidgetModel.find();
    },
  },
  Mutation: {
    createProduct: async (_, input) => {
      return WidgetModel.create(input);
    },
    updateProduct: async (_, { id, input }) => {
      return WidgetModel.findByIdAndUpdate(id, input, { new: true });
    },
    deleteProduct: async (_, { id }) => {
      await WidgetModel.findByIdAndDelete(id);
      return "Product deleted successfully";
    },
  },
};

// Create an Apollo Server instance
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`Server running at ${url}`);
});
