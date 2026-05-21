import yoga from "@elysia/graphql-yoga";

import ProfileGql from "@graphql/profile.graphql" with { type: "text" };
import WalletGql from "@graphql/wallet.graphql" with { type: "text" };

export const GraphPlugin = yoga({
  typeDefs: ``,
  resolvers: {},
});
