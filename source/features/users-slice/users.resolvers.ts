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
    editUser: (_, args, ctx) => {
      const { id, ...input } = args.input;
      return ctx.userProvider.editUser(id, {
        ...input,
        name: input.name ?? undefined,
        email: input.email ?? undefined,
      });
    },
  },
};
