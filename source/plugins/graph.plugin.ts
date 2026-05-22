import yoga from "@elysia/graphql-yoga";

import SampleGql from "./sample.graphql" with { type: "text" };

export const GraphPlugin = yoga({
  typeDefs: SampleGql,
  resolvers: {
    Query: {
      ping: () => "pong",
    },
  },
});
