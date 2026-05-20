import yoga from "@elysia/graphql-yoga";
import { userResolvers } from "./users.resolve";

import UsersGraphQL from  "./users.graphql" with { type: "text" };

export const YogaPlugin = yoga({
  typeDefs: `${UsersGraphQL}`,
  resolvers: {
    Query: {
      ...userResolvers.Query,
    },
  },
});
