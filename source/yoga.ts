import { drizz } from "./drizzle"
import yoga from "@elysia/graphql-yoga"
import { UserRepository } from "./user.repo";
import { UserResolver } from "./user.resolve";
import { UserTypeDefs } from "./user.typedefs";

import type { GetUserByIdArgs } from "./user.resolve";

const userRepo = new UserRepository(drizz);
const userResolver = new UserResolver(userRepo);


export const Yoga = yoga({
  typeDefs: UserTypeDefs,
  resolvers: {
    Query: {
      users: async () => {
        return userResolver.getAllUsers();
      },
      user: async (_: unknown, args: GetUserByIdArgs) => {
        return userResolver.getUserById(args);
      },
    },
  },
});
