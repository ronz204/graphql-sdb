import yoga from "@elysia/graphql-yoga"
import { Users } from "./users";
import { drizz } from "./drizzle"
import { eq } from "drizzle-orm";

const type1 = /* GraphQL */ `
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
  }
`;


export const Yoga = yoga({
  typeDefs: /* GraphQL */ `
    ${type1}
    type Query {
      hi: String!
    }
  `,
  resolvers: {
    Query: {
      hi: () => "Hello World!",
      users: async () => {
        const users = await drizz.select().from(Users);
        return users.map((user) => ({
          id: String(user.id),
          name: user.name,
          email: user.email,
        }));
      },
      user: async (_: any, { id }: { id: string }) => {
        const user = await drizz.select().from(Users).where(eq(Users.id, Number(id))).limit(1).get();
        if (!user) return null;
        return {
          id: String(user.id),
          name: user.name,
          email: user.email,
        };
      },
    },
  },
});
