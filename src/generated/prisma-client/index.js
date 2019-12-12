// "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { makePrismaClientClass } = require("prisma-client-lib");
const { typeDefs } = require("./prisma-schema");

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Moim",
    embedded: false
  },
  {
    name: "Place",
    embedded: false
  }
];
const Prisma = makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://zzan-loadb-uw7650x3qnh9-1923886869.us-east-2.elb.amazonaws.com`
});
exports.prisma = new Prisma();
