import { GraphQLServer } from "graphql-yoga"
import { prisma } from "./generated/prisma-client"
import resolvers from "./graphql/resolvers"

const server = new GraphQLServer({
    typeDefs: "./src/graphql/schema.graphql",
    resolvers,
    context: {
        prisma
    }
})

server.start(() => console.log("Server is running on http://localhost:4000"))