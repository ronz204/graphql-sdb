import type { Resolvers } from "@graphql/generated";

export const UserResolvers: Resolvers = {
  Query: {
    users: (_, __, ctx) => ctx.userProvider.getAllUsers(),
  },
};
