// import { GraphQLServer } from "graphql-yoga"
import { ApolloServer } from "apollo-server-lambda";
import { prisma } from "./generated/prisma-client";
import resolvers from "./graphql/resolvers";

const server = new ApolloServer({
    typeDefs: "./src/graphql/schema.graphql",
    resolvers,
    context: {
        prisma
    },
    // By default, the GraphQL Playground interface and GraphQL introspection
    // is disabled in "production" (i.e. when `process.env.NODE_ENV` is `production`).
    //
    // If you'd like to have GraphQL Playground and introspection enabled in production,
    // the `playground` and `introspection` options must be set explicitly to `true`.
    playground: true,
    introspection: true,
});

exports.graphqlHandler = server.createHandler();

// server.start(() => console.log("Server is running on http://localhost:4000"))