import type { Resolvers } from "@graph/schema";
import { UserResolvers } from "@features/users-slice/users.resolvers";

export const ResolversGql: Resolvers = {
  ...UserResolvers,
};
