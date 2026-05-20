import type { Resolvers, User } from "./generated";

const users: User[] = [
  { id: "1", name: "Alice", code: "A1" },
  { id: "2", name: "Bob", code: "B2" },
  { id: "3", name: "Charlie", code: "C3" },
];

export const userResolvers: Resolvers = {
  Query: {
    users: () => users,
  },
};
