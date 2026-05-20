import yoga from "@elysia/graphql-yoga";

export const Yoga = yoga({
  typeDefs: /* GraphQL */ `
    type Query {
      hello: String
    }
  `,
  resolvers: {
    Query: {
      hello: () => "Hello, world!",
    },
  },
});
