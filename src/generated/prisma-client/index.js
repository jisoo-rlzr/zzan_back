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
  endpoint: `http://zzan-LoadB-158O00A1R1WZH-761696145.us-east-2.elb.amazonaws.com`
});
exports.prisma = new Prisma();
