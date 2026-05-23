import type { UserProvider } from "@features/users-slice/users.provider";

export type GraphQLContext = {
  userProvider: UserProvider;
};
