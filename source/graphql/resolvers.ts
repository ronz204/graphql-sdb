import type { Resolvers } from "./generated";
import { UserResolvers } from "@features/users-slice/users.resolvers";

export const ResolversGql: Resolvers = {
  ...UserResolvers,
};
