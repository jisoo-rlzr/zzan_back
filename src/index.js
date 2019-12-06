// import { GraphQLServer } from "graphql-yoga"
import { ApolloServer } from 'apollo-server-lambda'
import { prisma } from "./generated/prisma-client"
import resolvers from "./graphql/resolvers"

const server = new ApolloServer({
    typeDefs: "./src/graphql/schema.graphql",
    resolvers,
    context: {
        prisma
    }
})

exports.graphqlHandler = server.createHandler()

// server.start(() => console.log("Server is running on http://localhost:4000"))