import yoga from "@elysia/graphql-yoga"

export const Yoga = yoga({
  typeDefs: /* GraphQL */ `
    type Query {
      hi: String
    }
  `,
  resolvers: {
    Query: {
      hi: () => "Hello World!",
    },
  },
});
