import { UserQueries } from "@features/users-slice/users.queries";
import { UserMutations } from "@features/users-slice/users.mutations";

export const YogaResolvers = {
  Query: {
    ...UserQueries.Query,
  },
  Mutation: {
    ...UserMutations
  },
};
