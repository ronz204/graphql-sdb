import yoga from "@elysia/graphql-yoga";
import { Di } from "@container/container.deps";

import { SchemasGql } from "@graphql/schemas";
import { ResolversGql } from "@graphql/resolvers";

import { UserTokens } from "@features/users-slice/users.tokens";

export const GraphPlugin = yoga({
  typeDefs: SchemasGql,
  context: () => ({
    userProvider: Di.resolve(UserTokens.Provider),
  }),
  resolvers: ResolversGql,
});
