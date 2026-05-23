import type { Resolvers } from "@graphql/generated";

export const UserResolvers: Resolvers = {
  Query: {
    users: (_, __, ctx) => {
      return ctx.userProvider.getAllUsers();
    },
  },
  Mutation: {
    saveNewUser: (_, args, ctx) => {
      return ctx.userProvider.saveNewUser(args.input);
    },
  },
};
