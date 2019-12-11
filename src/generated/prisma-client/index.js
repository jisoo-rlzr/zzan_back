// "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
import { makePrismaClientClass } from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

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
export const Prisma = makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://zzan-LoadB-158O00A1R1WZH-761696145.us-east-2.elb.amazonaws.com`
});
export const prisma = new Prisma();
