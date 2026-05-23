import yoga from "@elysia/graphql-yoga";
import { SchemasGql } from "@graphql/schemas";
import { ResolversGql } from "@graphql/resolvers";

import { container } from "@container/container.deps";
import { UserTokens } from "@features/users-slice/users.tokens";

export const GraphPlugin = yoga({
  typeDefs: SchemasGql,
  context: () => ({
    userProvider: container.resolve(UserTokens.Provider),
  }),
  resolvers: ResolversGql,
});
