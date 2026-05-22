import yoga from "@elysia/graphql-yoga";

import ProfileGql from "@sandbox/profile.graphql" with { type: "text" };
import WalletGql from "@sandbox/wallet.graphql" with { type: "text" };

export const GraphPlugin = yoga({
  typeDefs: ``,
  resolvers: {},
});
