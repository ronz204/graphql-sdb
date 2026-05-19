import { gql } from "@elysia/apollo";

export const UserGraphQL = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    users: [User!]!
  }
`;
