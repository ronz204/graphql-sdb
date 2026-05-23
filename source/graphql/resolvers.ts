import { UserResolvers } from "@features/users-slice/users.resolvers";

export const ResolversGql = {
  Query: {
    ...UserResolvers.Query,
  },
};
