import yoga from "@elysia/graphql-yoga";
import type { Resolvers } from "./generated/graphql";
import { loadFilesSync } from "@graphql-tools/load-files";

const typeDefs = loadFilesSync(`${import.meta.dir}/schemas/**/*.graphql`);

const users = [
  { id: "1", name: "Alice", email: "alice@example.com" },
  { id: "2", name: "Bob", email: "bob@example.com" },
  { id: "3", name: "Charlie", email: "charlie@example.com" }
];

const resolvers: Resolvers = {
  Query: {
    hello: () => "Hello, world!",
    users: () => users,
  },
};

export const Yoga = yoga({ typeDefs, resolvers });
