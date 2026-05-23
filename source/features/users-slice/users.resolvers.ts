import type { Resolvers } from "@graph/schema";

export const UserResolvers: Resolvers = {
  Query: {
    users: (_, __, ctx) => ctx.userProvider.getAllUsers(),
  },
};
