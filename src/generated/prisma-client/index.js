// "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

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
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://zzan-LoadB-158O00A1R1WZH-761696145.us-east-2.elb.amazonaws.com`
});
exports.prisma = new exports.Prisma();
