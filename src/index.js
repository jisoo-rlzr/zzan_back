const { GraphQLServerLambda } = require("graphql-yoga");
// import { ApolloServer } from "apollo-server-lambda";
const { prisma } = require("./generated/prisma-client");
const resolvers = require("./graphql/resolvers");
var fs = require("fs");

const typeDefs = fs.readFileSync("src/graphql/schema.graphql").toString('utf-8');

const server = new GraphQLServerLambda({
    typeDefs,
    resolvers,
    context: {
        prisma
    },
    // By default, the GraphQL Playground interface and GraphQL introspection
    // is disabled in "production" (i.e. when `process.env.NODE_ENV` is `production`).
    //
    // If you'd like to have GraphQL Playground and introspection enabled in production,
    // the `playground` and `introspection` options must be set explicitly to `true`.
    // playground: true,
    // introspection: true,
});

exports.graphqlHandler = server.graphqlHandler;
exports.playground = server.playgroundHandler;

// server.start(() => console.log("Server is running on http://localhost:4000"))